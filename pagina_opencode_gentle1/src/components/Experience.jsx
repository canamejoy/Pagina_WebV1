import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-600 transform -translate-x-1/2"></div>

          {profileData.experience.map((job, index) => (
            <div
              key={job.id}
              className={`relative flex mb-12 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              <div
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${
                  index % 2 === 0 ? 'bg-accent-blue' : 'bg-accent-purple'
                } transform -translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)] mt-6`}
              ></div>

              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? '' : ''}`}>
                <div className="bg-dark-800/60 rounded-xl p-6 border border-dark-600 card-hover">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <Calendar size={16} className="text-accent-cyan" />
                    <span>{job.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    <Briefcase className="inline-block w-5 h-5 text-accent-blue mr-2" />
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Building2 size={16} className="text-accent-purple" />
                    <span>{job.company}</span>
                  </div>
                  {job.subtitle && (
                    <div className="text-xs text-gray-500 mb-4">{job.subtitle}</div>
                  )}

                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle
                          size={16}
                          className={`flex-shrink-0 mt-0.5 ${
                            index % 2 === 0 ? 'text-accent-blue' : 'text-accent-purple'
                          }`}
                        />
                        <span>{resp}</span>
                      </li>
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