import PropTypes from "prop-types";
import { useState } from "react";

const TodoView = ({ todos, deleteTodo, updateTodo, checkTodo }) => {
  const [isEdited, setIsEdited] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  const editTodo = (todo) => {
    setIsEdited(todo.id);
    setEditedContent(todo.content);
  };

  const editSaving = async (id, isComplete) => {
    await updateTodo(id, editedContent, isComplete);
    setIsEdited(null);
  };

  return (
    <div className="w-[500px] h-[380px] mt-2 p-2 rounded-2xl bg-blue-400">
      <p className="py-5 text-lg font-semibold">✨ Today&apos;s todo ✨</p>
      <div className="h-[270px] overflow-scroll hide-scrollbar">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-4/5 flex justify-between items-center p-2.5 my-5 mx-auto "
          >
            {isEdited === todo.id ? (
              <input
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="text-lg font-semibold"
                onClick={() => checkTodo(todo.id)}
                checked={todo.isComplete}
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  className="w-5 h-5 -ml-10 ppearance-none rounded-md focus:outline-none  "
                  checked={todo.isComplete}
                  onChange={() => checkTodo(todo.id)}
                />
                <p className="text-lg font-semibold -ml-5">{todo.content}</p>
              </>
            )}
            <div>
              {isEdited === todo.id ? (
                <>
                  <button
                    className="bg-white border-none hover:bg-blue-100 px-4 py-1 rounded mr-4"
                    onClick={() => editSaving(todo.id, todo.isComplete)}
                  >
                    저장
                  </button>
                  <button
                    className="bg-white border-none hover:bg-blue-100 px-4 py-1 rounded"
                    onClick={() => setIsEdited(null)}
                  >
                    취소
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-white border-none hover:bg-blue-100 px-4 py-1 rounded mr-4"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    삭제
                  </button>
                  <button
                    className="bg-white border-none hover:bg-blue-100 px-4 py-1 rounded"
                    onClick={() => editTodo(todo)}
                  >
                    수정
                  </button>
                </>
              )}
            </div>
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
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired,
};

export default TodoView;
