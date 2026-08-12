import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './Manga3DVolume.css';

interface Manga3DVolumeProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: (section: string) => void;
}

export const Manga3DVolume: React.FC<Manga3DVolumeProps> = ({ isOpen, onToggle, onNavigate }) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isFlipping, setIsFlipping] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);

  /* Check reduced motion preference */
  const isReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  /* Handle flip animation side-effects: scan-line sweep & mid-flip chromatic glitch */
  useEffect(() => {
    if (isReducedMotion) return;

    setIsFlipping(true);
    const glitchTimer = setTimeout(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 120);
    }, 220);

    const endTimer = setTimeout(() => {
      setIsFlipping(false);
    }, 550);

    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(endTimer);
    };
  }, [isOpen, isReducedMotion]);

  /* 3D Magnetic Tilt & Glare Sheen logic (desktop idle state) */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isOpen || isReducedMotion || !cardContainerRef.current) {
      setTilt({ x: 0, y: 0 });
      setGlarePos(prev => ({ ...prev, opacity: 0 }));
      return;
    }

    const rect = cardContainerRef.current.getBoundingClientRect();
    const cX = rect.left + rect.width / 2;
    const cY = rect.top + rect.height / 2;

    const mouseX = e.clientX - cX;
    const mouseY = e.clientY - cY;

    // Max magnetic tilt angle ~10 deg
    const rotateY = (mouseX / (rect.width / 2)) * 10;
    const rotateX = -(mouseY / (rect.height / 2)) * 10;

    // Glare position calculation (0% to 100%)
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setGlarePos({ x: glareX, y: glareY, opacity: 0.18 });
  }, [isOpen, isReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  }, []);

  /* Keyboard interaction handler */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="character-card-outer-wrapper">
      <div
        ref={cardContainerRef}
        className={`character-card-container ${isOpen ? 'is-flipped' : ''} ${isFlipping ? 'is-animating' : ''} ${showGlitch ? 'glitch-active' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={isOpen ? "Character Dossier File — Click to return to photo cover" : "Manga Character Profile Card — Click to flip and scan dossier"}
        aria-expanded={isOpen}
        onClick={(e) => {
          // If user clicked inside an explicit nav button on back face, let that action handle it
          const target = e.target as HTMLElement;
          if (target.closest('.dossier-nav-btn') || target.closest('.dossier-close-btn')) return;
          onToggle();
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
      >
        {/* Ambient glow pulsing behind the card */}
        <div className={`card-ambient-glow ${isOpen ? 'active-cyan' : 'idle-yellow'}`} />

        {/* FLIP CARD INNER WRAPPER (Preserves 3D perspective context) */}
        <div
          className="character-card-flipper"
          style={{
            transform: !isOpen && !isReducedMotion
              ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
              : isOpen
              ? 'rotateY(180deg)'
              : 'rotateY(0deg)'
          }}
        >
          {/* ════════ FRONT FACE: MANGA COVER PHOTO CARD ════════ */}
          <div className="card-face card-face-front">
            {/* Base Image Container */}
            <div className="manga-photo-wrapper">
              <img
                src="/img/orignal.jpg"
                alt="Anant Rai - Manga Cover Character Card"
                className="manga-photo-img"
              />
              {/* Non-Destructive Pixel Glitch Slices (#FFF700 Lemon-Yellow & #00FFCC Cyan) */}
              <img
                src="/img/orignal.jpg"
                alt=""
                className="manga-photo-glitch slice-yellow"
                aria-hidden="true"
              />
              <img
                src="/img/orignal.jpg"
                alt=""
                className="manga-photo-glitch slice-cyan"
                aria-hidden="true"
              />
              <div className="manga-halftone-overlay" />
              <div className="manga-paper-texture" />
              <div className="manga-ink-vignette" />
            </div>

            {/* Dynamic Glare Reflection Sheen Overlay */}
            <div
              className="card-glare-overlay"
              style={{
                background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}) 0%, transparent 80%)`
              }}
            />

            {/* VOL.01 Sticker Badge */}
            <div className="manga-badge-vol bangers">
              VOL. 01
            </div>

            {/* READY TO SCAN Speech Bubble */}
            <div className="manga-speech-bubble bangers">
              <span className="speech-pulse-dot" />
              READY TO SCAN!
              <div className="speech-arrow-tip" />
            </div>

            {/* Mobile Touch Affordance (TAP TO SCAN) */}
            <div className="mobile-tap-affordance bangers">
              <span className="tap-scan-icon">✦</span> TAP TO SCAN
            </div>

            {/* Title Logotype */}
            <div className="manga-header-text">
              <h2 className="bangers manga-main-name">ANANT RAI</h2>
              <p className="bebas manga-sub-title">AI/ML ENGINEER & DEV // 第1巻 覚醒</p>
            </div>

            {/* Slanted Obi Wrap Band */}
            <div className="manga-obi-wrapper">
              <div className="manga-obi-inner">
                <div className="bebas obi-top-line">RPD GROUP // DEPLOYMENT COMPILER</div>
                <div className="bangers obi-main-line">AUTOMATION ENGINE STATUS: OPTIMAL</div>
              </div>
            </div>
          </div>

          {/* ════════ BACK FACE: DATA FILE DOSSIER PANEL ════════ */}
          <div className="card-face card-face-back">
            {/* Header Strip */}
            <div className="dossier-header-bar">
              <div className="dossier-title-tag bangers">
                <span className="cyan-glitch-dot" />
                // DATA FILE LOADED
              </div>
              <div className="dossier-db-code monospace">AR-DB v2.1</div>
              {/* Corner Close Affordance Button */}
              <button
                type="button"
                className="dossier-close-btn monospace"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                aria-label="Close Dossier File"
              >
                [ × CLOSE FILE ]
              </button>
            </div>

            {/* Classified Stamp Background Watermark */}
            <div className="dossier-classified-watermark bangers" aria-hidden="true">
              CLASSIFIED
            </div>

            {/* Stat Rows Grid */}
            <div className="dossier-stat-grid">
              {[
                { label: 'SUBJECT', val: 'ANANT RAI', color: '#FFFFFF' },
                { label: 'COGNITIVE ROLE', val: 'AI/ML ENG · FULL-STACK', color: '#888888' },
                { label: 'GRID SECTOR', val: 'NASHIK · GMT+5:30', color: '#888888' },
                { label: 'CURRENT LAB', val: 'RPD GROUP — AI OPS', color: '#FFFFFF' },
                { label: 'SYSTEM CORES', val: '5+ HACKATHONS COMPLETED', color: '#888888' },
                { label: 'ACADEMICS', val: 'B.Sc CS (SGPA 9.73)', color: '#FFFFFF' },
                { label: 'PUBLICATIONS', val: '2 PAPERS (1 INTL)', color: '#888888' },
                {
                  label: 'STATUS ENGINE',
                  val: '● ACTIVE COMPILER',
                  color: '#3DFFA0',
                  isStatus: true
                }
              ].map((row) => (
                <div key={row.label} className="dossier-stat-row">
                  <span className="dossier-stat-label monospace">{row.label}</span>
                  <span className="dossier-stat-value monospace" style={{ color: row.color }}>
                    {row.isStatus && <span className="status-live-dot" />}
                    {row.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom CTA Action Row */}
            <div className="dossier-action-row">
              <button
                type="button"
                className="dossier-nav-btn archive-btn bebas"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onNavigate) onNavigate('projects');
                  else document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                PROJECT ARCHIVE
              </button>
              <button
                type="button"
                className="dossier-nav-btn contact-btn bebas"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onNavigate) onNavigate('contact');
                  else document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                CONTACT PILOT
              </button>
            </div>
          </div>
        </div>

        {/* ════════ SCAN-LINE SWEEP ANIMATION OVERLAY ════════ */}
        {isFlipping && !isReducedMotion && (
          <div className="card-scanline-sweep" aria-hidden="true" />
        )}
      </div>
    </div>
  );
};

export default Manga3DVolume;
