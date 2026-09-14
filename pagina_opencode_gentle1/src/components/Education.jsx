import React from 'react';
import { GraduationCap, School, Calendar, LanguagesIcon, Loader, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {profileData.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-dark-700/50 rounded-xl p-6 border border-dark-600 card-hover"
            >
              <GraduationCap className="w-8 h-8 text-accent-blue mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{edu.degree}</h3>
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <School size={16} className="text-accent-cyan" />
                <span className="text-sm">{edu.institution}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar size={14} />
                <span>{edu.year}</span>
                {edu.status === 'in-progress' && (
                  <span className="flex items-center gap-1 ml-2 px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                    <Loader size={12} className="animate-spin" />
                    In Progress
                  </span>
                )}
                {edu.status === 'completed' && (
                  <span className="flex items-center gap-1 ml-2 px-2 py-0.5 bg-green-900/30 text-green-300 rounded-full text-xs">
                    <CheckCircle size={12} />
                    Completed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6">
            <span className="gradient-text">Languages</span>
          </h3>
          <div className="flex justify-center gap-6">
            {profileData.languages.map((lang) => (
              <div
                key={lang.language}
                className="bg-dark-700/50 rounded-xl px-8 py-6 border border-dark-600 text-center"
              >
                <LanguagesIcon className="w-6 h-6 text-accent-cyan mx-auto mb-2" />
                <div className="font-semibold text-white">{lang.language}</div>
                <div className="text-gray-400 text-sm">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;