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
            title: 'Section 1',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Left Content</h2>
                        <p>Left content for Section 1 goes here.</p>
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Right Content</h2>
                        <p>Right content for Section 1 goes here.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Section 2',
            content: (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Left Content</h2>
                        <p>Left content for Section 2 goes here.</p>
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Right Content</h2>
                        <p>Right content for Section 2 goes here.</p>
                    </div>
                </div>
            ),
        },
        // Repeat similar structures for Section 3 and Section 4
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

export default BringAll