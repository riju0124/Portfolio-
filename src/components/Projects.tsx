
import { Link, Github, Code, Database } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "RAGEMP SERVER",
      description: "A custom RAGE:MP roleplay server built with a full-stack architecture, featuring dynamic systems such as jobs, housing, banking, and player-owned businesses. Designed with a focus on immersive gameplay, real-time interactions, and a modular CEF UI powered by HTML, CSS, and JavaScript for a smooth user experience.",
      tech: ["Java Script", "React", "MongoDB", "C#"],
      image: "",
      demo: "#",
      github: "#"
    },
    {
      title: "TEST TEST TEST",
      description: "A collaborative project management tool with real-time updates, built using React, TypeScript, and Firebase with drag-and-drop functionality.",
      tech: ["React", "TypeScript", "Firebase", "Material-UI"],
      image: "",
      demo: "#",
      github: "#"
    },
    {
      title: "TEST TEST",
      description: "A comprehensive analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration.",
      tech: ["Vue.js", "Express.js", "MongoDB", "Chart.js"],
      image: "",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30 backdrop-blur-sm border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack applications that demonstrate modern web development practices and scalable architecture.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800/50 border border-purple-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Code className="h-6 w-6 text-purple-400 bg-black/20 p-1 rounded backdrop-blur-sm" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 text-purple-400 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-2"
                  >
                    <Link className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border border-purple-500 text-purple-400 text-center py-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
