import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { profileData } from '../data/profileData';

const Contact = () => {
  const { personal } = profileData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-accent-blue" />
              <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">{personal.email}</a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-accent-cyan" />
              <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{personal.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-accent-purple" />
              <span>{personal.location}</span>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800/60 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800/60 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-dark-800/60 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-white resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Send size={18} />
              Send Message
            </button>
            {submitted && (
              <div className="text-sm text-green-400 text-center" role="status">
                Opening email client to send your message...
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
