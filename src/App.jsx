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

  const [sequence, setSequence] = useState(player[0][0].symbol);

  function onSetSequence(rowIdx, colIdx) {
    console.log(rowIdx + ' : ' + colIdx);
    console.log('symbol : '+sequence);

    if(sequence === 'O') {
      setSequence('X');
    }else {
      setSequence('O');
    }
  }

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
          symbol={sequence}
          nextTurn={onSetSequence}
        />

        <Log/>
      </div>
    </main>
  )
}

export default App
