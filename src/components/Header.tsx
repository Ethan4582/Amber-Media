import React, { useState } from "react";
import SplitText from "./SplitText";
import Link from "next/link";

const navItems = [
  { label: "AMBER", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "LET'S TALK", href: "https://x.com/SinghAshir65848", external: true }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-full justify-between items-center">
        {navItems.map((item) => (
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-normal text-sm tracking-wide mx-6 relative group cursor-pointer"
            >
              <div className="block transition-all duration-600 group-hover:opacity-0 group-hover:-translate-y-1">
                <SplitText
                  text={item.label}
                  className="inline-block"
                  delay={0.05}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
              </div>
              <div className="absolute left-0 top-0 w-full h-full block opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <SplitText
                  text={item.label}
                  className="inline-block"
                  delay={0.05}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
              </div>
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="text-white font-normal text-sm tracking-wide mx-6 relative group cursor-pointer"
            >
              <div className="block transition-all duration-600 group-hover:opacity-0 group-hover:-translate-y-1">
                <SplitText
                  text={item.label}
                  className="inline-block"
                  delay={0.05}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
              </div>
              <div className="absolute left-0 top-0 w-full h-full block opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <SplitText
                  text={item.label}
                  className="inline-block"
                  delay={0.05}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
              </div>
            </Link>
          )
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center w-full">
        {/* Logo/Brand */}
        <Link href="/" className="text-white font-normal text-lg tracking-wide">
          <SplitText
            text="AMBER"
            className="inline-block"
            delay={0.05}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none z-60 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ zIndex: 55 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white font-normal text-2xl tracking-wide cursor-pointer transition-all duration-500 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <SplitText
                  text={item.label}
                  className="inline-block"
                  delay={0.05}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-white font-normal text-2xl tracking-wide cursor-pointer transition-all duration-500 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <SplitText
                  text={item.label}
                  className="inline-block"
                  delay={0.05}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
              </Link>
            )
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;