import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SchoolCarousel = () => {
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
      title: 'Visual Collaboration',
      content: (
        <div className="flex">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Enhance Collaboration</h2>
            <p>Foster visual collaboration among teachers, students, and parents using intuitive tools and features.</p>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Streamlined Communication</h2>
            <p>Streamline communication with real-time updates, making it easy for everyone to stay informed.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Efficient Workflows',
      content: (
        <div className="flex">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Boost Efficiency</h2>
            <p>Improve workflows and task management, ensuring smooth and efficient operations for the entire school community.</p>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Task Assignments</h2>
            <p>Assign tasks, projects, and assignments with ease, promoting a structured learning environment.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Secure Data Handling',
      content: (
        <div className="flex">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p>Ensure the safety of sensitive information with Techlearns' robust data security measures, complying with industry standards.</p>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Privacy Controls</h2>
            <p>Grant administrators control over privacy settings, allowing them to manage data access and protect student information.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Customizable Learning Paths',
      content: (
        <div className="flex">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Tailored Learning</h2>
            <p>Offer personalized learning experiences by creating customizable learning paths for students based on their individual needs and pace.</p>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Adaptive Assessments</h2>
            <p>Implement adaptive assessments that adjust difficulty based on students' performance, ensuring a challenging yet supportive educational journey.</p>
          </div>
        </div>
      ),
    },
    // Add more sections as needed
  ];

  const handleButtonClick = (index) => {
    setActiveSection(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="w-4/5 m-auto text-center">
      <div className="text-center">
        <p className="section-title">
          Bring all the benefits of Techlearns to your school community
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

export default SchoolCarousel;
