import {useState} from "react";

const initBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


export default function GameBoard({symbol, nextTurn}) {
  const [board, setBoard] = useState(initBoard);
  const gameBoard = [...board];

  function onClickBoard(rowIdx, colIdx) {
    gameBoard[rowIdx][colIdx] = symbol;
    setBoard(gameBoard);
    nextTurn();
  }

  return (
    <div id="game-board">
      {gameBoard.map((row, rowIdx) =>
        <ol key={rowIdx}>
          {row.map((col, colIdx) =>
            <button
              key={colIdx}
              onClick={() => onClickBoard(rowIdx, colIdx)}
            >
              {col}
            </button>
          )}
        </ol>
      )}
    </div>
  );
}