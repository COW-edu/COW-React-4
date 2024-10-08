import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  //인풋값은 기본적으로 비운다.
  const [inputValue, setInputValue] = useState('');

  // 할일 추가 함수 구현
  const addTodo = () => {
    if (inputValue === '') {
      alert('계획을 입력하세요.');
    } else {
      setTodos([...todos, { text: inputValue, checked: false }]);
      setInputValue('');
    }
  };

  // input 입력값 관리
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (index) => {
    const tmpTodos = [...todos];
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

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
            onChange={handleInputChange}
          />
          <button id="todo-button" onClick={addTodo}>
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
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
