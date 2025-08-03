import React from "react";
import RealTimeClock from "./RealTimeClock";
import SplitText from "./SplitText";
const navItems = [
  "Creative Production Studio",
  "Los Angeles, California",
];

const Footer1 = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-50 px-8 py-4 flex justify-center items-center">
      <nav className="w-full flex justify-between items-center">
        {navItems.map((item) => (
          <div
            key={item}
            className="text-white font-normal text-xm tracking-wide mx-6 relative group cursor-pointer"
          >
            <div className="block transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
              <SplitText
                text={item}
                className="uppercase"
                delay={0.1}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>
            <div className="absolute left-0 top-0 w-full h-full block opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <SplitText
                text={item}
                className="uppercase"
                delay={0.1}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>
          </div>
        ))}

        {/* Real-time clock */}
        <span className="text-white font-normal text-xm tracking-wide mx-6 relative group cursor-pointer">
          <span className="block transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
            <RealTimeClock />
          </span>
          <span className="absolute left-0 top-0 w-full h-full block opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <RealTimeClock />
          </span>
        </span>

        {/* Copyright */}
        <span className="text-white font-normal text-xm tracking-wide mx-6 relative group cursor-pointer">
          <span className="block transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
            © Amber 2025
          </span>
          <span className="absolute left-0 top-0 w-full h-full block opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            © Amber 2025
          </span>
        </span>
      </nav>
    </footer>
  );
};

export default Footer1;