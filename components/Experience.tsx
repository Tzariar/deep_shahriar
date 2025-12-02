import React from 'react';
import { RESUME_DATA } from '../utils/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {RESUME_DATA.experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-300 top-0"></div>
              
              <div className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full`}>
                
                {/* Spacer for alternate side */}
                <div className="hidden md:block w-5/12"></div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow flex items-center justify-center z-10"></div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600 md:border-l-0 md:border-t-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-slate-800">{job.role}</h3>
                  </div>
                  <div className="text-blue-600 font-medium mb-1">{job.company}</div>
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <span><i className="far fa-calendar-alt mr-1"></i> {job.period}</span>
                    <span><i className="fas fa-map-marker-alt mr-1"></i> {job.location}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 text-sm space-y-1">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;