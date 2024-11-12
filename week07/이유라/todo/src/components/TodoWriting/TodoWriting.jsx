import { useState } from "react";
import PropTypes from "prop-types";

const TodoWriting = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const AddTodo = () => {
    if (content.trim()) {
      addTodo(content);
      setContent("");
    }
  };

  return (
    <div className="w-full h-[100px] flex justify-evenly items-center bg-blue-400 rounded-2xl">
      <input
        className="w-[300px] p-2 text-lg border border-gray-300 rounded focus:outline-none focus:border-white"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="오늘의 할 일을 입력해 주세요"
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
