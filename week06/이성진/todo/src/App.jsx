/*import { useState, useEffect } from 'react';
import TodoBoard from './component/TodoBoard.jsx';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todolist, setTodolist] = useState(() => {
    const savedTodos = localStorage.getItem('todolist');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
      localStorage.setItem('todolist', JSON.stringify(todolist));
      console.log('Todo 리스트가 업데이트되었습니다:', [todolist]);
  }, [todolist]);

  const addItem = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        isCompleted: false
      };
      setTodolist((prevTodolist) => [...prevTodolist, newTodo]);
      setInputValue('');
    }
  };

  const deleteItem = (idToDelete) => {
    setTodolist(todolist.filter((item) => item.id !== idToDelete));
  };

  return (
    <div className="bg-neutral-50 rounded-lg p-8 shadow-md ">
      <h1 className="font-mono text-center text-3xl mb-6 text-gray-700 shadow-md rounded-full">TODO LIST</h1>
      <div className="flex mb-6">
        <input
          className=" text-gray-800 placeholder-gray-500 text-center rounded-lg px-4 py-2 mr-2 shadow-sm focus:outline-none "
          value={inputValue}
          type="text"
          placeholder="해야할 일을 입력하세요"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="bg-slate-50 text-black rounded-lg px-4 py-2 hover:bg-slate-200 shadow-md hover:shadow-sm"
          onClick={addItem}
        >
          추가
        </button>
      </div>
      <TodoBoard todolist={todolist} deleteItem={deleteItem} />
    </div>
  );
}

export default App;*/

import { useState, useEffect } from 'react';
import TodoBoard from './component/TodoBoard.jsx';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todolist, setTodolist] = useState(() => {
    const savedTodos = localStorage.getItem('todolist');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todolist));
    console.log('Todo 리스트가 업데이트되었습니다:', [todolist]);
  }, [todolist]);

  const addItem = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        isCompleted: false
      };
      setTodolist((prevTodolist) => [...prevTodolist, newTodo]);
      setInputValue('');
    }
  };

  const deleteItem = (idToDelete) => {
    setTodolist(todolist.filter((item) => item.id !== idToDelete));
  };

  const toggleComplete = (idToToggle) => {
    setTodolist(todolist.map((item) => 
      item.id === idToToggle ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  return (
    <div className="bg-neutral-50 rounded-lg p-8 shadow-md ">
      <h1 className="font-mono text-center text-3xl mb-6 text-gray-700 shadow-md rounded-full">TODO LIST</h1>
      <div className="flex mb-6">
        <input
          className="text-gray-800 placeholder-gray-500 text-center rounded-lg px-4 py-2 mr-2 shadow-sm focus:outline-none"
          value={inputValue}
          type="text"
          placeholder="해야할 일을 입력하세요"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="bg-slate-50 text-black rounded-lg px-4 py-2 hover:bg-slate-200 shadow-md hover:shadow-sm"
          onClick={addItem}
        >
          추가
        </button>
      </div>
      <TodoBoard todolist={todolist} deleteItem={deleteItem} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App