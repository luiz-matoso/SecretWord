import { useState, useRef } from "react";
import styles from "./GameScreen.module.css";

const GameScreen = ({
  processInput,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetters] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    processInput(letter);

    setLetters("");

    letterInputRef.current.focus();
  };

  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuation: {score}</span>
      </p>
      <h1>Do you know the word?</h1>
      <h3 className={styles.tip}>
        Word tip: <span>{pickedCategory}</span>
      </h3>
      <p>You stiil have {guesses} attemps</p>
      <div className={styles.word_container}>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={i} className={styles.blank_square}></span>
          )
        )}
      </div>
      <div className={styles.letter_container}>
        <p>Guess the word letter: </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetters(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Guess</button>
        </form>
      </div>
      <div className={styles.wrong_letter_container}>
        <p>Used letters:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;
