'use client';

import FooterContact from '@/components/contact';
import Footer from '@/components/footer2';
import Header from '@/components/Header';
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const AboutSection = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        lerp: 0.1,
        smooth: true,
      });
      function raf(time) {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  const awards = [
    { title: "Featured in", publication: "The Lane, Bridal Musings, Milkshake Studio Blog" },
    { title: "Best Cinematography", publication: "Indie Visual Awards" },
    { title: "Top 10 Creative Studios", publication: "Frame & Focus Journal" },
    { title: "Gold Winner", publication: "International Wedding Film Awards" },
    { title: "Official Selection", publication: "ShortCuts Film Festival" },
    { title: "Vimeo Staff Pick", publication: "Golden Hour" }
  ];

  const clients = [
    { name: "Aesop" },
    { name: "Vogue Australia" },
    { name: "The Lane" },
    { name: "Assembly Label" },
    { name: "Mecca Cosmetica" },
    { name: "Scanlan Theodore" },
    { name: "Bassike" },
    { name: "Cereal Magazine" },
    { name: "The Calile Hotel" },
    { name: "La Lune Bridal" },
    { name: "The Wedding Harvest" },
    { name: "White Magazine" }
  ];

  const logos = [
    { src: "https://framerusercontent.com/images/lBk7MKclfzJRlatPc13MvYtptk.svg", alt: "Aesop" },
    { src: "https://framerusercontent.com/images/OHfziRjK2HdoOgrAXlPXc55VYQ.svg", alt: "Vogue Australia" },
    { src: "https://framerusercontent.com/images/C8vnHs7e8IbLZooep0gNip6eylU.svg", alt: "The Lane" },
    { src: "https://framerusercontent.com/images/KNj9BRJvdrtCaYx5m7um7EmT8.svg", alt: "Assembly Label" },
    { src: "https://framerusercontent.com/images/8wpt2H14XHcb4yoW182iK0MGxs.svg", alt: "Mecca Cosmetica" },
    { src: "https://framerusercontent.com/images/jqmWIOA4WlrHoWQKgzTtrOgybg.svg", alt: "Scanlan Theodore" },
    { src: "https://framerusercontent.com/images/qNMZaMQpAKdhOYxA9xp6LSCc54.svg", alt: "Bassike" },
    { src: "https://framerusercontent.com/images/lBk7MKclfzJRlatPc13MvYtptk.svg", alt: "Cereal Magazine" },
    { src: "https://framerusercontent.com/images/OHfziRjK2HdoOgrAXlPXc55VYQ.svg", alt: "The Calile Hotel" },
    { src: "https://framerusercontent.com/images/C8vnHs7e8IbLZooep0gNip6eylU.svg", alt: "La Lune Bridal" },
    { src: "https://framerusercontent.com/images/KNj9BRJvdrtCaYx5m7um7EmT8.svg", alt: "The Wedding Harvest" },
    { src: "https://framerusercontent.com/images/8wpt2H14XHcb4yoW182iK0MGxs.svg", alt: "White Magazine" }
  ];
  const team = [
    { name: "CLARA WYNN", role: "Founder & Creative Director", image: "https://framerusercontent.com/images/i95yhKfodOmHu59V05KpqJTe0.jpg" },
    { name: "JULIAN REED", role: "Director of Photography", image: "https://framerusercontent.com/images/YhIivrzbdG1gUblDNGJGsfSN9kY.png" },
    { name: "MILA CHEN", role: "Editor & Post-Production Lead", image: "https://framerusercontent.com/images/10MzpcvKBh8c0pVNdqPnZfOAzQ.png" },
    { name: "THEO ARCHER", role: "Producer & Client Experience", image: "https://framerusercontent.com/images/lokN0vfMKGBetv9KRCHGtYFimg.png" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
  {/* Hero Section */}

        <Header />
<div className="relative py-19">
  {/* Text Content - Top Left */}
  <div className="mt-16 max-w-6xl  text-left ml-23">
    <div className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
      Amber Films is a creative studio devoted to the art of cinematic storytelling.
      With a signature style that blends warmth, elegance, and emotion, we craft timeless visual narratives that resonate deeply.
    </div>
  </div>

  {/* Image Section */}
  <div className="relative h-screen flex mr-5  ml-19 items-center justify-center overflow-hidden mt-8">
    <div className="absolute  z-10"></div>
    <img 
      src="https://framerusercontent.com/images/3l2fYhPHCAG5N12Xsh1jCt5Bkfk.jpg" 
      alt="Amber Films Studio" 
      className="absolute inset-0 w-full h-full object-cover "
    />
  </div>
</div>



      {/* Our Story Section */}
     <div className="py-20 px-6">
  <div className="max-w-8xl px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      <h2 className="text-sm uppercase tracking-widest font-bold text-white-400 mb-4">OUR STORY</h2>
      <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
        Amber was born from a love of beautiful visuals and honest storytelling.
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed mb-12">
        What began as a side project with a camera, a curious eye, and a deep appreciation for good light has grown into a creative studio trusted by brands, couples, and storytellers alike. Along the way, we've learned that what truly matters isn't just how things look, it's how they feel.
      </p>
      
      <div className="space-y-8">
        <div className="flex items-center">
          <span className="text-5xl font-light mr-109">10+</span>
          <span className="text-gray-400 border-b border-gray-600 pb-1">Years of experience</span>
        </div>
        <div className="flex items-center">
          <span className="text-5xl font-light mr-109">120+</span>
          <span className="text-gray-400 border-b border-gray-600 pb-1">Films Delivered</span>
        </div>
        <div className="flex items-center">
          <span className="text-5xl font-light mr-122">16</span>
          <span className="text-gray-400 border-b border-gray-600 pb-1">Industry Awards</span>
        </div>
      </div>
    </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <img 
              src="https://framerusercontent.com/images/bgbOVxqKYuhqv0rRAvvcS4IjA4.jpg" 
              alt="Cinematographer at work" 
              className="w-full h-[600px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>

     <div className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Awards */}
          <div>
            <h3 className="text-5xl font-bold mb-4 tracking-tight">AWARDS & RECOGNITIONS</h3>
            <p className="text-gray-400 mb-12 leading-relaxed">
              We're honored to have our work recognized by some of the industry's leading platforms and communities.
            </p>
            <div className="space-y-0">
              {awards.map((award, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-700 py-4">
                  <span className="text-white font-semibold text-lg hover:underline hover:underline-offset-4 transition-all duration-300 cursor-pointer relative group">
                    <span className="group-hover:border-b-2 group-hover:border-white transition-all duration-300">{award.title}</span>
                  </span>
                  <span className="text-gray-400 text-base hover:underline hover:underline-offset-4 transition-all duration-300 cursor-pointer relative group">
                    <span className="group-hover:border-b-2 group-hover:border-white transition-all duration-300">{award.publication}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Clients */}
          <div>
            <h3 className="text-5xl font-bold mb-4 tracking-tight">SELECTED CLIENTS</h3>
            <p className="text-gray-400 mb-12 leading-relaxed">
              We've had the privilege of working with an inspiring range of clients who value storytelling as much as we do.
            </p>
            <div className="grid grid-cols-2 gap-0 mb-10">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-700 py-4">
                  <span className="text-white font-semibold text-lg hover:underline hover:underline-offset-4 transition-all duration-300 cursor-pointer relative group">
                    <span className="group-hover:border-b-2 group-hover:border-white transition-all duration-300">{client.name}</span>
                  </span>
                  <span className="ml-4">
                    <img
                      src={logos[index]?.src}
                      alt={logos[index]?.alt}
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      style={{ maxHeight: 32, maxWidth: 80 }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>






      {/* Team Section */}
      <div className="py-20 px-6 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-10">
            <h3 className="text-4xl md:text-5xl font-light mb-1">MEET OUR TEAM</h3>
            <p className="text-gray-400 text-lg max-w-7xl mx-auto leading-relaxed">
              Behind every frame at Amber is a team of storytellers, artists, and visual thinkers who care deeply about the craft of filmmaking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 bg-gray-800 h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
                </div>
                <h4 className="text-xl font-light text-white mb-2">{member.name}</h4>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



     <div className="py-9">
       <Footer   />
      <FooterContact />
     </div>
    </div>
  );
};



export default AboutSection;


