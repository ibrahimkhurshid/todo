import React from "react";
import "./List.css";
function List(props) {
  const { itemsArray, removeHandle, styleClass } = props;
  return (
    <div className="list-container">
      <ul>
        {itemsArray.map((item) => {
          return <li>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
