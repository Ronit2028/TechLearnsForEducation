import React from 'react'
import { Link } from 'react-router-dom'
const ToStudentButton = () => {
  return (
    <Link to="/students">
    <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:bg-blue-600 rounded text-lg mx-2 mb-2 sm:mb-0">
                Students
              </button>
    </Link>
  )
}

export default ToStudentButton