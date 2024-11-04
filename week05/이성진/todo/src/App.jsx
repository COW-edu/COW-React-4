import { useState, useEffect } from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard';

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
    <div className='mainBoard'>
      <div className='main'>
        <h1>TODOLIST</h1>
        <div className='content'>
          <input
            className='input'
            value={inputValue}
            type='text'
            placeholder='해야할 일을 입력하세요'
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button className='inputBtn' onClick={addItem}>
            할 일 추가
          </button>
        </div>
        <TodoBoard todolist={todolist} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;



