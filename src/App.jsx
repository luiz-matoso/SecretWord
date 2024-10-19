// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// Data
import { wordsList } from "./data/words";

// Components
import InitialScreen from "./components/InitialScreen";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "gameover" },
];

const guessesQtd = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetter] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // Random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // Start game
  const startGame = () => {
    // Pick word & Pick Category
    const { word, category } = pickWordAndCategory();

    // Letters array

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    // Set Stages
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // Process input
  const processInput = (letter) => {
    const normalizeLetter = letter.toLowerCase();

    // Check if the letter already used

    if (
      guessedLetters.includes(normalizeLetter) ||
      wrongLetters.includes(normalizeLetter)
    ) {
      return;
    }

    // Push guessed letter or remove attemps

    if (letters.includes(normalizeLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter,
      ]);
    } else {
      setWrongLetter((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizeLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }

    console.log(guessedLetters);
    console.log(wrongLetters);
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetter([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      // Reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Restart game
  const restartGame = () => {
    setScore(0);
    setGuesses(3);

    setGameStage(stages[1].name);
  };

  return (
    <>
      {gameStage === "start" && <InitialScreen startGame={startGame} />}
      {gameStage === "game" && (
        <GameScreen
          processInput={processInput}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "gameover" && (
        <GameOverScreen restartGame={restartGame} score={score} />
      )}
    </>
  );
}

export default App;
