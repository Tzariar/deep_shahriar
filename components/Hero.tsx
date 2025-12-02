import React from 'react';
import { RESUME_DATA } from '../utils/resumeData';

const Hero = () => {
  return (
    <section id="home" className="relative bg-slate-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-4 inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              Available for work
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-blue-400">{RESUME_DATA.profile.name}</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-300 mb-6 font-light">
              {RESUME_DATA.profile.title}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              {RESUME_DATA.profile.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30"
              >
                Contact Me
              </a>
              <a 
                href={RESUME_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all"
              >
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
            </div>

            <div className="mt-8 flex gap-6 text-gray-400">
               <a href={`mailto:${RESUME_DATA.profile.email}`} className="hover:text-blue-400 transition-colors">
                  <i className="fas fa-envelope text-xl"></i>
               </a>
               <a href={`https://${RESUME_DATA.profile.github}`} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <i className="fab fa-github text-xl"></i>
               </a>
               <a href={`https://${RESUME_DATA.profile.portfolio}`} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <i className="fas fa-globe text-xl"></i>
               </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full border-4 border-blue-500/30 p-2">
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative bg-slate-800">
                 {/* Placeholder for user photo. Since no file was provided, using a high-quality placeholder. 
                     User can replace this URL with their actual photo path. */}
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt={RESUME_DATA.profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-slate-800 p-3 rounded-full shadow-lg border border-gray-700">
                 <i className="fas fa-code text-blue-400 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;