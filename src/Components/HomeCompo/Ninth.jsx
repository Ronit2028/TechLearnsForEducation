import React from 'react';
import sideimg from '../../Assets/img/banner-footer-desktop.4e02a0d0.avif';

const Ninth = () => {
  return (
    <>
      <div className="lg:w-4/5 mx-auto rounded-lg py-5">
        <div className="flex flex-wrap w-full md:pt-16 md:pb-16 relative mb-4">
          <img alt="" className="w-full object-cover h-full object-center overflow-visible rounded-lg block absolute inset-0" src={sideimg} />
          <div className="text-center md:text-start relative z-10 w-full md:w-3/5 px-4 md:px-12">
            <h1 className="text-2xl md:text-5xl text-gray-900 font-medium title-font mb-2 pt-12 pb-2">Ready to get started with Techlearns for Education?</h1>
            <p className="leading-relaxed mb-4">Supercharge your educational content this year using Techlearns!</p>
            <button className="text-gray-900 mt-4 mr-2 bg-blue-200 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Teachers Resources</button>
            <button className="text-gray-900 mt-4 bg-gray-200 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Students Resources</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ninth;
