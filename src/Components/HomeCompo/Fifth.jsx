import React from 'react';
import img from '../../Assets/img/fifth.png';
import ToTeachersButton from '../../Layout/ToTeachersButton';

const Fifth = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="px-5 py-24 mx-auto">
          <div className="w-10/12 mx-auto flex flex-wrap bg-blue-950 rounded-lg">
            <div className="lg:w-1/2 w-full lg:px-10 lg:py-32 mt-6 lg:mt-0 md:p-5 sm:p-5 xs:p-5">
              <h1 className="text-gray-100 text-3xl title-font font-medium mb-3 cera-med">Techlearns for Teachers</h1>
              <p className="text-gray-100 leading-relaxed">
                Techlearns Academy empowers teachers with comprehensive training in graphic design, video editing, web and app development, and more. Our platform offers free, fun, and teacher-tested tools to engage students effectively.
              </p>
              <ToTeachersButton/>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-80 object-cover md:w-full object-center rounded" src={img} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Fifth;
