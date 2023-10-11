const playerSelection = "rock"



function getRandomInt(max = 3){
    return Math.floor(Math.random()*max)
}


function getComputerChoice(getRandomInt){
    if(getRandomInt === 0){
        console.log("computer Rock")
    }else if(getRandomInt === 1){
        console.log("computer Paper")
    }else if(getRandomInt === 2){
        console.log("computer Scissors")
    }else{
        console.error("getComputerChoice failed")
    }
}


const computerSelection = getComputerChoice(getRandomInt())


/*
function playRound(playerSelection, computerSelection){

}

*/