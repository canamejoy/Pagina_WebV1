import { GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal";
import { education, certifications, references } from "../data/cv";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container education-grid">
        <div>
          <Reveal className="section-head" y={16}>
            <span className="eyebrow">Education</span>
            <h2>Academic background</h2>
          </Reveal>

          <div className="edu-list">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.08} className="card edu-card">
                <GraduationCap size={20} className="edu-icon" />
                <div>
                  <h3>{e.degree}</h3>
                  <p className="timeline-org">{e.org}</p>
                </div>
                <span className="timeline-period">{e.period}</span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="card refs-card">
            <h3>References</h3>
            <div className="refs-list">
              {references.map((r) => (
                <div key={r.name} className="ref-item">
                  <p className="ref-name">{r.name}</p>
                  <p className="ref-title">{r.title}</p>
                  <p className="ref-org">{r.org}</p>
                </div>
              ))}
            </div>
            <p className="refs-note">Contact details available upon request.</p>
          </Reveal>
        </div>

        <div>
          <Reveal className="section-head" y={16} delay={0.05}>
            <span className="eyebrow">Certifications</span>
            <h2>Courses &amp; credentials</h2>
          </Reveal>

          <Reveal delay={0.15} className="card cert-card">
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c}>
                  <Award size={16} className="cert-icon" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
