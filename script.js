// Getting the computer's choice

// IF the random number created between 0 and 1 is less than or equal to 33.33
//    THEN let the choice be rock

// IF the random number is greater than 33.33 or less than or equal to 66.66
//    THEN let the choice be paper

// ELSE if the random number is greater than 66.66 and less than or equal to 100
//    THEN let the choice be scissors

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

// Get human choice
function getHumanChoice() {
  let choice = prompt("Let's play! Enter rock, paper, or scissors");
  return choice;
}

// Declare players' score
let humanScore = 0;
let computerScore = 0;

function playGame() {
  // Play a single round - define function

  function playRound(humanChoice, computerChoice) {
    // let humanChoice = rawHumanChoice.toLowerCase();

    // Human chooses rock
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        return "It's a tie!";
      } else if (computerChoice == "paper") {
        computerScore++;
        return "You lose! Paper beats rock.";
      } else {
        humanScore++;
        return "You win! Rock beats scissors.";
      }

      // Human chooses paper
    } else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        humanScore++;
        return "You win! Paper beats rock.";
      } else if (computerChoice == "paper") {
        return "It's a tie!";
      } else {
        computerScore++;
        return "You lose! Scissors beat paper.";
      }

      //Human chooses scissors
    } else if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";
      } else if (computerChoice == "paper") {
        humanScore++;
        return "You win! Scissors beat paper.";
      } else {
        return "It's a tie!";
      }
    }
  }
  // play 5 rounds
  for (let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  //declare a winner
  if (humanScore > computerScore) {
    console.log("You win! Your score is " + humanScore);
  } else console.log("You lose! Your score is " + humanScore);
}

playGame();
