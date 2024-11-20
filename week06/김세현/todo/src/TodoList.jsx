import React, { useState, useEffect } from 'react';

function TodoInput({ inputValue, setInputValue, addTodo }) {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="p-2 w-48 border border-gray-300 rounded-md mr-2"
      />
      <button
        onClick={addTodo}
        className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        추가
      </button>
    </div>
  );
}

function TodoItem({ todo, index, removeTodo }) {
  return (
    <li className="bg-white mb-2 p-2 rounded-md flex justify-between items-center shadow">
      {todo}
      <button
        onClick={() => removeTodo(index)}
        className="bg-red-600 text-white rounded-md p-1 hover:bg-red-700"
      >
        삭제
      </button>
    </li>
  );
}

function TodoList({ todos, removeTodo }) {
  return (
    <ul className="list-none p-0">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodos = [...todos, inputValue];
    setTodos(newTodos);
    setInputValue('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl text-gray-800 mb-4 text-center">Todo List</h1>
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} />
      <div className="w-full max-w-md">
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default TodoApp;
