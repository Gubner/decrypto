# decrypto
ATM Hacking with Minigame for QBCore Framework

Preview: https://tj-s.online/content/GTAV/decrypto.mp4

## Add items to qb-core\shared\items.lua

```lua
	['stolencard'] 				 		 = {['name'] = 'stolencard', 			    		['label'] = 'Stolen ATM Card', 					['weight'] = 100, 	['type'] = 'item', 		['image'] = 'visacard.png', 				['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,   ['combinable'] = {accept = {'electronickit'}, reward = 'hackcard', anim = {['dict'] = 'anim@amb@business@bgen@bgen_inspecting@', ['lib'] = 'inspecting_low_idle_01_inspector', ['text'] = 'Crafting ATM hacking card', ['timeOut'] = 7500,}},   ['description'] = 'What will you do with someone else\'s ATM card?'},
	['hackcard'] 				 		 = {['name'] = 'hackcard', 			    		['label'] = 'Hacking Card', 					['weight'] = 100, 	['type'] = 'item', 		['image'] = 'hackcard.png', 				['unique'] = false, 	['useable'] = true, 	['shouldClose'] = false,   ['combinable'] = nil,   ['description'] = 'Modified debit card'},
	['decryptor'] 				 		 = {['name'] = 'decryptor', 			    		['label'] = 'Decrypt-o-matic', 					['weight'] = 300, 	['type'] = 'item', 		['image'] = 'decryptomatic.png', 				['unique'] = true, 	['useable'] = true, 	['shouldClose'] = false,   ['combinable'] = nil,   ['description'] = 'Decrypt PIN based encryptions'},
```

## Add images to qb-inventory\html\images

- hackcard.png
- decryptomatic.png

## Add a shop to qb-shops\config.lua

Add to Config.Products

```lua
["blackmarket"] = {
	[1] = {
		name = "stolencard",
		price = 100,
		amount = 50,
		info = {},
		type = "item",
		slot = 1,
	},
	[2] = {
		name = "decryptor",
		price = 5000,
		amount = 10,
		info = {},
		type = "item",
		slot = 2,
	},
},
```

Add to Config.Locations

```lua
-- For newer versions of qb-shops
	-- Black Market Locations
	["backdoor"] = {
		["label"] = "Back Door",
		["coords"] = vector4(1194.4, 2721.75, 38.81, 1.45),
		["ped"] = 'cs_old_man1a',
		["scenario"] = "WORLD_HUMAN_STAND_IMPATIENT",
		["radius"] = 1.5,
		["targetIcon"] = "fas fa-shopping-basket",
		["targetLabel"] = "I have a deal for you",
		["products"] = Config.Products["blackmarket"],
		["showblip"] = false,
		["blipsprite"] = 52
	},

--[[ For older versions of qb-shops
	-- Black Market Locations
	["backdoor"] = {
		["label"] = "Back Door",
		["coords"] = {
			[1] = vector3(1194.16, 2721.67, 38.81)
		},
		["products"] = Config.Products["blackmarket"],
		["showblip"] = false,
		["blipsprite"] = 52
	},
]]--
```	

## The Minigame
The minigame is based on Matermind
https://en.wikipedia.org/wiki/Mastermind_(board_game)

## Clues
Based on the guess made, clues are given as follows
| Clue | Character | Meaning |
|:---:| --- | --- |
|  | *none* | incorrect character, incorrect position |
| * | asterisk | correct character, incorrect position |
| ! | exclamation point | correct character, correct position |

Each character may only generate **one** clue, with priority given to ! over *

The clue is always ordered with ! before * and does not indicate which characters in your guess corresponds to the clue

Example:
| PIN | Guess | Clue |
|---| --- | --- |
| 5543 | 8765 | * |
| 5543 | 5678 | ! |
| 5543 | 5658 | !* |

The minigame can be set to base 10 (digits 0 through 9) or base 16 (digits 0 through 9 and letters A through F) in the config file.

## Why does the minigame have such a long intro?

I did this to balance Police response versus hacking sprees. You can always modify this in the script.js file (the variable is *message* and has some instructions in the preceeding comment).
