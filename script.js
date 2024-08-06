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
