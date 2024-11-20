import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils/cookies";
import axios from "../utils/axiosInstancs";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (!email.includes("@") || password.length < 8) {
            setErrorMessage("유효한 이메일과 비밀번호를 입력해주세요.");
            return;
        }
        try {
            const response = await axios.post("/users/create", { email, password });
            const accessToken = response.headers["authorization"];
            setCookie("accessToken", accessToken, { path: "/", maxAge: 3600 });
            alert("회원가입 성공!");
            navigate("/auth/login");
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("회원가입 중 문제가 발생했습니다.");
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-black">회원가입</h2>
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
                    disabled={!email.includes("@") || password.length < 8}
                    className="w-full bg-gray-500 text-black py-2 rounded-md hover:bg-blue-100 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    회원가입
                </button>
            </div>
        </div>
    );
}

export default SignUp;





