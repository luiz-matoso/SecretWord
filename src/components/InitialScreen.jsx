import styles from "./InitialScreen.module.css";

const InitialScreen = () => {
  return (
    <div className={styles.initialScreen}>
      <div>
        <h2>Secret</h2>
        <h1>Word</h1>
        <p>Click in the button "Play" to start playing.</p>
      </div>
      <button>Play</button>
    </div>
  );
};

export default InitialScreen;
