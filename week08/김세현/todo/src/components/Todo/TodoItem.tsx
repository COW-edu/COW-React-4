import React, { useState } from 'react';
import { Todo } from '../../types';
import { updateTodo, deleteTodo } from '../../api';
import {
  TodoItemContainer,
  TodoTitle,
  TodoContent,
  Input,
  Button,
  CancelButton
} from '../../styles/TodoItemStyles';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (updatedTodo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const updatedTodo = await updateTodo(token, todo.id, title, content);
      onUpdate(updatedTodo.data);
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await deleteTodo(token, todo.id);
        onDelete(todo.id);
      } catch (error) {
        console.error('삭제 실패:', error);
      }
    }
  };

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <TodoItemContainer>
      {isEditing ? (
        <div>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button onClick={handleUpdate}>제출</Button>
          <CancelButton onClick={() => setIsEditing(false)}>취소</CancelButton>
        </div>
      ) : (
        <div>
          <TodoTitle isCompleted={isCompleted}>{title}</TodoTitle>
          <TodoContent isCompleted={isCompleted}>{content}</TodoContent>
          <Button onClick={handleComplete}>{isCompleted ? '완료 취소' : '완료'}</Button>
          <Button onClick={() => setIsEditing(true)}>수정</Button>
          <CancelButton onClick={handleDelete}>삭제</CancelButton>
        </div>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
