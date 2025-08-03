'use client';
import Lenis from "lenis";
import Footer from "@/components/footer2";
import FooterContact from "@/components/contact";
import React, { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import { useRouter } from "next/navigation";


const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mediaLoaded, setMediaLoaded] = useState({});
  const [activeFilter, setActiveFilter] = useState("ALL");
  const lenisRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize Lenis smooth scroll only once
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

  const projects = [
    {
       id: 'of-earth',
      prj_id: 'OF EARTH',
      title: 'Commercial',
      type: 'FILMS/TV',
      videoSrc: 'https://framerusercontent.com/assets/dRHWzVptVvpgdXINm46ZLtoiwoY.mp4',
      link: '/projects/amber-studio'
    },
    {
       id: 'after-the-quiet',
      prj_id: 'AFTER THE QUIET',
      title: 'SHORT FILM',
      type:  'SHORT FILM',
      videoSrc: 'https://framerusercontent.com/assets/z4Oilzyk8mFMgNgJGrjfmEBBNE.mp4',
      link: '/projects/of-earth'
    },
    {
       id: 'echoes-of-us',
      prj_id: 'ECHOES OF US',
      title: 'Wedding Film',
      type: 'FILMS/TV',
      videoSrc:"https://framerusercontent.com/assets/Qd3Ic7sGavLSLs8uRt69vDA9tTc.mp4",
      link: '/projects/after-the-quiet'
    },
    {
       id: 'still-breathing',
      prj_id: 'STILL BREATHING',
      title: ' Brand Film',
      type: 'FILMS/TV',
      videoSrc:'https://framerusercontent.com/assets/rujes19qnH473SeNzCgMuihBfOs.mp4',
      link: '/projects/after-the-quiet'
    },

    {
       id: 'scent-silence',
      prj_id: ' SCENT & SILENCE',
      title: 'Film',
      type: 'COMMERCIAL',
      videoSrc:'https://framerusercontent.com/assets/8s2BBmflDJt5OXnAkNfeLkErqw.mp4',
      link: '/projects/after-the-quiet'
    },
    {
       id: 'the-light-between',
      prj_id: '   THE LIGHT BETWEEN',
      title: 'Short Film',
      type: ' COMMERCIAL',
      videoSrc:'https://framerusercontent.com/assets/HSdtyJ3OPhdFnShRKCkpEs238.mp4',
      link: '/projects/after-the-quiet'
    }
  ];

  const photographyProjects = [
    {
       id: 'wild-interiors',
      prj_id: 'WILD INTERIORS',
      title: 'Photography',
      type: 'STILLS',
      imageSrc: '/7.png',
      link: '/projects/wild-interiors'
    },
    {
       id: 'portrait-in-stillness',
      prj_id: 'PORTRAITS IN STILLNESS',
      title: 'Photography',
      type: 'STILLS',
      imageSrc: '/8.png',
      link: '/projects/portraits-stillness'
    },
    {
       id: 'heirloom-hands',
      prj_id: 'HEIRLOOM HANDS',
      title: 'Photography',
      type: 'STILLS',
      imageSrc: '/9.png',
      link: '/projects/heirloom-hands'
    }
  ];

  const handleProjectClick = (id) => {
    router.push(`/projects/${id}`);
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
      <Header className="mb-28" />
      <div className="min-h-screen bg-black text-white">
        <header className="py-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-wider py-10">
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
                <div key={project.prj_id} className="mb-4">
                  <div
                    className="relative overflow-hidden cursor-pointer group bg-gray-900"
                    style={{
                      height: "320px",
                      minHeight: "320px",
                      width: "100%",
                      aspectRatio: "3.5/1",
                      borderRadius: "0px"
                    }}
                    onMouseEnter={() => setHoveredProject(project.prj_id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(project.id)}
                  >
                    {/* Loading spinner */}
                    {mediaLoaded[project.prj_id] === undefined && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      </div>
                    )}

                    <video
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredProject === project.prj_id ? 'blur-sm scale-110' : 'blur-0 scale-100'
                      } ${mediaLoaded[project.prj_id] === false ? 'hidden' : ''}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onLoadedData={() => handleMediaLoad(project.prj_id)}
                      onError={() => handleMediaError(project.prj_id)}
                      style={{ display: mediaLoaded[project.prj_id] === false ? 'none' : 'block' }}
                    >
                      <source src={project.videoSrc} type="video/mp4" />
                    </video>

                    {/* Fallback for failed videos */}
                    {mediaLoaded[project.prj_id] === false && (
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
                      hoveredProject === project.prj_id ? 'bg-opacity-40' : 'bg-opacity-0'
                    }`} />
                  </div>

                  {/* Project Info Outside Card */}
                  <div className="flex justify-between items-center mt-2 px-1">
                    <span className="text-white text-base font-bold">{project.displayName}</span>
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
                <div key={project.prj_id} className="mb-4">
                  <div
                    className="relative overflow-hidden cursor-pointer group bg-gray-900"
                    style={{
                      height: "320px",
                      minHeight: "320px",
                      width: "100%",
                      aspectRatio: "3.5/1",
                      borderRadius: "0px"
                    }}
                    onMouseEnter={() => setHoveredProject(project.prj_id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(project.id)}
                  >
                    {/* Loading spinner */}
                    {mediaLoaded[project.prj_id] === undefined && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      </div>
                    )}

                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredProject === project.prj_id ? 'blur-sm scale-110' : 'blur-0 scale-100'
                      } ${mediaLoaded[project.prj_id] === false ? 'hidden' : ''}`}
                      onLoad={() => handleMediaLoad(project.prj_id)}
                      onError={() => handleMediaError(project.prj_id)}
                      loading="lazy"
                      style={{ display: mediaLoaded[project.prj_id] === false ? 'none' : 'block' }}
                    />

                    {/* Fallback for failed images */}
                    {mediaLoaded[project.prj_id] === false && (
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
                      hoveredProject === project.prj_id ? 'bg-opacity-40' : 'bg-opacity-0'
                    }`} />
                  </div>

                  {/* Project Info Outside Card */}
                  <div className="flex justify-between items-center mt-2 px-1">
                    <span className="text-white text-base font-bold">{project.displayName}</span>
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

