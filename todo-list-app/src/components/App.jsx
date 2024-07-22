import { useState } from "react";
import Heading from "./heading";
import List from "./todoList";
import "../App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function getList(event) {
    const textValue = event.target.value;
    setInputText(textValue);
  }

  function addItem() {
    setItems((previousItems) => {
      return [...previousItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((previousItems) => {
      return previousItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function clearItems() {
    setItems([]);
    setInputText("");
  }
  return (
    <>
      <div className="container">
        <Heading />
        <div className="form">
          <input
            type="text"
            name="list"
            onChange={getList}
            placeholder="Enter List Value"
            value={inputText}
          />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div className="lists">
          <ul>
            {items.map((todoItem, index) => (
              <List
                key={index}
                id={index}
                listItems={todoItem}
                isClicked={deleteItem}
              />
            ))}
          </ul>
        </div>

        <button onClick={clearItems}>
          <span>Clear</span>
        </button>
      </div>
    </>
  );
}

export default App;
