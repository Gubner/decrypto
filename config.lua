Config = {}

Config.Withdrawal = 500 -- $ received for successful hack
Config.MingameBase = 10 -- 10 for decimal or 16 for hexadecimal
Config.MinigameTimeLimit = 50 -- time limit in seconds
Config.MingameAttemptLimit = 10 -- number of guesses allowed
Config.AddStress = 5 -- % stress gain from hacking

Config.ATMModels = {
    "prop_atm_01", -- 20 on map
    "prop_atm_02", -- 37 on map
    "prop_atm_03", -- 30 on map
    "prop_fleeca_atm" -- 4 on map
}

Config.Chance = 0.10 -- Chance of police alert on successful hack. Note: police are always alerted on failed hack.

