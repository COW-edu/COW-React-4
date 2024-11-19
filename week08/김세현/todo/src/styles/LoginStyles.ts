import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f9fc;
`;

export const LoginForm = styled.form`
  background: white;
  padding: 80px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

export const SignupPrompt = styled.p`
  margin-top: 10px;
  text-align: center;

  button {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
