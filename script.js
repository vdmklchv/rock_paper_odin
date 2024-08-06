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

function playRound(computerChoice, humanChoice, humanScore, computerScore) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!")
    } else if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log("You win! Paper beats rock.");
            incrementScore(humanScore);
        } else if (humanChoice === "scissors") {
            console.log("You lose! Rock beats scissors.");
            incrementScore(computerScore);
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("You win! Scissors beats paper.");
            incrementScore(humanScore);
        } else if (humanChoice === "rock") {
            console.log("You lose! Paper beats rock.");
            incrementScore(computerScore);
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            console.log("You win! Rock beats scissors.");
            incrementScore(humanScore);
        } else if (humanChoice === "paper") {
            console.log("You lose! Scissors beat paper.");
            incrementScore(computerScore);
        }
    }
}

function incrementScore(playerScore, points = 1) {
    playerScore += points;
}

function produceResult(humanScore, computerScore) {
    return `Human score: ${humanScore}
            Computer score: ${computerScore}`;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice, humanScore, computerScore);
    }

    produceResult(humanScore, computerScore);

}

playGame();



