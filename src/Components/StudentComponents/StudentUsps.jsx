import React from 'react';

const StudentUsps = () => {
  // Define the list of card content
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

  return (
    <div className='py-4'>
      <div className="container m-auto pb-4">
        <p className="section-title">
            Why Choose Techlearns for Students?
        </p>
      </div>
      <div className="container p-5 my-5 flex justify-between m-auto gap-2">
        {cardData.map((card, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ">
            <div className="rounded overflow-hidden shadow-lg mx-auto uspcard">
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 object-cover transition duration-300 transform hover:brightness-75 hover:scale-105"
                  src={card.imageSrc}
                  alt="Card Image"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded opacity-0 transition duration-300 hover:opacity-100">
                  Click me
                </button>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">
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
