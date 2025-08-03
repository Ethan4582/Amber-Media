import React from 'react';

const LogoCarousel = () => {
  // SVG logo data
  const logos = [
    { src: "https://framerusercontent.com/images/lBk7MKclfzJRlatPc13MvYtptk.svg", width: 43, height: 48, alt: "Logo 1" },
    { src: "https://framerusercontent.com/images/OHfziRjK2HdoOgrAXlPXc55VYQ.svg", width: 176, height: 40, alt: "Logo 2" },
    { src: "https://framerusercontent.com/images/C8vnHs7e8IbLZooep0gNip6eylU.svg", width: 41, height: 29, alt: "Logo 3" },
    { src: "https://framerusercontent.com/images/KNj9BRJvdrtCaYx5m7um7EmT8.svg", width: 78, height: 30, alt: "Logo 4" },
    { src: "https://framerusercontent.com/images/8wpt2H14XHcb4yoW182iK0MGxs.svg", width: 53, height: 45, alt: "Logo 5" },
    { src: "https://framerusercontent.com/images/jqmWIOA4WlrHoWQKgzTtrOgybg.svg", width: 100, height: 40, alt: "Logo 6" },
    { src: "https://framerusercontent.com/images/qNMZaMQpAKdhOYxA9xp6LSCc54.svg", width: 60, height: 40, alt: "Logo 7" }
  ];

  // Number of copies for seamless looping
  const logoCopies = 3;
  const logoSet = Array(logoCopies).fill(logos).flat();

  return (
    <div className="w-full relative bg-black py-1">
      {/* Custom ruler top */}
      <div 
        className="w-full h-5 mb-6"
        style={{
          backgroundImage: 
            'repeating-linear-gradient(to right, #4a4a4a, #4a4a4a 1px, transparent 1px, transparent 10px), ' +
            'repeating-linear-gradient(to right, #4a4a4a, #4a4a4a 1px, transparent 1px, transparent 100px)',
          backgroundSize: '100% 1px, 100% 10px',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Logo carousel container */}
      <div className="relative overflow-hidden">
        <div className="flex items-center">
          {/* Animated logo strip */}
          <div className="flex items-center gap-46 animate-scroll whitespace-nowrap">
            {logoSet.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="inline-flex items-center justify-center px-4"
              >
                <div 
                  className="relative w-full h-full flex items-center justify-center"
                  style={{
                    width: `${logo.width}px`,
                    height: `${logo.height}px`,
                    minWidth: `${logo.width}px`
                  }}
                >
                  {/* SVG with optimized rendering */}
                  <svg
                    width={logo.width}
                    height={logo.height}
                    viewBox={`0 0 ${logo.width} ${logo.height}`}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                  >
                    <image 
                      href={logo.src} 
                      width={logo.width}
                      height={logo.height}
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom ruler bottom */}
      <div 
        className="w-full h-5 mt-6 rotate-180"
        style={{
          backgroundImage: 
            'repeating-linear-gradient(to right, #4a4a4a, #4a4a4a 1px, transparent 1px, transparent 10px), ' +
            'repeating-linear-gradient(to right, #4a4a4a, #4a4a4a 1px, transparent 1px, transparent 100px)',
          backgroundSize: '100% 1px, 100% 10px',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / logoCopies}%);
          }
        }
        
        .animate-scroll {
          display: inline-block;
          animation: scroll ${20 * logoCopies}s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;