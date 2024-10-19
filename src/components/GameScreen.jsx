import styles from "./GameScreen.module.css";

const GameScreen = ({ processInput }) => {
  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuation: 000</span>
      </p>
      <h1>Do you know the word?</h1>
      <h3 className={styles.tip}>
        Word tip: <span>Tip......</span>
      </h3>
      <p>You stiil have XXX attemps</p>
      <div className={styles.word_container}>
        <span className={styles.letter}>A</span>
        <span className={styles.blank_square}></span>
      </div>
      <div className={styles.letter_container}>
        <p>Guess the word letter: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Guess</button>
        </form>
      </div>
      <div className={styles.wrong_letter_container}>
        <p>Used letters:</p>
        <span>a, </span>
        <span>b, </span>
        <span>c, </span>
      </div>
    </div>
  );
};

export default GameScreen;
