
import { Code, Settings, Github, Database } from "lucide-react";

export const Skills = () => {
  const frontendSkills = [
    "React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5/CSS3"
  ];

  const backendSkills = [
    "Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"
  ];

  const tools = [
    "Git", "Docker", "AWS", "Vercel", "Firebase", "Linux"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies for building full-stack web applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm group hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-purple-900/50 border border-purple-500/30 p-3 rounded-full mr-4">
                <Code className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frontend</h3>
            </div>
            <div className="space-y-3">
              {frontendSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-800/50 border border-pink-500/20 rounded-2xl p-8 shadow-lg hover:shadow-pink-500/10 transition-all duration-300 backdrop-blur-sm group hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-pink-900/50 border border-pink-500/30 p-3 rounded-full mr-4">
                <Database className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Backend</h3>
            </div>
            <div className="space-y-3">
              {backendSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-slate-800/50 border border-indigo-500/20 rounded-2xl p-8 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 backdrop-blur-sm group hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-900/50 border border-indigo-500/30 p-3 rounded-full mr-4">
                <Settings className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tools & DevOps</h3>
            </div>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
