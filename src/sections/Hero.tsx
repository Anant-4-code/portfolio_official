import React, { useState, useEffect } from 'react';
import Magnet from '../components/ui/Magnet';
import PremiumResumeButton from '../components/ui/PremiumResumeButton';

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

// Threat-level bars data for the HUD panel
const threatLevels = [
  { label: 'Computer Vision / AI-ML', value: 92, color: '#00C9E0' },
  { label: 'Full-Stack Dev (MERN)', value: 88, color: '#FFD60A' },
  { label: 'Research & Academic', value: 85, color: '#BF8FFF' },
  { label: 'AI Automation', value: 82, color: '#FF7C40' },
  { label: 'Problem Solving', value: 95, color: '#3DFFA0' },
  { label: 'Hackathon Execution', value: 90, color: '#FF3B5C' }
];

// Animated threat bar (fills on mount, used in HUD panel)
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
  const [avatarHovered, setAvatarHovered] = useState(false);
  const [hudOpen, setHudOpen] = useState(false);
  const [seeWorkHovered, setSeeWorkHovered] = useState(false);
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
    <section
      id="hero"
      style={{ backgroundColor: '#0D0D0F', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '80px 8%', zIndex: 5 }}
      className="hero-section-container"
    >
      {/* BACKGROUND LAYERS */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)', backgroundSize: '9px 9px', opacity: stage >= 1 ? 0.8 : 0, transition: 'opacity 0.8s ease', pointerEvents: 'none', zIndex: 1 }} />
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
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '4px', color: '#FF3B5C', opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 ? 'translateX(0)' : 'translateX(-20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF3B5C', marginRight: '8px', display: 'inline-block', animation: 'pulse-dot 1.5s infinite ease-in-out' }} />
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
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#00C9E0', minHeight: '24px', marginBottom: '28px', display: 'flex', alignItems: 'center' }}>
            <span>{currentRole}</span>
            <span style={{ display: 'inline-block', width: '2px', height: '14px', backgroundColor: '#FFD60A', marginLeft: '4px', animation: 'blink-cursor 0.7s steps(2, start) infinite' }} />
          </div>

          {/* ═══ INLINE BIO — replaces About section ═══ */}
          <div
            style={{
              marginBottom: '24px',
              opacity: stage >= 5 ? 1 : 0,
              transform: stage >= 5 ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.6s 0.2s ease, transform 0.6s 0.2s ease'
            }}
          >
            {/* One-liner bio */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: '1.75',
              margin: '0 0 14px 0',
              borderLeft: '2px solid rgba(255,214,10,0.35)',
              paddingLeft: '12px',
              maxWidth: '480px'
            }}>
              AI/ML engineer & Full-Stack developer from Nashik — building intelligent systems in computer vision, healthcare AI, and scalable web platforms. International research author · 5+ hackathons · RPD Group AI Ops.
            </p>

            {/* Quick-info tag strip */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { icon: '◎', label: 'Nashik · MH', color: '#00C9E0' },
                { icon: '⬡', label: 'RPD Group — AI Ops', color: '#3DFFA0' },
                { icon: '▣', label: 'B.Sc CS · Sanjivani', color: '#BF8FFF' },
                { icon: '●', label: 'ACTIVELY BUILDING', color: '#FFD60A' }
              ].map(tag => (
                <span
                  key={tag.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '9px',
                    color: tag.color,
                    border: `1px solid ${tag.color}44`,
                    padding: '3px 10px',
                    letterSpacing: '0.5px',
                    backgroundColor: `${tag.color}08`
                  }}
                >
                  <span style={{ fontSize: '7px' }}>{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>



          {/* ═══ CTA BUTTONS ═══ */}
          <div className="hero-cta-row">

            {/* PRIMARY: RESUME ↓ — pilling effect on desktop, plain gold on mobile */}
            {/* Mobile resume button (hidden on desktop) */}
            <a
              href="/img/resume.pdf"
              download="Anant_Rai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-mobile-btn cursor-target"
              aria-label="Download Resume"
            >
              RESUME ↓
            </a>
            {/* Desktop resume button — Premium mecha sticker pill (hidden on mobile) */}
            <div className="resume-desktop-sticker">
              <PremiumResumeButton />
            </div>
            {/* SECONDARY: HIRE ME → (was SEE MY WORK, now outlined, navigates to contact) */}
            <div
              onMouseEnter={() => { setSeeWorkHovered(true); setSfxLockedOnFlash(true); setTimeout(() => setSfxLockedOnFlash(false), 300); }}
              onMouseLeave={() => setSeeWorkHovered(false)}
            >
              <Magnet padding={40} magnetStrength={4}>
                <button
                  onClick={() => onNavigate ? onNavigate('contact') : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'transparent',
                    color: seeWorkHovered ? '#FFD60A' : 'rgba(255,255,255,0.6)',
                    border: seeWorkHovered ? '1px solid #FFD60A' : '1px solid rgba(255,255,255,0.18)',
                    fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '1px',
                    padding: '11px 20px', borderRadius: '0',
                    transition: 'border-color 0.15s ease, color 0.15s ease',
                    cursor: 'none'
                  }}
                >
                  HIRE ME →
                </button>
              </Magnet>
            </div>

            {/* TERTIARY: [ SCAN PROFILE ] — triggers HUD panel  */}
            <button
              onClick={() => { setHudOpen(p => !p); setSfxKzzztFlash(true); setTimeout(() => setSfxKzzztFlash(false), 300); }}
              className="hero-scan-btn"
              style={{
                background: hudOpen ? 'rgba(0,201,224,0.12)' : 'transparent',
                color: hudOpen ? '#00C9E0' : 'rgba(255,255,255,0.35)',
                border: `1px solid ${hudOpen ? '#00C9E0' : 'rgba(255,255,255,0.12)'}`,
                fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '2px',
                padding: '11px 14px', borderRadius: '0',
                transition: 'all 0.12s ease', cursor: 'none',
                display: 'flex', alignItems: 'center', gap: '6px'
              }}
            >
              <span style={{ animation: hudOpen ? 'pulse-dot 1s infinite' : 'none', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00C9E0', display: 'inline-block', flexShrink: 0 }} />
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
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '8px', letterSpacing: '1px', marginBottom: '2px' }}>{m.label}</div>
                <div style={{ color: m.color }}>{m.val}</div>
              </div>
            ))}
          </div>

          {/* ═══ MOBILE-ONLY BIO ═══ */}
          <p className="hero-mobile-bio" style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginTop: '24px' }}>
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
          {/* AVATAR WRAPPER — shrinks on hover to make room for HUD panel */}
          <div
            className={`hero-avatar-wrapper${avatarHovered ? ' hud-active' : ''}`}
            onMouseEnter={() => { setAvatarHovered(true); setHudOpen(true); setSfxKzzztFlash(true); setTimeout(() => setSfxKzzztFlash(false), 300); }}
            onMouseLeave={() => { setAvatarHovered(false); setHudOpen(false); }}
          >
            {/* Speech bubble — anchored to the newly cropped top-left boundary of the photo frame */}
            <div className="hero-speech-bubble" style={{ position: 'absolute', top: '12px', left: '12px', background: '#FFFFFF', color: '#0D0D0F', border: '2px solid #0D0D0F', padding: '6px 14px', fontFamily: 'Bangers', fontSize: '14px', letterSpacing: '1px', zIndex: 12, transform: stage >= 7 ? 'scale(1)' : 'scale(0)', transformOrigin: 'top left', transition: stage >= 7 ? 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none' }}>
              よろしく！
              <div style={{ position: 'absolute', left: '12px', bottom: '-8px', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #0D0D0F' }} />
              <div style={{ position: 'absolute', left: '13px', bottom: '-6px', width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid #FFFFFF' }} />
            </div>

            {/* Targeting brackets */}
            {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h], i) => (
              <div key={i} className={`corner-bracket ${v.charAt(0)}${h.charAt(0)}`} style={{ position: 'absolute', [v]: '-4px', [h]: '-4px', width: '20px', height: '20px', [`border${v.charAt(0).toUpperCase() + v.slice(1)}`]: '2.5px solid #FFD60A', [`border${h.charAt(0).toUpperCase() + h.slice(1)}`]: '2.5px solid #FFD60A', zIndex: 10, transition: 'all 0.35s ease' }} />
            ))}

            {/* Real photo — fills container with cover crop */}
            <img
              src="/img/orignal.jpg"
              alt="Anant Rai"
              className="hero-avatar-img"
            />

            {/* Scanline overlay on hover */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none', background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 1px, transparent 1px, transparent 4px)', opacity: avatarHovered ? 1 : 0, transition: 'opacity 0.3s ease' }} />

            {/* HUD hint */}
            <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-body)', fontSize: '8px', color: avatarHovered ? '#00C9E0' : 'rgba(255,255,255,0.3)', letterSpacing: '1px', zIndex: 12, pointerEvents: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s ease' }}>
              {avatarHovered ? '[ SCAN COMPLETE ]' : '[ HOVER TO SCAN ]'}
            </div>
          </div>

          {/* ═══ HUD TERMINAL PANEL — slides out beside avatar on hover ═══ */}
          <div
            className="hero-hud-panel"
            style={{
              opacity: avatarHovered ? 1 : 0,
              transform: avatarHovered ? 'translateX(0) scaleX(1)' : 'translateX(-20px) scaleX(0.85)',
              transformOrigin: 'left center',
              pointerEvents: avatarHovered ? 'auto' : 'none',
              transition: 'opacity 0.18s cubic-bezier(0.19,1,0.22,1), transform 0.22s cubic-bezier(0.19,1,0.22,1)'
            }}
          >
            {/* Panel header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px dashed rgba(255,255,255,0.12)' }}>
              <span className="bangers" style={{ fontSize: '14px', color: '#00C9E0', letterSpacing: '2px' }}>// SCAN COMPLETE</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '8px', color: 'rgba(255,255,255,0.3)' }}>AR-DB v2.1</span>
            </div>

            {/* Biometrics list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              {[
                { label: 'NAME', val: 'ANANT RAI' },
                { label: 'ROLE', val: 'AI/ML ENG · FULL-STACK' },
                { label: 'LOCATION', val: 'NASHIK · GMT+5:30' },
                { label: 'COMPANY', val: 'RPD GROUP — AI OPS' },
                { label: 'SGPA', val: '9.73 / 10' },
                { label: 'HACKATHONS', val: '5+ COMPLETED' },
                { label: 'PAPERS', val: '2 (1 INTL)' },
                { label: 'STATUS', val: '● BUILDING', valColor: '#3DFFA0' }
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '9px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)', width: '72px', flexShrink: 0 }}>{row.label}</span>
                  <span style={{ color: (row as any).valColor || 'rgba(255,255,255,0.8)', letterSpacing: '0.5px' }}>{row.val}</span>
                </div>
              ))}
            </div>

            {/* Threat level bars */}
            <div style={{ borderTop: '1px dashed rgba(255,255,255,0.08)', paddingTop: '14px' }}>
              <div className="bebas" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px', letterSpacing: '2px' }}>THREAT LEVELS //</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {threatLevels.map((t, i) => (
                  <div key={t.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                      <span style={{ fontSize: '8px', fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}>{t.label}</span>
                      <span style={{ fontSize: '8px', fontFamily: 'var(--font-body)', color: t.color }}>{t.value}%</span>
                    </div>
                    {hudOpen && <ThreatBar value={t.value} color={t.color} delay={i * 100} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #FFD60A 25%, #FFD60A 75%, transparent)', opacity: 0.35, zIndex: 10 }} />

      <style>
        {`
          @keyframes pulse-dot {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.5; }
          }
          @keyframes blink-cursor { to { visibility: hidden; } }
          @keyframes float-sine {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }

          /* Resume — mobile plain gold button */
          .resume-mobile-btn {
            display: none;
            align-items: center;
            justify-content: center;
            height: 52px;
            padding: 0 28px;
            background: #FFD60A;
            color: #0D0D0F;
            font-family: 'Bangers', cursive;
            font-size: 22px;
            letter-spacing: 3px;
            text-decoration: none;
            border: none;
            position: relative;
            z-index: 10;
            transform: rotate(-3deg);
            box-shadow: 3px 3px 0 rgba(0,0,0,0.4);
            transition: transform 0.15s ease, box-shadow 0.15s ease;
          }
          .resume-mobile-btn:hover {
            transform: rotate(-1deg) scale(1.04);
            box-shadow: 4px 4px 0 rgba(0,0,0,0.5);
          }

          /* Resume — desktop pilling button with mecha clip-path */
          .resume-pill-btn {
            position: relative;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.65rem 2.2rem;
            font-family: 'Courier New', Courier, monospace;
            font-size: 14px;
            font-weight: 900;
            letter-spacing: 2px;
            color: #FFE500;
            text-decoration: none;
            text-transform: uppercase;
            background: transparent;
            border: 1px solid #FFE500;
            clip-path: polygon(0 0, 92% 0, 100% 35%, 100% 100%, 8% 100%, 0 65%);
            user-select: none;
            transition: border-color 0.2s ease;
          }
          .resume-pill-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -15%;
            width: 0%;
            height: 100%;
            background-color: #FFE500;
            transform: skewX(-20deg);
            transform-origin: left;
            z-index: 1;
            transition: width 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          }
          .resume-pill-text {
            position: relative;
            z-index: 10;
            transition: color 0.15s ease;
          }
          .resume-pill-btn:hover::before {
            width: 130%;
          }
          .resume-pill-btn:hover .resume-pill-text {
            color: #0F0F0F;
          }
          .resume-pill-btn:hover {
            border-color: #FFFFFF;
            animation: mechaFlicker 0.25s steps(3) forwards;
            box-shadow: 0 0 12px rgba(255, 229, 0, 0.4);
          }

          /* Desktop sticker: shown on desktop, hidden on mobile */
          .resume-desktop-sticker {
            display: inline-block;
          }

          .hero-section-container {
            min-height: 100vh;
          }

          .hero-content-wrapper {
            display: grid;
            grid-template-columns: minmax(0, 55fr) minmax(0, 45fr);
            width: 100%;
            height: auto;
            align-items: center;
            position: relative;
            z-index: 7;
            gap: 40px;
          }

          .hero-first-name { font-size: clamp(52px, 10vw, 110px); letter-spacing: 8px; }
          .hero-last-name { font-size: clamp(36px, 6vw, 68px); letter-spacing: 14px; }
          .hero-name-block { line-height: 0.88; margin-bottom: 12px; }

          .hero-left-col {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-right: 20px;
          }

          .hero-right-col {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 16px;
            z-index: 8;
          }

          .avatar-pixel-container {
            width: 100%;
            height: 550px;
            position: relative;
            cursor: crosshair;
            background-color: #131318;
            flex-shrink: 0;
          }

          .hero-avatar-wrapper {
            width: 100%;
            height: 550px;
            position: relative;
            cursor: none;
            flex-shrink: 0;
            overflow: hidden;
            background-color: #131318;
            transition: width 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          }

          .hero-avatar-wrapper.hud-active {
            width: 55%;
          }

          .hero-avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
            max-width: 100%;
            transition: filter 0.3s ease;
          }

          .hero-avatar-wrapper .corner-bracket {
            position: absolute;
            width: 20px;
            height: 20px;
            z-index: 10;
            transition: all 0.35s ease;
          }
          .hero-avatar-wrapper .corner-bracket.tl { top: -4px; left: -4px; }
          .hero-avatar-wrapper .corner-bracket.tr { top: -4px; right: -4px; }
          .hero-avatar-wrapper .corner-bracket.bl { bottom: -4px; left: -4px; }
          .hero-avatar-wrapper .corner-bracket.br { bottom: -4px; right: -4px; }

          .hero-speech-bubble {
            max-width: calc(100% - 24px);
          }

          .hero-stats-row {
            display: flex;
            flex-direction: row;
            gap: 8px;
            width: 100%;
            margin-bottom: 28px;
          }

          .hero-cta-row {
            display: flex;
            gap: 16px;
            align-items: center;
            flex-wrap: wrap;
          }

          /* HUD PANEL — appears right of avatar on desktop */
          .hero-hud-panel {
            width: calc(45% - 16px);
            height: 550px;
            flex-shrink: 0;
            background-color: rgba(13, 13, 20, 0.97);
            border: 1.5px solid rgba(0, 201, 224, 0.35);
            padding: 20px 18px;
            position: absolute;
            top: 0;
            right: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .hero-hud-panel::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, #00C9E0, transparent);
          }

          /* Mobile-only elements — hidden on desktop */
          .hero-mobile-metrics,
          .hero-mobile-bio,
          .hero-mobile-threat,
          .hero-scan-btn {
            display: none;
          }

          /* ── Responsive Overrides ── */
          @media (max-width: 1024px) {
            .hero-section-container {
              padding: 90px 1.25rem 40px !important;
              min-height: auto !important;
              height: auto !important;
            }
            .hero-content-wrapper {
              grid-template-columns: 1fr;
              align-items: flex-start;
              gap: 24px;
            }

            .hero-left-col {
              width: 100%;
              padding-right: 0;
              order: 1;
              padding: 0 0 16px 0;
            }

            /* Hero name smaller on mobile */
            .hero-first-name { font-size: clamp(42px, 13vw, 72px) !important; }
            .hero-last-name { font-size: clamp(28px, 9vw, 52px) !important; }

            .hero-right-col {
              position: relative;
              top: 0; bottom: 0;
              width: 100%;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              gap: 0;
              order: 2;
              margin-bottom: 0;
            }

            /* Hide desktop HUD panel — replaced by mobile threat bars below */
            .hero-hud-panel {
              display: none !important;
            }

            /* Show mobile-only sections */
            .hero-mobile-metrics {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 6px;
              width: 100%;
              margin-top: 20px;
              order: 3;
            }
            .hero-mobile-bio {
              display: block;
              order: 4;
              margin-top: 12px;
              padding: 0;
              width: 100%;
            }
            .hero-mobile-threat {
              display: block;
              order: 5;
              margin-top: 16px;
              padding: 16px;
              border: 1.5px solid rgba(255,255,255,0.08);
              width: 100%;
            }

            .hero-scan-btn { display: none !important; }
            /* Mobile: show plain gold resume, hide desktop pilling button */
            .resume-mobile-btn { display: flex !important; }
            .resume-desktop-sticker { display: none !important; }
            .hero-speech-bubble { top: 12px !important; left: 12px !important; transform: scale(1) !important; }
            .hero-speech-bubble div { display: none; }
            .hero-speed-lines { display: none !important; }
            .hero-jp-watermark, .float-sfx-woosh, .float-sfx-kzzzt, .float-sfx-lock { display: none !important; }
            .hero-jp-fill-left, .hero-jp-fill-tl, .hero-jp-fill-bl { display: none !important; }
          }

          @media (max-width: 580px) {
            .hero-section-container { padding: 90px 1rem 30px !important; }
            .hero-first-name { font-size: clamp(38px, 14vw, 64px) !important; }
            .hero-last-name { font-size: clamp(24px, 10vw, 44px) !important; }
            .hero-stats-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
            .hero-cta-row { flex-direction: row; align-items: center; gap: 10px; width: 100%; flex-wrap: wrap; }
            .hero-avatar-wrapper, .avatar-pixel-container { width: 200px; height: 280px; }
            .hero-avatar-wrapper canvas { width: 200px !important; height: 280px !important; }
            .hero-mobile-metrics { grid-template-columns: 1fr 1fr; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
