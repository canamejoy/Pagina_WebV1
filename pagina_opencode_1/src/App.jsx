import { useState, useEffect } from 'react';
import {
  profile,
  skills,
  technicalSkills,
  experience,
  education,
  languages,
  certifications,
  references,
} from './data';
import './App.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['about', 'About'],
    ['skills', 'Skills'],
    ['experience', 'Experience'],
    ['education', 'Education'],
    ['courses', 'Courses'],
    ['contact', 'Contact'],
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand">
          <span className="navbar__brand-dot" />
          {profile.name}
        </a>
        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={`#${href}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__eyebrow">Hi, my name is</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.title}</p>
          <div className="hero__tags">
            {profile.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <p className="hero__location">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </p>
          <div className="hero__actions">
            <a href="#experience" className="btn btn--primary">
              View experience
            </a>
            <a
              href="#contact"
              className="btn btn--ghost"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="orb orb--large" />
          <div className="orb orb--small" />
          <div className="avatar">{profile.initials}</div>
          <div className="hero__spark">✦</div>
        </div>
      </div>
      <div className="hero__wave" />
    </header>
  );
}

function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <div className="section__head">
          <p className="section__index">{String(id).toUpperCase()}</p>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About me" subtitle="A quick introduction">
      <div className="about__card">
        <p className="about__summary">{profile.summary}</p>
        <div className="about__contact">
          <a href={`mailto:${profile.email}`} className="chip">
            <span className="chip__icon">✉</span>
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="chip">
            <span className="chip__icon">☎</span>
            {profile.phone}
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="chip">
            <span className="chip__icon">⌥</span>
            {profile.github}
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="chip">
            <span className="chip__icon">in</span>
            {profile.linkedin}
          </a>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Soft skills & technical expertise">
      <div className="skills__grid">
        <div className="skills__col">
          <h3 className="skills__heading">Core strengths</h3>
          <ul className="list list--check">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="skills__col">
          <h3 className="skills__heading">Technical skills</h3>
          <div className="skills__tech">
            {technicalSkills.map((group) => (
              <div key={group.category} className="skills__group">
                <span className="skills__group-label">{group.category}</span>
                <div className="skills__group-items">
                  {group.items.map((item) => (
                    <span key={item} className="mini-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I've worked and what I've built">
      <div className="timeline">
        {experience.map((job, i) => (
          <article key={job.role} className={`timeline__item ${i % 2 ? 'timeline__item--right' : ''}`}>
            <div className="timeline__dot" />
            <div className="timeline__card card">
              <div className="timeline__head">
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__org">{job.org}</p>
              <ul className="list">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background">
      <div className="edu__grid">
        {education.map((e) => (
          <div key={e.degree} className="card edu__card">
            <span className="edu__status">{e.status}</span>
            <h3 className="edu__degree">{e.degree}</h3>
            <p className="edu__institution">{e.institution}</p>
          </div>
        ))}
      </div>
      <div className="langs">
        <h3 className="skills__heading">Languages</h3>
        <div className="langs__list">
          {languages.map((l) => (
            <div key={l.name} className="lang">
              <span className="lang__name">{l.name}</span>
              <div className="lang__bar">
                <span
                  className="lang__fill"
                  style={{ width: l.level === 'Native' ? '100%' : '70%' }}
                />
              </div>
              <span className="lang__level">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Courses() {
  return (
    <Section id="courses" title="Courses & Certifications" subtitle="Continuous learning">
      <div className="courses__grid">
        {certifications.map((c) => (
          <div key={c.title} className="card course">
            <span className="course__badge">✓</span>
            <div>
              <p className="course__title">{c.title}</p>
              <p className="course__org">{c.org}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Let's work together" subtitle="Get in touch">
      <div className="contact__card">
        <div className="contact__row">
          <a href={`mailto:${profile.email}`} className="contact__link">
            <span className="contact__icon">✉</span>
            <span>
              <small>Email</small>
              {profile.email}
            </span>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__link">
            <span className="contact__icon">☎</span>
            <span>
              <small>Phone</small>
              {profile.phone}
            </span>
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="contact__link">
            <span className="contact__icon">⌥</span>
            <span>
              <small>GitHub</small>
              {profile.github}
            </span>
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="contact__link">
            <span className="contact__icon">in</span>
            <span>
              <small>LinkedIn</small>
              {profile.linkedin}
            </span>
          </a>
        </div>
        <div className="contact__refs">
          <h3 className="skills__heading">References</h3>
          {references.map((r) => (
            <div key={r.name} className="ref card">
              <p className="ref__name">{r.name}</p>
              <p className="ref__title">{r.title}</p>
              <p className="ref__inst">{r.institution}</p>
              <div className="ref__meta">
                <a href={`mailto:${r.email}`}>{r.email}</a>
                <a href={`tel:${r.phone.replace(/\s/g, '')}`}>{r.phone}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <div className="footer__links">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
