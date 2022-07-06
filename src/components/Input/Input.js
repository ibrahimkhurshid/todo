import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const { inputType, styleClass, placeholder, onEnter, nextAvailableKey } =
    props;
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type={inputType}
        className={styleClass}
        placeholder={placeholder}
        value={inputValue}
        data-key={nextAvailableKey}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value === "") {
            } else {
              onEnter(e);
              setInputValue("");
            }
          }
        }}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button className="clear-btn" onClick={() => setInputValue("")}>
        Clear
      </button>
    </div>
  );
}

export default Input;
