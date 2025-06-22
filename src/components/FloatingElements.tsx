
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full opacity-20 animate-float-random"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-violet-400/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-br from-purple-400/10 to-violet-600/10 transform rotate-12 animate-float" />
      <div className="absolute bottom-1/3 left-20 w-8 h-8 bg-gradient-to-br from-purple-400/10 to-indigo-600/10 rounded-full animate-bounce" />
    </div>
  );
};

export default FloatingElements;