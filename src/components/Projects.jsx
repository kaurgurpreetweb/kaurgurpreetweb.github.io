import React from 'react';

export default function Projects() {
  const projectsList = [
    {
      title: 'SREM CRM — Education & Admission Management System',
      description: 'Worked on the frontend development of an education CRM platform designed to streamline student lead management and admission processes. Implemented user interfaces for creating admission forms, tracking lead statuses, managing student records, and handling email templates, admit cards, and result-related workflows.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      category: 'Frontend Development, React.js',
      
    },   
    {
      title: 'Student Dashboard',
      description: 'Worked on the frontend of a student dashboard that provides students with access to academic and admission-related information, including examination results, admission processes, and scholarship details. Contributed to the user interface and page layouts using modern frontend technologies.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Laravel Blade', 'Bootstrap', 'Tailwind CSS'],
      category: 'Frontend Development · Web Development',
      
    },
    {
      title: 'Admission Documents & PDF Generation',
      description: 'Worked on implementing PDF generation for educational documents, including PAL letters, scorecards, admit cards, and payment receipts. Focused on creating structured document layouts with Laravel and Bootstrap to ensure consistent formatting and clear presentation of information.',
      tech: ['Laravel','PHP', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      category: 'Web Development, Frontend Development, Document Generation',
      
    },
    {
      title: 'University Landing Pages',
      description: 'Developed and maintained landing pages for multiple educational institutions, translating design requirements into visually consistent web pages. Focused on responsive layouts, cross-browser compatibility, and accurate UI implementation across desktop and mobile devices.',
      tech: ['HTML5', 'CSS3', 'Responsive Email Design'],
      category: '	Frontend Development, Web Development, Landing Pages',
      
    },
     {
      title: 'Laravel Frontend Integration',
      description: 'Converted existing HTML pages for university landing pages and examination websites into Laravel Blade templates (.blade.php). Adapted the frontend markup for integration into Laravel-based websites while maintaining the existing design, responsive layouts, and page structure.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Laravel Blade'],
      category: 'Laravel, Frontend Development',
      
    },
    {
      title: 'Examination Websites Development & Maintenance',
      description: 'Developed and maintained examination websites for AIACAT, AICLET, AIDAT, GAHET, GCSET, GMCAT, and GMCET. Maintained responsive UI across devices, updated homepage content, created blog pages, and implemented SEO updates provided by the SEO team. Ensured consistent layouts and functionality through cross-browser compatibility checks.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'Javascript'],
      category: 'Web Development, Frontend Development',
      
    },


    {
      title: 'Responsive Email Templates',
      description: 'Developed HTML email templates for multiple universities, including VGU, JLU, Invertis University, Hindustan University, SBSU, APG Shimla, SMRU, and SGC, along with other institutions. Focused on university-specific branding, consistent layouts, and email styling to support professional communication across different educational brands.',
      tech: ['HTML5', 'CSS3', 'Responsive Email Design'],
      category: 'Email Development',
      
    },
    
   
    {
      title: 'WordPress Website Content Management',
      description: 'Maintained multiple university websites using WordPress by updating homepage content, university information, and website pages. Published blogs, managed content formatting, and ensured consistent layouts and a smooth user experience across different devices.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'WordPress'],
      category: 'WordPress Development',
      
    },
     
     {
      title: 'Multi-Industry Website Theme Development',
      description: 'Converted provided designs into responsive, multi-page website themes for various industries, including healthcare, pharmaceuticals, baby care, maternity, food, agriculture, and toys. Implemented interactive UI elements using JavaScript and jQuery, and created responsive layouts using Bootstrap and custom CSS for mobile, tablet, and desktop devices.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'Javascript', 'jQuery'],
      category: 'Web Development',
      
    },
         {
      title: 'WordPress Theme & Website Development',
      description: 'Developed HTML website themes and worked on WordPress websites using existing and custom themes. Created and customized website pages using code editors and WordPress tools, focusing on responsive layouts, consistent design, and cross-device compatibility.',
      tech: ['WordPress', 'Elementor', 'HTML', 'CSS', 'Boostrap', 'Javascript', 'jQuery', 'PHP'],
      category: 'WordPress Development',
      
    },
     {
      title: 'UI/UX Design & Frontend Implementation',
      description: 'Designed website interfaces using Figma and Adobe XD and implemented designs into responsive web pages using HTML and CSS for selected projects. Focused on clean layouts, visual consistency, and user-friendly experiences across different screen sizes.',
      tech: ['Figma', 'Adobe XD', 'Photoshop', 'WordPress', 'Elementor', 'HTML', 'CSS', 'Boostrap', 'Javascript'],
      category: 'UI/UX Design / Web Development',
      
    },
     {
      title: 'Mobile Application UI Design',
      description: 'Designed user interfaces for mobile applications across various industries, including cricket, finance, forex trading, lottery, prayer time, dating, truck booking and logistics, water tank management, and kids word puzzle games. Focused on intuitive navigation, well-structured layouts, and user-friendly visual experiences tailored to each applications purpose.',
      tech: ['Figma'],
      category: 'UI/UX Design',
      
    },
     {
      title: 'Graphic Design & Branding',
      description: 'Created website banners, sliders, social media creatives, logos, icons, illustrations, and emailer graphics for various projects. Focused on visual consistency, creative layouts, and maintaining brand identity across different digital platforms.',
      tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
      category: 'Graphic Design',
      
    },







    {
      title: 'Portfolio Website',
      description: 'Designed and developed a modern, responsive personal portfolio website to showcase my frontend development skills, professional projects, technical expertise, and background. Focused on clean UI, intuitive navigation, and a consistent user experience across devices. Integrated a contact form with a Node.js and Express.js backend using a REST API and Resend for email delivery.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Vite', 'React', 'Node.js', 'Express.js', 'REST API', 'Resend'],
      category: 'Web Development | Frontend Development | Full-Stack Integration',
      liveLink: 'https://kaurgurpreetweb.github.io/',
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-lg">
              <div className="space-y-4">
                <span className="text-xs text-cyan-400 block mb-2 rounded-md font-medium"><strong>Category: </strong>{project.category}</span>
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
           
              {(project.liveLink || project.githubLink) && (
                <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-slate-800 text-sm font-medium">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      Live Demo &rarr;
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}