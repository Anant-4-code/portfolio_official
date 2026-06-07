import { useEffect, useState, useRef } from 'react';

export function TechnicalOrbitSphere() {
  // Refined Tech Stack Array (Valid Simple Icons Slugs Only)
  const techSlugs = [
    // ML/DL & CV
    "python", "numpy", "pandas", "scikitlearn", "yolo", "onnx", "opencv",
    // LLM/GenAI
    "ollama", "langchain",
    // Research/Advanced
    "pytorch", "tensorflow",
    // Backend & Databases
    "fastapi", "nodedotjs", "express", "postgresql", "mongodb", "mysql", "firebase", "sqlite", "graphql",
    // Frontend
    "react", "nextdotjs", "typescript", "javascript", "html5", "tailwindcss", "bootstrap", "chartdotjs"
  ];

  const [rotation, setRotation] = useState({ x: 20, y: 20 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const iconUrls = Array.from(new Set(techSlugs)).map(slug => ({
    slug,
    url: `https://cdn.simpleicons.org/${slug}/FFE500` 
  }));

  // IMPROVED AUTO-ORBIT + HOVER LOGIC
  useEffect(() => {
    if (isHovered) return; // Stop auto-orbit only when actively hovering
    
    const orbitTimer = setInterval(() => {
      setRotation(prev => ({
        x: (prev.x + 0.05) % 360, // Slower, smoother default orbit
        y: (prev.y + 0.1) % 360
      }));
    }, 30);
    
    return () => clearInterval(orbitTimer);
  }, [isHovered]);

  // STABILIZED MOUSE INTERACTION
  const handleMouseMove = (e: React.MouseEvent) => {
    setIsHovered(true);
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    // Use relative percentage to prevent erratic jumps at edges
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Use a multiplier to control sensitivity
    setRotation({
      x: y * -60, 
      y: x * 60
    });
  };

  // CLEAN EXIT HANDLER
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Optional: Reset to a neutral starting rotation or keep current
  };

  return (
    <div 
      ref={containerRef} 
      className="sphere-interaction-bounds" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sphere-core" style={{ transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
        {iconUrls.map((icon, i) => {
          // Fibonacci Sphere distribution for uniform spacing of many items
          const phi = Math.acos(-1 + (2 * i) / iconUrls.length);
          const theta = Math.sqrt(iconUrls.length * Math.PI) * phi;
          const r = 200; // Increased radius for a "Bigger" look
          return (
            <div key={icon.slug} className="floating-icon-node" style={{
              transform: `translate3d(${r * Math.sin(phi) * Math.cos(theta)}px, ${r * Math.sin(phi) * Math.sin(theta)}px, ${r * Math.cos(phi)}px) rotateY(${-rotation.y}deg) rotateX(${-rotation.x}deg)` 
            }}>
              <img 
                src={icon.url} 
                alt={icon.slug} 
                className="icon-img"
                onError={(e) => e.currentTarget.style.display = 'none'} // Hides broken icons instantly
              />
            </div>
          );
        })}
      </div>

      <style>{`
        .sphere-interaction-bounds {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: crosshair;
          perspective: 1000px;
          touch-action: none; /* Prevents mobile scroll interference */
          pointer-events: auto; /* This prevents the 3D cloud from intercepting scroll/mouse events */
        }
        .sphere-core { 
          position: relative; 
          width: 0; 
          height: 0; 
          transform-style: preserve-3d; 
          transition: transform 0.05s ease-out; /* Faster for "locked-to-cursor" feel */
          pointer-events: none;
        }
        .floating-icon-node { 
          position: absolute; 
          width: 50px; 
          height: 50px; 
          left: -25px; 
          top: -25px; 
          transform-style: preserve-3d; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          pointer-events: none; /* This ensures individual icons don't break the scroll-spy detection */
        }
        .icon-img { 
          width: 35px; 
          height: 35px; 
          filter: drop-shadow(0 0 8px rgba(255, 229, 0, 0.6)); 
          transition: all 0.3s; 
          pointer-events: none;
        }
        .floating-icon-node:hover .icon-img { 
          transform: scale(2); 
          filter: drop-shadow(0 0 20px #FFE500); 
        }
      `}</style>
    </div>
  );
}
