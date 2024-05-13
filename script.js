let computerChoice;
let humanChoice;

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
	let choice = prompt("Rock, paper, or scissors? Make your choice...");

	if (choice === null) {
		alert("You must make a selection!");
		return getHumanChoice();
	} else {
		choice = choice.toLowerCase();
		if (choice === "rock") {
			return "rock";
		} else if (choice === "paper") {
			return "paper";
		} else if (choice === "scissors") {
			return "scissors";
		} else {
			alert("Error: Invalid choice!");
			return getHumanChoice();
		}
	}
}

let humanScore = 0;
let computerScore = 0;

function displayChoices() {
	console.log("-> Your pick: " + humanChoice + "\n-> Opponent's pick: " + computerChoice);
}

function displayScores() {
	console.log("-> Your score: " + humanScore + "\n-> Opponent's score: " + computerScore);
}

function displayFinalResults() {
	console.log("[FINAL RESULTS]\n");
	displayScores();

	if (humanScore > computerScore) {
		console.log("Congratulations! You win!");
	} else if (humanScore < computerScore) {
		console.log("You lose! Better luck next time!");
	} else {
		console.log("It's a tie!");
	}
}

function playRound(humanChoice, computerChoice) {
	switch (humanChoice) {
		case "rock":
			if (computerChoice === "scissors") {
				console.log("Round win! Rock beats scissors.");
				humanScore++;
			} else if (computerChoice === "paper") {
				console.log("Round loss! Paper beats rock.")
				computerScore++;
			} else {
				console.log("Round draw!");
			}
			break;

		case "paper":
			if (computerChoice === "rock") {
				console.log("Round win! Paper beats rock.");
				humanScore++;
			} else if (computerChoice === "scissors") {
				console.log("Round loss! Scissors beats paper.");
				computerScore++;
			} else {
				console.log("Round draw!");
			}
			break;
		
		case "scissors":
			if (computerChoice === "paper") {
				console.log("Round win! Scissors beats paper.");
				humanScore++;
			} else if (computerChoice === "rock") {
				console.log("Round loss! Rock beats scissors.");
				computerScore++;
			} else {
				console.log("Round draw!");
			}
			break;
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		computerChoice = getComputerChoice(0, 2);
		humanChoice = getHumanChoice();
		displayChoices();
		playRound(humanChoice, computerChoice);
		displayScores();
	}
}

playGame();
displayFinalResults();
