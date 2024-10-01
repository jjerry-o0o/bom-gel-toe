import {useState} from "react";

export default function Player({initPlayerName, symbol, sequence}) {
  const [isEditing, setIsEditing] = useState({status: false, playerName: initPlayerName});

  const btnText = isEditing.status ? 'save' : 'edit';
  const activePlayer = symbol === sequence ? 'player active' : 'player';

  function onClickEditBtn() {
    console.log(isEditing.playerName);
    setIsEditing({status: !isEditing.status, playerName: initPlayerName});
  }

  function onChangePlayerName() {
    initPlayerName = event.target.value;

  }

  return (
    <li className={activePlayer}>
      {isEditing.status ? (
        <input type="text" placeholder={isEditing.playerName} onChange={onChangePlayerName}/>
        // <input type="text" placeholder="" onChange={onChangePlayerName}/>
      ) : (
        <p className="player-name">{isEditing.playerName}</p>
      )}
      <p className="player-symbol">{symbol}</p>
      <button onClick={onClickEditBtn}>
        {btnText}
      </button>
    </li>
  );
}