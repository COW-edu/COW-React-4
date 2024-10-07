import "./TodoView.css";
import PropTypes from "prop-types";

const TodoView = ({ todos, deleteTodo }) => {
  return (
    <div className="ListWrapper">
      <p className="Title">✨ Today&apos;s todo ✨</p>
      <div className="TodoBox">
        {todos.map((todo, index) => (
          <div key={index} className="TodoRow">
            <p className="TodoName">{todo}</p>
            <button className="TodoDeleteBtn" onClick={() => deleteTodo(index)}>
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

TodoView.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoView;
