'use client'

import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

export default function Navbar() {
  const [showMainMenu, setShowMainMenu] = useState(false)

  function handleClickMenuBtn() {
    setShowMainMenu((currentState) => {
      return !currentState
    })
  }

  return (
    <nav className="p-6 bg-black text-white">
      <div className="flex justify-between">
        <a href="/">Dio Dziban</a>
        <button onClick={handleClickMenuBtn}>
          <FaBars />
        </button>
      </div>
      {showMainMenu && (
        <div className="flex flex-col items-center mt-8 gap-2">
          <a href="/experience">Experience</a>
          <a href="/projects">Projects</a>
          <a href="/technologies">Technologies</a>
          <a href="/blog">Blog</a>
        </div>
      )}
    </nav>
  )
}
