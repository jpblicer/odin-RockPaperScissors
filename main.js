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

console.log("Computer picked " + computerSelection)
console.log("Player picked " + playerSelection)


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie"
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ){
            playerScore++
            return "Player wins!"
    }else{
        computerScore++
        return "Computer Wins!"
    }
}

console.log(playRound(playerSelection, computerSelection))
console.log(computerScore, playerScore)