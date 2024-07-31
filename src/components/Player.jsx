import { useState } from "react";
export default function Player({ iniialname, symbol, isActive, onChangeName }) {
  const [Playername, setPlayername] = useState(iniialname);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, Playername);
    }
  }
  function handleNameChange(event) {
    setPlayername(event.target.value);
  }

  let editablePlayername = <span className="player-name">{Playername}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayername = (
      <input
        type="text"
        required
        value={Playername}
        onChange={handleNameChange}
      />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
