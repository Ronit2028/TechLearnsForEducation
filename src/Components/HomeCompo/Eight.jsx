import React from 'react';
import img1 from '../../Assets/img/Resources2x.webp';
import img2 from '../../Assets/img/Templatesillo2x.webp';
import img3 from '../../Assets/img/Casestudies2x.webp';
import img4 from '../../Assets/img/Joinourcommunity2x.webp';
import img5 from '../../Assets/img/Creatorsprogram2x.webp';

const Eight = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-4/5 mx-auto">
          <div className="flex flex-wrap mb-6">
            {/* Section 1 */}
            <div className="w-full sm:w-2/3 mb-4 sm:px-2 "style={{height:"100%"}}>
              <div className="w-full rounded-lg relative bg-pink-200 overflow-hidden">
                <img alt="content" className="object-cover object-center h-52 sm:-mt-32 w-full" src={img1} />
                <div className="sm:py-8 pt-16 sm:px-10 px-6" >
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Teacher Resources</h2>
                  <p className="text-base leading-relaxed mt-2 sm:w-2/3">Explore resources designed to empower teachers. From instructional guides to video tutorials, access everything you need to enhance your teaching experience with Techlearns for Education.</p>
                  <button className="text-gray-900 mt-8 bg-gray-100 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Explore Resources</button>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="w-full sm:w-1/3 mb-4 sm:px-2">
              <div className="w-full rounded-lg relative bg-blue-200 overflow-hidden">
                <img alt="content" className="object-cover object-center h-40 w-full" src={img2} />
                <div className="sm:py-8 pt-4 sm:px-10 px-3">
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2">Templates</h2>
                  <p className="text-base leading-relaxed mt-2">Elevate your teaching materials with professionally designed templates. Our easy-to-use templates cover various subjects, ensuring your lessons are engaging and visually appealing.</p>
                  <button className="text-gray-900 mt-4 bg-gray-100 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Explore Templates</button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3-5 */}
          <div className="flex flex-wrap">
            {[{ img: img3, title: 'Case Studies' }, { img: img4, title: 'Join our Community' }, { img: img5, title: 'Creators Program' }].map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:px-2">
                <div className={`w-full rounded-lg relative bg-${index % 2 === 0 ? 'lime' : index % 3 === 0 ? 'slate' : 'amber'}-200 overflow-hidden`}>
                  <img alt="content" className="object-cover object-center h-40 w-full" src={item.img} />
                  <div className="sm:py-8 pt-4 sm:px-10 px-3">
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-2">{item.title}</h2>
                    <p className="text-base leading-relaxed mt-2">Explore real-world examples, join the community, or unlock your creative potential with our Creators Program.</p>
                    <button className="text-gray-900 mt-4 bg-gray-100 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">{`Explore ${item.title}`}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eight;
