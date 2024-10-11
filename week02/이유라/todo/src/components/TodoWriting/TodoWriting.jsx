import { useState } from "react";
import PropTypes from "prop-types";
import "./TodoWriting.css";

const TodoWriting = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const AddNewTodo = () => {
    addTodo(content);
    setContent("");
  };

  return (
    <div className="WritingWrapper">
      <input
        className="TodoInput"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="오늘의 할 일을 입력해주세요"
      />
      <button className="AddBtn" onClick={AddNewTodo}>
        추가
      </button>
    </div>
  );
};

TodoWriting.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoWriting;
