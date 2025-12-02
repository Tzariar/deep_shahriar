import React from 'react';
import { RESUME_DATA } from '../utils/resumeData';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{RESUME_DATA.profile.name}</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              {RESUME_DATA.profile.tagline}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <a href={`mailto:${RESUME_DATA.profile.email}`} className="flex items-center text-gray-300 hover:text-white transition-colors">
              <i className="fas fa-envelope mr-2 w-5"></i> {RESUME_DATA.profile.email}
            </a>
            <div className="flex items-center text-gray-300">
               <i className="fas fa-phone mr-2 w-5"></i> {RESUME_DATA.profile.phone}
            </div>
            <div className="flex items-center text-gray-300">
               <i className="fas fa-map-marker-alt mr-2 w-5"></i> {RESUME_DATA.profile.location}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {RESUME_DATA.profile.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href={RESUME_DATA.profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
             <a href={`https://${RESUME_DATA.profile.github}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;