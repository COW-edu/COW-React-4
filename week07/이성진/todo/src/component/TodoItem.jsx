import React from "react";

function TodoItem({ item, deleteItem, toggleComplete }) {
  return (
    <div
      className={`flex justify-between items-center bg-pastel-blue rounded-md px-3 py-2 shadow-sm hover:shadow-md text-sm ${item.isComplete ? 'bg-green-100' : ''}`}
    >
      <span
        className={`text-gray-800 truncate ${item.isComplete ? 'line-through' : ''}`}
      >
        {item.content}
      </span>
      <div>
        <button
          className="text-black bg-transparent hover:bg-gray-400 p-1 transition-colors text-xs mr-2"
          onClick={() => toggleComplete(item.id)}
        >
          {item.isComplete ? '취소' : '완료'}
        </button>
        <button
          className="text-black bg-transparent hover:bg-slate-200 rounded-full p-1 transition-colors text-xs"
          onClick={() => deleteItem(item.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

