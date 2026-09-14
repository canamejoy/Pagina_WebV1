import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { profileData } from '../data/profileData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profileData.certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-dark-800/60 rounded-lg border border-dark-600 card-hover group"
            >
              <Award className="w-5 h-5 text-accent-yellow text-amber-400 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-gray-300 leading-snug">{cert}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;