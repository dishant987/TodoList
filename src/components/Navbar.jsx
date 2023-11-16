import React, { useEffect, useState } from 'react'
import { useTodo } from '../context'

const Navbar = () => {
  const [theme, setTheme] = useState("light")
  const {DarkMode} = useTodo()


  // const darkMode = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }
  const Mode = ()=>{
    setTheme(theme === "dark" ? "light" : "dark")
    DarkMode(theme)
  }

  return (
    <div className='text-black font-extrabold p-5 mb-10  text-center shadow-2xl shadow-slate-400 dark:shadow-xl dark:shadow-purple-700 rounded-3xl'>
      <h1 className=' pb-5 text-3xl dark:text-white'>Todo List</h1>
      <span className='text-xl dark:text-white mr-1'>Dark Mode </span>
      <label className="relative inline-flex items-center cursor-pointer top-[5px] ">
        <input type="checkbox" value="" className="sr-only peer"  onClick={Mode} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
       
      </label>
    </div>
  )
}

export default Navbar