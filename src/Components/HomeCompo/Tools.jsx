import React from 'react'
import iconc1 from '../../Assets/img/icon-1.png'
import iconc2 from '../../Assets/img/icon-2.png'
import iconc3 from '../../Assets/img/icon-3.png'


const Tools = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Visual communication and collaboration is an important tool for learning
</h1>
      <div className="flex mt-6 justify-center">
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img className='rounded-full ' src={iconc1} alt=''/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Increase engagement with original content</h2>
          <p className="leading-relaxed text-base">Choose from a library of resources, from lesson plans to reports and posters. Spark engagement with gifs, videos, animations, and music.</p>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img className='rounded-full ' src={iconc2} alt=''/>

        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Deliver impactful feedback in one place
</h2>
          <p className="leading-relaxed text-base">Reach and motivate students wherever they are with real-time feedback. Share work as assignments directly through Canva or via your LMS.
</p>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img className='rounded-full ' src={iconc3} alt=''/>

        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Help students build critical skills
</h2>
          <p className="leading-relaxed text-base">Students can use Canva to demonstrate learning through different formats — group projects, videos, posters, and more.
</p>
        
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
  )
}

export default Tools
