import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({ todolist, deleteItem, toggleComplete }) {
  return (
    <div className="space-y-3.5">
      {todolist.map((item) => (
        <TodoItem 
          key={item.id} 
          item={item} 
          deleteItem={deleteItem} 
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoBoard;


