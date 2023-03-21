// Pseudo Code:
// Create a game board 6 rows / 7 columns (grid of 42 cells) in HTML or in JS (for loop)
// Make two players
// Listen for a player to click on a board
// Check if it is an appropriate cell in a board to place a disk (must be free, and be on top of another disk)
// Check if a player won (four disks in horizontal/diagonal/vertical line). Use all possible  win patterns to compare with=>
// Make collection of all possible win patterns 
// check if the board has available spot for next enter
// Display the result if one of the players won, or the board is full.
// Offer to play again

let gameBoard = document.querySelector('.gameBoard');

function makeGameBoard(){
    for(let i= 0; i < 42; i++){
        let cell = document.createElement('div');
        cell.setAttribute('id',i);
        cell.className = 'cell';
        gameBoard.appendChild(cell);
    }

}
// text
makeGameBoard();