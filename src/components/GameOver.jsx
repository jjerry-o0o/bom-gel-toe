export default function GameOver({winner, onClickBtn}) {

  return (
    <div id='game-over'>
      <h2>Game Over</h2>
      <p>'{winner}' You Win~!</p>
      <button onClick={onClickBtn}>Reset</button>
    </div>
  );
}