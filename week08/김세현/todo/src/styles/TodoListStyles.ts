import styled from 'styled-components';

export const TodoListContainer = styled.div`
  padding: 20px;
  background-color: #f7f9fc;
`;

export const LogoutButton = styled.button`
  margin-bottom: 20px; /* 로그아웃 버튼과 다른 요소 간격 추가 */
  padding: 10px;
  background-color: #dc3545; /* 로그아웃 버튼 색상 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* 호버 효과 제거 */
  &:hover {
    background-color: #dc3545; /* 같은 색으로 유지 */
  }
`;

export const TodoForm = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TodoItemContainer = styled.div`
  background: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const TodoTitle = styled.h3<{ isCompleted: boolean }>`
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`;

export const TodoContent = styled.p<{ isCompleted: boolean }>`
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`;
