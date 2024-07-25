import { useState } from "react";
import "../App.css";

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function setIndexValue(rowIndex, numberIndex, value) {
    const newGrid = [...grid];
    newGrid[rowIndex][numberIndex] = value;
    setGrid(newGrid);
  }
  return (
    <>
      <div className="App">
        <div className="grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((number, numberIndex) => (
                <div key={numberIndex} className="cell">
                  <input
                    type="text"
                    value={number}
                    onChange={(e) => {
                      setIndexValue(
                        rowIndex,
                        numberIndex,
                        parseInt(e.target.value)||0
                      );
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
