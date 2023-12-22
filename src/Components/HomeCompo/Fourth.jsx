import React from 'react'
import img from '../../Assets/img/fourth.png'

const Fourth = () => {
    return (
        <>

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img} />
                        <div className="lg:w-1/2 w-full lg:pl-20 lg:py-28 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">Canva your Classroom</h1>

                            <p className="leading-relaxed">Design the best school year yet with Canva. Organise your ideas and engage your students with free, fun, and teacher-tested tools — from the first day to the final bell.
                            </p>
                            <button class="text-white mt-3 bg-blue-500 border-0 py-2 px-16 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-blue-600 rounded text-lg">Button</button>


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Fourth
