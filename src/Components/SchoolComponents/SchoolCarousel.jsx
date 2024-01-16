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
      title: 'Communication',
      content: (
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <img src="https://static-cse.canva.com/blob/1117535/School_leaders_administrators2x.33984be3.avif" alt="" srcset="" width={"100%"}/>
             </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 cera-med ">Communication</h2>
            <p>Streamline communication with real-time updates, making it easy for everyone to stay informed.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Leanring',
      content: (
        <div className="flex flex-wrap">
           <div className="w-full lg:w-1/2 p-4">
            <img src="https://static-cse.canva.com/blob/1117536/Teachers2x.d3515424.avif" alt="" srcset="" width={"100%"}/>
             </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 cera-med " >Leanring</h2>
            <p>Assign tasks, projects, and assignments with ease, promoting a structured learning environment.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Data',
      content: (
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <img src="https://static-cse.canva.com/blob/1117533/Students2x.ab46e5e5.avif" alt="" srcset="" width={"100%"}/>
             </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 cera-med ">Data</h2>
            <p>Grant administrators control over privacy settings, allowing them to manage data access and protect student information.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Workflows',
      content: (
        <div className="flex flex-wrap ">
          <div className="w-full lg:w-1/2 p-4">
            <img src="https://static-cse.canva.com/blob/1117527/Marketing_communications2x.c2492b10.avif" alt="" srcset="" width={"100%"}/>
             </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 cera-med">Workflows</h2>
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
    <div className="w-4/5 m-auto">
      <div className="text-center">
        <p className="section-title cera-med">
          Bring all the benefits of Techlearns to your school community
        </p>
      </div>
      <div className="w-full m-auto mt-8">
        <div className="mb-4 flex space-x-2 text-center flex-row justify-center">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`px-4 py-2 text-blue-900 text-lg cera-med ${activeSection === index
                ? 'border-b-2 border-blue-900 bg-transparent'
                : 'bg-transparent'
                } rounded focus:outline-none`}
            >
              {section.title}
            </button>
          ))}
        </div>
        <Slider ref={sliderRef} {...settings}>
          {sections.map((section, index) => (
            <div key={index} className="outline-none flex flex-col justify-center">
              {/* <h2 className="text-2xl font-bold mb-4">{section.title}</h2> */}
              <p className='flex flex-col justify-center'>{section.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SchoolCarousel;
