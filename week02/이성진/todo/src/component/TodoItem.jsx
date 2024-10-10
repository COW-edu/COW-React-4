import React from "react";

function TodoItem({ item, index, deleteItem }) {
  return (
    <div className="todo-item">
      <div className="todo-text">
        {item}
      </div>
      <button className="deleteBtn" onClick={() => deleteItem(index)}>
        X
      </button>
    </div>
  );
}

export default TodoItem;
