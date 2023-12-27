import React, { useState } from "react";
import { useTodo } from "../context";

const Todo = () => {
  const [todos, setTodo] = useState({
    name: "",
    todo: "",
  });

  const { name, todo } = todos;
  const { addTodo } = useTodo();

  const changeHand = (e) => {
    setTodo({ ...todos, [e.target.name]: e.target.value });
  };

  const Add = (e) => {
    e.preventDefault();
    if (!todos.name || !todos.todo) {
      alert("Please fill in the values");
      return;
    }
    addTodo({ name, todo, completed: false });
    setTodo({
      name: "",
      todo: "",
    });
  };
  return (
    <form className="flex" onSubmit={Add}>
      <input
        type="text"
        placeholder="name..."
        name="name"
        value={name}
        onChange={(e) => changeHand(e)}
        className="w-full border text-black dark:text-white font-semibold border-black rounded-l-lg placeholder:font-normal
       px-3 outline-none duration-150 bg-white/20 py-1.5 placeholder-black dark:placeholder-white"
      />
      <input
        type="text"
        placeholder="write todo..."
        name="todo"
        value={todo}
        onChange={(e) => changeHand(e)}
        className="w-full text-black dark:text-white border font-semibold border-black placeholder:font-normal
       px-3 outline-none duration-150 bg-white/20 py-1.5 placeholder-black dark:placeholder-white"
      />
      <button
        type="submit"
        className=" rounded-r-lg
       px-3 py-1 bg-green-700 text-white font-semibold hover:duration-500 hover:bg-green-500 shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default Todo;
