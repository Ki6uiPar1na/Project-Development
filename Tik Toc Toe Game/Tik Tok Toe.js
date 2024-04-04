//variable for access HTML element
let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-button');

//random variable to track
let turn = true //player x , player 0

//pattern for winning a game
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

//game functionality
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("click")
        if(turn){
            box.innerText = 'X'
            turn = false
        }
        else{
            box.innerText = 'O'
            turn = true
        }
        box.disabled = true
        // box.innerText = 'X'

        checkWinner()
    }) 
});

// winner check calculation
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                alert(`Player ${boxes[pattern[0]].innerText} player is WINNER`)
                for(let box of boxes){
                    box.disabled = true
                }
            }
        }

    }
}

//reset button function
const resetGame = () =>{
    for(box of boxes){
        box.disabled = false
        turn = true
        box.innerText = ''
    }
}

//reset the all buttons
resetButton.addEventListener('click', resetGame)
