import { useState } from 'react'
import './App.css'
import TodoBoard from './component/TodoBoard'

function App() {
  const [inputValue,setInputValue] = useState('')
  const [todolist,setTodolist]=useState([])
  const addItem =() => {
    console.log("content",inputValue)
    setTodolist([...todolist,inputValue])
  }
  return (
    
    <div className='mainBoard'>
      <div className='main'>
        <h1>TODOLIST</h1>
        <input className='input' value={inputValue} type="text" placeholder='해야할 일을 입력하세요' onChange=
        {(event)=> setInputValue(event.target.value)}/> 
        <div className='btn'>
        <button className='inputBtn' onClick={addItem}>할 일 추가</button>
        <button
          type='button'
          className='deleteBtn'
          onClick={()=> onDeleteBtn(todoItem.id)}
        >할 일 삭제</button>
        </div>
        <TodoBoard todolist={todolist}/>
      </div>
    </div>
  );
}

export default App
