const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choicebtn = document.querySelectorAll(".btn");
let computer;
let player;



choicebtn.forEach(button => button.addEventListener("click",()=>{
    player = button.textContent;
    computerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`
    resultText.textContent = result();
    
}));

function computerChoice(){
    var rn = Math.floor(Math.random()*3+1);
    switch(rn){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSOR";
            break;    
    }
}
function result(){
    if(player == computer){
        return "DRAW . . . "
    }
    else if(computer =="ROCK"){
        return (player == "PAPER") ? "You Win" : "You Lose"
    }
    else if(computer =="PAPER"){
        return (player == "SCISSOR") ? "You Win" : "You Lose"
    }
    else if(computer =="SCISSOR"){
        return (player == "ROCK") ? "You Win" : "You Lose"
    }
}
