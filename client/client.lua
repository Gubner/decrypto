local QBCore = exports['qb-core']:GetCoreObject()
local playerPed, playerCoords, Tablet
local PlayerJob = {}
local MiniGame ={}
local HackStatus = false
local NotifyMessage = ''
local NotifyType = 'primay'
local Hacked = {}


-- qb-target Exports

exports['qb-target']:AddTargetModel(Config.ATMModels, {
	options = {
		{
			type = "client",
			event = "decrypto:client:starthack",
			icon = "fa-solid fa-mobile-screen-button",
			label = "Hack ATM",
			item = "decryptor",
		}
	},
	distance = 1.5
})


-- NUI

MiniGame.Open = function()
	SendNUIMessage({
		action = "open",
		base = Config.MingameBase, 
		timeLimit = Config.MinigameTimeLimit,
		attemptLimit = Config.MingameAttemptLimit 
	})
	SetNuiFocus(true, true)
end

RegisterNUICallback('close', function(data, cb)
	cb('ok')
	HackStatus = data
	Citizen.Wait(500)
	ClearPedTasks(PlayerPedId())
	Citizen.Wait(500)
	DeleteObject(Tablet)
	if HackStatus then
		NotifyMessage = 'Hack Successful!'
		NotifyType = 'success'
		TriggerServerEvent("decrypto:server:givecash")
		local chance = math.random()
		if chance < Config.Chance then
			TriggerServerEvent('police:server:policeAlert', "ATM Suspicious Activity")
		end
	else
		NotifyMessage = 'Hack Failed!'
		NotifyType = 'error'
		TriggerServerEvent('police:server:policeAlert', "ATM Suspicious Activity")
	end
	QBCore.Functions.Notify(NotifyMessage, NotifyType, 5000)
	SetNuiFocus(false, false)
	ClearPedTasks(PlayerPedId())
	DeleteObject(tablet)
	TriggerServerEvent("decrypto:server:removeitem", "hackcard")
end)


-- Events

RegisterNetEvent('decrypto:client:starthack')
AddEventHandler('decrypto:client:starthack', function()
	ATMHack()
end)


-- Functions

function ATMHack()
	playerPed = PlayerPedId()
	playerCoords = GetEntityCoords(playerPed, true)
	local nearATM = false
	local hackStarted = false
	local beenHacked = false
	QBCore.Functions.TriggerCallback("QBCore:HasItem", function(hasItem)
		if(hasItem) then
			for k, v in pairs(Config.ATMModels) do
				local hash = GetHashKey(v)
				Citizen.Wait(50)
				nearATM = IsObjectNearPoint(hash, playerCoords.x, playerCoords.y, playerCoords.z, 1.5)
				Citizen.Wait(50)
				if nearATM then
					hackStarted = true
					local ATM = GetClosestObjectOfType(playerCoords.x, playerCoords.y, playerCoords.z, 1.5, hash, false, false, false)
					for i = 1, #Hacked do
						if Hacked[i] == ATM then
							beenHacked = true
						end
					end
					if not beenHacked then
						RequestAnimDict('amb@prop_human_atm@male@enter')
						while not HasAnimDictLoaded('amb@prop_human_atm@male@enter') do
							Citizen.Wait(5)
						end
						if HasAnimDictLoaded('amb@prop_human_atm@male@enter') then
							TaskPlayAnim(playerPed, 'amb@prop_human_atm@male@enter', "enter", 1.0,-1.0, 3000, 1, 1, true, true, true)
							Citizen.Wait(1000)
							Tablet = CreateObject(GetHashKey("hei_prop_dlc_tablet"), 0, 0, 0, true, true, true)
							AttachEntityToEntity(Tablet, playerPed, GetPedBoneIndex(GetPlayerPed(-1), 18905), 0.20, 0.12, 0.05, 58.0, 122.0, 180.0, true, true, false, true, 1, true)
							RequestAnimDict('missfam4')
							while not HasAnimDictLoaded('missfam4') do
								Citizen.Wait(5)
							end
							if HasAnimDictLoaded('missfam4') then
								TaskPlayAnim(playerPed, "missfam4", "base", 1.0, 4.0, -1, 33, 0.0, false, false, false)
								Citizen.Wait(2000)
							end
						end
						table.insert(Hacked, ATM)
						MiniGame.Open()
					else
						QBCore.Functions.Notify('Already hacked!', 'error', 3000)
					end
				else
					if not hackStarted and k == #Config.ATMModels then
						QBCore.Functions.Notify('You cannot do that here.', 'error', 3000)
					end
				end
			end
		else
			QBCore.Functions.Notify('You are missing something!', 'error', 3000)
		end
	end, {['decryptor'] = 1, ['hackcard'] = 1})
end
