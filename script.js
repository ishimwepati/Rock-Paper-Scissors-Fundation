console.log("Rock Scissor Paper Game by WazaCode")

const Player = '';
const Computer = '';
const winner = '';

function getComputerChoice (computerAnswer)
    {
    return computerAnswer[Math.floor(Math.random()*computerAnswer.length)] 
    }
    let computerAnswer = ['ROCK', 'PAPER', 'SCISSOR'];
    console.log(getComputerChoice(computerAnswer));


