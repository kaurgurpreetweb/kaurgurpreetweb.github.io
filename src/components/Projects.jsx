import React from 'react';

export default function Projects() {
  const projectsList = [
    {
      title: 'E-Commerce Frontend',
      description: 'A responsive online shopping interface built with React.js and Tailwind CSS featuring product cards, filters, and a shopping cart workflow.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, clean personal portfolio website to showcase my frontend development skills, projects, and background.',
      tech: ['React.js', 'Vite', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Dashboard UI',
      description: 'An admin analytics dashboard featuring interactive UI components, stat cards, and clean data layouts.',
      tech: ['React.js', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">Some of the work I've built recently</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-lg"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-cyan-400 px-2.5 py-1 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-slate-800 text-sm font-medium">
                <a href={project.liveLink} className="text-cyan-400 hover:underline">Live Demo &rarr;</a>
                <a href={project.githubLink} className="text-slate-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}