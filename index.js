const board = new Map();

function mode(difficulty){
    let mines = 0;
    switch(difficulty.toUpperCase()){
        case "EASY":
            mines = 1;
            break
        case "NORMAL":
            mines = 3;
            break
        case "HARD":
            mines = 6;
            break
    }
    setUpGrid(mines);
    play(mines);
}

function setUpGrid(mines){
    while(mines !== 0){
        for (let i = 1; i < 11; i++) {

            if (mines > 0 && (0.2 > Math.random()) && board.get(i) !== false) {
                board.set(i , "mine");
                mines = mines - 1;
            }
            else if(board.get(i) !== false){
                board.set(i , "nomine");
            }
        }
    }
}

function play(mines){
    let clearCount = board.size - mines;
    let gameOver = false;
    let text = "";
    while(clearCount > 0 && gameOver === false ){
        let move = Number(prompt("Make your next move! Please enter a number from 1-10"));
        console.log(board.get(move));
        if(board.get(move) === "mine"){
            gameOver = true;
            text = "You Lost!"
        }
        else if(board.get(move) === "nomine"){
            board.set(move, "clear");
            clearCount--;
        }

        if(clearCount === 0){
            text = "You Won!"
            gameOver = false;
        }
    }
    alert(`Game is over Result: ${text}`);
}

mode(prompt("Please enter a difficulty: easy / normal / hard"));

console.log(board);

