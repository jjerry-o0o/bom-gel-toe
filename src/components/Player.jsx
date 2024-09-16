import {useState} from "react";

export default function Player({initPlayerName, symbol, sequence}) {
  const [isEditing, setIsEditing] = useState({ status: false,
                                                         playerName: initPlayerName });

  const btnText = isEditing.status ? 'save' : 'edit';
  const activePlayer = symbol === sequence ? 'player active' : 'player';

  let changePlayerName = '';

  function onClickEditBtn() {
    setIsEditing({status: !isEditing.status, playerName: changePlayerName});
  }

  function onChangePlayerName() {
    changePlayerName = event.target.value;
  }

  return (
    <li className={activePlayer}>
      {isEditing ? (
        <input type="text" placeholder={initPlayerName} onChange={onChangePlayerName}/>
      ) : (
        <p className="player-name">{initPlayerName}</p>
      )}
      <p className="player-symbol">{symbol}</p>
      <button onClick={onClickEditBtn}>
        {btnText}
      </button>
    </li>
  );
}