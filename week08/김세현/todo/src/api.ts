import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/login`, { email, password });
  return response.data;
};

export const signUp = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/create`, { email, password });
  return response.data;
};

export const getTodos = async (token: string) => {
  const response = await axios.get(`${API_URL}/todos`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const createTodo = async (token: string, title: string, content: string) => {
  const response = await axios.post(`${API_URL}/todos`, { title, content }, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const updateTodo = async (token: string, id: string, title: string, content: string) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, { title, content }, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const deleteTodo = async (token: string, id: string) => {
  await axios.delete(`${API_URL}/todos/${id}`, {
    headers: { Authorization: token },
  });
};
