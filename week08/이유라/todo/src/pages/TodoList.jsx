import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // PropTypes 추가
import TodoWriting from "../components/TodoWriting/TodoWriting";
import TodoView from "../components/TodoView/TodoView";
import {
  getTodos,
  postTodos,
  deleteTodos,
  contentUpdateTodos,
} from "../api/Todos";

const TodoList = ({ setIsAuth }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodoList(todos);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title, content) => {
    try {
      const newTodo = await postTodos(title, content);
      setTodoList((prevTodos) => [...prevTodos, newTodo]);
    } catch (err) {
      console.error("TODO 추가 실패:", err.message);
      alert("TODO를 추가하는 중 문제가 발생했습니다.");
    }
  };

  const updateTodo = async (id, title, content) => {
    try {
      const updatedTodo = await contentUpdateTodos(id, title, content);
      setTodoList((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (err) {
      console.error("TODO 수정 실패:", err.message);
      alert("TODO를 수정하는 중 문제가 발생했습니다.");
    }
  };

  const deleteTodo = async (idToDelete) => {
    await deleteTodos(idToDelete);
    setTodoList(todoList.filter((todo) => todo.id !== idToDelete));
  };

  return (
    <>
      <p className="text-2xl font-extrabold mb-6">오늘의 할 일</p>
      <TodoWriting addTodo={addTodo} />
      <TodoView
        todos={todoList}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        setIsAuth={setIsAuth}
      />
    </>
  );
};

TodoList.propTypes = {
  setIsAuth: PropTypes.func.isRequired,
};

export default TodoList;
