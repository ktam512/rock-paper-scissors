let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
        playerScore += 1;
      } else if (playerSelection === computerSelection) {
        // It's a tie.
      } else {
        computerScore += 1;
      }
    
      updateResult();

   
}

function updateResult(){
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `You: ${playerScore} - Computer: ${computerScore}`;

  if (playerScore === 5) {
    resultElement.innerHTML += '<br><br>You won the game! Reload the page to play again';
    disableButtons();
  } else if (computerScore === 5) {
    resultElement.innerHTML += '<br><br>I won the game! Reload the page to play again';
    disableButtons();
  }
}

function disableButtons() {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.value);
    });
  });