import {useState} from "react";

export default function Player({initPlayerName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initPlayerName)
  const [isEditing, setIsEditing] = useState(false);

  const btnText = isEditing ? 'save' : 'edit';
  const activePlayer = isActive ? 'player active' : 'player';

  function onClickEditBtn() {
    setIsEditing(!isEditing);
  }

  function onChangePlayerName() {
    setPlayerName(event.target.value);

  }

  return (
    <li className={activePlayer}>
      {isEditing ? (
        <input type="text" placeholder={playerName} onChange={onChangePlayerName}/>
      ) : (
        <p className="player-name">{playerName}</p>
      )}
      <p className="player-symbol">{symbol}</p>
      <button onClick={onClickEditBtn}>
        {btnText}
      </button>
    </li>
  );
}