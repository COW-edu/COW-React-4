import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoBoard from './component/TodoBoard';
import './App.css';

function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [todolist, setTodolist] = useState([]);
    const url = 'http://localhost:8080/todos';

    const token = localStorage.getItem('token');

    if (!token) {
        alert("로그인 해주세요!");
        return <div>로그인 해주세요!</div>;
    }

    useEffect(() => {
        fetchTodos();
    }, []);


    const fetchTodos = async () => {
        try {
            const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
            setTodolist(response.data.data || []);
        } catch (error) {
                console.error('투두 목록 불러오기 실패', error);            
        }
    };
    
    const toggleComplete = async (id) => {
        const todoToUpdate = todolist.find((item) => item.id === id);
        try {
            await axios.put(
                `${url}/${id}`,
                { isComplete: !todoToUpdate.isComplete },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            await fetchTodos();
        } catch (error) {
            console.error("완료 상태 변경 실패", error);
        }
    };

    const addItem = async () => {
        if (inputValue.trim()) {
            try {
                const response = await axios.post(
                    url,
                    { title: inputValue, content: inputValue },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setTodolist([...todolist, response.data.data]);
                setInputValue('');
            } catch (error) {
                console.error("투두 추가 실패", error);
            }
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`${url}/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTodolist(todolist.filter(item => item.id !== id));
        } catch (error) {
            console.error("투두 삭제 실패", error);
        }
    };

    const updateItem = async (id, newContent) => {
        const todoToUpdate = todolist.find(item => item.id === id);
        try {
            const response = await axios.put(
                `${url}/${id}`,
                { ...todoToUpdate, content: newContent },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTodolist(todolist.map(item => (item.id === id ? response.data.data : item)));
        } catch (error) {
            console.error("아이템 수정 실패", error);
        }
    };

    return (
        <div>
            <div className="flex mb-6">
                <input
                    className="text-gray-800 placeholder-gray-500 text-center rounded-lg px-4 py-2 mr-2 shadow-sm focus:outline-none"
                    value={inputValue}
                    type="text"
                    placeholder="해야할 일을 입력하세요"
                    onChange={event => setInputValue(event.target.value)}
                />
                <button
                    className="bg-slate-50 text-black rounded-lg px-4 py-2 hover:bg-slate-200 shadow-md hover:shadow-sm"
                    onClick={addItem}
                >
                    추가
                </button>
            </div>
            <TodoBoard
                todolist={todolist}
                deleteItem={deleteItem}
                toggleComplete={toggleComplete}
                updateItem={updateItem}
            />
        </div>
    );
}

export default Todo;




