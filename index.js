const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const welcomeMessage = () => {
    const message = "Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100. You need to guess the correct number.\nYou will receive hints after each incorrect guess.\nThe game ends when you guess correctly or run out of attempts.";
    console.log(message);
}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}


const guessNumber = (randomNumber, attempt, maxAttempts) => {
    if (attempt >= maxAttempts) {
        console.log(`Sorry, you've used all your attempts. The correct number was ${randomNumber}.`);
        rl.close();
    } else {
        rl.question('Enter your guess: ', (input) => {
            const guess = Number(input);

            if (
                input.trim() === '' ||
                !Number.isInteger(guess) ||
                guess < 1 ||
                guess > 100
            ) {
                console.log("Invalid input. Please enter a number between 1 and 100.");
                guessNumber(randomNumber, attempt, maxAttempts);
                return;
            }

            if (guess === randomNumber) {
                console.log(`Congratulations! You've guessed the number ${randomNumber} correctly!`);
                console.log(`It took you ${attempt + 1} attempts to guess the number.`);
                rl.close();
            } else if (guess < randomNumber) {
                console.log("Too low! Try again.");
                attempt++;
                guessNumber(randomNumber, attempt, maxAttempts);
            } else if (guess > randomNumber) {
                console.log("Too high! Try again.");
                attempt++;
                guessNumber(randomNumber, attempt, maxAttempts);
            }
        });
    }
};


const easy = () => {
    console.log("You have selected Easy difficulty. You have 10 attempts to guess the number.");
    const randomNumber = generateRandomNumber();

    let attempt = 0;
    const maxAttempts = 10;

    guessNumber(randomNumber, attempt, maxAttempts);

}

const medium = () => {
    console.log("You have selected Medium difficulty. You have 5 attempts to guess the number.");
    const randomNumber = generateRandomNumber();

    let attempt = 0;
    const maxAttempts = 5;

    guessNumber(randomNumber, attempt, maxAttempts);
}

const hard = () => {
    console.log("You have selected Hard difficulty. You have 3 attempts to guess the number.");
    const randomNumber = generateRandomNumber();

    let attempt = 0;
    const maxAttempts = 3;

    guessNumber(randomNumber, attempt, maxAttempts);
}

const selectDifficulty = () => {
    const difficultyMessage = "Please select a difficulty level:\n1. Easy (10 attempts)\n2. Medium (5 attempts)\n3. Hard (3 attempts)";
    console.log(difficultyMessage);

    rl.question('Enter the number corresponding to your choice: ', (answer) => {

        switch (answer) {
            case '1':
                easy();
                break;
            case '2':
                medium();
                break;
            case '3':
                hard();
                break;
            default:
                console.log("Invalid choice. Please select a valid difficulty level.");
                selectDifficulty();
                return;
        }
    });
}

welcomeMessage();
selectDifficulty();
