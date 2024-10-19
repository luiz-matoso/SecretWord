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

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // Start game
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // Process input
  const processInput = () => {
    setGameStage(stages[2].name);
  };

  // Restart game
  const restartGame = () => {
    setGameStage(stages[1].name);
  };

  console.log(words);

  return (
    <>
      {gameStage === "start" && <InitialScreen startGame={startGame} />}
      {gameStage === "game" && <GameScreen processInput={processInput} />}
      {gameStage === "gameover" && <GameOverScreen restartGame={restartGame} />}
    </>
  );
}

export default App;
