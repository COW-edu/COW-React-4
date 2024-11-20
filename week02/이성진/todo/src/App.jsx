import { useState } from 'react'
import './App.css'
import TodoBoard from './component/TodoBoard'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todolist, setTodolist] = useState([]);

  const addItem = () => {
    if (inputValue.trim()) {
      setTodolist([...todolist, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (indexToDelete) => {
    setTodolist(todolist.filter((_, index) => index !== indexToDelete));
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
