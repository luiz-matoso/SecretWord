import styles from "./GameOverScreen.module.css";

const GameOverScreen = ({ restartGame, score }) => {
  return (
    <div className={styles.gameOverScreen}>
      <h1>Game Over</h1>
      <h2>
        Your pontuation: <span>{score}</span>
      </h2>
      <button onClick={restartGame}>Restart game</button>
    </div>
  );
};

export default GameOverScreen;
