import { motion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/cv";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-grid" />

      <div className="container hero-inner">
        <motion.p className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
          Available for research & AI engineering roles
        </motion.p>

        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
          {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-gradient">{profile.name.split(" ").slice(2).join(" ")}</span>
        </motion.h1>

        <motion.p className="hero-role" variants={fadeUp} initial="hidden" animate="show" custom={2}>
          {profile.role}
        </motion.p>

        <motion.p className="hero-summary" variants={fadeUp} initial="hidden" animate="show" custom={3}>
          Physics Engineer turned AI builder — designing generative models, agentic
          LLM systems, and end-to-end MLOps pipelines that turn research into
          working software.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={4}>
          <a href="#contact" className="btn btn-primary">
            Get in touch <ArrowDownRight size={17} />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Download résumé
          </a>
        </motion.div>

        <motion.div className="hero-social" variants={fadeUp} initial="hidden" animate="show" custom={5}>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <span className="hero-location">{profile.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
