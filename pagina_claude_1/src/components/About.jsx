import { BrainCircuit, Languages as LanguagesIcon, MapPin, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { profile, softSkills, languages } from "../data/cv";

const facts = [
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: GraduationCap, label: "Background", value: "Physics Engineering → AI" },
  { icon: BrainCircuit, label: "Focus", value: "Generative AI & Agentic Systems" },
  { icon: LanguagesIcon, label: "Languages", value: languages.map((l) => l.name).join(" · ") },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="section-head" y={16}>
          <span className="eyebrow">About</span>
          <h2>
            Turning research into <span className="text-gradient">working AI systems</span>
          </h2>
          <p>{profile.summary}</p>

          <ul className="soft-skills">
            {softSkills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} y={16} className="fact-panel">
          <div className="fact-grid">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="fact-card card">
                <Icon size={20} className="fact-icon" />
                <p className="fact-label">{label}</p>
                <p className="fact-value">{value}</p>
              </div>
            ))}
          </div>

          <div className="lang-panel card">
            <p className="fact-label">Proficiency</p>
            {languages.map((l) => (
              <div className="lang-row" key={l.name}>
                <div className="lang-row-top">
                  <span>{l.name}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
                <div className="lang-bar">
                  <div className="lang-bar-fill" style={{ width: `${l.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
