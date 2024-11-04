import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({ todolist, deleteItem }) {
  return (
    <div>
      {todolist.map((item) => (
        <TodoItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default TodoBoard;


