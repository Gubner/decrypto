# decrypto
ATM Hacking with Minigame

The minigame is based on Matermind
https://en.wikipedia.org/wiki/Mastermind_(board_game)

Clues:
An aterisk (*) indicates one of the characters is correct, but not in the right position
An exclamation mark (!) indicates one of the characters is correct and in the right position
Each character may only generate one clue, with priority given to ! over *

Clue | Character | Meaning
:---:| --- | ---
* | asterisk | correct character, incorrect position
! | exclamation point | correct character, correct position

Example:
Actual PIN = 5543
Guess = 5678
will produce !
it will NOT produce !*, because the 5 can only generate one clue
Whereas
Guess = 5658
will produce !*

It can be set to base 10 (digits 0 through 9) or base 16 (digits 0 through 9 and letters A through F) in the config file.
