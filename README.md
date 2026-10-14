# Number Guessing Game

A simple command-line number guessing game built with JavaScript and Node.js. Guess the computer's secret number between 1 and 100 before you run out of attempts.

Project page: [Number Guessing Game — roadmap.sh](https://roadmap.sh/projects/number-guessing-game)

## Features

- Random secret number from 1 to 100 for each game
- Three difficulty levels with different attempt limits
- Hints after incorrect guesses (`Too low!` or `Too high!`)
- Victory message showing the number of attempts used
- Game ends when you guess correctly or use all available attempts

## Requirements

- [Node.js](https://nodejs.org/) installed
- A terminal or command prompt

No external npm dependencies are required.

## Getting Started

1. Clone or download this project.
2. Open a terminal in the project directory.
3. Start the game:

   ```bash
   npm start
   ```

   Alternatively, run:

   ```bash
   node index.js
   ```

## How to Play

1. Read the welcome message and game rules.
2. Choose a difficulty by entering `1`, `2`, or `3`.
3. Enter your guess for the secret number (1–100).
4. Use the hints to adjust your next guess.
5. Win by guessing correctly within the attempt limit. Otherwise, the correct number is revealed when your attempts run out.

### Difficulty Levels

| Level | Selection | Maximum Attempts |
| --- | --- | ---: |
| Easy | `1` | 10 |
| Medium | `2` | 5 |
| Hard | `3` | 3 |

## Example Gameplay

```text
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100. You need to guess the correct number.
You will receive hints after each incorrect guess.
The game ends when you guess correctly or run out of attempts.
Please select a difficulty level:
1. Easy (10 attempts)
2. Medium (5 attempts)
3. Hard (3 attempts)
Enter the number corresponding to your choice: 2
You have selected Medium difficulty. You have 5 attempts to guess the number.
Enter your guess: 50
Too low! Try again.
Enter your guess: 75
Too high! Try again.
Enter your guess: 65
Congratulations! You've guessed the number 65 correctly!
It took you 3 attempts to guess the number.
```

The secret number changes randomly each game, so your results will differ.

## Project Structure

```text
number-guessing-game/
├── index.js       # CLI game logic
├── package.json   # Project metadata and npm scripts
└── README.md      # Project documentation
```

## Technologies

- JavaScript (CommonJS)
- Node.js built-in `readline` module

## Notes

The game expects numeric guesses. For reliable handling of letters, blank inputs, or out-of-range numbers, add input validation in `guessNumber()`.
