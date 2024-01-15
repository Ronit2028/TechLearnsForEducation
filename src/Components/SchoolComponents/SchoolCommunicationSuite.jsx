import React from 'react'
import SchoolAccordionSection from './SchoolAccordionSection'

const SchoolCommunicationSuite = () => {
  return (
    <div className='w-4/5 p-5 my-8 flex flex-wrap m-auto'>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img className='rounded-md' src="https://static-cse.canva.com/blob/1168078/Section-4GraphicAsset-C.7ba08877.avif" alt="" srcset="" width="80%" />
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-10">
        <p className="section-title pb-5 text-lg font-extrabold">
          How Does It Work
        </p>
        <SchoolAccordionSection />
      </div>
    </div>
  )
}

export default SchoolCommunicationSuite
