import React from 'react'
import SchoolAccordionSection from '../SchoolComponents/SchoolAccordionSection'
const Third = () => {
  return (
    <div className='w-4/5 p-5 my-5 flex flex-wrap m-auto'>
        
        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-10">
            <p className="section-title pb-5">
                How Does It Work
            </p>
            <SchoolAccordionSection/>
        </div>

        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
            <img src="https://static-cse.canva.com/blob/1168078/Section-4GraphicAsset-C.7ba08877.avif" alt="" srcset="" width="100%" />
        </div>
    </div>
  )
}

export default Third