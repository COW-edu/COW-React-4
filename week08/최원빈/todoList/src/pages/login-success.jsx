import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('component loginsucess');
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-semibold mb-4">로그인 성공!</h1>
      <button
        className="bg-blue-400 text-white font-bold w-64 p-2 rounded mt-4"
        onClick={navigate('/')}
      >
        로그인화면으로 돌아가기
      </button>
    </div>
  );
}
