import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils/cookies";
import axios from "../utils/axiosInstancs";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("/users/login", { email, password });
            const accessToken = response.headers["authorization"];
            setCookie("accessToken", accessToken, { path: "/", maxAge: 3600 });
            alert("로그인 성공!");
            navigate("/todos");
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
                alert('로그인 실패!! 이메일 혹은 비밀번호가 틀렸습니다!')
            } else {
                setErrorMessage("로그인 중 문제가 발생했습니다.");
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-green-600">로그인</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    onClick={handleLogin}
                    disabled={!email.includes("@") || password.length < 8}
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    로그인
                </button>
            </div>
        </div>
    );
}

export default Login;




