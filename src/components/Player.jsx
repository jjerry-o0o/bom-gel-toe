import { useState } from "react";

export default function Player() {
    const [ isEditing, setIsEditing ] = useState(false);
    let btnText = isEditing ? 'save' : 'edit';

    function changePlayerName() {
        setIsEditing(!isEditing);

    }

    return (
        <ol id="players">
            <li className="player">
                <p className="player-name">bom</p>
                <p className="player-symbol">O</p>
                <button onClick={changePlayerName}>
                    {btnText}
                </button>
            </li>
            <li className="player">
                <p className="player-name">jel</p>
                <p className="player-symbol">X</p>
                <button onClick={changePlayerName}>
                    {btnText}
                </button>
            </li>
        </ol>
    );
}