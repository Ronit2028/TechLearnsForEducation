import React from 'react';
import img from '../../Assets/img/fourth.png';

const Fourth = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img} />
            <div className="lg:w-1/2 w-full lg:pl-20 lg:py-28 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">Techlearns your Classroom</h1>
              <p className="leading-relaxed">
                Design the best school year yet with Techlearns. Organize your ideas and engage your students with free, fun, and teacher-tested tools — from the first day to the final bell.
              </p>
              <p className="leading-relaxed mt-4">
                How Techlearns Academy Can Benefit Your School:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Comprehensive training programs for teachers in graphic design, video editing, web and app development, and more.</li>
                <li>Customized solutions to seamlessly integrate technology into the academic environment.</li>
                <li>Empower your teaching staff with the latest pedagogical approaches and technological tools.</li>
                <li>Enhance the overall educational experience for both teachers and students.</li>
              </ul>
              <button className="text-white mt-3 bg-blue-500 border-0 py-2 px-16 focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:bg-blue-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fourth;
