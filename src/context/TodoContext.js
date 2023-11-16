import React, { createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            name:"name",
            todo: "systumm",
            completed: false
        }
    ],
    Theme:'light',
    addTodo: (name,todo) => { },
    updateTodo: (id,name,todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
    DarkMode: (theme)=>{
  }
})
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

