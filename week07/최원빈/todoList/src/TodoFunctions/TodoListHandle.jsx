/* eslint-disable */
import '../index.css';
import React from 'react';

function TodoListHandle(props) {
  const { todo, toggleCheck, deleteTodo, editTodo } = props;

  return (
    <ul id="list-container" className="list-none p-0">
      {todo.map((item, index) => (
        <li
          key={index}
          className="flex justify-between w-full items-center pb-8 cursor-pointer relative "
        >
          <div
            className={`${
              item.isComplete
                ? 'isComplete line-through text-red-600'
                : 'isNotComplete'
            }`}
            onClick={() => toggleCheck(index)}
          >
            <span className="p-10 hover:text-purple-800">{item.content}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className=" cursor-pointer text-red-500"
              onClick={() => editTodo(index)}
            >
              📘
            </span>
            <span></span>
            <span
              className="cursor-pointer text-red-500"
              onClick={() => deleteTodo(index)}
            >
              ❌
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoListHandle;
