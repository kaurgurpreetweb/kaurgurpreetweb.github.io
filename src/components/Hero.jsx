import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
          Frontend Developer | JavaScript | React.js
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Building Modern, <br></br>Responsive Web Experiences
        </h1>
        
        <p className="text-slate-400 text-lg sm:text-xl mx-auto">
         I build responsive, accessible, and visually polished web interfaces that turn design concepts into seamless digital experiences using modern frontend technologies.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-all shadow-lg shadow-cyan-500/20"
          >
            View My Projects &rarr;
          </a>
          <a
            href="#contact"
            className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-lg transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links text format */}
        <div className="flex justify-center space-x-6 pt-6 text-slate-400 font-medium text-sm">
          <a href="https://github.com/kaurgurpreetweb" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/kaursgurpreet/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <span>•</span>
          <a href="mailto:kaur.gurpreet.web@gmail.com" className="hover:text-cyan-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

