import React from 'react';
import img1 from '../../Assets/img/Resources2x.webp';
import img2 from '../../Assets/img/Templatesillo2x.webp';
import img3 from '../../Assets/img/Casestudies2x.webp';
import img4 from '../../Assets/img/Joinourcommunity2x.webp';
import img5 from '../../Assets/img/Creatorsprogram2x.webp';

const Eight = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-4/5 mx-auto">
            <div className="flex flex-wrap mb-6">
              {/* Section 1 */}
              <div className="px-2 w-2/3">
                <div className="w-full rounded-lg sm:py-8 pt-16 sm:px-10 px-6 relative bg-pink-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-52 -mt-32" src={img1} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Teacher Resources</h2>
                  <p className="text-base leading-relaxed mt-2 w-2/3">Explore resources designed to empower teachers. From instructional guides to video tutorials, access everything you need to enhance your teaching experience with Techlearns for Education.</p>
                  <button className="text-gray-900 mt-8 bg-gray-100 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Explore Resources</button>
                </div>
              </div>

              {/* Section 2 */}
              <div className="px-2 w-1/3">
                <div className="w-full rounded-lg sm:py-8 pt-4 sm:px-10 px-3 relative bg-blue-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-20" src={img2} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2">Templates</h2>
                  <p className="text-base leading-relaxed mt-2">Elevate your teaching materials with professionally designed templates. Our easy-to-use templates cover various subjects, ensuring your lessons are engaging and visually appealing.</p>
                  <button className="text-gray-900 mt-4 bg-gray-100 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Explore Templates</button>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-wrap">
              <div className="px-2 w-1/3">
                <div className="w-full rounded-lg sm:py-8 pt-4 sm:px-10 px-3 relative bg-lime-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-20" src={img3} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2">Case Studies</h2>
                  <p className="text-base leading-relaxed mt-2">Explore real-world examples of teachers successfully integrating Techlearns for Education. Learn valuable insights and best practices through our curated case studies.</p>
                  <button className="text-gray-900 mt-4 bg-gray-100 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Read Case Studies</button>
                </div>
              </div>

              {/* Section 4 */}
              <div className="px-2 w-1/3">
                <div className="w-full rounded-lg sm:py-8 pt-4 sm:px-10 px-3 relative bg-slate-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-20" src={img4} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2">Join our Community</h2>
                  <p className="text-base leading-relaxed mt-2">Connect with a community of passionate educators. Join discussions, share experiences, and collaborate on innovative projects. Together, we can create a supportive learning environment.</p>
                  <button className="text-gray-900 mt-4 bg-gray-100 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Join Community</button>
                </div>
              </div>

              {/* Section 5 */}
              <div className="px-2 w-1/3">
                <div className="w-full rounded-lg sm:py-8 pt-4 sm:px-10 px-3 relative bg-amber-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-20" src={img5} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2">Creators Program</h2>
                  <p className="text-base leading-relaxed mt-2">Unlock your creative potential with our Creators Program. Learn advanced design techniques, participate in exclusive events, and become a certified Techlearns for Education expert.</p>
                  <button className="text-gray-900 mt-4 bg-gray-100 border-0 py-2 px-4 focus:outline-none transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-blue-600 rounded text-sm">Join Creators Program</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eight;
