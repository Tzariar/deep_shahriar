import React from 'react';
import { RESUME_DATA } from '../utils/resumeData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills ranging from IT infrastructure to data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.technicalExpertise.map((area, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                  <i className={`fas ${getIconForCategory(area.category)}`}></i>
                </div>
                <h3 className="font-bold text-lg text-slate-800">{area.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, i) => (
                  <span key={i} className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper to assign icons dynamically
const getIconForCategory = (category: string) => {
  if (category.includes("Support")) return "fa-headset";
  if (category.includes("Windows")) return "fa-server";
  if (category.includes("Networking")) return "fa-network-wired";
  if (category.includes("Cloud")) return "fa-cloud";
  if (category.includes("Data")) return "fa-chart-bar";
  return "fa-shield-alt";
};

export default Skills;