const playerSelection = "rock"
const computerSelection = getComputerChoice(getRandomInt())


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

console.log("computer picked " + computerSelection)
console.log("player picked " + playerSelection)


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie"
    }else{
        return "Not a tie"
    }
}

console.log(playRound(playerSelection, computerSelection))
