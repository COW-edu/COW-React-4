import React from "react";

function TodoItem({ item, deleteItem }) {
  return (
    <div className="flex justify-between items-center bg-pastel-blue rounded-md px-3 py-2 shadow-sm hover:shadow-md text-sm">
      <span className="text-gray-800 truncate">{item.text}</span>
      <button
        className="text-black bg-transparent hover:bg-slate-200 rounded-full p-1 transition-colors text-xs"
        onClick={() => deleteItem(item.id)}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;

