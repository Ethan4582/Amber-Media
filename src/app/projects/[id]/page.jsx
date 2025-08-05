'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Lenis from "lenis";
import Header from '@/components/Header';
import Footer from '@/components/footer2';
import FooterContact from '@/components/contact';
import Link from 'next/link';
import { projects } from '@/data/projectData';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id;
  const project = projects.find(p => p.id === projectId);
  const lenisRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link href="/projects" className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors">
            Return to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const mediaSrc = project.videoSrc || project.imageSrc || '/7.png';
  const isVideo = !!project.videoSrc;

  // Select 6 random projects for the gallery
  const galleryProjects = [...projects]
    .filter(p => p.id !== projectId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Full Page Hero Section with Video/Image */}
      <div 
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          {isVideo ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={mediaSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              src={mediaSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Only show backup info if no image/video available */}
        {!project.videoSrc && !project.imageSrc && (
          <div className="absolute inset-0 z-10 bg-black bg-opacity-70 flex items-center justify-center transition-all duration-300">
            <div className="grid grid-cols-4 gap-8 text-center text-white">
              <div>
                <h3 className="font-bold mb-2">Title</h3>
                <p>{project.title}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Category</h3>
                <p>{project.Category || project.type}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Client</h3>
                <p>{project.Client}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Year</h3>
                <p>{project.Year}</p>
              </div>
            </div>
          </div>
        )}
      </div>

         {/* Overview and Credits absolute to corners */}



    {/* Slim row for Title, Category, Client, Year - Flexbox version */}
<div className="w-full bg-black px-8 py-2">
  <div className="max-w-7xl mx-auto flex justify-between">
    <span className="text-sm font-bold flex-1">Title: <span className="font-normal">{project.title}</span></span>
    <span className="text-sm font-bold flex-1 text-center">Category: <span className="font-normal">{project.Category || project.type}</span></span>
    <span className="text-sm font-bold flex-1 text-center">Client: <span className="font-normal">{project.Client}</span></span>
    <span className="text-sm font-bold flex-1 text-right">Year: <span className="font-normal">{project.Year}</span></span>
  </div>
</div>

   





   <div className='py-16 mb-10 relative'>
  <div className="max-w-7xl mx-auto px-10 md:px-24">
    {/* Overview - Left aligned */}
    <div className="w-full md:w-1/2 pr-0 md:pr-8 float-left">
      <h2 className="text-3xl font-bold mb-8 uppercase">Overview</h2>
      <div className="space-y-6">
        <h3 className="text-2xl font-light leading-relaxed">
          {project.Overview?.headline1 || "A surreal, symbolic short film exploring post-traumatic growth."}
        </h3>
        <p className="text-lg leading-relaxed text-gray-300">
          {project.Overview?.headline2 || "Experimental and dreamlike, this film uses abstract visuals, spoken word, and layered sound design to create an immersive emotional landscape. Amber led cinematography and grading for mood and metaphor."}
        </p>
      </div>
    </div>

    {/* Credits - Right aligned */}
    <div className="w-full md:w-1/2 pl-0 md:pl-8 float-right">
      <h2 className="text-3xl font-bold mb-8 uppercase">Credits</h2>
      <div className="space-y-4">
        {project.Credit ? (
          Object.entries(project.Credit).map(([role, name]) => (
            <div key={role} className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-400 capitalize">{role}</span>
              <span className="text-white font-medium">{name}</span>
            </div>
          ))
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-400">Director</span>
              <span className="text-white font-medium">Cas Eron</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-400">Cinematographer</span>
              <span className="text-white font-medium">Ori Wynn</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-400">Editor & VFX</span>
              <span className="text-white font-medium">Lumen Dray</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-400">Sound Designer</span>
              <span className="text-white font-medium">Nico Vahl</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-400">Movement Director</span>
              <span className="text-white font-medium">Ayla Rhodes</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-400">Colorist</span>
              <span className="text-white font-medium">Ember Faye</span>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Clearfix to contain floats */}
    <div className="clear-both"></div>
  </div>
</div>






      {/* Media section with margin from browser edge */}
      <div className="media px-8 md:px-24 ">
        {(project.videoSrc2 || project.imageSrc2) && (
          <div className="w-full h-screen mb-2">
            {project.videoSrc2 ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={project.videoSrc2} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.imageSrc2}
                alt={`${project.title} - Additional`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}

        {(project.videoSrc3 || project.imageSrc3) && (
          <div className="w-full h-screen">
            {project.videoSrc3 ? (
              <video
                className="w-full h-full object-cover mb-2"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={project.videoSrc3} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.imageSrc3}
                alt={`${project.title} - Additional`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}

        {(project.colmimg1 || project.colmimg2) && (
          <div className="w-full h-screen flex mb-2">
            <div className="w-1/2 h-1/2">
              <img
                src={project.colmimg1 || '/7.png'}
                alt={`${project.title} - Gallery 1`}
                className="w-full h-full object-cover mt-2 px-2"
              />
            </div>
            <div className="w-1/2 h-1/2">
              <img
                src={project.colmimg2 || '/7.png'}
                alt={`${project.title} - Gallery 2`}
                className="w-full h-full object-cover mt-2"
              />
            </div>
          </div>
        )}

        
      </div>

      {/* Reduced spacing above MORE PROJECTS */}
      <div className="font-semibold">
        <div className="text-5xl flex justify-center">
          MORE PROJECTS
        </div>

          {/* Gallery: 2 columns, 6 cards, rectangular, title/type below */}
      <div className="max-w-11xl mx-auto px-8 md:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {galleryProjects.map((p) => (
            <div key={p.id} >
              <div style={{
                width: '100%',
                height: '320px',
                aspectRatio: '2.5/1',
                borderRadius: '0px',
                overflow: 'hidden'
              }}>
                {p.videoSrc ? (
                  <video
                    src={p.videoSrc}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={p.imageSrc || '/7.png'}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex justify-between items-center mt-2 px-2">
                <span className="text-white text-base font-bold">{p.title}</span>
                <span className="text-gray-300 text-base font-normal">{p.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <Footer />
      <FooterContact />
    </div>
  );
}