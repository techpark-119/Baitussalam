let guess = 0;
let target = Math.floor(Math.random() * 10) + 1;

while (guess !== target) {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  if (guess === target) {
    console.log("You guessed it!");
  } else if (guess > target) {
    console.log("Too high! Guess again.");
  } else {
    console.log("Too low! Guess again.");
  }
}
