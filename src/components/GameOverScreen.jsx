import styles from "./GameOverScreen.module.css";

const GameOverScreen = ({ restartGame }) => {
  return (
    <div className={styles.gameOverScreen}>
      <h1>Game Over</h1>
      <button onClick={restartGame}>Restart game</button>
    </div>
  );
};

export default GameOverScreen;
