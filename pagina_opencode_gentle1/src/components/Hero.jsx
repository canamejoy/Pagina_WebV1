import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profileData';

const Hero = () => {
  const { personal } = profileData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" aria-hidden="true"></div>
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-cyan rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">{personal.name}</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {personal.titles.map((title, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-dark-700/50 rounded-full text-sm font-medium text-gray-300 border border-dark-600"
            >
              {title}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{personal.location}</span>
          </div>
          <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={18} />
            <span>{personal.phone}</span>
          </a>
          <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={18} />
            <span>{personal.email}</span>
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-blue/80 rounded-lg transition-all duration-300 text-white"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg text-white font-semibold hover:opacity-90 transition-opacity duration-300"
        >
          <span>Get In Touch</span>
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
