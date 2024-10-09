import React from "react";
import TodoItem from "./Todoitem";

function TodoBoard({ todolist }) {
  console.log("todoBoard", todolist);
  return (
    <div>
      {todolist.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}

export default TodoBoard;
