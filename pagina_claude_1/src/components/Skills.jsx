import Reveal from "./Reveal";
import { skillGroups } from "../data/cv";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <Reveal className="section-head" y={16}>
          <span className="eyebrow">Skills</span>
          <h2>A full-stack AI toolbelt</h2>
          <p>
            From data engineering to model training to shipping agentic
            product experiences — the tools I reach for at every stage.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.08} className="card skill-card">
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
