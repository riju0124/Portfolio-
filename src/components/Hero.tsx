
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Download, Instagram } from 'lucide-react';


interface HeroProps {
  onScrollToNext: () => void;
}

const Hero = ({ onScrollToNext }: HeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(139,92,246,0.1),transparent,rgba(168,85,247,0.1))]" />
      </div>

      <div className={`text-center z-10 max-w-6xl mx-auto px-4 transition-all duration-1500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        
        {/* Main Heading */}
        <div className="mb-8 relative">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          />
          
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 mb-6">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 relative leading-tight">
            <span className="block text-white/90 mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-shift">
              Riju Naskar
            </span>
          </h1>
        </div>

        {/* Professional Title */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white/80 mb-4">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-purple-200 leading-relaxed font-light max-w-3xl mx-auto">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-medium">
              Specializing in C# • Node.js • TypeScript • React • Java Script
            </span>
          </p>
        </div>

       {/* Enhanced CTA buttons */}
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
  {/* View My Work */}
  <a
    href="#projects"
    className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl font-semibold text-white overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25"
  >
    <span className="relative z-10 flex items-center gap-2">
      View My Work
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  </a>

  {/* Download CV */}
  <button
    onClick={() => alert("CV not available yet.")}
    className="group px-8 py-4 border-2 border-purple-400/50 text-purple-300 rounded-2xl font-semibold hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
  >
    <span className="flex items-center gap-2">
      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
      Download CV
    </span>
  </button>
</div>


        {/* Social links */}
        <div className="flex justify-center gap-6 mb-12">
{[
  { icon: Github, href: 'https://github.com/riju0124', label: 'GitHub', username: 'riju0124' },
  // { icon: Linkedin, href: '#', label: 'LinkedIn', username: 'alex-johnson' },  
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email', username: 'riju@gmail.com' },
  { icon: Instagram, href: 'https://www.instagram.com/riju_naskar001', label: 'Instagram', username: 'riju_naskar001' } // ← added
].map(({ icon: Icon, href, label, username }) => (

            <a
              key={label}
              href={href}
              className="group relative p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                {username}
              </div>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={onScrollToNext} 
          className="animate-bounce cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-10 w-10 text-gray-400 mx-auto group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110" />
        </button>
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`floating-code absolute text-purple-400/20 font-mono text-sm animate-float-random`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + (i % 2) * 70}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`
            }}
          >
            {[
              'const magic = () => code;',
              '<Component />',
              'npm run build',
              'git commit -m "feat"',
              'docker deploy',
              'terraform plan'
            ][i]}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;