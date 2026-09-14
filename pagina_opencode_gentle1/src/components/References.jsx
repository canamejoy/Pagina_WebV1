import React from 'react';
import { User, Mail, Phone, Quote } from 'lucide-react';
import { profileData } from '../data/profileData';

const References = () => {
  return (
    <section id="references" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">References</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profileData.references.map((ref, index) => (
            <div
              key={index}
              className="bg-dark-700/50 rounded-xl p-6 border border-dark-600 card-hover relative"
            >
              <Quote className="w-8 h-8 text-accent-blue opacity-30 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{ref.name}</h3>
                  <p className="text-sm text-gray-400">{ref.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">{ref.institution}</p>
              <div className="space-y-2">
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-cyan transition-colors"
                >
                  <Mail size={16} />
                  <span>{ref.email}</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Phone size={16} />
                  <span>{ref.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;