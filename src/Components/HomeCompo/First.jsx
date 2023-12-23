import React from 'react'
import vdo from '../../Assets/img/EducationHero_WebOptimised.mp4'
const First = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 pt-24  w-1/2 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12 ">
                        <h1 class="sm:text-6xl text-2xl leading-loose font-medium title-font mb-4 text-gray-900 cera-med ">Inspiring
                            teachers and

                            engaging students</h1>
                        <p class="px-12 leading-loose mx-auto  text-base cera-med">Create and personalize lesson plans, infographics, posters, video, and more. 100% free for teachers and students at eligible schools.</p>




                        <section class="text-gray-600 body-font">
                            <div class="container px-5 pt-24 pb-12 mx-auto">
                                <div class="flex flex-wrap -m-4">
                                    <div class="p-2 lg:w-1/3">
                                        <div class="h-full bg-gray-200 bg-opacity-75 px-2 py-8 rounded-lg overflow-hidden text-center relative">
                                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Teachers</h1>
                                            <button class="text-white bg-blue-500 border-0 py-2 px-16 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-blue-600 rounded text-lg">Button</button>


                                        </div>
                                    </div>
                                    <div class="p-2 lg:w-1/3">
                                        <div class="h-full bg-gray-200 bg-opacity-75 px-2 py-8  rounded-lg overflow-hidden text-center relative">
                                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Schools
                                            </h1>
                                            <button class="text-white bg-blue-500 border-0 py-2 px-16 focus:outline-none hover:bg-blue-600 rounded text-lg transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Button</button>


                                        </div>
                                    </div>
                                    <div class="p-2 lg:w-1/3">
                                        <div class="h-full bg-gray-200 bg-opacity-75 px-2 py-8  rounded-lg overflow-hidden text-center relative">
                                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Students</h1>
                                            <button class="text-white bg-blue-500 border-0 py-2 px-16 focus:outline-none hover:bg-blue-600 rounded text-lg transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Button</button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>

                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container w-2/4  mx-auto">
                    <div class="flex  justify-center w-full  ">
                        <video controls>
                            <source
                                src={vdo}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>

                    </div></div></section>

        </>
    )
}

export default First
