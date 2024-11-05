import React from "react";



const PaintTodo = ({ inputValue, setInputValue,todoList, addList, deleteTodo }) => {
    
   return(
    <div class='flex flex-col justify-center items-center border-blue-400 border-2 h-full'>
        <h1 class='text-2xl border-white bg-blue-400 text-center text-white p-4 m-4 shadow-lg w-96 rounded-lg border-2'>TODO 리스트</h1>
        <form class='text-lg border-blue-400 border-2 rounded-lg p-2 mb-2' onSubmit={addList}>
            <input class='p-2 m-2 w-72 border-solid rounded-lg h-10'
                value={inputValue}
                type='text'
                placeholder='할 일을 입력하세요.'
                onChange={(event) => setInputValue(event.target.value)} />
            <button class='bg-blue-400 px-4 py-2 rounded-lg h-10 text-white'>추가</button>
        </form>
        <div class='w-96 text-lg flex flex-col justify-center items-center bg-white rounded-lg shadow-lg'>
            <ul class='w-full'>
                {todoList.map((todoItem, index) => (
                    <li class='border-blue-300 border-2 flex justify-between items-center rounded-lg p-4' key={index}>
                        {todoItem}
                        <button class='bg-blue-400 px-2 py-1 rounded-lg text-white' onClick={() => deleteTodo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>

   )
}

export default PaintTodo
