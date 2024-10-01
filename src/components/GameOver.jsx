export default function GameOver({onClickBtn}) {

  return (
    <div id='game-over'>
      <h2>Game Over</h2>
      <p>You Win~!</p>
      <button onClick={onClickBtn}>Reset</button>
    </div>
  );
}