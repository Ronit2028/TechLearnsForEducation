import React from 'react'

const HEheader = () => {
    return (
        <div className="w-4/5 p-5 my-5 flex flex-wrap m-auto">
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
                <div>
                    <p className="section-title cera-med">
                        TechLearns For Your Campus
                    </p>
                    <p className="section-content">
                        Empower everyone on your campus to create, collaborate, and communicate with Canva. Get started with Canva for Teams to unlock our premium collaboration features, or contact us to bring your students into a wider campus rollout.
                    </p>
                    <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Join Now</button>
                </div>
            </div>

            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
                <img src="https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif" alt="" srcset="" width="100%" />
            </div>

        </div>
    )
}

export default HEheader