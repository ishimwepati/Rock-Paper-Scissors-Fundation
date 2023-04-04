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
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


