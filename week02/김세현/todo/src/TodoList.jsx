import React, { useState } from 'react';

function TodoInput({ inputValue, setInputValue, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>
    </div>
  );
}

function TodoItem({ todo, index, removeTodo }) {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>삭제</button>
    </li>
  );
}

function TodoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoApp;
