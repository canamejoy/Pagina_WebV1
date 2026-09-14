import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <TechnicalSkills />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
