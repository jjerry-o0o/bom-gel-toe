import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

// import react from "@vitejs/plugin-react";

function App() {
  const playerInfo = [
    {initPlayerName: 'bom', symbol: 'O'},
    {initPlayerName: 'jel', symbol: 'X'}
  ];

  const [sequence, setSequence] = useState(playerInfo[0].symbol);

  function onSetSequence() {
    if(sequence === 'O') {
      setSequence(playerInfo[1].symbol);
    }else {
      setSequence(playerInfo[0].symbol);
    }
  }

  return (
    <main>
      <div id="game-container">
        <ul id="players" className="highlight-player">
          {playerInfo.map((player, Idx) =>
            <Player
              initPlayerName={player.initPlayerName}
              symbol={player.symbol}
              sequence={sequence}
              key={Idx}
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
