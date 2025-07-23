import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo, updatetodo } from "../features/Todo/TodoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim() !== "") {
      dispatch(updatetodo({ id, text: editText }));
    }
    setEditId(null);
  };

  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold text-white mb-4">Todos</h1>
      <ul className="list-none space-y-4">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                className="text-black px-2 py-1 rounded w-full mr-4"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span className="text-white flex-1">{todo.text}</span>
            )}

            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => dispatch(removetodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
