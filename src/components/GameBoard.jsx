import {useState} from "react";

export default function GameBoard({symbol, nextTurn}) {
  const initBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  const [board, setBoard] = useState(initBoard);
  const gameBoard = [...initBoard];

  function onClickBoard(rowIdx, colIdx) {
    console.log(rowIdx+' : '+colIdx);
    nextTurn = ({sequence}) => {
      console.log(sequence);
    }
  }

  return (
    <div id="game-board">
      {board.map((row, rowIdx) =>
        <ol key={rowIdx}>
          {row.map((col, colIdx) =>
            <button
              key={colIdx}
              onClick={() => onClickBoard(rowIdx, colIdx)}
              value={col}
            ></button>
          )}
        </ol>
      )}
    </div>
  );
}