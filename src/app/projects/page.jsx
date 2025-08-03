'use client';

import React, { useState } from 'react';

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'amber-studio',
      title: 'AMBER STUDIO',
      type: 'Brand Film',
      videoSrc: 'https://framerusercontent.com/assets/QvLulg0pZq1vK3tRI9hxALTpuw.mp4',
      link: '/projects/amber-studio',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 'of-earth',
      title: 'OF EARTH',
      type: 'Commercial',
      videoSrc: 'https://framerusercontent.com/assets/dRHWzVptVvpgdXINm46ZLtoiwoY.mp4',
      link: '/projects/of-earth',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 'after-the-quiet',
      title: 'AFTER THE QUIET',
      type: 'Short Film',
      videoSrc: 'https://framerusercontent.com/assets/z4Oilzyk8mFMgNgJGrjfmEBBNE.mp4',
      link: '/projects/after-the-quiet',
      className: 'col-span-2 row-span-1'
    },
    {
      id: 'echoes-of-us',
      title: 'ECHOES OF US',
      type: 'Wedding Film',
      videoSrc: 'https://framerusercontent.com/assets/Qd3Ic7sGavLSLs8uRt69vDA9tTc.mp4',
      link: '/projects/echoes-of-us',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 'still-breathing',
      title: 'STILL BREATHING',
      type: 'Brand Film',
      videoSrc: 'https://framerusercontent.com/assets/rujes19qnH473SeNzCgMuihBfOs.mp4',
      link: '/projects/still-breathing',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 'scent-silence',
      title: 'SCENT & SILENCE',
      type: 'Commercial',
      videoSrc: 'https://framerusercontent.com/assets/8s2BBmflDJt5OXnAkNfeLkErqw.mp4',
      link: '/projects/scent-silence',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 'light-between',
      title: 'THE LIGHT BETWEEN',
      type: 'Short Film',
      videoSrc: 'https://framerusercontent.com/assets/HSdtyJ3OPhdFnShRKCkpEs238.mp4',
      link: '/projects/light-between',
      className: 'col-span-1 row-span-1'
    }
  ];

  const photographyProjects = [
    {
      id: 'wild-interiors',
      title: 'WILD INTERIORS',
      type: 'Photography',
      imageSrc: 'https://framerusercontent.com/images/KNc16FV0KFyEXgmfxgSe5f0YPWo.jpg',
      link: '/projects/wild-interiors'
    },
    {
      id: 'portraits-stillness',
      title: 'PORTRAITS IN STILLNESS',
      type: 'Photography',
      imageSrc: 'https://framerusercontent.com/images/YoJUEqVllERi0Vfk99fsQ7J2oQw.jpg',
      link: '/projects/portraits-stillness'
    },
    {
      id: 'heirloom-hands',
      title: 'HEIRLOOM HANDS',
      type: 'Photography',
      imageSrc: 'https://framerusercontent.com/images/Wj0aAvz6aOncRvBJY53oNdTLPo.jpg',
      link: '/projects/heirloom-hands'
    }
  ];

  const handleProjectClick = (link) => {
    window.location.href = `http://localhost:3000${link}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-16 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-wider mb-8">
          PROJECTS
        </h1>
        <nav className="flex justify-center space-x-8 text-sm tracking-widest">
          <a href="#" className="text-white border-b border-white pb-1">ALL</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">FILMS/TV</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">COMMERCIAL</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">STILLS</a>
        </nav>
      </header>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-4 gap-4 auto-rows-[300px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.className} relative overflow-hidden cursor-pointer group`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.link)}
            >
              <video
                className={`w-full h-full object-cover transition-all duration-500 ${
                  hoveredProject === project.id ? 'blur-sm scale-110' : 'blur-0 scale-100'
                }`}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={project.videoSrc} type="video/mp4" />
              </video>
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredProject === project.id ? 'bg-opacity-40' : 'bg-opacity-0'
              }`} />
              
              {/* Project Info */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photography Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-3 gap-4">
          {photographyProjects.map((project) => (
            <div
              key={project.id}
              className="relative h-[400px] overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.link)}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  hoveredProject === project.id ? 'blur-sm scale-110' : 'blur-0 scale-100'
                }`}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredProject === project.id ? 'bg-opacity-40' : 'bg-opacity-0'
              }`} />
              
              {/* Project Info */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Made in Framer badge */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
          <span>📋</span>
          <span>Made in Framer</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;