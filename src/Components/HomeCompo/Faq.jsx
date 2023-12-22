import React, { useState } from 'react';

const Faq = () => {
  const [activeCollapse, setActiveCollapse] = useState(null);

  const handleToggle = (collapseTarget) => {
    setActiveCollapse(activeCollapse === collapseTarget ? null : collapseTarget);
  };

  return (
    <>
    <div className="container w-full flex justify-center ">
        <div className=" w-4/5">
<div className="w-1/3">
    <h1 className='text-3xl'>Frequently asked questions</h1>
</div>

      <div className=" mb-3 w-1/3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            onClick={() => handleToggle('animated-collapse-1')}
          >
            <span>What is Material Tailwind?</span>
            <i className={`absolute right-0 pt-1 text-base transition-transform transform ${activeCollapse === 'animated-collapse-1' ? 'rotate-180' : ''} duration-300`}></i>
          </button>
        </h6>
        <div
          className={`${
            activeCollapse === 'animated-collapse-1' ? 'block' : 'hidden'
          } p-4 text-sm leading-normal text-blue-gray-500/80 transition-all ease-in-out duration-300`}
        >
          We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
        </div>
      </div>

      {/* Repeat the above structure for other FAQs with appropriate index and data attributes */}
      </div>
      </div>
    </>
  );
};

export default Faq;
