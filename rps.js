
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

function playRound(playerSelection){
    computerSelection = getComputerChoice();
    if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return [0,"You Lose! Paper beats Rock"]; 
    }else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        return [0,"You Lose! Scissors beats Paper"]
    }else if ((playerSelection === "rock") && (computerSelection === "paper")){
        return [1,"You Lose! Paper beats Rock"]
    }else if (playerSelection === computerSelection){
        return [0,"Draw"]
    }else {
        return [1,"You Win!"]
    }
}

window.onload=function(){
    const buttons = document.querySelectorAll("button"); 

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            [resultNum, resultStr] = playRound(e.target.id)

            const score = document.querySelector(".score")
            const prevScore = parseInt(score.textContent)
            resultNum = parseInt(resultNum)
            score.textContent = (prevScore + resultNum)
            
            const result = document.querySelector(".result")
            result.textContent = resultStr

        }); 
    });
}