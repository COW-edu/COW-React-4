import React from "react";
import TodoList from "./todoList";
import TodoInput from "./todoInput";



const PaintTodo = ({ todoList, setTodoList }) => {
    //왜 setTodoList만 받지?
   return(
    <div className='flex flex-col justify-center items-center border-blue-400 border-2 h-full'>
        <h1 className='text-2xl border-white bg-blue-400 text-center text-white p-4 m-4 shadow-lg w-96 rounded-lg border-2'>TODO 리스트</h1>
          <TodoInput setTodoList={setTodoList}/> 
          <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>

   )
}

export default PaintTodo;
