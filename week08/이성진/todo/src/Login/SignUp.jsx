import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (!email.includes('@') || !email.includes('.')) {
            setErrorMessage('유효한 이메일을 입력해주세요.');
            return;
        }
        if (password.length < 8) {
            setErrorMessage('비밀번호는 최소 8자 이상이어야 합니다.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/users/create', { email, password });
            if (response.data.message === '계정이 성공적으로 생성되었습니다') {
                localStorage.setItem('token', response.data.token);
                alert('회원가입 성공!');
                navigate('/auth/login');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('회원가입 중 문제가 발생했습니다.');
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">회원가입</h2>
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <input
                    type="email"
                    placeholder="이메일 입력"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSignUp}
                    disabled={!email.includes('@') || !email.includes('.') || password.length < 8}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    회원가입
                </button>
            </div>
        </div>
    );
}

export default SignUp;




