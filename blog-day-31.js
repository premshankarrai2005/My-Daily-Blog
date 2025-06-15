//  📝 Day 31: Write a javascript program that build number guessing Game ?

// Solution:-

// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

while (true) {
    guess = prompt("Guess a number between 1 and 100:");
    guess = Number(guess);
    attempts++;

    if (isNaN(guess)) {
        alert("That's not a valid number. Try again!");
        continue;
    }

    if (guess < secretNumber) {
        alert("Too low! Try a higher number.");
    } else if (guess > secretNumber) {
        alert("Too high! Try a lower number.");
    } else {
        alert(`🎉 Congratulations! You guessed it right in ${attempts} attempts.`);
        break;
    }
}

