import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeachersAccordion = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sections = [
        {
            title: 'Engaging Course Content',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1117535/School_leaders_administrators2x.33984be3.avif" alt="" srcset="" width={"100%"} />
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Customizable Modules</h2>
                        <p>Design customized learning modules tailored to your teaching style and your students' needs.</p>
                        <h2 className="text-2xl font-bold mb-4">Interactive Lessons</h2>
                        <p>Create engaging lessons with multimedia content, interactive quizzes, and collaborative activities.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Efficient Classroom Management',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1117535/School_leaders_administrators2x.33984be3.avif" alt="" srcset="" width={"100%"} />

                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Gradebook Management</h2>
                        <p>Simplify grading with our intuitive gradebook system, providing timely and accurate feedback to students.</p>
                        <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
                        <p>Effortlessly manage attendance records and track student progress with our integrated tools.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Professional Development',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1117535/School_leaders_administrators2x.33984be3.avif" alt="" srcset="" width={"100%"} />

                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Certification Programs</h2>
                        <p>Advance your career with our certification programs, recognizing your expertise in modern teaching methodologies.</p>
                        <h2 className="text-2xl font-bold mb-4">Teacher Training Workshops</h2>
                        <p>Access ongoing professional development opportunities with our workshops on the latest educational trends and technologies.</p>

                    </div>
                </div>
            ),
        },
    ];

    const handleButtonClick = (index) => {
        setActiveSection(index);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="w-4/5 m-auto ">
            <div className="text-center">
                <p className="section-title">
                    Elevate Your Teaching Experience with Techlearns Academy
                </p>
            </div>
            <div className="w-full m-auto mt-8">
                <div className="mb-4 flex space-x-2 text-center flex-row justify-center">
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            className={`px-4 py-2 text-white ${activeSection === index
                                ? 'bg-blue-500'
                                : 'bg-gray-500 hover:bg-gray-600'
                                } rounded focus:outline-none focus:ring focus:border-blue-300`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {sections.map((section, index) => (
                        <div key={index} className="outline-none">
                            <h2 className="text-2xl font-bold mb-4 text-center">{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default TeachersAccordion;
