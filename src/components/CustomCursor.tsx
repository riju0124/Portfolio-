import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, .cursor-pointer, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-150 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
        }}
      >
        <div className={`w-5 h-5 rounded-full border-2 transition-colors duration-150 ${
          isHovering 
            ? 'border-purple-400 bg-purple-400/20' 
            : 'border-white/50 bg-white/10'
        }`} />
      </div>
      <div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          transform: `translate(${mousePosition.x - 2}px, ${mousePosition.y - 2}px)`,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-white" />
      </div>
    </>
  );
};

export default CustomCursor;