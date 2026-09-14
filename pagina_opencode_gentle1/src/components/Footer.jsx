import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profileData';

const Footer = () => {
  const { personal } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-400 text-sm">
            © {currentYear} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Send an email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#hero"
              className="text-gray-400 hover:text-white transition-colors ml-4"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
