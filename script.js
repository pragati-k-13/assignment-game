// Query selectors
const cta = document.querySelector("#cta");
const result = document.querySelector("#result");
const yourScore = document.querySelector("#yourScore");
const compScore = document.querySelector("#compScore");

// creating buttons for game
const rock = document.createElement("button");
rock.textContent = "Play Rock";
cta.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Play Paper";
cta.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Play Scissors";
cta.appendChild(scissors);

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber > 33 && randomNumber <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Declare players' score
let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();

// Playing logic
function playRound(humanChoice, computerChoice) {
  // let humanChoice = rawHumanChoice.toLowerCase();

  // Human chooses rock
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      result.textContent = "It's a tie!";
    } else if (computerChoice === "paper") {
      computerScore++;
      result.textContent = "You lose! Paper beats rock.";
    } else if (computerChoice === "scissors") {
      humanScore++;
      result.textContent = "You win! Rock beats scissors.";
    }

    // Human chooses paper
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++;
      result.textContent = "You win! Paper beats rock.";
    } else if (computerChoice == "paper") {
      result.textContent = "It's a tie!";
    } else {
      computerScore++;
      result.textContent = "You lose! Scissors beat paper.";
    }

    //Human chooses scissors
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      computerScore++;
      result.textContent = "You lose! Rock beats scissors.";
    } else if (computerChoice == "paper") {
      humanScore++;
      result.textContent = "You win! Scissors beat paper.";
    } else {
      result.textContent = "It's a tie!";
    }
  }

  function checkWinner() {
    if (humanScore == 5 && computerScore < humanScore) {
      yourScore.textContent = "You win!";
      compScore.textContent = "Computer lost";
      humanScore = 0;
      computerScore = 0;
    } else if (compScore == 5 && humanScore < computerScore) {
      yourScore.textContent = "You lose";
      compScore.textContent = "Computer wins!";
      humanScore = 0;
      computerScore = 0;
    }
  }
  yourScore.textContent = humanScore + " / 5";
  compScore.textContent = computerScore + " / 5";
  checkWinner();
}

//Play rock button
function playRock() {
  computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
}
rock.addEventListener("click", playRock);

//Play paper button
function playPaper() {
  computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
}
paper.addEventListener("click", playPaper);

//Play scissors button
function playScissors() {
  computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
}
scissors.addEventListener("click", playScissors);
