/*eslint-disable */
import { useState } from 'react';
import { signUp } from '../api/apiFunctions';

const SignUpModal = ({ closeModal, onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!email || !password || !confirmPassword) {
      setError('모든 필드를 입력해주세요.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return false;
    }
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.');
      return false;
    }
    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('유효한 이메일 주소를 입력해주세요.');
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateInputs()) return;

    try {
      const response = await signUp(email, password);
      if (response && response.token) {
        // 토큰을 로컬 스토리지나 상태 관리 시스템에 저장
        localStorage.setItem(`token_${email}`, response.token);
        alert('회원가입에 성공했습니다!');

        closeModal();
      } else {
        alert('토큰이 없습니다');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <div className="flex justify-between mb-4">
          <div className="text-xl font-semibold">회원가입</div>
          <button className="text-xl" onClick={closeModal}>
            X
          </button>
        </div>

        {error && <div className="text-red-500 mb-2">{error}</div>}

        <form className="flex flex-col space-y-2" onSubmit={handleSignup}>
          <input
            type="email"
            className="border border-black w-full p-2"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="border border-black w-full p-2"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="border border-black w-full p-2"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="bg-blue-400 text-white font-bold w-full p-2 rounded mt-4">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
