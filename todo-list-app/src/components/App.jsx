import { useState } from "react";
import Heading from "./heading";
import Input from "./inputArea";
import List from "./todoList";
import "../App.css";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputItems) {
    setItems((previousItems) => {
      return [...previousItems, inputItems];
    });
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
        <Input onClickFunction={addItem} />
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
