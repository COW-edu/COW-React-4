import React, { useState } from 'react';
import { login } from '../../api';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, LoginForm, Input, Button, SignupPrompt } from '../../styles/LoginStyles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.token);
      alert("로그인이 완료되었습니다");
      navigate('/todos');
    } catch (error) {
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  const isFormValid = email !== '' && password !== '';

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="이메일"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="비밀번호"
        />
        <Button type="submit" disabled={!isFormValid}>로그인</Button>
      </LoginForm>
      <SignupPrompt>
        회원가입이 필요하신가요? 
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </SignupPrompt>
    </LoginContainer>
  );
};

export default Login;
