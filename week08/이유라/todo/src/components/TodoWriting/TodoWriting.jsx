import { useState } from "react";
import PropTypes from "prop-types";

const TodoWriting = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const AddTodo = () => {
    if (title.trim() && content.trim()) {
      addTodo(title, content);
      setTitle("");
      setContent("");
    } else {
      alert("제목과 내용을 모두 입력해 주세요.");
    }
  };

  return (
    <div className="w-full h-[200px] flex flex-col justify-evenly items-center bg-blue-400 rounded-2xl p-4">
      <input
        className="w-[300px] p-2 text-lg border border-gray-300 rounded focus:outline-none focus:border-white mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="할 일의 제목을 입력해 주세요"
      />
      <textarea
        className="w-[300px] p-2 text-lg border border-gray-300 rounded focus:outline-none focus:border-white mb-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일의 내용을 입력해 주세요"
        rows="2"
      />
      <button
        className="bg-white border-none hover:bg-blue-100 px-4 py-2 rounded"
        onClick={AddTodo}
      >
        추가
      </button>
    </div>
  );
};

TodoWriting.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoWriting;
