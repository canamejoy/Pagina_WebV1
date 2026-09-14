import React from 'react';
import { CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Soft Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-dark-800/50 rounded-xl border border-dark-600 card-hover"
            >
              <CheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
              <p className="text-gray-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
