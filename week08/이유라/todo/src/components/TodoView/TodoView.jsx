import PropTypes from "prop-types";
import { useState } from "react";

const TodoView = ({ todos, deleteTodo, updateTodo, setIsAuth }) => {
  const [isEdited, setIsEdited] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const editTodo = (todo) => {
    setIsEdited(todo.id);
    setEditedTitle(todo.title);
    setEditedContent(todo.content);
  };

  const editSaving = async (id) => {
    if (!editedTitle.trim() || !editedContent.trim()) {
      alert("제목과 내용을 모두 입력해야 합니다.");
      return;
    }
    await updateTodo(id, editedTitle, editedContent);
    setIsEdited(null);
  };

  const handleLogout = () => {
    window.location.href = "/auth";
    localStorage.removeItem("authToken");
    setIsAuth(false);
  };
  return (
    <>
      <div className="w-[500px] h-[380px] mt-2 p-4 rounded-2xl bg-blue-400 shadow-lg">
        <p className="py-3 text-xl font-semibold text-center text-white">
          ✨ Today&apos;s todo ✨
        </p>
        <div className="h-[270px] overflow-scroll hide-scrollbar">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center p-4 my-4 bg-white rounded-lg shadow-md w-11/12 mx-auto"
            >
              {isEdited === todo.id ? (
                <div className="flex-1 mx-4">
                  <input
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="text-lg font-semibold w-full mb-2 px-2 py-1 border border-gray-300 rounded"
                    placeholder="제목을 수정해 주세요"
                  />
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="text-lg font-semibold w-full px-2 py-1 border border-gray-300 rounded"
                    placeholder="내용을 수정해 주세요"
                    rows="2"
                  />
                </div>
              ) : (
                <div className="flex-1 mx-4">
                  <p className="text-lg font-bold text-gray-800">
                    {todo.title}
                  </p>
                  <p className="text-sm text-gray-600">{todo.content}</p>
                </div>
              )}

              <div className="flex space-x-2">
                <button
                  className="bg-red-500 text-white font-medium px-3 py-1 rounded hover:bg-red-600 transition"
                  onClick={() =>
                    isEdited === todo.id
                      ? editSaving(todo.id)
                      : deleteTodo(todo.id)
                  }
                >
                  {isEdited === todo.id ? "저장" : "삭제"}
                </button>

                <button
                  className="bg-blue-500 text-white font-medium px-3 py-1 rounded hover:bg-blue-600 transition"
                  onClick={() =>
                    isEdited === todo.id ? setIsEdited(null) : editTodo(todo)
                  }
                >
                  {isEdited === todo.id ? "취소" : "수정"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3" onClick={() => handleLogout()}>
        로그아웃
      </p>
    </>
  );
};

TodoView.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  setIsAuth: PropTypes.func.isRequired,
};

export default TodoView;
