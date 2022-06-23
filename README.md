# tic-tac-toe

## Design

Consists of 5 main sections - the header, scoreboard, body, footer, and modal. 

The header contains the title and the theme toggle which changes the colours 
from light to dark mode.
The scoreboard keeps track of the score and which turn it is through the 
underline.
The body has an animation upon being loaded. The modal will tell who won or if
it is a draw. The footer just has my tag and copyright.

## Function

The board is made using a while loop inside a flexbox container. For each click,
an X or an O is appended. This is tracked by an array that alternates the
characters. A checkWin function checks if there is three in a row and shows who
the winner is in the modal. It also updates the scoreboard accordingly. 