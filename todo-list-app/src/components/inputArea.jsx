import { useState } from "react";
import "../App.css";

function Input(props) {
  const [inputText, setInputText] = useState("");

  function getList(event) {
    const textValue = event.target.value;
    setInputText(textValue);
  }
  return (
    <>
      <div className="form">
        <input
          type="text"
          name="list"
          onChange={getList}
          placeholder="Enter List Value"
          value={inputText}
        />
        <button
          onClick={() => {
            props.onClickFunction(inputText);
            setInputText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
      ;
    </>
  );
}

export default Input;
