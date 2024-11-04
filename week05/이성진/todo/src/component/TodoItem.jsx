import React from "react";

function TodoItem({ item, deleteItem }) {
  return (
    <div className="todo-item">
      <div className="todo-text">
        {item.text}
      </div>
      <button className="deleteBtn" onClick={() => deleteItem(item.id)}>
        X
      </button>
    </div>
  );
}

export default TodoItem;

