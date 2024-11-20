import { useEffect, useState } from 'react';
import PaintTodo from './paintTodo';
import "tailwindcss/tailwind.css" ;

function App() {

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(() => 
    JSON.parse(localStorage.getItem('todoList') || [])
  );
    
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  },[todoList]);

  const deleteTodo = (index) => {
    const afterDeleteTodo = [...todoList];
    afterDeleteTodo.splice(index, 1);
    setTodoList(afterDeleteTodo);
  }
  const addList = (event) => {
    event.preventDefault();
    if(inputValue.trim() !== "") {
        setTodoList([...todoList, inputValue]);
        setInputValue('');
    };
  }
  return (
    <PaintTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        todoList={todoList}
        addList={addList}
        deleteTodo={deleteTodo}
    />
  );
}


export default App