import React from "react";

const navItems = ["AMBER", "PROJECTS", "ABOUT", "LET'S TALK"];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-2 flex justify-between items-center">
      <nav className="w-full flex justify-between items-center">
        {navItems.map((item) => (
          <span
            key={item}
            className="text-white font-normal text-xm tracking-wide mx-6 relative group cursor-pointer"
          >
            <span className="block transition-all duration-600 group-hover:opacity-0 group-hover:-translate-y-1">
              {item}
            </span>
            <span className="absolute left-0 top-0 w-full h-full block opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {item}
            </span>
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Header;