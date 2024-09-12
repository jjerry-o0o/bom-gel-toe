import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
// import react from "@vitejs/plugin-react";

function App() {
  const player = [
    [{initPlayerName: 'bom', symbol: 'O'}],
    [{initPlayerName: 'jel', symbol: 'X'}]
  ];

  const [sequence, setSequence] = useState(player[0][0]);

  return (
    <main>
      <div id="game-container">
        <ul id="players" className="highlight-player">
          {player.map((playerInfo, idx) =>
            <Player
              key={idx}
              initPlayerName={playerInfo[0].initPlayerName}
              symbol={playerInfo[0].symbol}
            />
          )}
        </ul>

        <GameBoard
          symbol={sequence.symbol}
          nextTurn={() => nextTurn(sequence)}
        />

        <Log/>
      </div>
    </main>
  )
}

export default App
