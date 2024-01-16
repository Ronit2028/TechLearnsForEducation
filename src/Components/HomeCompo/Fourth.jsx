import React from 'react';
import img from '../../Assets/img/fourth.png';
import ToStudentButton from '../../Layout/ToStudentButton';
import ToSchoolButton from '../../Layout/ToSchoolButton';

const Fourth = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className=" py-24 mx-auto">
          <div className="w-10/12 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full xl:h-auto h-full lg:h-64 object-cover object-center rounded" src={img} />
            <div className="lg:w-1/2 w-full lg:pl-20 lg:py-28 mt-6 lg:mt-0 flex-col justify-center flex">
              <h1 className="text-gray-900 text-3xl title-font cera-med mb-3">Techlearns For Your Classroom & Schools</h1>
              <p className="leading-relaxed">
                Design the best school year yet with Techlearns. Organize your ideas and engage your students with free, fun, and teacher-tested tools — from the first day to the final bell.
              </p>
              <div className="mt-5">
              <ToSchoolButton/>
              </div>
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
}

export default Fourth;
