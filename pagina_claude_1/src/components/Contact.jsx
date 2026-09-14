import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { profile } from "../data/cv";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal className="contact-panel card">
          <div className="contact-glow" />
          <span className="eyebrow">Contact</span>
          <h2>
            Let's build something with <span className="text-gradient">AI, together</span>
          </h2>
          <p>
            Open to research collaborations, AI engineering roles, and
            interesting problems involving LLMs, agents, or computer vision.
          </p>

          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail size={17} /> {profile.email}
            </a>
            <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              <Phone size={17} /> {profile.phone}
            </a>
          </div>

          <div className="contact-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={18} /> {profile.githubLabel}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={18} /> {profile.linkedinLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
