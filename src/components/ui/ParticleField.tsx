import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  shape: 'dot' | 'line' | 'cross';
  angle: number;
}

const COLORS = ['rgba(255, 214, 10, ALPHA)', 'rgba(0, 201, 224, ALPHA)', 'rgba(255, 59, 92, ALPHA)', 'rgba(191, 143, 255, ALPHA)'];

const ParticleField: React.FC = () => {
  const isSupported = (() => {
    if (typeof window === 'undefined') return false;
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !isMobile && !prefersReducedMotion;
  })();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number | null>(null);
  const scrollYRef = useRef(0);
  const lastScrollY = useRef(0);

  const spawnParticle = (x: number, y: number, count = 1) => {
    if (!isSupported) return;
    for (let i = 0; i < count; i++) {
      const colorTemplate = COLORS[Math.floor(Math.random() * COLORS.length)];
      const maxLife = 60 + Math.random() * 80;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(Math.random() * 1.2 + 0.3),
        alpha: 0.7 + Math.random() * 0.3,
        size: Math.random() * 2 + 1,
        color: colorTemplate,
        life: 0,
        maxLife,
        shape: Math.random() < 0.5 ? 'dot' : Math.random() < 0.5 ? 'line' : 'cross',
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Cap particle count to prevent performance issues
    if (particlesRef.current.length > 150) {
      particlesRef.current = particlesRef.current.slice(-150);
    }
  };

  useEffect(() => {
    if (!isSupported) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY.current);
      if (delta > 5) {
        // Spawn particles at random x along the viewport, fixed at 70% height from top
        const spawnX = Math.random() * window.innerWidth;
        const spawnY = window.innerHeight * (0.3 + Math.random() * 0.5);
        spawnParticle(spawnX, spawnY, Math.min(Math.floor(delta / 20), 4));
      }
      lastScrollY.current = currentY;
      scrollYRef.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Spawn ambient background particles slowly
    const ambientInterval = setInterval(() => {
      spawnParticle(
        Math.random() * window.innerWidth,
        window.innerHeight * (0.2 + Math.random() * 0.7),
        1
      );
    }, 600);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife);

      for (const p of particlesRef.current) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.008; // slight upward acceleration
        p.vx *= 0.99;

        const lifeRatio = p.life / p.maxLife;
        const alpha = p.alpha * (1 - lifeRatio * lifeRatio);
        const color = p.color.replace('ALPHA', alpha.toFixed(2));

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle + p.life * 0.04);
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.8;

        if (p.shape === 'dot') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'line') {
          ctx.beginPath();
          ctx.moveTo(-p.size * 2, 0);
          ctx.lineTo(p.size * 2, 0);
          ctx.stroke();
        } else {
          // cross
          ctx.beginPath();
          ctx.moveTo(-p.size * 2, 0);
          ctx.lineTo(p.size * 2, 0);
          ctx.moveTo(0, -p.size * 2);
          ctx.lineTo(0, p.size * 2);
          ctx.stroke();
        }

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(ambientInterval);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  if (!isSupported) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.35,
      }}
      aria-hidden="true"
    />
  );
};

export default ParticleField;
