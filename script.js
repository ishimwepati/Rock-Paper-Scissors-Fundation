console.log("Rock Scissor Paper Game by WazaCode")

let player = '';
let computer = '';
let winner = '';

function getComputerChoice (computerAnswer)
    {
    return computerAnswer[Math.floor(Math.random()*computerAnswer.length)] 
    }
    let computerAnswer = ['ROCK', 'PAPER', 'SCISSOR'];

//Assigning the functionValue to a variable Computer

    computer = getComputerChoice(computerAnswer);
    console.log('Computer played :', computer);

// Getting user's answer
    player = prompt("What are you playing, ROCK, SCISSOR or PAPER");
    console.log('You played :', player);

// Function that will determine the winner
function playRound(playerSelection, computerSelection) {
    if  (
        (player === 'ROCK' && computer === 'SCISSOR') ||
        (player === 'SCISSOR' && computer === 'PAPER') ||
        (player === 'PAPER' && computer === 'ROCK')
        )
        {
        console.log('You are a Winner you played', player ,'and Computer played', computer);
        console.log('Congratutaltions')
        }

  }
  const playerSelection = player;
  const computerSelection = computer;
  console.log(playRound(playerSelection, computerSelection));


