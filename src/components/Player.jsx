import {useState} from "react";

export default function Player({initPlayerName, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initPlayerName);

  const btnText = isEditing ? 'save' : 'edit';

  function onClickEditBtn() {
    setIsEditing(!isEditing);
  }

  function onChangePlayerName() {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  return (
    <li className="player">
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