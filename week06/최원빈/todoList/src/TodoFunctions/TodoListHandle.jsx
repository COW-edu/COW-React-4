/* eslint-disable */
import '../index.css';
import React from 'react';

function TodoListHandle(props) {
  const { todo, toggleCheck, deleteTodo } = props;

  return (
    <ul id="list-container" className="list-none p-0">
      {todo.map((item, index) => (
        <li
          key={index}
          className="flex justify-between w-full items-center pb-8 cursor-pointer "
        >
          <div
            className={`${
              item.checked ? 'checked text-red-500 line-through' : ''
            }`}
            onClick={() => toggleCheck(index)}
          >
            {item.text}
          </div>
          <span
            className="cursor-pointer text-red-500"
            onClick={() => deleteTodo(index)}
          >
            ❌
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoListHandle;
