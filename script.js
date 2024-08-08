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

function getHumanChoice() {
    let choice = null;
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Please choose Rock, Paper or Scissors: ");
    }
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        return "none";
    } else if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log("You win! Paper beats rock.");
            return "human";
        } else if (humanChoice === "scissors") {
            console.log("You lose! Rock beats scissors.");
            return "cpu";
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("You win! Scissors beats paper.");
            return "human";
        } else if (humanChoice === "rock") {
            console.log("You lose! Paper beats rock.");
            return "cpu";
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            console.log("You win! Rock beats scissors.");
            return "human";
        } else if (humanChoice === "paper") {
            console.log("You lose! Scissors beat paper.");
            return "cpu";
        }
    }
}

function updateScore(player) {
    scores[player]++;
}

const scores = {
    humanScore: 0,
    computerScore: 0,
}

const buttonContainer = document.querySelector(".buttons");
buttonContainer.addEventListener('click', (e) => {
    let playerMove = e.target.textContent.toLowerCase();
    let cpuMove = getComputerChoice();
    let winner = playRound(cpuMove, playerMove);
        if (winner !== "none") {
            winner === "human" ? updateScore("humanScore") : updateScore("computerScore");
        }
})

//playGame();



