import React from 'react';

const TechLearnsFeatures = () => {
  return (
    <div className="w-4/5 p-5 my-5 flex flex-wrap m-auto ">
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
        <div>
          <p className="section-title cera-med">
            Transforming Education with TechLearns Features
          </p>
          <p className="section-content">
            At TechLearns Academy, we believe in revolutionizing education through cutting-edge features that empower both educators and students. Our premium Canva features transcend traditional learning boundaries, fostering a dynamic and engaging educational environment. From collaborative projects to visually appealing presentations, our platform enhances the teaching experience and boosts learning outcomes. By unlocking access to Canva's premium features for all students, we are ensuring that education is not just informative but also inspiring. Join us in reshaping the future of education – where creativity, collaboration, and innovation converge for a better learning experience.
          </p>
          <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Join Now</button>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img src="https://static-cse.canva.com/blob/1168085/Premiumfeatures2x.a7743f04.avif" alt="" srcSet="" width="100%" />
      </div>
    </div>
  );
}

export default TechLearnsFeatures;
