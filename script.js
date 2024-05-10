function getComputerChoice(min, max) {
	let choice = Math.floor(Math.random() * (max - min + 1)) + min;

	if (choice === 0) {
		return "rock";
	} else if (choice === 1) {
		return "paper";
	} else if (choice === 2) {
		return "scissors";
	}
}

function getHumanChoice() {
	let choice = prompt("(R)ock, (p)aper, or (s)cissors? Make your choice...");

	if (choice === null) {
		alert("You must make a selection!");
		return getHumanChoice();
	} else {
		choice = choice.toLowerCase();
		if (choice === "r" || choice === "rock") {
			return "rock";
		} else if (choice === "p" || choice === "paper") {
			return "paper";
		} else if (choice === "s" || choice === "scissors") {
			return "scissors";
		} else {
			alert("Error: Invalid choice!");
			return getHumanChoice();
		}
	}
}

let computerChoice = getComputerChoice(0, 2);
let humanChoice = getHumanChoice();
