import { useEffect, useState } from "react";
import TodoWriting from "../components/TodoWriting/TodoWriting";
import TodoView from "../components/TodoView/TodoView";
import {
  getTodos,
  postTodos,
  deleteTodos,
  contentUpdateTodos,
  completeTodos,
} from "../api/Todos";
//completeTodo, updateTodo
const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = async (newTodo) => {
    if (newTodo.trim() !== "") {
      const newTodoItem = await postTodos(newTodo);
      if (newTodoItem) {
        setTodoList([...todoList, newTodoItem]);
      }
    }
  };

  const updateTodo = async (id, newContent, isComplete) => {
    const editedTodo = await contentUpdateTodos(id, newContent, isComplete);
    if (editedTodo) {
      setTodoList(todoList.map((todo) => (todo.id === id ? editedTodo : todo)));
    }
  };

  const checkTodo = async (id) => {
    const checkedTodo = await completeTodos(id);
    if (checkedTodo) {
      setTodoList(
        todoList.map((todo) => (todo.id === id ? checkedTodo : todo))
      );
    }
  };

  const deleteTodo = async (idToDelete) => {
    await deleteTodos(idToDelete); // API 요청을 보내 삭제
    setTodoList(todoList.filter((todo) => todo.id !== idToDelete)); // 로컬 상태 업데이트
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      if (todos) {
        setTodoList(todos);
      }
    };
    fetchTodos();
  }, []);

  return (
    <>
      <p className="text-2xl font-extrabold mb-6">오늘의 할 일</p>
      <TodoWriting addTodo={addTodo} />
      <TodoView
        todos={todoList}
        deleteTodo={(id) => deleteTodo(id)}
        updateTodo={updateTodo}
        checkTodo={checkTodo}
      />
    </>
  );
};

export default TodoList;
