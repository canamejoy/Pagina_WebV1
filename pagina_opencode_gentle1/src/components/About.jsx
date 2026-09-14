import React from 'react';
import { Briefcase, GraduationCap, Award, Languages } from 'lucide-react';
import { profileData } from '../data/profileData';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Research Experience', value: '2+ years' },
    { icon: GraduationCap, label: 'Education Programs', value: '3' },
    { icon: Award, label: 'Courses & Certifications', value: '11' },
    { icon: Languages, label: 'Languages', value: '2' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {profileData.profile}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-dark-700/50 p-6 rounded-xl border border-dark-600 card-hover text-center"
              >
                <stat.icon className="w-8 h-8 text-accent-blue mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
