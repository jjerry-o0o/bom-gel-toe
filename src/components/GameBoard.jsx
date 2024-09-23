export default function GameBoard({board, onClickBoard}) {

  return (
    <div id="game-board">
      {board.map((row, rowIdx) =>
        <ol key={rowIdx}>
          {row.map((playerSymbol, colIdx) =>
            <button
              key={colIdx}
              onClick={() => onClickBoard(rowIdx, colIdx)}
            >
              {playerSymbol}
            </button>
          )}
        </ol>
      )}
    </div>
  );
}