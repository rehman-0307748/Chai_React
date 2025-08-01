import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
// or wherever you defined useTodo

function TodoForm() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({
      id: Date.now(),
      todo: todo,
      completed: false,
    });

    setTodo("");
  };

  return (
    <form className="flex" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
