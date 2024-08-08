function getComputerChoice() {
    const randNumber = Math.floor(Math.random() * 3);

    switch(randNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "unknown";
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        setResultText("It's a tie!");
        return "none";
    } else if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            setResultText("You win! Paper beats rock.");
            return "human";
        } else if (humanChoice === "scissors") {
            setResultText("You lose! Rock beats scissors.");
            return "cpu";
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            setResultText("You win! Scissors beats paper.");
            return "human";
        } else if (humanChoice === "rock") {
            setResultText("You lose! Paper beats rock.");
            return "cpu";
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            setResultText("You win! Rock beats scissors.");
            return "human";
        } else if (humanChoice === "paper") {
            setResultText("You lose! Scissors beat paper.");
            return "cpu";
        }
    }
}

function updateScore(player) {
    if (player !== "none") {
        player === "human" ? scores["humanScore"]++ : scores["computerScore"]++;
    }
}

function play(e) {
    let playerMove = e.target.textContent.toLowerCase();
    let cpuMove = getComputerChoice();
    let winner = playRound(cpuMove, playerMove);
    updateScore(winner);
    displayScore();

    if (isEnd()) {
        finishGame();
    }

}

function displayScore() {
    elements.humanScore.textContent = scores.humanScore;
    elements.computerScore.textContent = scores.computerScore;
}

function setResultText(text) {
    elements.resultTextArea.textContent = text;
}

function isEnd() {
    return scores.humanScore === 5 || scores.computerScore === 5;
}

function getGlobalWinner() {
    return scores.humanScore === 5 ? "human" : "computer";
}

function finishGame() {
    setResultText(`The global winner is ${getGlobalWinner()}`);
    disableButtons();
    toggleRestartButton();
}

function restartGame() {
    setResultText("Choose rock, paper or scissors to start.");
    resetScore();
    displayScore();
    toggleRestartButton();
    enablePlayButtons();
}

function disableButtons() {
    for (button of elements.playButtons) {
        button.disabled = true;
    }
}

function enablePlayButtons() {
    for (button of elements.playButtons) {
        button.disabled = false;
    }
}

function toggleRestartButton() {
    elements.restartButton.disabled = !elements.restartButton.disabled;
}

function resetScore() {
    scores.humanScore = 0;
    scores.computerScore = 0;
}

const scores = {
    humanScore: 0,
    computerScore: 0,
}

const elements = {
    buttonContainer: document.querySelector(".buttons"),
    resultTextArea: document.querySelector(".result-text"),
    humanScore: document.querySelector(".human-score"),
    computerScore: document.querySelector(".computer-score"),
    playButtons: document.querySelectorAll(".buttons > button"),
    restartButton: document.querySelector(".restart-button"),
}

elements.restartButton.disabled = true;

elements.buttonContainer.addEventListener('click', play);
elements.restartButton.addEventListener('click', restartGame);


