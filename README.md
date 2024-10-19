# SecretWord 🎮

This is a word guessing game built with React. The goal of the game is to guess a word in Portuguese based on given category hints, within a limited number of attempts.

## 📚 Project Purpose

This project was created to practice basic React and JavaScript skills.

## 📸 Screenshots

### Initial Screen

![Initial Screen](https://i.ibb.co/FxhbsVJ/initial-Screen.png)

### Game Screen

![Game Screen](https://i.ibb.co/6rgd1YT/game-Screen.png)

### Game Over Screen

![Game Over Screen](https://i.ibb.co/HD65DgY/game-Over-Screen.png)

## 🚀 Features

- Random word selection with category hints.
- Wrong attempt counter.
- Win or lose message.
- Option to restart the game after losing.

## 🛠️ Technologies Used

- **React**: Framework for building user interfaces.
- **CSS Modules**: For component styling.
- **React Hooks**: `useState`, `useEffect`, and `useCallback` for state management and component lifecycle.

## 📝 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/luiz-matoso/SecretWord
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm start
   ```
4. Open in your browser:
   ```bash
   http://localhost:3000
   ```

## 🎯 Main Gameplay

The player receives a category hint, and the goal is to guess the corresponding word within 3 attempts. Each wrong letter is recorded, and the score is based on the player's performance.

## 📈 Scoring

- Correct Guess: +100 points per correctly guessed word.
- Wrong Guess: -1 attempt.
