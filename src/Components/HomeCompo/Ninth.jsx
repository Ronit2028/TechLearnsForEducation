import React from 'react'
import sideimg from '../../Assets/img/banner-footer-desktop.4e02a0d0.avif'

const Ninth = () => {
  return (
    <>
     <div class="lg:w-4/5 mx-auto rounded-lg px-5 ">
      <div class="flex flex-wrap w-full  pt-16  pb-16 relative mb-4">
        <img alt="" class="w-full object-cover h-full object-center overflow-visible rounded-lg  block absolute inset-0" src={sideimg}/>
        <div class="text-start relative z-10 w-full px-12 ">
          <h1 class="text-5xl w-3/5 text-gray-900 font-medium title-font mb-2 pt-12 pb-2 ">Ready to get started with Canva for Education?</h1>
          <p class="leading-relaxed mb-4">Super charge your educational content this year using Canva!</p>
          <button class="text-gray-900 mt-4 mr-2 bg-blue-200 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-blue-600 rounded text-sm">Teachers Resources</button>
          <button class="text-gray-900 mt-4 bg-gray-200 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-blue-600 rounded text-sm">Teachers Resources</button>

          
        </div>
        </div>
        </div>
    </>
  )
}

export default Ninth
