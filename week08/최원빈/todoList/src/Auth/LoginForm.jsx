import { useState } from 'react';
import SignupForm from './SignupForm';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/apiFunctions'; // 기존 axiosInstance 대신 apiFunctions 사용

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // 이메일과 비밀번호 유효성 검사
  const validateForm = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email);
    const passwordValid = password.length >= 8;
    setIsFormValid(emailValid && passwordValid);
  };

  // 로그인 처리 함수
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      try {
        const response = await login(email, password); // apiFunctions의 login 호출
        localStorage.setItem('token', response.token); // 로그인 성공 시 토큰 저장
        navigate('/todos'); // Todos 페이지로 이동
      } catch (error) {
        console.error('로그인 실패 시발:', error);
        alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      }
    }
  };

  // 이메일 입력 핸들러
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    validateForm(value, password);
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    validateForm(email, value);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-blue-500">
      <div className="bg-white relative bottom-25 h-[70%] rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          로그인
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              이메일
            </label>
            <input
              onChange={handleEmailChange}
              type="email"
              id="email"
              value={email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              비밀번호
            </label>
            <input
              onChange={handlePasswordChange}
              type="password"
              id="password"
              value={password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 
              ${
                !isFormValid
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
              }`}
          >
            로그인
          </button>
        </form>
        <SignupForm />
      </div>
    </div>
  );
}

export default LoginForm;