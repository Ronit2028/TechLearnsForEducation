import React from 'react';

const SchoolHeader = () => {
  return (
    <div className="w-4/5 p-5 my-5 flex flex-wrap m-auto">
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
        <div>
          <p className="section-title cera-med">
            Elevate Learning with Techlearns Academy for Schools
          </p>
          <p className="section-content">
            Techlearns Academy partners with schools to revolutionize education through innovative and tech-driven programs. Empower your educators, engage students, and transform your school's learning experience with our 100% free offerings for primary and secondary schools.
          </p>
          <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>
            Join the Techlearns Community
          </button>
        </div>
      </div>

      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img src="https://static-cse.canva.com/blob/1117534/Hero_asset2x.d54bb566.avif" alt="Techlearns Academy" width="100%" />
      </div>
    </div>
  );
};

export default SchoolHeader;
