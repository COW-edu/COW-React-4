import { axiosInstance } from "../utils/axiosInstance";
// 로그인 요청
export const login = async (email, password) => {
  const response = await axiosInstance.post('/users/login', { email, password });
  return response.data;
};

// 회원가입 요청
export const signUp = async (email, password) => {
  const response = await axiosInstance.post('/users/create', { email, password });
  return response.data;
};

// Todos 가져오기
export const getTodos = async (token) => {
  const response = await axiosInstance.get('/todos', {
    headers: { Authorization: token },
  });
  return response.data;
};

// Todo 생성
export const createTodo = async (token, title, content) => {
  const response = await axiosInstance.post(
    '/todos',
    { title, content },
    {
      headers: { Authorization: token },
    }
  );
  return response.data;
};

// Todo 업데이트
export const updateTodo = async (token, id, title, content) => {
  const response = await axiosInstance.put(
    `/todos/${id}`,
    { title, content },
    {
      headers: { Authorization: token },
    }
  );
  return response.data;
};

// Todo 삭제
export const deleteTodo = async (token, id) => {
  await axiosInstance.delete(`/todos/${id}`, {
    headers: { Authorization: token },
  });
};