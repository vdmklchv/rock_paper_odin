function getComputerChoice() {
    const randNumber = Math.floor(Math.random() * 3);

    switch(randNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Unknown";
    }
}

function getHumanChoice() {
    let choice = null;
    while (choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        choice = prompt("Please choose Rock, Paper or Scissors: ");
    }
    return choice;
}