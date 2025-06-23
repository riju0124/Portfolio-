import { Github, Code } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Heaven Roleplay – RAGE:MP Server",
      description:
        "Heaven Roleplay was one of the most recognized RAGE:MP servers, known for its immersive roleplay, polished CEF UI, and fully custom systems like jobs, banking, housing, and businesses. Built using a scalable full-stack setup with C# and JavaScript.",
      tech: ["C#", "JavaScript", "MongoDB", "CEF UI"],
      image: "/images/heavenrp.png", 
      github: "#"
    },
    {
      title: "Personal Portfolio Website",
      description:
        "My professional developer portfolio showcasing projects, about me, and contact details. Designed with a modern 2025-style layout, advanced animations, and clean UI using TypeScript and Tailwind CSS.",
      tech: ["TypeScript", "React", "Tailwind CSS"],
      image: "/images/portfolio-preview.png", 
      github: "#"
    },
    {
      title: "??? Secret RAGE:MP Project",
      description:
        "Currently working on something big... a new RAGE:MP server with unique features. Nope, not Heaven RP 2.0 😏 — and sorry, the name is still under wraps. Coming soon!",
      tech: ["C#", "CEF UI", "MySQL"],
      image: "/images/secret-project.jpg", 
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30 backdrop-blur-sm border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
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
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Code className="h-6 w-6 text-purple-400 bg-black/20 p-1 rounded backdrop-blur-sm" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

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

                <div className="flex justify-end">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 border border-purple-500 text-purple-400 text-sm py-2 px-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
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
