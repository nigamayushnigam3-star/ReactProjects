import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400">MyApp</h1>
      <ul className="flex gap-8 text-lg">
        <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
        <li className="hover:text-blue-400 cursor-pointer transition">About</li>
        <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
      </ul>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
        Get Started
      </button>
    </nav>
  )
}

export default Navbar
