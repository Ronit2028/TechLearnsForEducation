import React from 'react';
import vdo from '../../Assets/img/EducationHero_WebOptimised.mp4';

const First = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-24 pb-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-4xl text-2xl leading-loose font-medium title-font mb-4 text-gray-900 cera-med">
                            Empowering educators and captivating students
                        </h1>
                        <p className="px-4 leading-loose mx-auto text-base cera-med">
                            Craft personalized lesson plans, infographics, posters, videos, and more. Available for free to teachers and students in eligible schools.
                        </p>
                        {/* Call-to-Action Buttons */}
                        <div className="flex justify-center mt-8">
                            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:bg-blue-600 rounded text-lg mx-2">
                                Educators
                            </button>
                            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mx-2">
                                Educational Institutions
                            </button>
                            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mx-2">
                                Learners
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="flex justify-center w-full">
                        {/* Video Player */}
                        <video controls className="w-full max-w-2xl mx-auto">
                            <source src={vdo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
        </>
    );
}

export default First;
