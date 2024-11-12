import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../types/Todo';
import TodoStyle from '../styles/TodoStyle';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editedContent, setEditedContent] = useState<string>('');

  const fetchTodos = async () => {
    const response = await axios.get<Todo[]>('http://localhost:8080/todos');
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!newTodo) return;

    const response = await axios.post<Todo>('http://localhost:8080/todos', {
      content: newTodo,
    });

    setTodos([...todos, response.data]);
    setNewTodo('');
  };

  const completeTodo = async (id: number) => {
    const response = await axios.put<Todo>(`http://localhost:8080/todos/${id}`);
    setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
  };

  const startEditing = (todo: Todo) => {
    setEditingTodo(todo);
    setEditedContent(todo.content);
  };

  const updateTodo = async () => {
    if (!editingTodo) return;

    const response = await axios.put<Todo>(`http://localhost:8080/todos/contents/${editingTodo.id}`, {
      content: editedContent,
    });

    setTodos(todos.map(todo => (todo.id === editingTodo.id ? response.data : todo)));
    setEditingTodo(null);
    setEditedContent('');
  };

  const deleteTodo = async (id: number) => {
    await axios.delete<Todo>(`http://localhost:8080/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <TodoStyle />
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'block' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={todo.isComplete ? 'completed' : ''}>{todo.content}</span>
              <div>
                <button onClick={() => completeTodo(todo.id)}>완료</button>
                <button onClick={() => startEditing(todo)}>수정</button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </div>
            </div>

            {editingTodo && editingTodo.id === todo.id && (
              <div className="editing" style={{ marginTop: '10px' }}>
                <input
                  type="text"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <button onClick={updateTodo}>수정</button>
                <button onClick={() => setEditingTodo(null)}>취소</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
