import { useState } from "react";
import { signUp } from "../api/Auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const validatePw = (pw, confirmPw) => {
    return pw.length >= 8 && pw === confirmPw;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "pw") setPw(value);
    if (name === "confirmPw") setConfirmPw(value);

    const updatedEmail = name === "email" ? value : email;
    const updatedPw = name === "pw" ? value : pw;
    const updatedConfirmPw = name === "confirmPw" ? value : confirmPw;

    setIsBtnEnabled(
      validateEmail(updatedEmail) && validatePw(updatedPw, updatedConfirmPw)
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("회원가입 요청 데이터:", { email, pw });

    try {
      const response = await signUp(email, pw);
      alert(response.message);
    } catch (err) {
      console.error("회원가입 실패:", err);
      alert(err.message || "회원가입 요청이 실패했습니다.");
    }
  };
  return (
    <div className="display flex-col">
      <h1 className="mt-8 mb-10">회원가입</h1>
      <form onSubmit={handleRegister}>
        <div className="flex p-7">
          <label
            htmlFor="email"
            className="block text-xl font-bold mt-1 ml-12 "
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
        <div className="flex p-7">
          <label htmlFor="pw" className="block text-xl font-bold mt-1 ml-10 ">
            비밀번호:
          </label>
          <input
            type="password"
            name="pw"
            value={pw}
            onChange={handleInputChange}
            placeholder="비밀번호를 입력해 주세요"
            required
            className="w-100px px-5 py-2  border-none rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex p-7 justify-evenly">
          <label
            htmlFor="confirmPw"
            className="block text-xl font-bold mt-1 ml-1 "
          >
            비밀번호 확인:
          </label>
          <input
            type="password"
            name="confirmPw"
            value={confirmPw}
            onChange={handleInputChange}
            placeholder="비밀번호를 다시 입력하세요"
            required
            className="w-140px px-5 py-2  border-none rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={!isBtnEnabled}
          onClick={() => {
            window.location.href = "/auth";
          }}
          className={`w-full py-2 px-4 rounded-md text-white ${
            isBtnEnabled
              ? "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          확인
        </button>
      </form>
    </div>
  );
};

export default Register;
