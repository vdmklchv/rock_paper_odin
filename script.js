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

let humanScore = 0;
let computerScore = 0;

