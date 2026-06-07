import React, { useRef, useEffect, useState } from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';
import ShinyText from '../components/ui/ShinyText';
import GlitchText from '../components/ui/GlitchText';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const About: React.FC = () => {
  const stats = [
    { label: 'Computer Vision / AI-ML', value: 92, color: 'var(--cyan)' },
    { label: 'Full-Stack Dev (MERN)', value: 88, color: 'var(--gold)' },
    { label: 'Research & Academic Writing', value: 85, color: 'var(--purple)' },
    { label: 'AI Automation & Workflows', value: 82, color: 'var(--orange)' },
    { label: 'Problem Solving', value: 95, color: 'var(--green)' },
    { label: 'Hackathon Execution', value: 90, color: 'var(--red)' }
  ];

  // Animated progress bar component
  const AnimatedBar: React.FC<{ value: number; color: string }> = ({ value, color }) => {
    const barRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            setTimeout(() => setWidth(value), 100);
          }
        },
        { threshold: 0.5 }
      );
      if (barRef.current) observer.observe(barRef.current);
      return () => observer.disconnect();
    }, [started, value]);

    return (
      <div ref={barRef} style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '1px', overflow: 'hidden' }}>
        <div
          style={{
            width: `${width}%`,
            height: '100%',
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
            transition: 'width 1s cubic-bezier(0.25,0.46,0.45,0.94)'
          }}
        />
      </div>
    );
  };

  return (
    <section
      id="about"
      style={{
        minHeight: 'var(--section-min-height, 100vh)',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%'
      }}
      className="about-section"
    >
      {/* Classified Watermark Background */}
      <div className="manga-watermark watermark-vertical" style={{ top: '10%', right: '5%', fontSize: '12vw', opacity: 0.02 }}>
        CLASSIFIED
      </div>

      {/* About panel container */}
      <div className="manga-panel about-panel">
        {/* Corner Brackets */}
        <div className="corner-bracket tl" />
        <div className="corner-bracket tr" />
        <div className="corner-bracket br" />
        <div className="corner-bracket bl" />

        {/* Section Header: Named to [ PROLOGUE ] */}
        <div
          className="bebas"
          style={{
            fontSize: '14px',
            color: 'var(--red)',
            border: '2px solid var(--red)',
            padding: '4px 12px',
            display: 'inline-block',
            marginBottom: '32px',
            letterSpacing: '3px',
            backgroundColor: 'rgba(255, 59, 92, 0.08)'
          }}
        >
          <GlitchText
            text="[ PROLOGUE ] // SUBJECT FILE // [████ CLASSIFIED ████]"
            interval={5000}
            duration={400}
          />
        </div>

        <div className="about-grid">
          {/* Left Column: Vintage Photo & Stat Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Dossier Photo Frame */}
            <div
              style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'var(--black)',
                padding: '16px',
                overflow: 'hidden'
              }}
              className="scanlines-overlay"
            >
              {/* Red Stamp Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '-10px',
                  border: '3px solid var(--red)',
                  color: 'var(--red)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  padding: '4px 16px',
                  transform: 'rotate(-25deg)',
                  zIndex: 10,
                  opacity: 0.8,
                  pointerEvents: 'none',
                  letterSpacing: '2px',
                  backgroundColor: 'rgba(13, 13, 15, 0.95)'
                }}
              >
                VERIFIED
              </div>

              <div style={{ width: '100%', height: '100%', filter: 'grayscale(1) contrast(1.2) sepia(0.35)', transition: 'filter 0.3s ease' }} className="dossier-photo">
                <img src="/img/Anime.jpg" alt="Anime Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <style>
                {`
                  .scanlines-overlay:hover .dossier-photo {
                    filter: grayscale(0) contrast(1.1) sepia(0) !important;
                  }
                `}
              </style>
            </div>

            {/* RPG Stat Bars — now animated on scroll */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="bebas" style={{ fontSize: '16px', color: 'var(--white)', letterSpacing: '1px' }}>
                THREAT LEVELS //
              </div>
              {stats.map(stat => (
                <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-body)', color: 'var(--gray)' }}>{stat.label}</span>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-body)', color: stat.color, marginLeft: 'auto' }}>
                      <AnimatedCounter target={stat.value} suffix="%" decimals={0} duration={1200} />
                    </span>
                  </div>
                  <AnimatedBar value={stat.value} color={stat.color} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Classified Details & Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', width: '100%', fontFamily: 'var(--font-body)', fontSize: '12px' }}>
              <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', color: 'var(--white)', margin: 0 }} className="bebas">ANANT RAI</h2>
              <div style={{ color: 'var(--gray)', lineHeight: '1.8' }}>
                <div><strong>NAME:</strong> Anant Rai</div>
                <div><strong>DESIGNATION:</strong> AI/ML Engineer | AI Ops & Automation Associate @ RPD Group</div>
                <div><strong>LOCATION:</strong> Nashik, Maharashtra, India · GMT+5:30</div>
                <div><strong>EDUCATION:</strong> B.Sc. CS — ACBCS (SPPU) · SGPA 9.73 / 9.64</div>
                <div><strong>PHONE:</strong> +91 86240 43412</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <strong>STATUS:</strong>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--green)', display: 'inline-block', boxShadow: '0 0 8px var(--green)', animation: 'pulse-glow 1.5s infinite' }} />
                  <span>ACTIVELY BUILDING</span>
                </div>
              </div>
              <style>
                {`
                  @keyframes pulse-glow {
                    0%, 100% { opacity: 0.4; transform: scale(0.9); }
                    50% { opacity: 1; transform: scale(1.15); }
                  }
                `}
              </style>
            </div>

            {/* Biography with Scroll Reveal */}
            <div style={{ fontSize: '13px', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
              <ScrollReveal baseOpacity={0.15} enableBlur={true} blurStrength={5}>
                I'm an engineer spanning AI/ML and Full-Stack development, obsessed with building intelligent real-world systems. Starting as a web developer, curiosity led me to infuse intelligence into systems — now my core domain. Built 12+ projects spanning computer vision, healthcare AI, and scalable platforms. 5+ hackathons. International research paper author. Currently exploring cognitive computing, swarm intelligence, and multi-agent AI systems at RPD Group.
              </ScrollReveal>
            </div>

            {/* Highlight quote */}
            <div style={{ marginTop: '20px', borderLeft: '3px solid var(--gold)', paddingLeft: '16px', marginBottom: '20px', width: '100%' }}>
              <ShinyText text="MISSION: Building intelligent systems that bridge computer vision, healthcare AI, and scalable engineering." speed={3} color="rgba(255,255,255,0.7)" shineColor="var(--gold)" />
            </div>

            {/* Quick Metrics Row — using AnimatedCounter */}
            <div className="about-metrics-grid">
              {[
                { num: 12, suffix: '+', label: 'FIELD EXPERIENCE', sublabel: 'PROJECTS', color: 'var(--cyan)' },
                { num: 9.73, suffix: '', label: 'ACADEMIC SCORE', sublabel: 'SGPA', color: 'var(--purple)', decimals: 2 },
                { num: 5, suffix: '+', label: 'COMPLETED SPRINTS', sublabel: 'HACKATHONS', color: 'var(--gold)' },
                { num: 2, suffix: '', label: 'RESEARCH PUBLISHED', sublabel: 'PAPERS', color: 'var(--green)' }
              ].map((m, i) => (
                <div key={i} className={`manga-panel metrics-card ${i % 2 === 0 ? 'cyan-hover' : 'purple-hover'}`}>
                  <div className="corner-bracket tl" style={{ width: '6px', height: '6px' }} />
                  <div className="corner-bracket br" style={{ width: '6px', height: '6px' }} />
                  <div className="bangers" style={{ fontSize: '32px', color: m.color }}>
                    <AnimatedCounter
                      target={m.num}
                      suffix={m.suffix}
                      decimals={(m as any).decimals || 0}
                      duration={1400}
                    />
                  </div>
                  <div style={{ fontSize: '8px', color: m.color, fontFamily: 'var(--font-body)', letterSpacing: '1px', marginTop: '2px' }}>
                    {m.sublabel}
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--gray)', fontFamily: 'var(--font-body)' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .about-panel {
            padding: 40px;
            width: 100%;
          }

          .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 48px;
            align-items: start;
          }

          .about-metrics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            width: 100%;
            margin-top: 32px;
          }

          .metrics-card {
            padding: 16px !important;
            background-color: var(--black) !important;
          }

          @media (max-width: 768px) {
            .about-section {
              padding: 40px 20px;
            }
            .about-panel {
              padding: 24px;
            }
            .about-grid {
              display: flex;
              flex-direction: column;
              gap: 32px;
            }
            .about-metrics-grid {
              grid-template-columns: 1fr;
              gap: 12px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
