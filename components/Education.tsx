import React from 'react';
import { RESUME_DATA } from '../utils/resumeData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <i className="fas fa-graduation-cap text-blue-600 mr-3"></i> Education
            </h3>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, index) => (
                <div key={index} className="pl-6 border-l-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <h4 className="font-bold text-lg text-slate-800">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages Column */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <i className="fas fa-certificate text-blue-600 mr-3"></i> Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {RESUME_DATA.certifications.map((cert, index) => (
                  <span key={index} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <i className="fas fa-language text-blue-600 mr-3"></i> Languages
              </h3>
              <div className="space-y-4">
                {RESUME_DATA.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-semibold text-slate-800">{lang.language}</span>
                    <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;