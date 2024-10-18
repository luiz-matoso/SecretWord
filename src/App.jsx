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

  console.log(words);

  return (
    <>
      {gameStage === "start" && <InitialScreen />}
      {gameStage === "game" && <GameScreen />}
      {gameStage === "gameover" && <GameOverScreen />}
    </>
  );
}

export default App;
