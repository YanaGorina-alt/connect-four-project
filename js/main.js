// Pseudo Code:
// addEventListener for DOMContentLoad
// Create a game board 6 rows / 7 columns (grid of 42 cells) in HTML or in JS (for loop)
// Make two players (make one player and then switch)
// Listen for a player to click on a board
// Check if it is an appropriate cell in a board to place a disk (must be free, and be on top of another disk)
// Make collection of all possible win patterns 
// Check if a player won (four disks in horizontal/diagonal/vertical line). Use all possible  win patterns to compare with=>
// check if the board has available spot for next enter
// Display the result if one of the players won, or the board is full.
// Offer to play again

    const gameBoard = document.querySelector('.gameBoard');
    const playerID = document.querySelector('.player-id');
    let player = 1; // player one will start the game
    const result = document.querySelector('.update-result'); // to display result
    const playButton = document.querySelector('.play')
    let occupiedCells = 0;
    let winningPatterns = [ 
        [41, 40, 39, 38], 
        [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
        [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
        [13, 12, 11, 10], [35, 36, 37, 38], 
        [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
        [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
        [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
        [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
        [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
        [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
        [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
        [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
        [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
        [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
        [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
        [40, 32, 24, 16], [9, 17, 25, 33], [8, 16, 24, 32], 
        [11, 17, 23, 29], [12, 18, 24, 30],  
        [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
        [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
        [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
        [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
        [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
        [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34],
        [0, 1, 2, 3],[1, 2, 3, 4],[7, 8, 9, 10],[6, 5, 4, 3]
        ]; 


document.addEventListener('DOMContentLoaded', loadGame)

    function loadGame(){
        playerID.innerHTML = player;

    function makeGameBoard(){
        for(let i= 0; i < 42; i++){
            let cell = document.createElement('div');
            cell.setAttribute('id',i);
            cell.className = 'cell';
            gameBoard.appendChild(cell);
        }

    }
    
    makeGameBoard();
    const cells = document.querySelectorAll('.gameBoard div');


    function updateBoard(cellId){
        occupiedCells++;
        cells[cellId].classList.add('busy');
        if(player===1){
            cells[cellId].classList.add(`player-1`);
            checkResult('player-1');
            player = 2;
            playerID.innerHTML = player;
        }else{
            cells[cellId].classList.add(`player-2`);
            checkResult('player-2');
            player = 1;
            playerID.innerHTML = player;
        }
    }

    function checkResult(currentPlayer){
        let count = 0;
        for(let i = 0; i < winningPatterns.length; i++){
            //console.log(`a pattern is ${winningPatterns[i]}`)
            for (let j = 0; j < 4; j++){
                //console.log(`an index is ${winningPatterns[i][j]}`)
                //console.log(`current player is ${currentPlayer}`)
                //console.log(`curent player has taking this spot ${cells[winningPatterns[i][j]].classList.contains(currentPlayer)}`)
                if(cells[winningPatterns[i][j]].classList.contains(currentPlayer)){
                    count++;
                }else{
                    count = 0;
                    break;
                }
            }if(count === 4){
                console.log(result);
                result.innerHTML = (`Congratulations ${currentPlayer} you WON! If you want to play again, please click play button.`);

                count = 0;
            }
        }
        if(updateBoard === 42){
            result.innerHTML = "There is no available cells to put disk. If you want to play again, please click play button."
        }

    }
    
    for(let i =0; i < cells.length; i++){
        cells[i].onclick = () =>{
            // check if the cell is not busy
            if(!cells[i].classList.contains('busy')){
                // if it is not a bottom row
                if(i<35){
                    if(cells[i+7].classList.contains('busy')){ // if a player puts disck on top of other disk 
                        updateBoard(i);
                    }else{ // user tries to put the disk on the air
                        alert("You must put your disk on top of another disk")

                    }

                }else{ // bottom row
                    updateBoard(i);

                } 
            } else{ // the cell is already busy or
                alert("This spot is already taken. Choose another one, please.")

            }
        }
    }

    playButton.addEventListener('click', ()=> {
        gameBoard.innerHTML = '';
        player = 1;
        result.innerHTML = '';
        loadGame();

    });
    
}

    

    
    

