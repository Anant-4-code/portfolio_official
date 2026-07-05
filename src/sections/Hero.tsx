import React, { useState, useEffect } from 'react';
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
  const [hudOpen, setHudOpen] = useState(false);
  const [sfxWhooshFlash, setSfxWhooshFlash] = useState(false);
  const [sfxKzzztFlash, setSfxKzzztFlash] = useState(false);
  const [sfxLockedOnFlash, setSfxLockedOnFlash] = useState(false);

  useEffect(() => {
    const timers = [200, 500, 700, 900, 1100, 1300, 1500, 1700].map((delay, i) =>
      setTimeout(() => setStage(i + 1), delay)
    );
    const sfxTimer = setTimeout(() => { setSfxWhooshFlash(true); setTimeout(() => setSfxWhooshFlash(false), 300); }, 1800);
    return () => { timers.forEach(clearTimeout); clearTimeout(sfxTimer); };
  }, []);

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

  const nameLetters = "ANANT".split("");

  return (
    <section id="hero" className="hero-section-container">
      {/* BACKGROUND LAYERS */}
      <div className="hero-bg-dotgrid" style={{ opacity: stage >= 1 ? 0.8 : 0 }} />
      <div className="hero-speed-lines" style={{ position: 'absolute', inset: 0, background: 'repeating-conic-gradient(from 0deg at 68% 50%, transparent 0deg 3deg, rgba(255, 255, 255, 0.04) 4deg 5deg, transparent 6deg 10deg)', opacity: stage >= 1 ? 1 : 0, transition: 'opacity 0.8s ease', pointerEvents: 'none', zIndex: 2 }} />
      <div className="watermark-vertical hero-jp-watermark" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-jp)', fontSize: '4.5vh', fontWeight: 900, letterSpacing: '12px', color: '#FFFFFF', opacity: stage >= 1 ? 0.05 : 0, writingMode: 'vertical-rl', pointerEvents: 'none', zIndex: 3, transition: 'opacity 0.8s ease' }}>
        経験　スキル　作品　未来
      </div>

      {/* SFX Labels */}
      <div className="bangers float-sfx-woosh" style={{ position: 'absolute', top: '12%', right: '10%', fontSize: '52px', color: sfxWhooshFlash ? '#FF3B5C' : 'rgba(255,255,255,0.1)', pointerEvents: 'none', zIndex: 6, transition: 'color 0.2s ease, opacity 0.3s ease', opacity: sfxWhooshFlash ? 0.95 : 0.12, animation: 'float-sine 4s ease-in-out infinite' }}>WHOOSH!</div>
      <div className="bangers float-sfx-kzzzt" style={{ position: 'absolute', top: '45%', right: '48%', fontSize: '36px', color: sfxKzzztFlash ? '#00C9E0' : 'rgba(0,201,224,0.12)', pointerEvents: 'none', zIndex: 6, transition: 'color 0.2s ease, opacity 0.3s ease', opacity: sfxKzzztFlash ? 0.95 : 0.12, animation: 'float-sine 4s ease-in-out infinite', animationDelay: '1.5s' }}>KZZZT!</div>
      <div className="bangers float-sfx-lock" style={{ position: 'absolute', bottom: '22%', left: '32%', fontSize: '28px', color: sfxLockedOnFlash ? '#FFD60A' : 'rgba(255,214,10,0.1)', pointerEvents: 'none', zIndex: 6, transition: 'color 0.2s ease, opacity 0.3s ease', opacity: sfxLockedOnFlash ? 0.95 : 0.1, animation: 'float-sine 4s ease-in-out infinite', animationDelay: '0.8s' }}>LOCKED ON!</div>

      {/* ── JAPANESE TEXT FILLS — left column ambience ── */}
      <div className="hero-jp-fill-left" style={{ position: 'absolute', left: '1.5%', top: '50%', transform: 'translateY(-50%)', writingMode: 'vertical-rl', fontFamily: 'var(--font-jp)', fontSize: '11px', color: 'rgba(255,255,255,0.06)', letterSpacing: '6px', lineHeight: 1.8, pointerEvents: 'none', zIndex: 3, userSelect: 'none' }}>
        {'人工知能\n機械学習\nコンピュータ\nビジョン\n開発者\nエンジニア\n研究者\nナシク'}
      </div>
      <div className="hero-jp-fill-tl" style={{ position: 'absolute', left: '4%', top: '10%', fontFamily: 'var(--font-jp)', fontSize: '9px', color: 'rgba(255,214,10,0.07)', letterSpacing: '4px', pointerEvents: 'none', zIndex: 3, userSelect: 'none', lineHeight: 2 }}>
        {'第一話　// 覚醒'}<br/>{'コード名：AI-99'}<br/>{'分類：脅威レベル　S'}
      </div>
      <div className="hero-jp-fill-bl" style={{ position: 'absolute', left: '4%', bottom: '8%', fontFamily: 'var(--font-jp)', fontSize: '9px', color: 'rgba(0,201,224,0.07)', letterSpacing: '3px', pointerEvents: 'none', zIndex: 3, userSelect: 'none', lineHeight: 2 }}>
        {'実行中…'}<br/>{'スキャン完了'}<br/>{'接続確立'}
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="hero-content-wrapper">
        {/* ═══ LEFT COL — TEXT CONTENT ═══ */}
        <div className="hero-left-col">
          {/* Subject label */}
          <div className="hero-subject-label" style={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 ? 'translateX(0)' : 'translateX(-20px)' }}>
            <span className="hero-subject-dot" />
            • SUBJECT FILE · AI/ML ENGINEER
          </div>

          {/* NAME BLOCK */}
          <div className="hero-name-block">
            <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              {nameLetters.map((letter, i) => {
                const isLoaded = stage >= 3;
                return (
                  <span key={i} className="bangers hero-first-name" style={{ color: '#FFD60A', textShadow: '3px 3px 0 rgba(0,0,0,0.55)', display: 'inline-block', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)', transition: `transform 700ms cubic-bezier(0.23,1,0.32,1) ${i * 50}ms, opacity 700ms cubic-bezier(0.23,1,0.32,1) ${i * 50}ms` }}>
                    {letter}
                  </span>
                );
              })}
            </div>
            <div className="bebas hero-last-name" style={{ color: '#FFFFFF', opacity: stage >= 4 ? 1 : 0, transform: stage >= 4 ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)' }}>
              RAI
            </div>
          </div>

          {/* TYPEWRITER */}
          <div className="hero-typewriter-container">
            <span>{currentRole}</span>
            <span className="hero-typewriter-cursor" />
          </div>

          {/* ═══ INLINE BIO ═══ */}
          <div className="hero-bio-container" style={{ opacity: stage >= 5 ? 1 : 0, transform: stage >= 5 ? 'translateY(0)' : 'translateY(8px)' }}>
            <p className="hero-bio-text">
              AI/ML engineer & Full-Stack developer from Nashik — building intelligent systems in computer vision, healthcare AI, and scalable web platforms. International research author · 5+ hackathons · RPD Group AI Ops.
            </p>

            {/* Quick-info tag strip */}
            <div className="hero-tag-strip">
              {[
                { icon: '◎', label: 'Nashik · MH', color: '#00C9E0' },
                { icon: '⬡', label: 'RPD Group — AI Ops', color: '#3DFFA0' },
                { icon: '▣', label: 'B.Sc CS · Sanjivani', color: '#BF8FFF' },
                { icon: '●', label: 'ACTIVELY BUILDING', color: '#FFD60A' }
              ].map(tag => (
                <span key={tag.label} className="hero-info-tag" style={{ color: tag.color }}>
                  <span style={{ fontSize: '7px' }}>{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* ═══ CTA BUTTONS ═══ */}
          <div className="hero-cta-row">
            {/* PRIMARY: RESUME ↓ */}
            <a
              href="/img/resume.pdf"
              download="Anant_Rai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-mobile-btn"
              aria-label="Download Resume"
            >
              RESUME ↓
            </a>
            <div className="resume-desktop-sticker">
              <PremiumResumeButton />
            </div>

            <div
              onMouseEnter={() => { setSfxLockedOnFlash(true); setTimeout(() => setSfxLockedOnFlash(false), 300); }}
            >
              <Magnet padding={40} magnetStrength={4}>
                <button
                  className="hero-hire-me-btn"
                  onClick={() => onNavigate ? onNavigate('contact') : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  HIRE ME →
                </button>
              </Magnet>
            </div>

            {/* TERTIARY: [ SCAN PROFILE ] */}
            <button
              onClick={() => { setHudOpen(p => !p); setSfxKzzztFlash(true); setTimeout(() => setSfxKzzztFlash(false), 300); }}
              className={`hero-scan-btn-cyber ${hudOpen ? 'hud-active' : ''}`}
            >
              <span className={`hero-scan-dot ${hudOpen ? 'active' : ''}`} />
              {hudOpen ? '[ CLOSE HUD ]' : '[ SCAN PROFILE ]'}
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

        {/* ═══ RIGHT COL — AVATAR + HUD PANEL ═══ */}
        <div className="hero-right-col">
          <Manga3DVolume 
            isOpen={hudOpen} 
            onToggle={() => setHudOpen(p => !p)} 
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
