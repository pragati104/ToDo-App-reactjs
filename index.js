import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ToDoLists from "./todo";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (e) => {
    setinputList(e.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            value={inputList}
            onChange={itemEvents}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
