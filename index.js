function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    return computerChoice;
}

function getPlayerChoice() {
    let input = prompt("Rock, Paper or Scissors?: ");
    let choiceLower = input.toLowerCase();

    if (choiceLower === 'rock' || choiceLower === 'paper' || choiceLower === 'scissors') {
        return choiceLower;
    } else {
        console.error('Wrong input');
        return 'Wrong input';
    }
}

function playRound(playerSelection, computerSelection) {
    const playerWin = `${playerSelection} is better than ${computerSelection}, you won!`;
    const computerWin = `${computerSelection} is better than ${playerSelection}, you lost...`;
    const tie = `You and the computer chose ${playerSelection}, it's a tie!`;

    if (playerSelection === computerSelection) {
        console.log(tie);
        return 0;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log(playerWin);
        return 1;
    } else {
        console.log(computerWin);
        return 2;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let nTie = 0;

    for (let i = 0; i < 5; i++) { // Jugar 5 rondas
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === 1) {
            playerScore++;
        } else if (roundResult === 2) {
            computerScore++;
        } else {
            nTie++;
        }
    }

    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);

    if (playerScore === computerScore) {
        console.log("It's a tie game!");
    } else if (playerScore > computerScore) {
        console.log("Player wins the game!");
    } else {
        console.log("Computer wins the game!");
    }
}

playGame();
