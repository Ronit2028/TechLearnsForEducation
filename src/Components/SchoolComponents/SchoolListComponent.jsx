import React from 'react'

const SchoolListComponent = () => {
  return (
    <div className="w-4/5 p-5 my-5 flex flex-wrap m-auto">
      
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center px-10">
        <div>
          <p className="section-title cera-med">
            Premium Canva features for every student
          </p>
          <ul className="list-none section-content cera-light">
            <li className="flex items-center text-gray-500 mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Unlock premium Canva features for all of your students

            </li>

            <li className="flex items-center text-gray-500 mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Enable SSO to manage staff and student access

            </li>
            <li className="flex items-center text-gray-500 mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              Streamlined admin reporting and permissions

            </li>
            <li className="flex items-center text-gray-500 mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              LMS integrations, including Canvas, Blackboard, and more

            </li>
            <li className="flex items-center text-gray-500 mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              Dedicated customer support
            </li>

          </ul>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img src="https://static-cse.canva.com/blob/1168085/Premiumfeatures2x.a7743f04.avif" alt="" srcset="" width="100%" />
      </div>          


    </div>
  )
}

export default SchoolListComponent