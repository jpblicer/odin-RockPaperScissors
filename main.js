const playerSelectionButtonElements = document.querySelectorAll("button")
const resultsElement = document.querySelector("#results");
const gameRoundCounter = document.createElement("p");
const playerScoreCounter = document.createElement("p");
const computerScoreCounter = document.createElement("p");
const roundResult = document.createElement("p");

let gameRound = 0;
let computerScore = 0;
let playerScore = 0;

playerSelectionButtonElements.forEach((button) => {
    button.addEventListener("click", playRound)
});

function playRound(event){
    console.log(event.target.value)
    if(gameRound >= 5){
        resultsElement.innerHTML = "Game Finished <br /> Player : " + playerScore + "<br /> Computer : "+ computerScore;
    }else{
        ++gameRound
        return game(event.target.value)
}};


function game(playerSelection){

const computerSelection = getComputerChoice(getRandomInt());

//From MDN docs
function getRandomInt(max = 3){
    return Math.floor(Math.random()*max)
}


function getComputerChoice(getRandomInt){
    if(getRandomInt === 0){
        return "rock"
    }else if(getRandomInt === 1){
        return "paper"
    }else if(getRandomInt === 2){
        return "scissors"
    }else{
        console.error("getComputerChoice failed")
    }
}

let computerPicked = "Computer picked " + computerSelection;

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return computerPicked + " too. It's a Tie"
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ){
            playerScore++
            return computerPicked + ". " + playerSelection + " beats " + computerSelection + ", Player wins!"
    }else{
        computerScore++
        return computerPicked + ". " + computerSelection + " beats " + playerSelection + ", Computer Wins!"
    }
}

gameRoundCounter.textContent = "Current Round: " + gameRound
resultsElement.appendChild(gameRoundCounter)

playerScoreCounter.textContent = "Player Score: " + playerScore;
resultsElement.appendChild(playerScoreCounter)

computerScoreCounter.textContent = "Computer Score: " + computerScore
resultsElement.appendChild(computerScoreCounter)

roundResult.textContent = playRound(playerSelection, computerSelection)
resultsElement.appendChild(roundResult)


}

