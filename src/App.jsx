import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameOver from "./components/GameOver.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

const initBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const playerInfo = [
  {initPlayerName: 'bom', symbol: 'O'},
  {initPlayerName: 'jel', symbol: 'X'}
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const board = deriveGameBoard(gameTurns);
  const activePlayer = derivePlayer(gameTurns);
  const winner = deriveWinner(board);

  function deriveGameBoard(gameTurns) {
    let setBoard = [...initBoard.map(array => [...array])];

    for (const turns of gameTurns) {
      const {box, symbol} = turns;
      const {row, col} = box;

      setBoard[row][col] = symbol;
    }
    return setBoard;
  }

  function derivePlayer(gameTurns) {
    let currentPlayer = 'O';
    if (gameTurns.length > 0 && gameTurns[0].symbol === 'O') {
      currentPlayer = 'X';
    }

    return currentPlayer;
  }

  function deriveWinner(board) {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
      const firstSymbol = board[combination[0].row][combination[0].column];
      const secondSymbol = board[combination[1].row][combination[1].column];
      const thirdSymbol = board[combination[2].row][combination[2].column];

      if (firstSymbol
        && firstSymbol === secondSymbol
        && firstSymbol === thirdSymbol
      ) {
        winner = firstSymbol;
      }
    }

    return winner;
  }

  function onClickBoard(rowIdx, colIdx) {
    setGameTurns((prevTurn) => {
      return [
        {box: {row: rowIdx, col: colIdx}, symbol: activePlayer},
        ...prevTurn,
      ];
    });
  }

  function onClickReset() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        {winner && <GameOver onClickBtn={onClickReset}/>}
        <ul id="players" className="highlight-player">
          {playerInfo.map((player, Idx) =>
            <Player
              initPlayerName={player.initPlayerName}
              symbol={player.symbol}
              key={Idx}
            />
          )}
        </ul>

        <GameBoard
          board={board}
          onClickBoard={onClickBoard}
        />

        <Log/>
      </div>
    </main>
  )
}

export default App
