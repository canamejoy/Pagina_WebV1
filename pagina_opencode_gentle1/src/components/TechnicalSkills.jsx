import React from 'react';
import { Code2, Brain, Bot, Cpu, Eye, Workflow, Cloud, Boxes, Database, BarChart3, Server, GitBranch, FileCode, Palette } from 'lucide-react';
import { profileData } from '../data/profileData';

const categoryIcons = {
  "Programming": Code2,
  "Generative AI & LLMs": Brain,
  "AI Platforms & Tools": Bot,
  "Machine Learning / Deep Learning": Cpu,
  "Computer Vision": Eye,
  "MLOps & DevOps": Workflow,
  "Cloud & Data Platforms": Cloud,
  "Containers & Orchestration": Boxes,
  "Data Engineering": Database,
  "Data Analysis": BarChart3,
  "Infrastructure": Server,
  "Version Control": GitBranch,
  "Development Tools": FileCode,
  "UI/UX": Palette
};

const categoryColors = {
  "Programming": { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-700/40' },
  "Generative AI & LLMs": { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-700/40' },
  "AI Platforms & Tools": { bg: 'bg-pink-900/30', text: 'text-pink-300', border: 'border-pink-700/40' },
  "Machine Learning / Deep Learning": { bg: 'bg-indigo-900/30', text: 'text-indigo-300', border: 'border-indigo-700/40' },
  "Computer Vision": { bg: 'bg-cyan-900/30', text: 'text-cyan-300', border: 'border-cyan-700/40' },
  "MLOps & DevOps": { bg: 'bg-orange-900/30', text: 'text-orange-300', border: 'border-orange-700/40' },
  "Cloud & Data Platforms": { bg: 'bg-yellow-900/30', text: 'text-yellow-300', border: 'border-yellow-700/40' },
  "Containers & Orchestration": { bg: 'bg-sky-900/30', text: 'text-sky-300', border: 'border-sky-700/40' },
  "Data Engineering": { bg: 'bg-teal-900/30', text: 'text-teal-300', border: 'border-teal-700/40' },
  "Data Analysis": { bg: 'bg-green-900/30', text: 'text-green-300', border: 'border-green-700/40' },
  "Infrastructure": { bg: 'bg-red-900/30', text: 'text-red-300', border: 'border-red-700/40' },
  "Version Control": { bg: 'bg-fuchsia-900/30', text: 'text-fuchsia-300', border: 'border-fuchsia-700/40' },
  "Development Tools": { bg: 'bg-lime-900/30', text: 'text-lime-300', border: 'border-lime-700/40' },
  "UI/UX": { bg: 'bg-emerald-900/30', text: 'text-emerald-300', border: 'border-emerald-700/40' }
};

const TechnicalSkills = () => {
  return (
    <section id="technical-skills" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(profileData.technicalSkills).map(([category, skills]) => {
            const Icon = categoryIcons[category] || Code2;
            const colors = categoryColors[category] || categoryColors["Programming"];
            return (
              <div
                key={category}
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg} card-hover`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                  <h3 className={`text-lg font-semibold ${colors.text}`}>{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} border ${colors.border} text-[12px]`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;