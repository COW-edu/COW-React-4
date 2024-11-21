import React, { useState } from "react";

function TodoItem({ item, deleteItem, toggleComplete, updateItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.content);

  const token = localStorage.getItem("token");

  if (!token) {
    console.error("유효한 토큰이 없습니다. 다시 로그인하세요.");
    alert("로그인이 필요합니다.");
    return null;
  }

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    try {
      await updateItem(item.id, editValue);
      setIsEditing(false);
    } catch (error) {
      console.error("아이템 수정 실패", error);
    }
  };

  const handleCancel = () => {
    setEditValue(item.content);
    setIsEditing(false);
  };

  const handleComplete = () => toggleComplete(item.id);

  const handleDelete = () => deleteItem(item.id);

  return (
    <div
      className={`flex justify-between items-center rounded-md px-3 py-2 shadow-sm hover:shadow-md text-sm transition-colors ${
        item.isComplete ? "bg-green-100" : "bg-pastel-blue"
      }`}
    >
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={handleComplete}
        className="mr-4"
      />

      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="text-gray-800 px-2 py-1 rounded-md w-full mr-2 font-sans"
        />
      ) : (
        <span
          className={`text-gray-800 ${item.isComplete ? "line-through" : ""} font-sans`}
        >
          {item.content}
        </span>
      )}

      <div className="flex items-center space-x-2">
        {isEditing ? (
          <>
            <button
              className="text-black mr-2 font-sans focus:outline-none"
              onClick={handleSave}
            >
              저장
            </button>
            <button
              className="text-red-500 font-sans focus:outline-none"
              onClick={handleCancel}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              className="text-black bg-transparent hover:bg-gray-400 rounded-full transition-colors mr-2 font-sans focus:outline-none"
              onClick={handleEdit}
            >
              수정
            </button>
            <button
              className="text-black bg-transparent hover:bg-gray-400 rounded-full p-1 transition-colors text-xs font-sans focus:outline-none"
              onClick={handleDelete}
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








