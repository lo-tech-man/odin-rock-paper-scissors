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

let humanScore = 0;
let computerScore = 0;

function displayChoices() {
	console.log(`Your pick: ${humanChoice} -- Opponent's pick: ${computerChoice}`);
}

function displayScores() {
	console.log(`Your score: ${humanScore} -- Opponent's score: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
	displayChoices();

	switch (humanChoice) {
		case "rock":
			if (computerChoice === "scissors") {
				console.log("You score! Rock beats scissors.");
				humanScore++;
			} else if (computerChoice === "paper") {
				console.log("Opponent scores! Paper beats rock.")
				computerScore++;
			} else {
				console.log("Round draw!");
			}
			break;

		case "paper":
			if (computerChoice === "rock") {
				console.log("You score! Paper beats rock.");
				humanScore++;
			} else if (computerChoice === "scissors") {
				console.log("Opponent scores! Scissors beats paper.");
				computerScore++;
			} else {
				console.log("Round draw!");
			}
			break;
		
		case "scissors":
			if (computerChoice === "paper") {
				console.log("You score! Scissors beats paper.");
				humanScore++;
			} else if (computerChoice === "rock") {
				console.log("Opponent scores! Rock beats scissors.");
				computerScore++;
			} else {
				console.log("Round draw!");
			}
			break;
	}
	displayScores();
}

playRound(humanChoice, computerChoice);