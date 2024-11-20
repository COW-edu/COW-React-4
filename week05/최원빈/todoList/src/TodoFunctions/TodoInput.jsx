/* eslint-disable */
import React, { useState, useRef } from 'react';
import '../App.css'; // 필요 시 CSS 불러오기

function TodoInput(props) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const addTodo = props.addTodo;
  const handleAdd = () => {
    if (inputValue.trim() === '') {
      alert('empty input!');
      return;
    }
    addTodo(inputValue);
    setInputValue('');
    inputRef.current.focus(); // 입력 완료 후 포커스
  };

  return (
    <div className="input-row">
      <input
        type="text"
        ref={inputRef}
        id="todo-input"
        placeholder="계획을 추가하시오"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button id="todo-button" onClick={handleAdd}>
        ✚
      </button>
    </div>
  );
}

export default TodoInput;
