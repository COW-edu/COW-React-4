/*eslint-disable */
import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);
  const [inputValue, setInputValue] = useState('');

  //input하고 나서 자동 포커싱
  const inputRef = useRef(null);

  //checking toggling
  const toggleCheck = (index) => {
    const newTodos = [];

    for (let i = 0; i < todo.length; i++) {
      if (i == index) {
        //클릭된 항목의 인덱스와 같다면
        newTodos.push({ ...todo[i], checked: !todo[i].checked });
      } else {
        newTodos.push(todo[i]);
      }
      setTodo(newTodos);
    }
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
            ref={inputRef}
            type="text"
            id="todo-input"
            placeholder="계획을 추가하세요."
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />

          {/* FOR ADDING */}
          <button
            id="todo-button"
            onClick={() => {
              if (inputValue.trim() == '') {
                alert('빈 입력값입니다.');
              } else {
                //checked로
                const newTodo = { checked: false, text: inputValue, id };

                //const copy = [...todo, newTodo];
                //setTodo(copy);
                setTodo((prev) => [...prev, newTodo]);

                //prev는 state 변경 함수의 목적어인 state자체
                setId((prev) => prev + 1);
              }
              setInputValue('');
              inputRef.current.focus();
            }}
          >
            ✚
          </button>
        </div>

        {/* FOR REDUCING */}
        <ul id="list-container">
          {todo.map((element, index) => (
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
                className={element.checked ? 'checked ' : ''}
                onClick={() => toggleCheck(index)}
              >
                {element.text}
              </div>
              <span
                style={{ cursor: 'pointer', color: 'red' }}
                onClick={() => {
                  const copy = [...todo];
                  copy.splice(index, 1);
                  setTodo(copy);
                }}
              >
                ❌
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  function footerModal() {
    <div> ...</div>;
  }
}

export default App;
