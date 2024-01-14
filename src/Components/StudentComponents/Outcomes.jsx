import React from 'react';

const Outcomes = () => {
  return (
    <div className="container p-5 my-5 flex flex-wrap m-auto">
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
        <div>
          <p className="section-title cera-med pb-5">
            Join the Techlearns Community:
          </p>
          <p className="section-content pb-4">
            Techlearns for Students is more than just courses; it's a community. Connect with like-minded peers, share experiences, and collaborate on projects. Join us in fostering an environment where learning is continuous.
          </p>
          <p className="section-content pb-4">
            Enroll Now and Transform Your Tech Journey!
          </p>
          <p className="section-content pb-4">
            Ready to embark on a journey of knowledge and discovery? Enroll in Techlearns for Students and unlock doors to a world of possibilities. At Techlearns Academy, we believe in empowering students to shape the future through technology.
          </p>
          <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Join Now</button>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img src="https://static-cse.canva.com/blob/785760/Studentpresenting.d8a50281.avif" alt="" srcSet="" width="100%" />
      </div>
    </div>
  );
}

export default Outcomes;
