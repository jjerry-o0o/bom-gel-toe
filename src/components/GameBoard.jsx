import {useState} from "react";

const initBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const gameBoard = [...initBoard];

export default function GameBoard({symbol, nextTurn}) {
  const [board, setBoard] = useState(initBoard);

  function onClickBoard(rowIdx, colIdx) {
    console.log('하위 : '+rowIdx+' : '+colIdx);
    nextTurn(rowIdx, colIdx);
    gameBoard[rowIdx][colIdx] = symbol;
    console.log(gameBoard);
    setBoard(gameBoard)
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