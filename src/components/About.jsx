import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">Get to know more about my background and experience</p>
        </div>

        {/* About Content Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I am a passionate <span className="text-cyan-400 font-medium">Frontend Developer</span> with a strong foundation in building modern, responsive, and user-centric web applications. Over the years, I have honed my expertise in turning design concepts into clean, high-performing code.
          </p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I love learning new technologies, solving complex UI challenges, and continuously improving user experiences. My goal is to build digital products that are not only visually appealing but also scalable and efficient.
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div>
              <span className="text-slate-500 text-sm block">Specialization</span>
              <span className="text-slate-200 font-medium">Frontend Web Development</span>
            </div>
            <div>
              <span className="text-slate-500 text-sm block">Focus</span>
              <span className="text-slate-200 font-medium">React.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}