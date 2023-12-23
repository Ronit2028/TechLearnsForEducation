import React from 'react'
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../Views/Home';
import About from '../Views/About';
import ContactUs from '../Views/ContactUs'
import HigherEducation from '../Views/HigherEducation'
import Schools from '../Views/Schools'
import Students from '../Views/Students'
import Teachers from '../Views/Teachers'
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-black text-lg font-semibold">
            Your Logo
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
         <Link to='/about-us' className='text-black'>About Us</Link>
         <Link to='/students' className='text-black'>Students</Link>
         <Link to='/teachers' className='text-black'>Teachers</Link>
         <Link to='/schools' className='text-black'>Schools</Link>
         <Link to='/higher-education' className='text-black'>Higher Education</Link>
         <Link to='/contact' className='text-black'>Contact Us</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-gray-800 p-4">
            <a href="#" className="block text-white mb-2">
              Home
            </a>
            <a href="#" className="block text-white mb-2">
              About
            </a>
            <a href="#" className="block text-white mb-2">
              Services
            </a>
            <a href="#" className="block text-white">
              Contact
            </a>
          </div>
        )}
      </div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/higher-education' element={<HigherEducation/>} />
          <Route path='/schools' element={<Schools/>} />
          <Route path='/students' element={<Students/>} />
          <Route path='/teachers' element={<Teachers/>} />
      </Routes>
    </nav>

  )
}

export default Navigation