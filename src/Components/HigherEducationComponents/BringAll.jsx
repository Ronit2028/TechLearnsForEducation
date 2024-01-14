import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BringAll = () => {
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
            title: 'Collaboration Hub',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Streamline Workflows</h2>
                        <p>Enhance collaboration with a centralized hub for students, educators, and administrators. Simplify workflows, share knowledge, and foster innovation.</p>
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Real-time Communication</h2>
                        <p>Experience seamless real-time communication with instant messaging features. Facilitate interaction between teachers, students, and parents, creating a supportive learning environment.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Creative Learning',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Personalized Content</h2>
                        <p>Customize content for engaging lectures, classes, and projects. Transform documents into interactive presentations, brainstorm ideas visually, and utilize data to tell compelling stories.</p>
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Skill Development</h2>
                        <p>Empower students to achieve personal and academic goals. Develop critical design, data, and communication skills through innovative and creative tools.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Efficient Administration',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Admin Reporting</h2>
                        <p>Enable streamlined administration with comprehensive reporting tools. Gain insights into user activities, performance metrics, and system usage for efficient decision-making.</p>
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">SSO Integration</h2>
                        <p>Enhance security and manageability by enabling Single Sign-On (SSO) for staff and student access. Simplify access management and ensure a seamless user experience.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Integration Capabilities',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">LMS Integrations</h2>
                        <p>Seamlessly integrate with popular Learning Management Systems (LMS) including Canvas, Blackboard, and more. Enhance the educational experience with unified platforms.</p>
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Tech Support</h2>
                        <p>Receive dedicated customer support to ensure a smooth experience. Our support team is ready to assist with any inquiries, technical issues, or customization needs.</p>
                    </div>
                </div>
            ),
        },
        // You can add more sections as needed
    ];

    const handleButtonClick = (index) => {
        setActiveSection(index);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="w-4/5 m-auto text-center">
            <div className="text-center">
                <p className="section-title">
                    Bring all the benefits of Canva to your campus community
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
                            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default BringAll;
