import React, { useState } from "react";

function TodoItem({ item, deleteItem, toggleComplete, updateItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateItem(item.id, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(item.content);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex justify-between items-center bg-pastel-blue rounded-md px-3 py-2 shadow-sm hover:shadow-md text-sm ${item.isComplete ? 'bg-green-100' : ''}`}
    >
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="text-gray-800 px-2 py-1 rounded-md w-full mr-2 font-sans"
        />
      ) : (
        <span 
          className={`text-gray-800 ${item.isComplete ? 'line-through' : ''} font-sans`}
        >
          {item.content}
        </span>
      )}

      <div>
        {isEditing ? (
          <>
            <button 
              className="text-black mr-2 font-sans focus:outline-none" onClick={handleSave}
            >
              저장
            </button>
            <button 
              className="text-red-500 font-sans focus:outline-none" onClick={handleCancel}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              className="text-black bg-transparent hover:bg-gray-400 rounded-full transition-colors mr-2 font-sans focus:outline-none"
              onClick={() => toggleComplete(item.id)}
            >
              {item.isComplete ? '취소' : '완료'}
            </button>
            <button 
              className="text-black bg-transparent hover:bg-gray-400 mr-2 font-sans focus:outline-none" 
              onClick={handleEdit}
            >
              수정
            </button>
            <button
              className="text-black bg-transparent hover:bg-gray-400 rounded-full p-1 transition-colors text-xs font-sans focus:outline-none"
              onClick={() => deleteItem(item.id)}
            >
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;




