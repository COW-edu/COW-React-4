import React from "react";



const PaintTodo = ({ inputValue, setInputValue,todoList, addList, deleteTodo }) => {
    
   return(
       <div>
           <form className="App" onSubmit={addList}>
               <input
                   value={inputValue}
                   type='text'
                   placeholder={'할일을 입력하세요.'}
                   onChange={(event) => setInputValue(event.target.value)}/>
               <button onClick={addList}>추가</button>
           </form>
           <ul>
               {todoList.map((todoList, index) => <li key={index}>{todoList}
                   <button onClick={() => deleteTodo(index)}>삭제</button>
               </li>)}
           </ul>
       </div>
   )
}

export default PaintTodo
