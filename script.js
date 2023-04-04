console.log("Rock Scissor Paper Game by WazaCode")

let player = "";
let computer = "";
let winner = "";

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
    
   else if (  (computer === 'ROCK' && player === 'SCISSOR') ||
          (computer === 'SCISSOR' && player === 'PAPER') ||
          (computer === 'PAPER' && player === 'ROCK')
          )
            {
            console.log('You are a looser, you played : ', player ,'and Computer played', computer);
            console.log('Sorry You HAVE FAILED !!!')
            }
    else if(player === computer){
        console.log('It is a draw')
        console.log('One Point ot each one You and the Computer!!!')
    }
    else {
        console.log('We dont recognise your input, PLEASE selected between :\n ROCK, PAPER, SCISSOR')
    }

  }
  const playerSelection = player;
  const computerSelection = computer;
  console.log(playRound(playerSelection, computerSelection));


