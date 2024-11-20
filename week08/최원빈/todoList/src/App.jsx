import { useNavigate } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import TodoInput from './TodoFunctions/TodoInput';

import './index.css';
import LoginForm from './Auth/LoginForm';
import SignUpModal from './Auth/SignupModal';

function App() {
  const isLoggedIn = !!localStorage.getItem('token'); // JWT 토큰이 있으면 로그인 상태로 간주

  const navigate = useNavigate();

  // 로그아웃시 -> 로컬스토리지에서 토큰을 제거
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 정상적으로 되었습니다');
    navigate('/auth');
  };

  return (
    <Routes>
      {/* 투두 리스트 페이지 */}
      <Route
        path="/todos"
        element={
          isLoggedIn ? (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-blue-800 p-5">
              <div className="relative w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-lg">
                {/* 상단 헤더 */}
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-blue-800">MY OWN TODO LIST</h3>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    로그아웃
                  </button>
                </div>

                {/* 투두 입력 및 목록 */}
                <TodoInput />
              </div>
            </div>
          ) : (
            <Navigate to="/auth" replace />
          )
        }
      />

      {/* 로그인 페이지 */}
      <Route path="/auth" element={<LoginForm />} />

      {/* 회원가입 페이지 */}
      <Route path="/signup" element={<SignUpModal />} />
    </Routes>
  );
}

export default App;