import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoList({ todos }) {
   
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todos.todo)
  const [todoName, setTodoName] = useState(todos.name)
    const {updateTodo,deleteTodo,toggleComplete} = useTodo()

    const editTodo = ()=>{
      updateTodo(todos.id,{...todos,name:todoName,},{...todos,todo:todoMsg})
      setIsTodoEditable(false)
    }
    console.log("todolist.jsx");
    console.log(todos);
    const toggleCompleted = ()=>{
      toggleComplete(todos.id)
    }

    const delTodo = ()=>{
        todos.completed ? deleteTodo(todos.id) : alert("Select check box")
    }
  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todos.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todos.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todos.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent text-black rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todos.completed ? "line-through" : ""}`}
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todos.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todos.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={delTodo}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoList;