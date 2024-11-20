import React, { useState } from 'react';
import { signUp } from '../../api';
import { useNavigate } from 'react-router-dom';
import { SignUpContainer, SignUpForm, Input, Button } from '../../styles/SignUpStyles';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signUp(email, password);
      localStorage.setItem('token', response.token);
      alert('회원 가입이 완료되었습니다.');
      navigate('/');
    } catch (error) {
      alert("회원가입에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  const isFormValid = email !== '' && password !== '';

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일:</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="비밀번호를 입력하세요 (8자리 이상)"
          />
        </div>
        <Button type="submit" disabled={!isFormValid}>회원가입</Button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
