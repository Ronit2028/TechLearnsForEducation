import React from 'react'

const WhyForStudents = () => {
  return (
    <div className="container p-5 my-5 flex flex-wrap m-auto">
        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
          <img src="https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif" alt="" srcset="" width="100%" />
        </div>
        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
          <div>
            <p className="section-title cera-med">
            Unleash Creativity, Master Technology
            </p>
            <p className="section-content text-base font-medium text-slate-700 mt-1">
            Welcome to Techlearns Academy's dedicated space for students – where creativity meets technology, and learning becomes an adventure!
            </p>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4">
              Join Now
              </button>
          </div>
        </div>
      </div>
  )
}

export default WhyForStudents