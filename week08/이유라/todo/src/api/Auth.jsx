import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const signUp = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/create`, {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    console.error("회원가입 요청 실패:", err.response?.data || err.message);
    throw new Error(
      err.response?.data?.message || "회원가입 요청이 실패했습니다."
    );
  }
};
