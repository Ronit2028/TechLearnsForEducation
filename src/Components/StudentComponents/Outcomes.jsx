import React from 'react'

const Outcomes = () => {
    return (

        <div className="container p-5 my-5 flex flex-wrap m-auto">

            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
                <div>
                    <p className="section-title cera-med pb-5">
                        Free template library
                    </p>
                    <p className="section-content pb-4">
                        Regardless of how you need to present to your group or class, we’ve got you covered. You can present live (in-person or virtually), or record yourself talking over your presentation, and share. We’ve got an amazing collection of free, quality templates for you to put your own unique touches on.

                    </p>
                    <p className="section-content pb-4">
                        You can also download your presentation to PowerPoint, or even publish it as a responsive website, to make it even easier to access.

                    </p>
                    <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Join Now</button>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
                <img src="https://static-cse.canva.com/blob/785760/Studentpresenting.d8a50281.avif" alt="" srcset="" width="100%" />
            </div>
        </div>

    )
}

export default Outcomes