import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({ todolist, deleteItem }) {
  return (
    <div>
      {todolist.map((item, index) => (
        <TodoItem key={index} item={item} index={index} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default TodoBoard;

