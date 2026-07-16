import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-10 mt-10">
      <div className="flex justify-between items-start flex-wrap gap-8">

        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">MyApp</h2>
          <p className="text-gray-400 text-sm">Building awesome things with React.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Pages</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-400 cursor-pointer transition">About</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">Instagram</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Twitter</li>
            <li className="hover:text-blue-400 cursor-pointer transition">LinkedIn</li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 MyApp. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
