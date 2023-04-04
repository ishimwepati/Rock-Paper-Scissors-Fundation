console.log("Rock Scissor Paper Game by WazaCode")

let Player = '';
let Computer = '';
let winner = '';

function getComputerChoice (computerAnswer)
    {
    return computerAnswer[Math.floor(Math.random()*computerAnswer.length)] 
    }
    let computerAnswer = ['ROCK', 'PAPER', 'SCISSOR'];

    Computer = getComputerChoice(computerAnswer);
    console.log('Computer played :', Computer);

