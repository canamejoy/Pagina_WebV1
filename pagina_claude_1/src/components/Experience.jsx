import Reveal from "./Reveal";
import { experience } from "../data/cv";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-head" y={16}>
          <span className="eyebrow">Experience</span>
          <h2>Where the work happened</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 0.1} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {i !== experience.length - 1 && <span className="timeline-line" />}
              </div>

              <div className="card timeline-card">
                <div className="timeline-card-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-org">{job.org}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-bullets">
                  {job.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
