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
}

function displayScore() {
    elements.humanScore.textContent = scores.humanScore;
    elements.computerScore.textContent = scores.computerScore;
}

function setResultText(text) {
    elements.resultTextArea.textContent = text;
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
}

elements.buttonContainer.addEventListener('click', play);


