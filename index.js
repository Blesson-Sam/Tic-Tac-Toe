const game=document.querySelector('.currentPlayer');
const box=document.querySelectorAll('.box');
const newGame=document.querySelector('.newGame');


let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Initialise the game

function initGame()
{
    currentPlayer='X'
    gameGrid=["","","","","","","","",""];

    box.forEach((box,index)=>{
        box.innerHTML="";
        box.classList.remove('win');
        box.style.pointerEvents="all";
    })

    newGame.classList.remove("active");
    game.innerText=`Current Player - ${currentPlayer}`;
}
initGame();

box.forEach((b, index)=>{
    b.addEventListener("click", () => {
        handelClick(index);
    })
})

function handelClick(index)
{
    if(gameGrid[index]==="")
    {
        box[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;

        // swap player
        swapTurn();

        // check winner
        checkGameOver();
    }
}

function swapTurn()
{
    if(currentPlayer==="X")
    {
        currentPlayer="O";
    }
    else
    {
        currentPlayer="X";
    }
    game.innerText=`Current Player - ${currentPlayer}`;
}


function checkGameOver()
{
    let answer="";
    winningPositions.forEach((position)=>{
        if(gameGrid[position[0]] !== "" && gameGrid[position[0]]===gameGrid[position[1]]&&gameGrid[position[1]]===gameGrid[position[2]])
        {
            if(gameGrid[position[0]]==="X")
            {
                answer="X";
            }
            else
            {
                answer="O";
            }

            box.forEach((box)=>{
                box.style.pointerEvents="none";
            })

            box[position[0]].classList.add("win");
            box[position[1]].classList.add("win");
            box[position[2]].classList.add("win");
        }
        else 
        {
            newGame.classList.add("active");
        }
    });
    if(answer!=="")
    {
    game.innerText=`Winner Player - ${answer}`;
    newGame.classList.add("active");
    }
}



newGame.addEventListener("click", initGame);



