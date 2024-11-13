import React,{useState} from "react";
import { postData } from "./api/Apis";

const TodoInput = ({setTodoList}) => {
  const [inputValue, setInputValue] = useState("");

  const addList = async (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    
    
        const newTodo = await postData(inputValue) ;
        if (newTodo) {
          setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
        }
        setInputValue("")
  };

  return (
    <form className='text-lg border-blue-400 border-2 rounded-lg p-2 mb-2' onSubmit={addList}>
      <input className='p-2 m-2 w-72 border-solid rounded-lg h-10'
          value={inputValue}
          type='text'
          placeholder='할 일을 입력하세요.'
          onChange={(event) => setInputValue(event.target.value)} />
      <button className='bg-blue-400 px-4 py-2 rounded-lg h-10 text-white'>추가</button>
    </form>
  );
};

export default TodoInput;