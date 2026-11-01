import React from 'react';

export default function Skills() {
  const skillsList = [
    { name: 'React.js', level: 'Advanced' },
    { name: 'JavaScript (ES6+)', level: 'Advanced' },
    { name: 'HTML5 / CSS3', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Bootstrap', level: 'Proficient' },
    { name: 'Git & GitHub', level: 'Intermediate' },
    { name: 'Responsive Design', level: 'Advanced' },
    { name: 'Express.js (Basic)', level: 'Beginner' },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">Technologies and tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skillsList.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
            >
              <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-xs text-slate-500 mt-2">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}