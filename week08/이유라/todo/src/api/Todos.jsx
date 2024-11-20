import axios from "axios";
const BASE_URL = "http://localhost:8080";
const token = localStorage.getItem("authToken");

export const getTodos = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("인증 토큰이 없습니다.");
  }

  const res = await axios.get(`${BASE_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.data || !res.data.data) {
    throw new Error("서버에서 유효한 데이터를 반환하지 않았습니다.");
  }

  return res.data.data.map((todo) => {
    if (!todo.content) {
      console.warn(`Todo with id ${todo.id} has no content.`);
    }

    return {
      id: todo.id,
      title: todo.title || "Untitled",
      content: todo.content || "No content",
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    };
  });
};

export const postTodos = async (title, content) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("인증 토큰이 없습니다.");
  }

  // title과 content 유효성 검사
  if (!title.trim() || !content.trim()) {
    throw new Error("TODO의 제목과 내용을 모두 입력해야 합니다.");
  }

  try {
    const res = await axios.post(
      `${BASE_URL}/todos`,
      { title, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.data || !res.data.data) {
      throw new Error("서버에서 유효한 데이터를 반환하지 않았습니다.");
    }

    return res.data.data;
  } catch (err) {
    console.error("투두 추가에 실패했습니다!", err.message);
    throw err;
  }
};

// export const completeTodos = async (id) => {
//   try {
//     const res = await axios.put(`http://localhost:8080/todos/${id}`);
//     // console.log("체크 보낸 후:", res.data);
//     return res.data;
//   } catch (err) {
//     console.error("투두 완료 체크를 실패했습니다!", err);
//     throw err;
//   }
// };

export const contentUpdateTodos = async (id, title, content) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/todos/${id}`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.data || !res.data.data) {
      throw new Error("서버에서 유효한 데이터를 반환하지 않았습니다.");
    }

    return res.data.data;
  } catch (err) {
    console.log("투두 수정에 실패했습니다! ", err);
  }
};

export const deleteTodos = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log("삭제에 실패했습니다!", err);
  }
};
