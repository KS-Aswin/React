import { useState } from "react";
import "../App.css";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function updateChange(event) {
    const { value, name } = event.target;

    setFullName((previousValue) => {
      if (name === "fName") {
        return { fName: value, lName: previousValue.lName };
      } else if (name === "lName") {
        return { lName: value, fName: previousValue.fName };
      }
    });
  }

  return (
    <>
      <div className="container">
        <h1>
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <form>
          <input
            name="fName"
            onChange={updateChange}
            placeholder="First Name"
            value={fullName.fName}
          />
          <input
            name="lName"
            onChange={updateChange}
            placeholder="Last Name"
            value={fullName.lName}
          />
          <button
            onClick={() => {
              props.onClickFunction(inputText);
              setInputText("");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
