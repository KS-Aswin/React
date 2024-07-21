import { useState } from "react";
import "../App.css";

function App() {
  const [name, setName] = useState("");
  const [headingName, setHeadingName] = useState("");

  function onChangeInput(event) {
    setName(event.target.value);
  }

  function getName() {
    setHeadingName(name)
  }
  return (
    <>
      <div className="container">
        <h1>Welcome {headingName}</h1>
        <input
          onChange={onChangeInput}
          type="text"
          value={name}
          placeholder="What's your name?"
        />
        <button onClick={getName}>Submit</button>
      </div>
    </>
  );
}

export default App;
