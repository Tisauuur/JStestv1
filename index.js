function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    return computerChoice;
};

function getPlayerChoice() {
    let input = prompt("Rock, Paper or Scissors?: ");
    let choiseLower = input.toLowerCase();
    let = result = '';

    (choiseLower === 'rock') ? result = 'rock' :
        (choiseLower === 'paper') ? result = "papel" :
            (choiseLower === 'scissors') ? result = 'scissors' :
                result = 'Wrong input';

    return result;
};

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    const playerWin = `${playerSelection} is better than ${computerSelection}, you won!`;
    const computerWin = `${computerSelection} is bettet than ${playerSelection}, you lost...`;
    const tie = `You and the computer chosed ${playerSelection}, it's a tie!`;

    if (playerSelection === computerSelection) {
        console.log(tie)
    }

    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) { console.log(playerWin) }

    else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) { console.log(computerWin) }

    else {
        console.log('Wrong input')
    }

};

playRound(playerSelection, computerSelection);