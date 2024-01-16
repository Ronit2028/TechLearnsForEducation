import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import necessary libraries and styles

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
        title: 'Students',
        image: "https://static-cse.canva.com/blob/1141732/Section-5VerificationGraphic2x.ae290652.avif",
        content: (
          <div className="flex">
            <div className="w-full p-4">
              <h2 className="text-2xl font-bold mb-4">Empower Your Learning Journey</h2>
              <p>Access a variety of resources and tools to enhance your learning experience. From interactive lessons to collaborative projects, Techlearns is designed to support your academic growth.</p>
  
              <h2 className="text-2xl font-bold mb-4">Stay Organized and Efficient</h2>
              <p>Keep track of assignments, projects, and deadlines. Techlearns provides a user-friendly platform for you to manage your tasks and collaborate with peers.</p>
            </div>
          </div>
        ),
      },
      {
        title: 'Teachers',
        image: "https://static-cse.canva.com/blob/1141736/Students2x.27520590.avif",
        content: (
          <div className="flex">
            <div className="w-full p-4">
              <h2 className="text-2xl font-bold mb-4">Facilitate Engaging Classes</h2>
              <p>Create dynamic and interactive lessons with Techlearns' tools. Engage your students through multimedia content and foster a collaborative learning environment.</p>
  
              <h2 className="text-2xl font-bold mb-4">Efficient Classroom Management</h2>
              <p>Simplify administrative tasks, streamline communication with students and parents, and effectively manage your class resources—all in one platform.</p>
            </div>
          </div>
        ),
      },
      {
        title: 'Schools',
        image: "https://static-cse.canva.com/blob/1141739/Schools2x.aa0aa30f.avif",
        content: (
          <div className="flex">
            <div className="w-full p-4">
              <h2 className="text-2xl font-bold mb-4">Enhance School Operations</h2>
              <p>Optimize school workflows and operations with Techlearns. From admissions to alumni management, our platform is designed to support the diverse needs of educational institutions.</p>
  
              <h2 className="text-2xl font-bold mb-4">Robust Data Security and Privacy</h2>
              <p>Ensure the security and privacy of sensitive school information. Techlearns adheres to industry standards and provides privacy controls for administrators.</p>
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
            Explore how Techlearns benefits students, teachers, and schools
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <Slider ref={sliderRefs[0]} {...settings}>
              {sections.map((section, index) => (
                <div key={index} className="outline-none">
                  <img src={section.image} alt="" srcSet="" width="100%" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full md:w-1/2 p-4">
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
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sixth;
  