import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Col-1 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Getting Started
          </div>
          <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Installation
          </a>
          {/* ... (more links) */}
        </div>

        {/* Col-2 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Core Concepts
          </div>
          <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Utility-First
          </a>
          {/* ... (more links) */}
        </div>

        {/* Col-3 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Customization
          </div>
          <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Configuration
          </a>
          {/* ... (more links) */}
        </div>

        {/* Col-3 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>
          {/* ... (more links) */}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            © Copyright 1998-year. All Rights Reserved.
          </div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer