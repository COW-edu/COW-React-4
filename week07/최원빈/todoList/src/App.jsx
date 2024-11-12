import { useEffect, useState } from 'react';

import TodoInput from './TodoFunctions/TodoInput';
import TodoListHandle from './TodoFunctions/TodoListHandle';
import axios from 'axios';
import './index.css';

function App() {
  const [todo, setTodo] = useState([]);

  //서버 URL
  const apiUrl = 'http://localhost:8080/todos';

  //최초 useEffect
  useEffect(() => {
    fetchTodos();
  }, []);

  //	1.	GET /todos: 할 일 목록을 가져온다.
  const fetchTodos = async function () {
    try {
      const response = await axios.get(apiUrl);

      setTodo(response.data);
    } catch (err) {
      alert('초기 렌더링 단계에서 에러발생', err);
    }
  };

  //현재 todoList의 데이터 타입이 아래기 때문에 그에 newTodo의 속성값을 맞췄다.
  //   export interface Todo {
  //   id: number;
  //   content: string;
  //   isComplete: boolean;
  // }

  //2.	POST /todos: 새 할 일을 추가한다.
  const addTodo = async (content) => {
    const newTodo = { isComplete: false, content };

    try {
      const response = await axios.post(apiUrl, newTodo);
      console.log(response.data);
      setTodo((prev) => [...prev, response.data]);
    } catch (err) {
      alert('todoList 더할때의 에러발생', err);
    }
  };

  // 3.	PUT /todos/:id: 특정 할 일을 완료 처리한다.
  const toggleCheck = async (index) => {
    const todoUpdate = todo[index];
    if (todoUpdate) {
      const updatedTodo = {
        ...todoUpdate,
        isComplete: todoUpdate.isComplete === false ? true : false,
      };
      try {
        //put은 이렇게 모두 명시해줘야함 (post와 차이는 기존값을 수정한다는 스탠스임)
        await axios.put(`${apiUrl}/${todoUpdate.id}`, updatedTodo);

        //바로 업데이트
        setTodo((prev) =>
          prev.map((todo, i) => (i === index ? updatedTodo : todo))
        );
      } catch (err) {
        alert('토글링 시의 에러발생', err);
      }
    }
  };

  //4. PUT /todos/contents/:id (할 일 수정)
  const editTodo = async (index) => {
    const todoUpdate = todo[index];
    //기본값은 todo[idx].content 본래의 값으로
    const editedContent = prompt(
      '수정할 내용을 입력하세요',
      todo[index].content
    );

    try {
      const updatedTodo = {
        ...todoUpdate,
        content: editedContent,
      };
      // axios를 통해 PUT 요청 보내기
      const response = await axios.put(
        `${apiUrl}/${updatedTodo.id}`,
        updatedTodo
      );
      const copy = [...todo];
      copy[index] = response.data;
      setTodo(copy);
    } catch (err) {
      alert('수정 시의 에러발생', err);
    }
  };

  //	5.	DELETE /todos/:id: 특정 할 일을 삭제한다.
  const deleteTodo = async (index) => {
    const todoDelete = todo[index];
    if (todoDelete) {
      try {
        await axios.delete(`${apiUrl}/${todoDelete.id}`);
        setTodo((prev) => {
          const copy = [...prev];
          copy.splice(index, 1);
          return copy;
        });
      } catch (err) {
        alert('todoList 삭제시의 에러발생', err);
      }
    }
  };

  return (
    <div className="flex item-center justify-center w-screen h-screen bg-gradient-to-b from-purple-900 to to-blue-800 p-5">
      <div className="relative font-bold  w-full max-w-md bg-gray-100 p-8 rounded-lg mb-12 ">
        <h3 className="flex items-center tex mb-10 text-blue-800">
          MY OWN TODO LIST
        </h3>
        <TodoInput addTodo={addTodo} />
        <TodoListHandle
          editTodo={editTodo}
          todo={todo}
          toggleCheck={toggleCheck}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
