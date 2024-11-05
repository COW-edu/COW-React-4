import { useEffect, useState } from 'react';
import TodoInput from './TodoFunctions/TodoInput';
import TodoListHandle from './TodoFunctions/TodoListHandle';
import './index.css';

function App() {
  const [todo, setTodo] = useState([]);

  //로컬스토로지의 고유한 아이디를 담는 state
  const [id, setId] = useState(0);
  const localStorageKey = 'todos';

  //최초 useEffect
  //최상위 컴포넌트가 마운트 될때, 로컬 스토리지에서 데이터를 가져오는 UseEffect
  useEffect(() => {
    const storedTodos = localStorage.getItem(localStorageKey);
    const storedTodosObject =
      storedTodos !== null ? JSON.parse(storedTodos) : [];

    //고유한 아이디 (JSON.parse 하는 순간) todo의 object형이 되었으므로

    setTodo(storedTodosObject);
  }, []);

  //스토리지에 저장하는 함수
  const saveTodos = (args) => {
    localStorage.setItem(localStorageKey, JSON.stringify(args));
  };

  const addTodo = (text) => {
    const newTodo = { checked: false, text, id };
    // setTodo((prev) => [...prev, newTodo]); // 배열을 업데이트할 때 반환 누락 수정
    setTodo((prev) => {
      const updatedTodos = [...prev, newTodo];
      saveTodos(updatedTodos);
      return updatedTodos;
    });
    setId((prev) => prev + 1);
  };

  const toggleCheck = (index) => {
    const updatedTodos = [...todo];
    if (updatedTodos[index]) {
      updatedTodos[index].checked = !updatedTodos[index].checked;
    }
    setTodo(updatedTodos);
    saveTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todo];
    //splice (index(시작점), 1 (deleteCount)

    updatedTodos.splice(index, 1);

    setTodo(updatedTodos);
    saveTodos(updatedTodos);
  };

  return (
    <div className="flex item-center justify-center w-screen h-screen bg-gradient-to-b from-purple-900 to to-blue-800 p-5">
      <div className="relative font-bold  w-full max-w-md bg-gray-100 p-8 rounded-lg mb-12 ">
        <h3 className="flex items-center tex mb-10 text-blue-800">
          MY OWN TODO LIST
        </h3>
        <TodoInput addTodo={addTodo} />
        <TodoListHandle
          todo={todo}
          toggleCheck={toggleCheck}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
