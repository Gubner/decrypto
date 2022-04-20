# decrypto
ATM Hacking with Minigame

The minigame is based on Matermind
https://en.wikipedia.org/wiki/Mastermind_(board_game)

## Clues
Based on the guess made, clues are given as follows
| Clue | Character | Meaning |
|:---:| --- | --- |
| * | asterisk | correct character, incorrect position |
| ! | exclamation point | correct character, correct position |

Each character may only generate **one** clue, with priority given to ! over *

The clue is always ordered with ! before * and does not indicate which of your guesses corresponds to the clue

Example:
| PIN | Guess | Clue |
|---| --- | --- |
| 5543 | 5678 | ! |
| 5543 | 5658 | !* |


The minigame can be set to base 10 (digits 0 through 9) or base 16 (digits 0 through 9 and letters A through F) in the config file.
