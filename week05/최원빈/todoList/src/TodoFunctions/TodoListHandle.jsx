/* eslint-disable */
import React from 'react';
import '../App.css';

function TodoListHandle(props) {
  const { todo, toggleCheck, deleteTodo } = props;

  return (
    <ul id="list-container">
      {todo.map((item, index) => (
        <li
          key={index}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            className={item.checked ? 'checked' : ''}
            onClick={() => toggleCheck(index)}
          >
            {item.text}
          </div>
          <span
            style={{ cursor: 'pointer', color: 'red' }}
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
