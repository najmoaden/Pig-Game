# Pig Game 🎲

This project is a two-player dice game built using **JavaScript**, **HTML**, and **CSS**. The goal is to be the first player to reach 100 points by rolling the dice and holding your score. Beware of rolling a 1, as it resets your current score and switches the turn to the other player!

## Features

- **Dice Rolling**: Players can roll a dice to accumulate points in their current score.
- **Score Holding**: Players can hold their current score to add it to their total score and pass the turn.
- **Player Switching**: Rolling a 1 automatically resets the current score and switches the turn to the other player.
- **Winning Condition**: The first player to reach 100 points wins the game.
- **Game Reset**: A reset button (`New Game`) allows players to restart the game with all values reset to their initial state.
- **Dynamic Styling**: Visual indicators for the active player and the winner.

## What Has Been Covered

### 1. **DOM Manipulation**

- Selecting and manipulating DOM elements using `document.querySelector` and `document.getElementById`.
- Updating text content and styles dynamically.

### 2. **Event Handling**

- Adding click event listeners to buttons (`Roll Dice`, `Hold`, and `New Game`).
- Handling user interactions and updating the game state accordingly.

### 3. **Game Logic**

- Generating random dice rolls using `Math.random()` and `Math.trunc()`.
- Implementing conditions for switching players, holding scores, and determining the winner.

### 4. **Functions**

- Creating reusable functions like `init` (to initialize the game) and `switchPlayer` (to handle player switching).

### 5. **CSS Manipulation**

- Dynamically changing styles such as hiding the dice and toggling active player indicators.

### 6. **State Management**

- Managing game state variables like `scores`, `currentScore`, `activePlayer`, and `playing`.

## How to Play

1. Open the game in a browser.
2. Player 1 starts the game.
3. **Roll the Dice**: Click the "Roll Dice" button to roll a dice. The number rolled will be added to your current score unless you roll a 1.
4. **Hold Your Score**: Click the "Hold" button to add your current score to your total score and pass the turn to the other player.
5. **Win the Game**: The first player to reach 100 points wins the game!
6. To restart the game, click the "New Game" button to reset all values and start a new round.

## Technologies Used

- **JavaScript**: Core game logic and DOM manipulation.
- **HTML**: Structure of the game interface.
- **CSS**: Styling for the game interface.

## How to Run the Code

1. Clone the repository or download the project files.
2. Open the `index.html` file in a browser.
3. Play the game!

## Future Improvements

- Add a settings menu to allow players to set a custom winning score.
- Include animations for dice rolls and player switches.
- Add sound effects for rolling the dice, holding the score, and winning the game.
- Make the game responsive for better playability on mobile devices.
- Implement a single-player mode with AI.

## Live Preview

Check out the live version of the game here: [Pig Game Live](https://pig-game-swart.vercel.app/)

Enjoy the game!
