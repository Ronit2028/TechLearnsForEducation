import React from 'react';

const ModuleList = () => {
  // Define the list of module content
  const moduleData = [
    {
      title: 'Web Development Fundamentals',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Master the basics of web development, from HTML and CSS to creating interactive user interfaces. Build a solid foundation for your journey into the world of coding.',
    },
    {
      title: 'Graphic Design Essentials',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Unleash your creativity with graphic design essentials. Learn the principles of design, use industry-standard tools, and create visually stunning graphics for various purposes.',
    },
    {
      title: 'Mobile App Development Workshop',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Dive into the world of mobile app development. Explore frameworks, design principles, and best practices to develop your own mobile applications for iOS and Android platforms.',
    },
    {
      title: 'Data Science Foundations',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Discover the power of data science. Learn essential concepts, tools, and techniques to analyze and interpret data, making informed decisions in various fields.',
    },
    {
      title: 'Cybersecurity Essentials',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Ensure digital safety with cybersecurity essentials. Understand cybersecurity principles, protect against cyber threats, and develop skills to secure digital environments.',
    },
    {
      title: 'UI/UX Design Mastery',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Craft seamless user experiences with UI/UX design mastery. Learn design thinking, wireframing, and prototyping to create user-friendly interfaces for digital products.',
    },
  ];

  return (
    <div className='py-4'>
      <div className="container m-auto pb-4">
        <p className="section-title">
          Explore Our Modules
        </p>
      </div>
      <div className="w-full p-5 my-5 flex flex-wrap">
        {moduleData.map((module, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-5">
            <div className="rounded overflow-hidden shadow-lg mx-auto module-card">
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 object-cover transition duration-300 transform hover:brightness-75 hover:scale-105"
                  src={module.imageSrc}
                  alt="Module Image"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded opacity-0 transition duration-300 hover:opacity-100">
                  Explore Module
                </button>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{module.title}</div>
                <p className="text-gray-700 text-base">
                  {module.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModuleList;
