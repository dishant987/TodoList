import { useEffect, useState } from "react"
import { TodoProvider } from "./context"
import Todo from "./components/Todo"
import TodoList from "./components/TodoList"
import Navbar from "./components/Navbar"


function App() {
  const [todos, setTodos] = useState([])
  const [Theme, setTheme] = useState()
  const addTodo = (name, todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...name, ...todo }])
  }

  const DarkMode = (theme) => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const updateTodo = (id, name, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (
      prevTodo.id === id ? name : prevTodo,
      prevTodo.id === id ? todo : prevTodo
    )))
  }
  // console.log(todos);  

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  useEffect(() => {
    if (Theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [Theme])
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (

    <TodoProvider value={{ DarkMode, todos, Theme, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div id="dark"  className="min-h-screen py-8 dark:bg-slate-800 ">
        <Navbar />
        <div className="  w-full max-w-2xl mx-auto
          dark:shadow-xl dark:shadow-purple-700 shadow-2xl shadow-slate-500 rounded-lg m-4 p-7 
        ">
          <h1 className="text-2xl font-bold text-center mb-8 mt-3 dark:text-white text-black">
            Manage Your Todos

          </h1>

          <div className="mb-4">
            <Todo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => (
                <div key={todo.id}
                  className=" w-full"
                >
                  <TodoList todos={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App