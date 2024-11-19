import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/todos`);
    return res.data;
  } catch (err) {
    console.log("리스트를 불러올 수 없습니다.", err);
  }
};
export const postTodos = async (newTodo) => {
  try {
    const res = await axios.post(`${BASE_URL}/todos`, { content: newTodo });
    return res.data;
  } catch (err) {
    console.log("투두 추가에 실패했습니다! ", err);
  }
};

export const completeTodos = async (id) => {
  try {
    const res = await axios.put(`http://localhost:8080/todos/${id}`);
    // console.log("체크 보낸 후:", res.data);
    return res.data;
  } catch (err) {
    console.error("투두 완료 체크를 실패했습니다!", err);
    throw err;
  }
};

export const contentUpdateTodos = async (id, content, isComplete) => {
  try {
    // console.log("보내기전:", isComplete);
    const res = await axios.put(`${BASE_URL}/todos/contents/${id}`, {
      content,
      isComplete,
    });
    // console.log("보낸 후: ", isComplete);
    return res.data;
  } catch (err) {
    console.log("투두 수정에 실패했습니다! ", err);
  }
};

export const deleteTodos = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/todos/${id}`);
  } catch (err) {
    console.log("삭제에 실패했습니다!", err);
  }
};
