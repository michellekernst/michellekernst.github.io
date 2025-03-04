let humanscore = 0;
let computerscore = 0;

function getHumanChoice() {
  // create getHumanChoice function
  let humanchoice = prompt("Choose rock, paper, or scissors:"); // prompt user to enter a choice which will be stored as humanchoice
  let humanchoicenocase = humanchoice.toLowerCase(); // convert the humanchoice to lowercase
  const validChoices = ["rock", "paper", "scissors"]; // define array of valid choices, so it's not case-sensitive
  if (validChoices.includes(humanchoicenocase)) {
    // check if the humanchoice is in the validChoices array
    return humanchoicenocase; // return the choice if it's rock, paper, or scissors
  } else {
    // if not rock, paper, or scissors:
    throw new Error("Please enter rock, paper, or scissors."); // return an error message
  }
}

function getcomputerChoice() {
  // create getcomputerChoice function
  const computerchoice = Math.floor(Math.random() * 3); // generate a random number between 0 and 2
  if (computerchoice === 0) {
    return "rock"; // 0 = rock
  } else if (computerchoice === 1) {
    return "paper"; // 1 = paper
  } else {
    return "scissors"; // 2 = scissors
  }
}

function getResults(humanchoice, computerchoice) {
  // create getResults function with two parameters: humanchoice and computerchoice
  if (humanchoice === computerchoice) {
    humanscore++;
    computerscore++;
    return "It's a tie!";
  } else if (humanchoice === "rock" && computerchoice === "scissors") {
    humanscore++;
    return "Rock beats scissors! You win!";
  } else if (humanchoice === "paper" && computerchoice === "rock") {
    humanscore++;
    return "Paper beats rock! You win!";
  } else if (humanchoice === "scissors" && computerchoice === "paper") {
    humanscore++;
    return "Scissors beats paper! You win!";
  } else {
    computerscore++;
    return "You lose!";
  }
}

for (i = 0; i < 4; i++) {
  // for rounds 1, 2, 3, and 4
  let humanchoice = getHumanChoice(); // store the returned value from getHumanChoice in a variable 'humanchoice'
  console.log(`You chose ${humanchoice}`);

  let computerchoice = getcomputerChoice(); // store the returned value from getComputerChoice in a variable 'computerchoice'
  console.log(`The computer chose ${computerchoice}`);

  console.log(getResults(humanchoice, computerchoice)); // log the result of getResults to the console
  console.log(`Human score: ${humanscore}
  Computer score: ${computerscore}`); // show the human score and computer score
  if (humanscore === computerscore) {
    // if the human score is equal to the computer score
    console.log("It's all tied up!");
  } else if (humanscore > computerscore) {
    // if the human score is greater than computer score
    console.log("You are winning!");
  } else {
    // if the human score is less than the computer score
    console.log("The computer is winning!");
  }
}

for (i = 4; i < 5; i++) {
  // for round 5
  let humanchoice = getHumanChoice(); // store the returned value from getHumanChoice in a variable 'humanchoice'
  console.log(`You chose ${humanchoice}`);

  let computerchoice = getcomputerChoice(); // store the returned value from getComputerChoice in a variable 'computerchoice'
  console.log(`The computer chose ${computerchoice}`);

  console.log(getResults(humanchoice, computerchoice)); // log the result of getResults to the console
  console.log(`Human score: ${humanscore}
  Computer score: ${computerscore}`); // show the human score and computer score
  if (humanscore === computerscore) {
    // if the human score is equal to the computer score
    console.log("You tied!");
  } else if (humanscore > computerscore) {
    // if the human score is greater than computer score
    console.log("You won!");
  } else {
    // if the human score is less than the computer score
    console.log("The computer won!");
  }
}
