import React from "react";
import RealTimeClock from "./RealTimeClock";

const navItems = [
  "Creative Production Studio",
  "Los Angeles, California",
];

const Footer1 = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-8 py-4 flex justify-center items-center">
      <nav className="w-full flex justify-between items-center">
        {navItems.map((item) => (
          <span
            key={item}
            className="text-white font-normal text-xm tracking-wide mx-6 relative group cursor-pointer"
          >
            <span className="block transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
              {item}
            </span>
            <span className="absolute left-0 top-0 w-full h-full block opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {item}
            </span>
          </span>
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