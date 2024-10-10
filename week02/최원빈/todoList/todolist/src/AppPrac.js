import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, todoChange] = useState([]);
  const [inputValue, setInputValue] = useState(' ');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      let copy = [...todo];
      todoChange([copy, inputValue]);
    } else {
      alert('입력을 먼저 하세요 .');
    }
  };
}
return (
  <div className="container">
    <div className="todo-app">
      <h3 className="todo-title">
        MY OWN TODO LIST
        <img className="todo-img" />
      </h3>

      <div className="input-row">
        <input
          type="text"
          id="todo-input"
          placeholder="계획을 추가하세요."
          value={inputValue}
          onChange={(event) => {
            inputValue = event.target.value;
          }}
        />
        <button
          id="todo-button"
          onClick={() => {
            let copy = [...todo];
            copy.push()
          }}
        >
          add
        </button>
      </div>

      <ul id="list-container">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <span
              style={{ cursor: 'pointer', marginLeft: '350px', color: 'red' }}
              onClick={() => handleDelete(index)}
            >
              ❌
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TodoApp;
