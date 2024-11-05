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
    <div class="bg-yellow-100 rounded-md size-1000">
      <div class="shadow-lg rounded-5xl text-black">
        <h1 class="font-mono text-center text-2xl mb-4">TODOLIST</h1>
        <div class="text-center mt-4 mb-4">
          <input
            class="bg-gray-400 text-black placeholder-black text-center"
            value={inputValue}
            type='text'
            placeholder='해야할 일을 입력하세요'
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button class="hover:bg-lime-200 bg-green-400" onClick={addItem}>
            추가
          </button>
        </div>
        <TodoBoard todolist={todolist} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
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

  return (
    <div className="bg-yellow-50 rounded-lg max-w-lg mx-auto p-8 shadow-md mt-10">
      <h1 className="font-mono text-center text-3xl mb-6 text-gray-800">TODOLIST</h1>
      <div className="flex justify-center items-center mb-6">
        <input
          className="bg-gray-100 text-gray-700 placeholder-gray-500 text-center rounded-lg px-4 py-2 mr-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          value={inputValue}
          type="text"
          placeholder="해야할 일을 입력하세요"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-400 transition-colors shadow-md"
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

export default App;
