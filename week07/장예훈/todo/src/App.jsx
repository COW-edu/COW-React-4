import { useEffect, useState } from 'react';
import PaintTodo from './paintTodo';
import "tailwindcss/tailwind.css" ;
import axios from 'axios';

const url = 'http://localhost:8080/todos'

function App() {
  
  const [todoList, setTodoList] = useState([]);
  


  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = (await axios.get(url)).data
        setTodoList(response)
      } catch {
        console.error(error,"투두를 불러오는데 실패")
      }
    }
    fetchData()
  },[]);
  

  return (
    <PaintTodo
      todoList={todoList}
      setTodoList={setTodoList}
    />
  );
}


export default App