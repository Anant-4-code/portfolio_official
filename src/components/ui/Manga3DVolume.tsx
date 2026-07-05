import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Manga3DVolume.css';

interface Manga3DVolumeProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: (section: string) => void;
}

export const Manga3DVolume: React.FC<Manga3DVolumeProps> = ({ isOpen, onToggle, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showSpeedLines, setShowSpeedLines] = useState(false);
  const [showSfx, setShowSfx] = useState(false);
  
  const isReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Handle snappy flip effect events (Speed lines & SFX burst)
  useEffect(() => {
    if (isOpen && !isReducedMotion) {
      setShowSpeedLines(true);
      setShowSfx(true);
      const timer = setTimeout(() => {
        setShowSpeedLines(false);
        setShowSfx(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isReducedMotion]);

  // Cursor reactive tilt effect
  useEffect(() => {
    if (isOpen || isReducedMotion) {
      setTilt({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const cX = rect.left + rect.width / 2;
      const cY = rect.top + rect.height / 2;

      // Distance from center as ratio (-1 to 1)
      const distX = (e.clientX - cX) / (window.innerWidth / 2);
      const distY = (e.clientY - cY) / (window.innerHeight / 2);

      // Max tilt angle offsets
      setTilt({
        x: distY * -6, // Tilt up/down
        y: distX * 8   // Tilt left/right
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isOpen, isReducedMotion]);

  return (
    <div 
      ref={containerRef}
      className={`manga-3d-scene ${isOpen ? 'open' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
      onClick={(e) => {
        // Prevent click from bubbling if clicking inner components or links
        const target = e.target as HTMLElement;
        if (target.closest('.hud-nav-btn')) return;
        onToggle();
      }}
    >
      {/* Background ambient glow */}
      <div className={`manga-glow-pulse ${isOpen ? 'active' : ''}`} />

      {/* 3D BOOK BODY OBJECT */}
      <div 
        className="manga-book-container"
        style={{
          transform: !isOpen && !isReducedMotion
            ? `rotateY(${12 + tilt.y}deg) rotateX(${4 + tilt.x}deg)`
            : isOpen ? 'rotateY(-10deg) rotateX(0deg)' : 'none'
        }}
      >
        {/* SVG Filters for paper grain & halftone dots */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="manga-paper-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0" />
              <feComposite operator="in" in2="SourceGraphic" />
            </filter>
          </defs>
        </svg>

        {/* FACE 1: COVER HINGE WRAPPER (This flips open) */}
        <div className="manga-cover-hinge">
          {/* Main Cover Front Side */}
          <div className="manga-cover-front">
            {/* Base Image Container */}
            <div className="manga-cover-photo-container">
              <img 
                src="/img/orignal.jpg" 
                alt="Anant Rai Cover" 
                className="manga-cover-photo"
              />
              {/* Halftone dot map overlay */}
              <div className="manga-halftone-pattern" />
              {/* Traced silhouette ink outline layer */}
              <div className="manga-ink-outline" />
              {/* Paper grain/noise filter overlay */}
              <div className="manga-paper-grain" />
            </div>

            {/* Title Logotype */}
            <div className="manga-title-block">
              <h1 className="bangers manga-title-text">ANANT RAI</h1>
              <div className="bebas manga-title-sub">AI/ML ENGINEER & DEV // 第1巻 覚醒</div>
            </div>

            {/* Volume Badge Sticker */}
            <div className="manga-volume-sticker bangers">
              VOL. 01
            </div>

            {/* Speech Bubble */}
            <div className="manga-cover-speech bangers">
              READY TO SCAN!
              <div className="speech-arrow" />
            </div>

            {/* Angled Obi Wrap Band */}
            <div className="manga-obi-band">
              <div className="manga-obi-content">
                <div className="bebas obi-label-sm">RPD GROUP // DEPLOYMENT COMPILER</div>
                <div className="bangers obi-label-lg">AUTOMATION ENGINE STATUS: OPTIMAL</div>
              </div>
            </div>
          </div>
          
          {/* Back side of the cover (Blank paper texture visible during flip) */}
          <div className="manga-cover-back" />
        </div>

        {/* FACE 2: SPINE FACE (Visible thin sliver on the left side) */}
        <div className="manga-spine-face" />

        {/* FACE 3: PAGE-EDGE FACE (Visible thin sliver on the right side) */}
        <div className="manga-page-edges-face" />

        {/* UNDERNEATH: THE DETAIL HUD REVEAL PANEL */}
        <div className="manga-reveal-hud">
          {/* Panel header */}
          <div className="hud-panel-header">
            <span className="bangers text-cyan">// DATA FILE LOADED</span>
            <span className="monospace text-gray-xs">AR-DB v2.1</span>
          </div>

          {/* Biometrics List */}
          <div className="hud-biometrics-list">
            {[
              { label: 'SUBJECT', val: 'ANANT RAI' },
              { label: 'COGNITIVE ROLE', val: 'AI/ML ENG · FULL-STACK' },
              { label: 'GRID SECTOR', val: 'NASHIK · GMT+5:30' },
              { label: 'CURRENT LAB', val: 'RPD GROUP — AI OPS' },
              { label: 'SYSTEM CORES', val: '5+ HACKATHONS COMPLETED' },
              { label: 'ACADEMICS', val: 'B.Sc CS (SGPA 9.73)' },
              { label: 'PUBLICATIONS', val: '2 PAPERS (1 INTL)' },
              { label: 'STATUS ENGINE', val: '● ACTIVE COMPILER', valColor: '#3DFFA0' }
            ].map(row => (
              <div key={row.label} className="hud-biometric-row">
                <span className="hud-bio-label">{row.label}</span>
                <span className="hud-bio-val" style={{ color: row.valColor || 'rgba(255,255,255,0.95)' }}>{row.val}</span>
              </div>
            ))}
          </div>

          {/* Quick Nav Options */}
          <div className="hud-nav-row">
            <button 
              className="hud-nav-btn bebas" 
              onClick={() => onNavigate && onNavigate('projects')}
            >
              PROJECT ARCHIVE
            </button>
            <button 
              className="hud-nav-btn status-green bebas" 
              onClick={() => onNavigate && onNavigate('contact')}
            >
              CONTACT PILOT
            </button>
          </div>
        </div>
      </div>

      {/* SNAP FX LAYERS (Speed Lines & ZAP text) */}
      {showSpeedLines && (
        <div className="manga-snap-speedlines" />
      )}
      {showSfx && (
        <div className="manga-snap-sfx bangers">バリバリ</div>
      )}
    </div>
  );
};
