import React, { useState } from 'react';

const StudentUsps = () => {
  const cardData = [
    {
      title: 'Comprehensive Training Programs:',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Explore the realms of website development, app creation, software engineering, graphic design, and document handling. Our carefully curated courses equip you with skills that the digital future demands.',
    },
    {
      title: 'Guidance from Industry Experts:',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Learn from seasoned professionals and industry experts who bring real-world insights into the classroom. Our instructors are committed to nurturing your potential and guiding you towards success.',
    },
    {
      title: 'Hands-On Projects:',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Apply your skills through hands-on projects that simulate actual scenarios. Graduate not just with knowledge but with the confidence to tackle complex tasks in your chosen field.',
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='py-4'>
      <div className="container mx-auto pb-4">
        <p className="section-title text-lg text-center">
          Why Choose Techlearns for Students?
        </p>
      </div>
      <div className="container p-5 my-5 flex flex-col sm:flex-row justify-center gap-4 mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0 relative`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="rounded-xl overflow-hidden shadow-lg mx-auto hover:shadow-xl uspcard">
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 object-cover transition duration-300 transform hover:brightness-75 hover:scale-105"
                  src={card.imageSrc}
                  alt="Card Image"
                />
                <button
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ${
                    hoveredCard === index ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  Click me
                </button>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 hover:text-gray-900 hover:text-yellow-500">{card.title}</div>
                <p className="text-base text-slate-700 mt-2">
                  {card.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentUsps;
