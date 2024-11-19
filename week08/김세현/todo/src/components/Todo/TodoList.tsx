import React, { useEffect, useState } from 'react';
import { getTodos, createTodo } from '../../api';
import { Todo } from '../../types';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom';
import { TodoListContainer, TodoForm, Input, Button, LogoutButton } from '../../styles/TodoListStyles';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos(token!);
      setTodos(response.data);
    };
    fetchTodos();
  }, [token]);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await createTodo(token!, title, content);
    setTodos([...todos, response.data]);
    setTitle('');
    setContent('');
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const handleDeleteTodo = async (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("로그아웃이 완료되었습니다");
    navigate('/auth');
  };

  return (
    <TodoListContainer>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      <TodoForm onSubmit={handleAddTodo}>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="할 일 제목"/>
        <Input type="text" value={content} onChange={(e) => setContent(e.target.value)} required placeholder="할 일 내용"/>
        <Button type="submit">할 일 추가</Button>
      </TodoForm>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoItem todo={todo} onUpdate={handleUpdateTodo} onDelete={handleDeleteTodo} />
          </li>
        ))}
      </ul>
    </TodoListContainer>
  );
};

export default TodoList;
