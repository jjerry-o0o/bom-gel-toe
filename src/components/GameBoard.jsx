import {useState} from "react";
import {WINNING_COMBINATIONS} from "../winning-combinations.js";

const initBoard = Array.from({length: 3}, (row, rowIdx) =>
  Array.from({length: 3}, (col, colIdx) => ({
    row: rowIdx,
    column: colIdx
  }))
);

export default function GameBoard({symbol, nextTurn}) {
  const [board, setBoard] = useState(initBoard);
  const gameBoard = [...board];

  function onClickBoard(rowIdx, colIdx) {
    gameBoard[rowIdx][colIdx] = symbol;
    // gameBoard.filter(symbolMatch);
    setBoard(gameBoard);
    nextTurn();
  }

  let testBoard = [].concat(...gameBoard);

  // let gameResult = testBoard.filter(x => );

  // console.log(testBoard);
  // console.log(...gameBoard);
// symbolMatch();

  // function symbolMatch() {
  //
  //   WINNING_COMBINATIONS.forEach((item) => {
  //     function isEqual(obj1, obj2) {
  //       return JSON.stringify(obj1) === JSON.stringify(obj2);
  //     }
  //
  //     let result = testBoard.filter(t => item.some(i => isEqual(t, i)));
  //
  //     console.log('result : '+result);
  //   })
  //
  //   // board.filter(function(item) {
  //   //   return item.symbol != null &&
  //   // })
  // }

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