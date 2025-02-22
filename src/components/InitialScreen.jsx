import styles from "./InitialScreen.module.css";

const InitialScreen = ({ startGame }) => {
  return (
    <div className={styles.initialScreen}>
      <div>
        <h2>Secret</h2>
        <h1>Word</h1>
        <p>Click in the button "Play" to start playing.</p>
      </div>
      <button onClick={startGame}>Play</button>
    </div>
  );
};

export default InitialScreen;
