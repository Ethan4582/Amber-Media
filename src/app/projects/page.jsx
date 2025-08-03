'use client';

import Footer from "@/components/footer2";
import FooterContact from "@/components/contact";
import React, { useState } from 'react';
import Header from "@/components/Header";

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mediaLoaded, setMediaLoaded] = useState({});
  const [activeFilter, setActiveFilter] = useState("ALL");

  const projects = [
    {
      id: 'OF EARTH',
      title: 'Commercial',
      type: 'FILMS/TV',
      videoSrc: 'https://framerusercontent.com/assets/dRHWzVptVvpgdXINm46ZLtoiwoY.mp4',
      link: '/projects/amber-studio'
    },
    {
      id: 'AFTER THE QUIET',
      title: 'SHORT FILM',
      type:  'SHORT FILM',
      videoSrc: 'https://framerusercontent.com/assets/z4Oilzyk8mFMgNgJGrjfmEBBNE.mp4',
      link: '/projects/of-earth'
    },
    {
      id: 'ECHOES OF US',
      title: 'Wedding Film',
      type: 'FILMS/TV',
      videoSrc:"https://framerusercontent.com/assets/Qd3Ic7sGavLSLs8uRt69vDA9tTc.mp4",
      link: '/projects/after-the-quiet'
    },
    {
      id: 'STILL BREATHING',
      title: ' Brand Film',
      type: 'FILMS/TV',
      videoSrc:'https://framerusercontent.com/assets/rujes19qnH473SeNzCgMuihBfOs.mp4',
      link: '/projects/after-the-quiet'
    },

    {
      id: ' SCENT & SILENCE',
      title: 'Film',
      type: 'COMMERCIAL',
      videoSrc:'https://framerusercontent.com/assets/8s2BBmflDJt5OXnAkNfeLkErqw.mp4',
      link: '/projects/after-the-quiet'
    },
    {
      id: '   THE LIGHT BETWEEN',
      title: 'Short Film',
      type: ' COMMERCIAL',
      videoSrc:'https://framerusercontent.com/assets/HSdtyJ3OPhdFnShRKCkpEs238.mp4',
      link: '/projects/after-the-quiet'
    }
  ];

  const photographyProjects = [
    {
      id: 'WILD INTERIORS',
      title: 'Photography',
      type: 'STILLS',
      imageSrc: '/7.png',
      link: '/projects/wild-interiors'
    },
    {
      id: 'PORTRAITS IN STILLNESS',
      title: 'Photography',
      type: 'STILLS',
      imageSrc: '/8.png',
      link: '/projects/portraits-stillness'
    },
    {
      id: 'HEIRLOOM HANDS',
      title: 'Photography',
      type: 'STILLS',
      imageSrc: '/9.png',
      link: '/projects/heirloom-hands'
    }
  ];

  const handleProjectClick = (link) => {
    window.location.href = link;
  };

  const handleMediaLoad = (projectId) => {
    setMediaLoaded(prev => ({ ...prev, [projectId]: true }));
  };

  const handleMediaError = (projectId) => {
    setMediaLoaded(prev => ({ ...prev, [projectId]: false }));
  };

  // Filtering logic
  let filteredVideoProjects = projects;
  let filteredPhotoProjects = photographyProjects;

  if (activeFilter !== "ALL") {
    if (activeFilter === "STILLS") {
      filteredVideoProjects = [];
      filteredPhotoProjects = photographyProjects;
    } else {
      filteredVideoProjects = projects.filter(p => p.type === activeFilter);
      filteredPhotoProjects = [];
    }
  }

  return (
    <div>
      <div>
       <Header className="mb-28" />
    </div>

   <div className="min-h-screen bg-black  text-white">
  {/* Header with margin bottom */}
 
  <header className="py-16 text-center">
    <h1 className="text-6xl md:text-8xl font-black tracking-wider  py-10">
      PROJECTS
    </h1>
    <nav className="flex justify-center space-x-8 text-sm tracking-widest">
      {["ALL", "FILMS/TV", "COMMERCIAL", "STILLS"].map((filter) => (
        <button
          key={filter}
          className={`pb-1 border-b transition-colors ${
            activeFilter === filter
              ? "text-white border-white"
              : "text-gray-400 border-transparent hover:text-white"
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </nav>
  </header>

      {/* Projects Grid - Video Projects */}
      {filteredVideoProjects.length > 0 && (
        <div className="container mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredVideoProjects.map((project) => (
              <div key={project.id} className="mb-4">
                <div
                  className="relative overflow-hidden cursor-pointer group bg-gray-900"
                  style={{
                    height: "320px",    // less height
                    minHeight: "320px",
                    width: "100%",      // full width of grid cell
                    aspectRatio: "3.5/1", // more rectangular
                    borderRadius: "0px" // box shape, no rounding
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project.link)}
                >
                  {/* Loading spinner */}
                  {mediaLoaded[project.id] === undefined && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                  )}

                  <video
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredProject === project.id ? 'blur-sm scale-110' : 'blur-0 scale-100'
                    } ${mediaLoaded[project.id] === false ? 'hidden' : ''}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedData={() => handleMediaLoad(project.id)}
                    onError={() => handleMediaError(project.id)}
                    style={{ display: mediaLoaded[project.id] === false ? 'none' : 'block' }}
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>

                  {/* Fallback for failed videos */}
                  {mediaLoaded[project.id] === false && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎬</div>
                        <p className="text-lg font-semibold">{project.title}</p>
                        <p className="text-sm text-gray-300 mt-2">{project.type}</p>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'bg-opacity-40' : 'bg-opacity-0'
                  }`} />
                </div>

                {/* Project Info Outside Card */}
                <div className="flex justify-between items-center mt-2 px-1">
                  <span className="text-white text-base font-bold">{project.id}</span>
                  <span className="text-gray-300 text-base font-normal">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photography Section */}
      {filteredPhotoProjects.length > 0 && (
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredPhotoProjects.map((project) => (
              <div key={project.id} className="mb-4">
                <div
                  className="relative overflow-hidden cursor-pointer group bg-gray-900"
                  style={{
                     height: "320px",    // less height
                    minHeight: "320px",
                    width: "100%",      // full width of grid cell
                    aspectRatio: "3.5/1", // more rectangular
                    borderRadius: "0px" // box shape, no rounding
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project.link)}
                >
                  {/* Loading spinner */}
                  {mediaLoaded[project.id] === undefined && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                  )}

                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredProject === project.id ? 'blur-sm scale-110' : 'blur-0 scale-100'
                    } ${mediaLoaded[project.id] === false ? 'hidden' : ''}`}
                    onLoad={() => handleMediaLoad(project.id)}
                    onError={() => handleMediaError(project.id)}
                    loading="lazy"
                    style={{ display: mediaLoaded[project.id] === false ? 'none' : 'block' }}
                  />

                  {/* Fallback for failed images */}
                  {mediaLoaded[project.id] === false && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📸</div>
                        <p className="text-lg font-semibold">{project.title}</p>
                        <p className="text-sm text-gray-300 mt-2">{project.type}</p>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'bg-opacity-40' : 'bg-opacity-0'
                  }`} />
                </div>

                {/* Project Info Outside Card */}
                <div className="flex justify-between items-center mt-2 px-1">
                  <span className="text-white text-base font-bold">{project.id}</span>
                  <span className="text-gray-300 text-base font-normal">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='mt-59'> 
        <Footer />
        <FooterContact />
      </div>
    </div>
    </div>
  );
};

export default ProjectsPage;