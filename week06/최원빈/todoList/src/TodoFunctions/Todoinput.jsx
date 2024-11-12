/* eslint-disable */
import '../index.css';
import React, { useState, useRef } from 'react';

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
    <div className="flex justify-between mb-6 rounded-2xl bg-gray-200 p-2">
      <input
        className="bg-transparent focus:outline-none "
        type="text"
        ref={inputRef}
        id="todo-input"
        placeholder="계획을 추가하시오"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="flex justify-center text-center items-center border-none outline-none bg-orange-500 text-white p-3 rounded-full text-lg cursor-pointer hover:bg-black w-24 h-10"
        onClick={handleAdd}
      >
        <span className="w-full">✚</span>
      </button>
    </div>
  );
}

export default TodoInput;
