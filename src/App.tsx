import { useState } from "react";
import "./App.scss";
import TwoTeamGuessing from "./pages/two-team-guessing/two-team-guessing";
import { FlippableGridData } from "./types/grid-item";
import { Games } from "./data/FlippableGridData";

function App() {
  const [selectedGame, setSelectedGame] = useState<
    FlippableGridData | undefined
  >(undefined);

  const handleGameSelect = (game: FlippableGridData) => {
    setSelectedGame(game);
  };

  return (
    <div className="App">
      <div className="App-body">
        {!selectedGame && (
          <>
          <div className="grid-game-title">Select a game</div>
          <div className="grid-game-row">
            {Games.map((game) => (
              <div className="grid-game" key={game.id} onClick={() => handleGameSelect(game)}>
                {game.title}
              </div>
            ))}
          </div>
          </>
        )}
        {selectedGame && <TwoTeamGuessing gridData={selectedGame} />}
      </div>
    </div>
  );
}

export default App;
