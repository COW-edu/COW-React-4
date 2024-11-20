import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/Auth";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const validatePw = (pw) => {
    return pw.length >= 8;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "pw") setPw(value);

    const updatedEmail = name === "email" ? value : email;
    const updatedPw = name === "pw" ? value : pw;

    setIsBtnEnabled(validateEmail(updatedEmail) && validatePw(updatedPw));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginData = await login({ email, password: pw });
      alert(loginData.message);
      localStorage.setItem("authToken", loginData.token);
      setIsAuth(true);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex-col items-center justify-center">
      <h1 className="mt-6">My TODO</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex p-7">
          <label
            htmlFor="email"
            className="block text-xl font-bold mt-1 ml-10 "
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="아이디를 입력해 주세요"
            required
            className="w-100px px-5 py-2  border-none rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex  p-7">
          <label
            htmlFor="pw"
            className="block text-xl font-bold text-gray-60 mr-9 mt-1"
          >
            Password:{" "}
          </label>
          <input
            type="password"
            name="pw"
            value={pw}
            onChange={handleInputChange}
            required
            placeholder="비밀번호를 입력해 주세요"
            className="w-100px px-5 py-2 -ml-8 border-none rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={!isBtnEnabled}
            className={`w-full py-2 px-4 rounded-md text-white ${
              isBtnEnabled
                ? "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            로그인
          </button>
          <Link
            to="/register"
            className="mt-4 text-sm text-blue-500 hover:text-blue-600 underline"
          >
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

Login.propTypes = {
  setIsAuth: PropTypes.func.isRequired, // setIsAuth는 필수 함수
};
