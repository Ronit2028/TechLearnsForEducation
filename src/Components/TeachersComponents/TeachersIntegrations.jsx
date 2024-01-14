import React from 'react';

const TeachersIntegrations = () => {
  // List of integrations with meaningful content
  const integrationList = [
    {
      title: 'Interactive Assignments',
      imageUrl: 'https://static-cse.canva.com/blob/1187129/InteractiveAssignments.avif',
      description: 'Engage your students with interactive assignments that can be seamlessly integrated into popular platforms like Canvas. Create dynamic content that sparks curiosity and enhances the learning experience.',
    },
    {
      title: 'Collaborative Learning Spaces',
      imageUrl: 'https://static-cse.canva.com/blob/1187129/CollaborativeLearningSpaces.avif',
      description: 'Foster collaboration among students with our collaborative learning spaces. Teachers can easily create group activities, discussions, and projects, providing a platform for interactive and cooperative learning.',
    },
    {
      title: 'Advanced Analytics',
      imageUrl: 'https://static-cse.canva.com/blob/1187129/AdvancedAnalytics.avif',
      description: 'Make informed decisions with our advanced analytics tools. Track student progress, identify areas for improvement, and gain insights into teaching effectiveness. Data-driven teaching for better outcomes.',
    },
    {
      title: 'Customizable Templates',
      imageUrl: 'https://static-cse.canva.com/blob/1187129/CustomizableTemplates.avif',
      description: 'Access a library of customizable templates designed specifically for educators. From lesson plans to assessments, our platform provides a variety of templates to streamline your teaching process.',
    },
    {
      title: 'Teacher Training in Graphic Design',
      imageUrl: 'https://static-cse.canva.com/blob/1187129/GraphicDesignTraining.avif',
      description: 'Empower teachers to create visually appealing and interactive study modules through our specialized graphic design training. Learn how to incorporate graphics, multimedia, and creative elements into your teaching materials.',
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="w-full">
        <p className="section-title cera-med py-10">How We Support Educators</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrationList.map((integration, index) => (
          <div key={index} className="mb-4 teachers-card">
            <div className="image-container w-full">
              <img src={integration.imageUrl} alt={integration.title} width="100%" className='rounded' />
            </div>
            <div className="card-text">
              <p className="card-title text-lg pb-3">{integration.title}</p>
              <p className="card-content">{integration.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersIntegrations;
