import PropTypes from "prop-types";

const TodoView = ({ todos, deleteTodo }) => {
  return (
    <div className="w-[500px] h-[380px] mt-2 p-2 rounded-2xl bg-blue-400">
      <p className="py-5 text-lg font-semibold">✨ Today&apos;s todo ✨</p>
      <div className="h-[270px] overflow-scroll hide-scrollbar">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-4/5 flex justify-between items-center p-2.5 my-5 mx-auto "
          >
            <p className="text-lg font-semibold">{todo.content}</p>
            <button
              className="bg-white border-none hover:bg-blue-100 px-4 py-1 rounded"
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
