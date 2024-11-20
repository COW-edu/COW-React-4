import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const TodoTitle = styled.h3<{ isCompleted: boolean }>`
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
  margin: 0;
`;

export const TodoContent = styled.p<{ isCompleted: boolean }>`
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
  margin: 5px 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;
