const playerSelection = "rOck".toLowerCase();
const computerSelection = getComputerChoice(getRandomInt());
let computerScore = 0;
let playerScore = 0;

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

console.log("Player picked " + playerSelection)
console.log("Computer picked " + computerSelection)

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie"
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ){
            playerScore++
            return playerSelection + " beats " + computerSelection + ", Player wins!"
    }else{
        computerScore++
        return computerSelection + " beats " + playerSelection + ", Computer Wins!"
    }
}

console.log(playRound(playerSelection, computerSelection))
console.log(computerScore, playerScore)