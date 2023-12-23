import React from 'react'

const TechLearnsFeatures = () => {
    return (
        <div className="w-4/5 p-5 my-5 flex flex-wrap m-auto">
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
                <div>
                    <p className="section-title cera-med">
                        Premium Canva features for every student
                    </p>
                    <p className="section-content">
                        Empower students by investing in learning outcomes and teaching experience.

                        Unlock access to Canva's premium features for all of your students. Pricing is based on your institution's size. </p>
                    <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Join Now</button>
                </div>
            </div>

            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
                <img src="https://static-cse.canva.com/blob/1168085/Premiumfeatures2x.a7743f04.avif" alt="" srcset="" width="100%" />
            </div>

        </div>
    )
}

export default TechLearnsFeatures