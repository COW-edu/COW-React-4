import React from "react";
import TodoItem from "./Todoitem";

function TodoBoard(props){
    console.log("todoBoard",props.todolist)
    return (
        <div>
            {props.todolist.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}
export default TodoBoard;