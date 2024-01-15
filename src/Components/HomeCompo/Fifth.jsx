import React from 'react';
import img from '../../Assets/img/fifth.png';

const Fifth = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap bg-blue-950 rounded-lg">
            <div className="lg:w-1/2 w-full lg:px-10 lg:py-32 mt-6 lg:mt-0">
              <h1 className="text-gray-100 text-3xl title-font font-medium mb-3">Techlearns for Teachers</h1>
              <p className="text-gray-100 leading-relaxed">
                Techlearns Academy empowers teachers with comprehensive training in graphic design, video editing, web and app development, and more. Our platform offers free, fun, and teacher-tested tools to engage students effectively. Benefit from customized solutions that seamlessly integrate technology, empowering educators to create an interactive and innovative learning experience.
              </p>
              <button className="text-white mt-3 bg-blue-500 border-0 py-2 px-16 focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:bg-blue-600 rounded text-lg">
                Button
              </button>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Fifth;
