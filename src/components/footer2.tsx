import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#111111] py-1 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Custom ruler */}
        <div className="w-full mb-16 overflow-hidden">
          <div 
            className="h-5 w-screen" 
            style={{
              backgroundImage: 
                'repeating-linear-gradient(to right, #4a4a4a, #4a4a4a 1px, transparent 1px, transparent 10px), ' +
                'repeating-linear-gradient(to right, #4a4a4a, #4a4a4a 1px, transparent 1px, transparent 100px)',
              backgroundSize: '100% 1px, 100% 10px',
              backgroundPosition: 'center',
              marginLeft: '-50vw',
              left: '50%',
              position: 'relative'
            }}
          ></div>
        </div>
        
        {/* Main heading */}
        <h2 className="text-4xl md:text-8xl font-bold text-white tracking-wider text-center">
          START YOUR STORY
        </h2>
        
        {/* Divider line */}
        <div className="w-1/2 md:w-1/3 border-b-2 border-white mt-4 mb-16"></div>
        
        {/* Custom ruler */}
        <div className="w-full mb-16 overflow-hidden">
          <div 
            className="h-5 w-screen" 
            style={{
              backgroundImage: 
                'repeating-linear-gradient(to right, #4a4a4a, #4a4a4a 1px, transparent 1px, transparent 10px), ' +
                'repeating-linear-gradient(to right, #4a4a4a, #4a4a4a 1px, transparent 1px, transparent 100px)',
              backgroundSize: '100% 1px, 100% 10px',
              backgroundPosition: 'center',
              marginLeft: '-50vw',
              left: '50%',
              position: 'relative'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;