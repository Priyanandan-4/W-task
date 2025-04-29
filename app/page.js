"use client"

import { useState } from "react"

export default function Home() {
  const [director, setDirector] = useState()
  const [movie, setMovie] = useState()
  const [todos, setTodos] = useState([])
  const handleSubmit = () => {
  setTodos([...director,todos])
  setDirector('')

  }

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-sans pt-10 pb-8">Director and Movies</h1>

      <form onSubmit={handleSubmit} className="w-full ">
        <div className="flex items-center gap-4 mb-4">
          <input
            placeholder="Director Name"
            value={director}
            className="w-[700px] p-3 bg-gray-200 border border-gray-300"
            onChange={(e) => setDirector(e.target.value)}
          />

          <input
            placeholder="Movie Name"
            value={movie}
            className="w-[700px] p-3 bg-gray-200 border border-gray-300"
            onChange={(e) => setMovie(e.target.value)}
          />

          <button type="submit" className="bg-green-700 text-white font-medium p-3 px-6">
            add
          </button>
        </div>
      </form>

      <div className="w-full ">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-4 mb-4">
            <div className="w-[700px] p-3 bg-white border border-gray-300">{todo}</div>
            <div className="w-[700px] p-3 bg-white border border-gray-300">{todo}</div>
            <div className="p-3 px-3 bg-red-700">
            
              remove
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
