import { useState } from "react";
import TodoWriting from "../components/TodoWriting/TodoWriting";
import TodoView from "../components/TodoView/TodoView";
import "./TodoList.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() != "") {
      setTodoList([...todoList, newTodo]);
    }
  };

  const deleteTodo = (indexToDelete) => {
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <p className="Title">오늘의 할 일</p>
      <TodoWriting addTodo={addTodo} />
      <TodoView todos={todoList} deleteTodo={deleteTodo} />
    </>
  );
};

export default Todo;
