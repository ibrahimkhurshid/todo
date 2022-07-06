import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import List from "../List/List";
import "./Todo.css";

function Todo(props) {
  const { appName, styleClass } = props;
  const [items, setItems] = useState([]);
  const [nextKey, setNextKey] = useState(0);

  const addItem = (e) => {
    const newItem = {
      key: e.target.getAttribute("data-key"),
      value: e.target.value,
    };
    setItems([...items, newItem]);
    localStorage.setItem(newItem.key, newItem.value);
    localStorage.setItem("objLength", items.length + 1);
    setNextKey(items.length + 1);
  };

  const removeItem = (id) => {
    console.log(`removing ${id}:${localStorage.getItem(id)}`);
    localStorage.removeItem(id);
    localStorage.setItem("objLength", items.length - 1);
    items.splice(id, 1);
    setItems([...items]);
    console.log(items);
    if (items[nextKey] !== null) {
      setNextKey(items.length + 1);
    } else {
      setNextKey(items.length);
    }
  };

  useEffect(() => {
    const localStorageCount =
      localStorage.getItem("objLength") === null
        ? 0
        : localStorage.getItem("objLength");

    const itemsL = [];
    for (let i = 0; i < localStorageCount; i++) {
      itemsL.push({ key: i, value: localStorage.getItem(i) });
      setItems([...itemsL]);
    }
    setNextKey(itemsL.length);
  }, []);

  useEffect(() => {
    const localStorageCount =
      localStorage.getItem("objLength") === null
        ? 0
        : localStorage.getItem("objLength");
    document.title = localStorageCount !== null ? localStorageCount : 0;
    console.log(`ItemsCount: ${items.length}`);
    console.log(`LocalStorageCount: ${localStorageCount}`);
    console.log(`next key: ${nextKey}`);
  }, [items.length]);

  return (
    <div className={styleClass}>
      <h1 className="app-header">{appName}</h1>

      <Input
        inputType="text"
        styleClass="todo-input"
        placeholder="Add task"
        onEnter={addItem}
        nextAvailableKey={nextKey}
      />

      <List
        itemsArray={items}
        removeHandle={removeItem}
        styleClass="item-list-table"
      />
    </div>
  );
}

export default Todo;
