import React from 'react'
import SchoolAccordionSection from '../SchoolComponents/SchoolAccordionSection'
const Third = () => {
  return (
    <div className='w-10/12 my-5 flex flex-wrap m-auto'>
        
        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 mb-5 md:pr-10 flex flex-col justify-center">
            <p className="section-title pb-5 cera-med">
                What We Provide
            </p>
            <SchoolAccordionSection/>
        </div>

        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 mb-5">
            <img src="https://static-cse.canva.com/blob/1168078/Section-4GraphicAsset-C.7ba08877.avif" alt="" srcset="" width="100%" />
        </div>
    </div>
  )
}

export default Third