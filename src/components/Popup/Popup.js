import React from "react";
import "./Popup.css"
function Popup(props) {
    const closePopup = props.closePopup
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{props.text}</h1>
        <button onClick={closePopup}>Close me</button>
      </div>
    </div>
  );
}

export default Popup;
