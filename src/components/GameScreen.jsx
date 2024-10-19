import styles from "./GameScreen.module.css";

const GameScreen = ({ processInput }) => {
  return (
    <div className={styles.gameScreen}>
      <h1>Game</h1>
      <button onClick={processInput}>Leave game</button>
    </div>
  );
};

export default GameScreen;
