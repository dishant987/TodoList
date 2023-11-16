import React, { useState } from 'react'
import { useTodo } from '../context'

const Todo = () => {

  const [todos, setTodo] = useState({
    name: '',
    todo: ''
  })

  const { name, todo } = todos
  const { addTodo } = useTodo()

  const changeHand = (e) => {
    setTodo({ ...todos, [e.target.name]: e.target.value })
  }

  const Add = (e) => {
    e.preventDefault()

    if (!todos) return
    addTodo({ name, todo, completed: false })
    setTodo('')
  }
  return (
    <form className='flex' onSubmit={Add}>
      <input type="text"
        placeholder='Write Todo...'
        name='todo'
        value={todo}
        onChange={(e) => changeHand(e)}
        className='w-full text-black border font-semibold border-black rounded-l-lg
       px-3 outline-none duration-150 bg-white/20 py-1.5 placeholder-black'
      />
      <input type="text"
        placeholder='Name...'
        name='name'
        value={name}
        onChange={(e) => changeHand(e)}
        className='w-full border text-black font-semibold border-black rounded-l-lg
       px-3 outline-none duration-150 bg-white/20 py-1.5 placeholder-black'
      />

      <button type="submit" className=' rounded-r-lg
       px-3 py-1 bg-green-500 text-white shrink-0'>Add</button>
    </form>
  )
}

export default Todo