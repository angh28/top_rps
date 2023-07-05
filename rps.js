
function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min) + min);
}

function getComputerChoice(){
    let randomNumber = getRandomInt(1,4);
    if (randomNumber === 1){
        return "paper"
    }else if (randomNumber === 2){
        return "scissors"
    }else {
        return "rock"
    }
}



function playRound(playerSelection, computerSelection){
    
    if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return ["You Lose! Paper beats Rock",0];
    }if ((playerSelection === "paper") && (computerSelection === "scissors")){
        return ["You Lose! Scissors beats Paper",0];
    }if ((playerSelection === "rock") && (computerSelection === "paper")){
        return ["You Lose! Paper beats Rock",0];
    }if (playerSelection === computerSelection){
        return ["Draw!",1]
    }else {
        return [`You Win! ${playerSelection[0].toUpperCase() + playerSelection.substr(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.substr(1)}`,2]
    }
}



function game(){
    let counter = 0;
    for (let i = 0; i < 5; i ++){
        let playerSelection = prompt("Choose Rock, Paper or Scissors!");
        playerSelection = playerSelection.toLowerCase().trim()
        while ((playerSelection != "rock") && (playerSelection != "scissors") && (playerSelection != "paper")){
            playerSelection = prompt("Either Rock, Paper or Scissors ")
        }
        let result = (playRound(playerSelection, getComputerChoice()))
        console.log(result[0])
        if (result[1] ===2){
            counter ++ 
        }
    }
    if (counter >= 3){
        return "You win !!!"
    }else{
        return "You Lose, better luck next time !!!"
    }
}

console.log(game())
