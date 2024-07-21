import { useState } from "react";
import "../App.css";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function headingText(){
    setHeading("Submitted");
  }
  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <>
      <div className="container">
        <h1>{heading}</h1>
        <input type="text" placeholder="What's your name?" />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          onClick={headingText}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
