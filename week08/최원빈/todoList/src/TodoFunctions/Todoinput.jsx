import React, { useState, useRef, useEffect } from 'react';
import { createTodo, getTodos, deleteTodo } from '../api/apiFunctions';

function TodoInput() {
  const [inputTitle, setInputTitle] = useState('');
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos(token);
        setTodos(response.data);
      } catch (error) {
        console.error('할 일 목록을 가져오는 중 오류 발생:', error);
      }
    };
    fetchTodos();
  }, [token]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }
      
      if (inputTitle.trim() === '') {
        alert('할 일 제목을 입력하세요.');
        document.querySelector('input[placeholder="할 일 제목"]').focus();
        return;
      }

      if (inputValue.trim() === '') {
        alert('계획을 입력하세요.');
        inputRef.current.focus();
        return;
      }

      const response = await createTodo(token, inputTitle, inputValue);
      
      if (response && response.data) {
        setTodos([...todos, response.data]);
      } else {
        console.error('응답 형식이 예상과 다릅니다:', response);
      }
  
      setInputTitle('');
      setInputValue('');
    } catch (err) {
      console.error('할 일 추가 중 에러 발생:', err);
      alert('할 일 추가 중 에러가 발생했습니다.');
    }
  };

  const toggleCheck = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    ));
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(token, id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('할 일 삭제 중 에러 발생:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6 bg-white rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">할 일 목록</h2>
      <div className="flex flex-col w-full space-y-4">
        <input
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="할 일 제목"
        />
        <div className="flex items-center space-x-2">
          <input
            className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            ref={inputRef}
            placeholder="계획을 추가하시오"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleAdd}
          >
            추가
          </button>
        </div>
      </div>
  
      <ul className="w-full space-y-2">
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out"
          >
            <div
              className={`cursor-pointer ${
                item.isComplete
                  ? 'line-through text-gray-400'
                  : 'text-gray-800'
              }`}
              onClick={() => toggleCheck(item.id)}
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.content}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => handleDelete(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoInput;