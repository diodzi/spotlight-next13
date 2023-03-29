'use client'

import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'

const MENU_ITEMS = ['Experience', 'Projects', 'Blog', 'Contact']

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
          {MENU_ITEMS.map((item) => {
            return (
              <Link
                href={`/${item.toLowerCase()}`}
                onClick={handleClickMenuBtn}
              >
                {item}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
