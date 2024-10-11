import "./TodoView.css";
import PropTypes from "prop-types";

const TodoView = ({ todos, deleteTodo }) => {
  return (
    <div className="ListWrapper">
      <p className="Title">✨ Today&apos;s todo ✨</p>
      <div className="TodoBox">
        {todos.map((todo) => (
          <div key={todo.id} className="TodoRow">
            <p className="TodoName">{todo.content}</p>
            <button
              className="TodoDeleteBtn"
              onClick={() => deleteTodo(todo.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

TodoView.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoView;
