import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sixth = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sliderRefs = [useRef(null), useRef(null)]; // Create refs for both sliders

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sections = [
        {
            title: 'Visual Collaboration',
            image: "https://static-cse.canva.com/blob/1141732/Section-5VerificationGraphic2x.ae290652.avif",
            content: (
                <div className="flex">
                    <div className="w-full p-4">
                        <h2 className="text-2xl font-bold mb-4">Enhance Collaboration</h2>
                        <p>Foster visual collaboration among teachers, students, and parents using intuitive tools and features.</p>


                        <h2 className="text-2xl font-bold mb-4">Streamlined Communication</h2>
                        <p>Streamline communication with real-time updates, making it easy for everyone to stay informed.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Efficient Workflows',
            image: "https://static-cse.canva.com/blob/1141736/Students2x.27520590.avif",
            content: (
                <div className="flex">
                    <div className="w-full p-4">
                        <h2 className="text-2xl font-bold mb-4">Boost Efficiency</h2>
                        <p>Improve workflows and task management, ensuring smooth and efficient operations for the entire school community.</p>


                        <h2 className="text-2xl font-bold mb-4">Task Assignments</h2>
                        <p>Assign tasks, projects, and assignments with ease, promoting a structured learning environment.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Secure Data Handling',
            image: "https://static-cse.canva.com/blob/1141739/Schools2x.aa0aa30f.avif",
            content: (
                <div className="flex">
                    <div className="w-full p-4">
                        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                        <p>Ensure the safety of sensitive information with Techlearns' robust data security measures, complying with industry standards.</p>


                        <h2 className="text-2xl font-bold mb-4">Privacy Controls</h2>
                        <p>Grant administrators control over privacy settings, allowing them to manage data access and protect student information.</p>
                    </div>
                </div>
            ),
        },
        // Add more sections as needed
    ];

    const handleButtonClick = (index) => {
        setActiveSection(index);
        sliderRefs.forEach((ref) => {
            if (ref.current) {
                ref.current.slickGoTo(index);
            }
        });
    };

    return (
        <div className="w-4/5 m-auto">
            <div className="text-center">
                <p className="section-title">
                    Bring all the benefits of Techlearns to your school community
                </p>
            </div>
            <div className="flex">
                <div className="w-1/2 p-4">
                    <Slider ref={sliderRefs[0]} {...settings}>
                        {sections.map((section, index) => (
                            <div key={index} className="outline-none">
                                <img src={section.image} alt="" srcset="" width={"100%"} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-1/2 p-4">
                    <div className="mb-4 flex space-x-2 flex-row justify-between px-4">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(index)}
                                className={`px-4 py-2 text-white w-full ${activeSection === index
                                    ? 'bg-blue-500'
                                    : 'bg-gray-500 hover:bg-gray-600'
                                    } rounded focus:outline-none focus:ring focus:border-blue-300`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                    <Slider ref={sliderRefs[1]} {...settings}>
                        {sections.map((section, index) => (
                            <div key={index} className="outline-none space-x-2">
                                <p>{section.content}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Sixth;
