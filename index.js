const btns = document.querySelectorAll("button");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScoreRef = document.querySelector("#player-score");
const computerScoreRef = document.querySelector("#computer-score");
const roundTotalRef = document.querySelector("#round-total");
const resultsRef = document.querySelector("#results")
const divSelection = document.querySelector("#players-selection")

let playerScore = 0;
let computerScore = 0;
let nTie = 0;
let round = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    return computerChoice;
};

function getPlayerChoice() {
    rockBtn.addEventListener("click", () => { playGame('rock') });
    paperBtn.addEventListener("click", () => { playGame('paper') });
    scissorsBtn.addEventListener("click", () => { playGame('scissors') });
};

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 0;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 1;
    } else {
        return 2;
    }
};
function playGame(playerSelection) {

    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === 1) {
        round++;
        playerScore++;
        playerScoreRef.textContent = playerScore;
        roundTotalRef.textContent = round;
    } else if (roundResult === 2) {
        round++;
        computerScore++;
        computerScoreRef.textContent = computerScore;
        roundTotalRef.textContent = round;
    } else {
        round++;
        nTie++;
        roundTotalRef.textContent = round;
    }

    divSelection.textContent = `Player choose: ${playerSelection}\nComputer choose: ${computerSelection}`;
    if (round === 5) {
        if (playerScore === computerScore) {
            resultsRef.textContent = "IT'S A TIE"
            playerScoreRef.textContent = "";
            computerScoreRef.textContent = "";
            roundTotalRef.textContent = "";
            round = 0;
            playerScore = 0;
            computerScore = 0;
        } else if (playerScore > computerScore) {
            resultsRef.textContent = "The winner is THE PLAYER!!!"
            playerScoreRef.textContent = "";
            computerScoreRef.textContent = "";
            roundTotalRef.textContent = "";
            round = 0;
            playerScore = 0;
            computerScore = 0;
        } else {
            resultsRef.textContent = "The winner is THE COMPUTER!!!"
            playerScoreRef.textContent = "";
            computerScoreRef.textContent = "";
            roundTotalRef.textContent = "";
            round = 0;
            playerScore = 0;
            computerScore = 0;
        }

    }
};

getPlayerChoice()