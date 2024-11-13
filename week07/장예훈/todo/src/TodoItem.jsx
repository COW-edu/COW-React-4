import React from "react";

function TodoItem ({ todoItem, deleteTodo, toggleComplete }) {
    
  return (
      <li className='border-blue-300 border-2 flex justify-between items-center rounded-lg p-4'>
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={() => toggleComplete(todoItem.id)}
          className="mr-2"/>
        <span className={todoItem.completed ? "line-through" : ""}>
          {todoItem.content}
        </span>
        <button 
          className='bg-red-400 px-2 py-1 rounded-lg text-white' 
          onClick={() => deleteTodo(todoItem.id)}>
            삭제
        </button>
      </li>
  );
}

export default TodoItem;

