import React, { useState, useEffect, useRef } from 'react';
import Magnet from '../components/ui/Magnet';
import PremiumResumeButton from '../components/ui/PremiumResumeButton';
import { Manga3DVolume } from '../components/ui/Manga3DVolume';
import './Hero.css';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const roles = [
  "AI/ML Engineer",
  "Full-Stack Developer",
  "Computer Vision Dev",
  "Research Paper Author",
  "Hackathon Builder"
];

const threatLevels = [
  { label: 'Computer Vision / AI-ML', value: 92, color: '#00C9E0' },
  { label: 'Full-Stack Dev (MERN)', value: 88, color: '#FFD60A' },
  { label: 'Research & Academic', value: 85, color: '#BF8FFF' },
  { label: 'AI Automation', value: 82, color: '#FF7C40' },
  { label: 'Problem Solving', value: 95, color: '#3DFFA0' },
  { label: 'Hackathon Execution', value: 90, color: '#FF3B5C' }
];

const ThreatBar: React.FC<{ value: number; color: string; delay: number }> = ({ value, color, delay }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return (
    <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '0', overflow: 'hidden' }}>
      <div style={{ width: `${width}%`, height: '100%', backgroundColor: color, boxShadow: `0 0 6px ${color}88`, transition: `width 0.9s cubic-bezier(0.25,0.46,0.45,0.94)` }} />
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stage, setStage] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  /* Page load stagger stage sequence */
  useEffect(() => {
    const timers = [200, 500, 700, 900, 1100, 1300, 1500, 1700].map((delay, i) =>
      setTimeout(() => setStage(i + 1), delay)
    );
    return () => { timers.forEach(clearTimeout); };
  }, []);

  /* Typewriter effect loop */
  useEffect(() => {
    if (stage < 5) return;
    let timer: ReturnType<typeof setTimeout>;
    const activeRole = roles[roleIndex];
    if (isDeleting) {
      if (charIndex > 0) { timer = setTimeout(() => { setCharIndex(p => p - 1); setCurrentRole(activeRole.substring(0, charIndex - 1)); }, 28); }
      else { setIsDeleting(false); setRoleIndex(p => (p + 1) % roles.length); }
    } else {
      if (charIndex < activeRole.length) { timer = setTimeout(() => { setCharIndex(p => p + 1); setCurrentRole(activeRole.substring(0, charIndex + 1)); }, 60); }
      else { timer = setTimeout(() => setIsDeleting(true), 1800); }
    }
    return () => clearTimeout(timer);
  }, [stage, charIndex, isDeleting, roleIndex]);

  const firstNameLetters = "ANANT".split("");
  const lastNameLetters = "RAI".split("");

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section-container"
    >
      {/* ═══ THE "GHOST" INFINITE MARQUEE BACKGROUND LAYER ═══ */}
      <div className="hero-ghost-marquee-container" aria-hidden="true">
        <div className="hero-ghost-marquee-track">
          <span className="hero-ghost-marquee-text">
            NEURAL NETWORKS // SYSTEM SCHEMATICS // COMPUTER VISION // FULL-STACK //&nbsp;
          </span>
          <span className="hero-ghost-marquee-text">
            NEURAL NETWORKS // SYSTEM SCHEMATICS // COMPUTER VISION // FULL-STACK //&nbsp;
          </span>
        </div>
      </div>

      {/* MAIN TWO-COLUMN CONTENT GRID WRAPPER */}
      <div className="hero-content-wrapper">

        {/* ═══ LEFT COL — TEXT CONTENT ═══ */}
        <div className="hero-left-col">
          {/* Subject label */}
          <div className="hero-subject-label" style={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 ? 'translateX(0)' : 'translateX(-20px)' }}>
            <span className="hero-subject-dot" />
            • SUBJECT FILE · AI/ML ENGINEER
          </div>

          {/* HEADLINE BLOCK WITH STAGGERED ENTRANCE */}
          <div className="hero-name-block">
            {/* First Name: ANANT */}
            <div className="headline-word-row">
              {firstNameLetters.map((letter, i) => {
                const isLoaded = stage >= 3;
                return (
                  <span
                    key={i}
                    className="bangers hero-first-name headline-letter-stagger"
                    style={{
                      color: '#FFFFFF',
                      display: 'inline-block',
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'translateY(0)' : 'translateY(-24px)',
                      transition: `transform 700ms cubic-bezier(0.23,1,0.32,1) ${i * 45}ms, opacity 700ms cubic-bezier(0.23,1,0.32,1) ${i * 45}ms`
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </div>

            {/* Last Name: RAI */}
            <div className="headline-word-row" style={{ marginTop: '-4px' }}>
              {lastNameLetters.map((letter, i) => {
                const isLoaded = stage >= 4;
                return (
                  <span
                    key={i}
                    className="bangers hero-last-name headline-letter-stagger"
                    style={{
                      color: 'rgba(255, 255, 255, 0.55)',
                      display: 'inline-block',
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                      transition: `transform 600ms cubic-bezier(0.23,1,0.32,1) ${180 + i * 50}ms, opacity 600ms cubic-bezier(0.23,1,0.32,1) ${180 + i * 50}ms`
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </div>
          </div>

          {/* TYPEWRITER ROLE */}
          <div className="hero-typewriter-container">
            <span>{currentRole}</span>
            <span className="hero-typewriter-cursor" />
          </div>

          {/* INLINE BIO & REFACTORED TAG CHIPS HIERARCHY */}
          <div className="hero-bio-container" style={{ opacity: stage >= 5 ? 1 : 0, transform: stage >= 5 ? 'translateY(0)' : 'translateY(8px)' }}>
            <p className="hero-bio-text">
              AI/ML engineer & Full-Stack developer from Nashik — building intelligent systems in computer vision, healthcare AI, and scalable web platforms. International research author · 5+ hackathons · RPD Group AI Ops.
            </p>

            {/* REFACTORED TAG CHIPS: 1 PRIMARY FILLED TAG + 1 META ROW */}
            <div className="hero-tag-block">
              {/* PRIMARY FILLED TAG */}
              <div className="hero-tag-primary">
                <span className="tag-pulse-indicator" />
                ACTIVELY BUILDING
              </div>

              {/* LOWER-CONTRAST META ROW */}
              <div className="hero-meta-row">
                <span>Nashik · MH</span>
                <span className="meta-dot">·</span>
                <span>RPD Group — AI Ops</span>
                <span className="meta-dot">·</span>
                <span>B.Sc CS · Sanjivani</span>
              </div>
            </div>
          </div>

          {/* CTA BUTTONS ROW */}
          <div className="hero-cta-row">
            {/* PRIMARY CTA: HIRE ME → (Solid White) */}
            <div>
              <Magnet padding={40} magnetStrength={4}>
                <button
                  className="hero-hire-me-btn"
                  onClick={() => onNavigate ? onNavigate('contact') : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>HIRE ME</span>
                  <span className="hire-arrow">→</span>
                </button>
              </Magnet>
            </div>

            {/* SECONDARY CTA: RESUME BUTTON */}
            <div className="resume-desktop-sticker">
              <PremiumResumeButton />
            </div>

            {/* TERTIARY SCAN PROFILE FLIP TRIGGER BUTTON */}
            <button
              onClick={() => setCardFlipped(p => !p)}
              className={`hero-scan-btn-cyber ${cardFlipped ? 'hud-active' : ''}`}
            >
              <span className={`hero-scan-dot ${cardFlipped ? 'active' : ''}`} />
              {cardFlipped ? '[ CLOSE FILE ]' : '[ SCAN DOSSIER ]'}
            </button>
          </div>

          {/* ═══ MOBILE-ONLY METRICS GRID ═══ */}
          <div className="hero-mobile-metrics">
            {[
              { label: 'LOCATION', val: 'Nashik, MH · GMT+5:30', color: '#00C9E0' },
              { label: 'EDUCATION', val: 'B.Sc CS · SGPA 9.73', color: '#BF8FFF' },
              { label: 'COMPANY', val: 'RPD Group — AI Ops', color: '#3DFFA0' },
              { label: 'STATUS', val: '● ACTIVELY BUILDING', color: '#FFD60A' }
            ].map(m => (
              <div key={m.label} style={{ fontSize: '10px', fontFamily: 'var(--font-body)', padding: '8px 10px', border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '8px', letterSpacing: '1px', marginBottom: '2px' }}>{m.label}</div>
                <div style={{ color: m.color }}>{m.val}</div>
              </div>
            ))}
          </div>

          {/* ═══ MOBILE-ONLY BIO ═══ */}
          <p className="hero-mobile-bio" style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginTop: '24px' }}>
            AI/ML engineer and Full-Stack developer from Nashik. Built 12+ intelligent systems spanning computer vision, healthcare AI, and scalable platforms. 5+ hackathons. International research paper author (IEJSE). Currently at RPD Group building AI automation workflows.
          </p>

          {/* ═══ MOBILE-ONLY THREAT BARS ═══ */}
          <div className="hero-mobile-threat">
            <div className="bebas" style={{ fontSize: '13px', color: 'var(--white)', marginBottom: '12px', letterSpacing: '1px' }}>THREAT LEVELS //</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {threatLevels.map((t, i) => (
                <div key={t.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '9px', fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}>{t.label}</span>
                    <span style={{ fontSize: '9px', fontFamily: 'var(--font-body)', color: t.color }}>{t.value}%</span>
                  </div>
                  <ThreatBar value={t.value} color={t.color} delay={i * 120} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ RIGHT COL — CHARACTER DOSSIER FLIP CARD ═══ */}
        <div className="hero-right-col">
          <Manga3DVolume
            isOpen={cardFlipped}
            onToggle={() => setCardFlipped(p => !p)}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #FFD60A 25%, #FFD60A 75%, transparent)', opacity: 0.35, zIndex: 10 }} />
    </section>
  );
};

export default Hero;
