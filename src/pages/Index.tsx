
import Hero from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import Contact from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Scene3D } from "@/components/Scene3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>
      <div className="relative z-10">
        <Navigation />
        <Hero onScrollToNext={() => {}} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
