import { useState } from "react";
import TodoWriting from "../components/TodoWriting/TodoWriting";
import TodoView from "../components/TodoView/TodoView";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const addNewTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      const newTodoItem = { id: todoId, content: newTodo };
      setTodoList([...todoList, newTodoItem]);
      setTodoId(todoId + 1);
    }
  };

  const deleteTodo = (idToDelete) => {
    setTodoList(todoList.filter((todo) => todo.id !== idToDelete));
  };

  return (
    <>
      <p className="text-2xl font-extrabold mb-6">오늘의 할 일</p>
      <TodoWriting addTodo={addNewTodo} />
      <TodoView todos={todoList} deleteTodo={deleteTodo} />
    </>
  );
};

export default Todo;
