import React, { useState } from "react";
import ReturnText from "./ReturnText";
import '../App.css'

const TodoList = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [shadow, setBoxshadow] = useState("0rem 0rem 1rem 0rem #bdbdbd")

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const chageItem = (e) => {
    setInputList(e.target.value);
  };

  const deleteItems = (id) =>{
        console.log("deleted")
        setItems((oldItems)=>{
          return oldItems.filter((arrElem, index)=>{
            return index !== id;
          })
        })
  }
  const Onmousedown = () =>{
    setBoxshadow("inset 0rem 0rem 1rem 0rem #bdbdbd")
  }
  const Onmouseup = () =>{
    setBoxshadow("0rem 0rem 1rem 0rem #bdbdbd")
  }

  return (
    <div className="out-con">
      <div className="inn-con">
        <h1>ToDo List</h1>
        <input
          type="text"
          placeholder="Enter Your ItemName"
          value={inputList}
          onChange={chageItem}
        />
        <button onClick={listOfItems} onMouseDown={Onmousedown} onMouseUp={Onmouseup} style={{boxShadow: shadow}}>Add Item</button>
        <ol>
          {
            // eslint-disable-next-line array-callback-return
            items.map((curEle, index) => {
              return <ReturnText curEle={curEle} key={index} id={index} onSelect={deleteItems} Onmousedown={Onmousedown} Onmouseup={Onmouseup} shadow={shadow} />;
            })
          }
        </ol>
      </div>
    </div>
  );
};

export default TodoList;

