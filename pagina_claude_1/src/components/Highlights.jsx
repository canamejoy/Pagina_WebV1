import { Sparkles, Bot, Workflow, ScanEye } from "lucide-react";
import Reveal from "./Reveal";
import { highlights } from "../data/cv";

const icons = [Sparkles, Bot, Workflow, ScanEye];

export default function Highlights() {
  return (
    <section id="work" className="section highlights-section">
      <div className="container">
        <Reveal className="section-head" y={16}>
          <span className="eyebrow">Highlights</span>
          <h2>Selected research outcomes</h2>
          <p>Concrete results from applied research at the intersection of physics and AI.</p>
        </Reveal>

        <div className="highlights-grid">
          {highlights.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={h.title} delay={i * 0.08} className="card highlight-card">
                <div className="highlight-icon">
                  <Icon size={20} />
                </div>
                <h3>{h.title}</h3>
                <p>{h.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
