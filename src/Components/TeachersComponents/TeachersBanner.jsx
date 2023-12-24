import React from 'react'

const TeachersBanner = () => {
    return (
        <div className='container bg-black text-white p-10 my-10 m-auto rounded flex flex-wrap'>
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
                <p className="section-title">
                    Looking for another LMS?
                </p>
                <p className="section-content">
                    We want to empower everyone to do their best work in Canva. If there is another LMS you would like Canva to integrate with, please let us know.
                </p>
                <button className='bg-blue-500 text-white px-4 py-2 rounded'>Join Us</button>
            </div>


            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
                <img src="https://static-cse.canva.com/blob/1187128/banner.57099345.avif    z" alt="" srcset="" width="100%" />
            </div>
        </div>

    )
}

export default TeachersBanner