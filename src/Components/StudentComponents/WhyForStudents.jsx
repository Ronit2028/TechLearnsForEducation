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
              Free template library
            </p>
            <p className="section-content">
              Canva has thousands of free, high quality templates on any subject or topic imaginable, to help you ace your studies. No need to start from scratch!

              Check out our top templates for students below.
            </p>
            <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Join Now</button>
          </div>
        </div>
      </div>
  )
}

export default WhyForStudents