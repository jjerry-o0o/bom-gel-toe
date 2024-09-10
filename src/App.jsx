import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
  

  return (
      <main>
          <div id="game-container">
            <Player />

            <GameBoard />

            <Log />
          </div>
      </main>
  )
}

export default App
