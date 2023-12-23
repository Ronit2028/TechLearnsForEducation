import React from 'react'

const SchoolHeader = () => {
  return (
    <div className="w-4/5 p-5 my-5 flex flex-wrap m-auto">
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
                <div>
                    <p className="section-title cera-med">
                    Canva for Schools and Districts — Free for K-12
                    </p>
                    <p className="section-content">
                    Empower your teachers, students, and staff to collaborate and communicate visually with Canva for Education, 100% free for primary and secondary schools.
                    </p>
                    <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Join Now</button>
                </div>
            </div>

            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
                <img src="https://static-cse.canva.com/blob/1117534/Hero_asset2x.d54bb566.avif" alt="" srcset="" width="100%" />
            </div>

        </div>
  )
}

export default SchoolHeader