import { useEffect, useState, useRef } from 'react';

export function TechnicalOrbitSphere() {
  const techStack = [
    { slug: "python", color: "#FFD60A", size: 38, label: "Python" },
    { slug: "pytorch", color: "#FF3B5C", size: 36, label: "PyTorch" },
    { slug: "opencv", color: "#00C9E0", size: 30, label: "OpenCV" },
    { slug: "yolo", color: "#FFD60A", size: 32, label: "YOLO" },
    { slug: "onnx", color: "#00C9E0", size: 30, label: "ONNX" },
    { slug: "numpy", color: "#BF8FFF", size: 26, label: "NumPy" },
    { slug: "pandas", color: "#BF8FFF", size: 26, label: "Pandas" },
    { slug: "scikitlearn", color: "#BF8FFF", size: 26, label: "Scikit-Learn" },
    { slug: "ollama", color: "#3DFFA0", size: 34, label: "Ollama" },
    { slug: "langchain", color: "#3DFFA0", size: 30, label: "LangChain" },
    { slug: "react", color: "#00C9E0", size: 36, label: "React" },
    { slug: "nextdotjs", color: "#FFFFFF", size: 34, label: "Next.js" },
    { slug: "typescript", color: "#00C9E0", size: 32, label: "TypeScript" },
    { slug: "javascript", color: "#FFD60A", size: 30, label: "JS" },
    { slug: "fastapi", color: "#3DFFA0", size: 32, label: "FastAPI" },
    { slug: "nodedotjs", color: "#3DFFA0", size: 34, label: "Node.js" },
    { slug: "postgresql", color: "#BF8FFF", size: 32, label: "Postgres" },
    { slug: "mongodb", color: "#3DFFA0", size: 32, label: "MongoDB" },
    { slug: "mysql", color: "#BF8FFF", size: 30, label: "MySQL" },
    { slug: "graphql", color: "#FF3B5C", size: 30, label: "GraphQL" },
    { slug: "tailwindcss", color: "#00C9E0", size: 28, label: "Tailwind" }
  ];

  const [rotation, setRotation] = useState({ x: 20, y: 20 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const iconUrls = techStack.map(item => ({
    ...item,
    url: `https://cdn.simpleicons.org/${item.slug}/${item.color.replace('#', '')}`
  }));

  useEffect(() => {
    if (isHovered) return;
    const orbitTimer = setInterval(() => {
      setRotation(prev => ({
        x: (prev.x + 0.05) % 360,
        y: (prev.y + 0.1) % 360
      }));
    }, 30);
    return () => clearInterval(orbitTimer);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setIsHovered(true);
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({
      x: y * -60,
      y: x * 60
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
          const phi = Math.acos(-1 + (2 * i) / iconUrls.length);
          const theta = Math.sqrt(iconUrls.length * Math.PI) * phi;
          const r = 200;
          return (
            <div key={icon.slug} className="floating-icon-node" style={{
              transform: `translate3d(${r * Math.sin(phi) * Math.cos(theta)}px, ${r * Math.sin(phi) * Math.sin(theta)}px, ${r * Math.cos(phi)}px) rotateY(${-rotation.y}deg) rotateX(${-rotation.x}deg)` 
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                <img 
                  src={icon.url} 
                  alt={icon.slug} 
                  className="icon-img"
                  style={{ 
                    width: `${icon.size}px`, 
                    height: `${icon.size}px`, 
                    filter: `drop-shadow(0 0 8px ${icon.color}88)`
                  }}
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
                <span className="bebas" style={{ fontSize: '9px', color: icon.color, letterSpacing: '0.5px' }}>
                  {icon.label}
                </span>
              </div>
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
          touch-action: none;
          pointer-events: auto;
        }
        .sphere-core { 
          position: relative; 
          width: 0; 
          height: 0; 
          transform-style: preserve-3d; 
          transition: transform 0.05s ease-out;
          pointer-events: none;
        }
        .floating-icon-node { 
          position: absolute; 
          width: 60px; 
          height: 60px; 
          left: -30px; 
          top: -30px; 
          transform-style: preserve-3d; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          pointer-events: none;
        }
        .icon-img { 
          transition: all 0.3s; 
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
