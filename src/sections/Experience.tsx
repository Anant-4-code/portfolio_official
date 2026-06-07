import React from 'react';
import { motion } from 'motion/react';
import GlitchText from '../components/ui/GlitchText';
import AnimatedCounter from '../components/ui/AnimatedCounter';

interface ExpItem {
  year: string;
  yearNum: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  metrics?: string[];
  color: string;
  type: 'job' | 'edu';
  chapter: string;
  badge?: string;
}

const experienceData: ExpItem[] = [
  {
    year: '2026',
    yearNum: 2026,
    company: 'RPD Group — Automate Flow AI',
    role: 'AI Operations and Automation Associate',
    duration: 'May 2026 — PRESENT',
    location: 'Nashik, Maharashtra',
    chapter: 'CHAPTER I',
    badge: '● ACTIVE',
    achievements: [
      'Building AI-powered automation workflows and intelligent backend systems using n8n, Make.com, and Zapier.',
      'Integrating ChatGPT, Claude, and Gemini APIs via webhooks and scalable backend pipelines.',
      'Orchestrating FastAPI services and AI workflow agents for real-world operational problems at scale.',
      'Exploring how AI agents, automation, and ML workflows solve operational challenges at enterprise scale.'
    ],
    color: 'var(--red)',
    type: 'job'
  },
  {
    year: '2026',
    yearNum: 2026,
    company: 'Google (India)',
    role: 'Google Student Ambassador',
    duration: 'April 2026 — PRESENT',
    location: 'India',
    chapter: 'CHAPTER II',
    badge: '● ACTIVE',
    achievements: [
      'Representing student engineering interests across Google\'s developer ecosystem.',
      'Hosting Google Developer Group (GDG) community events and alignment sessions for engineering students.'
    ],
    color: 'var(--cyan)',
    type: 'job'
  },
  {
    year: '2025',
    yearNum: 2025,
    company: 'Unified Mentor Private Limited',
    role: 'Full-Stack Development Intern',
    duration: 'May 2025 — Aug 2025',
    location: 'Gurugram, Haryana (Remote)',
    chapter: 'CHAPTER III',
    achievements: [
      'Integrated Gemini and OpenAI APIs into 2 product features (AI content generation, smart replies) — avg session length up 40%.',
      'Deployed 3 MERN stack apps to Render/Netlify; CI/CD pipelines reduced release time from days to under 1 hour.',
      'Built FastAPI inference endpoints for AI features; page load time down 20% via code splitting and lazy loading.',
      'Delivered complete capstone project managing all phases from planning → UI/UX → backend → deployment.'
    ],
    metrics: ['+40% Engagement', '3 Apps Shipped', '-20% Load Time'],
    color: 'var(--gold)',
    type: 'job'
  },
  {
    year: '2024',
    yearNum: 2024,
    company: 'Ashoka Center for Business & Computer Studies (SPPU), Nashik',
    role: 'B.Sc. Computer Science',
    duration: 'Jun 2024 — May 2028',
    location: 'Nashik, Maharashtra',
    chapter: 'CHAPTER IV',
    achievements: [
      'SGPA: 9.73 (Sem 1) | 9.64 (Sem 2) — maintaining top academic performance.',
      'Completed 44/44 academic credits with distinction across both semesters.',
      'Research Cell Coordinator: organised Avishkar orientation, SRPS, Start-Up Talk Series, and IPR sessions.'
    ],
    color: 'var(--purple)',
    type: 'edu'
  }
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      style={{
        minHeight: '100vh',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 5,
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      className="exp-section-container"
    >
      <div className="manga-watermark" style={{ top: '20%', right: '5%', opacity: 0.02, fontSize: '10vw' }}>
        STORY ARC
      </div>

      <div style={{ marginBottom: '60px' }}>
        <GlitchText
          as="h2"
          text="[ BATTLE CHRONICLES ]"
          className="bebas"
          style={{ fontSize: '48px', color: 'var(--white)', margin: 0, display: 'block' }}
          interval={6000}
          duration={450}
        />
        <p style={{ color: 'var(--gray)', fontSize: '12px' }}>
          PROFESSIONAL CHRONICLES // EXPERIENCE TIMELINE
        </p>
      </div>

      {/* Timeline Layout */}
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Center dashed line */}
        <div
          style={{
            position: 'absolute',
            left: '42px',
            top: '0',
            bottom: '0',
            width: '2px',
            borderLeft: '2px dashed rgba(255, 255, 255, 0.15)',
            zIndex: 1
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '90px 1fr',
                gap: '32px',
                position: 'relative',
                zIndex: 2
              }}
              className="timeline-item-row"
            >
              {/* Year indicator on Left */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <span className="bangers" style={{ fontSize: '24px', color: exp.color, zIndex: 3 }}>
                  <AnimatedCounter target={exp.yearNum} decimals={0} duration={800} />
                </span>

                {/* Timeline node circle — active ones pulse */}
                <div
                  style={{
                    width: idx === 0 ? '14px' : '10px',
                    height: idx === 0 ? '14px' : '10px',
                    borderRadius: '50%',
                    backgroundColor: idx === 0 ? 'var(--gold)' : exp.color,
                    border: `2px solid ${idx === 0 ? 'var(--gold)' : '#222'}`,
                    boxShadow: idx === 0 ? '0 0 12px var(--gold)' : idx === 1 ? `0 0 8px ${exp.color}` : 'none',
                    marginTop: '8px',
                    animation: idx <= 1 ? 'pulse-node 2s infinite' : 'none',
                    animationDelay: `${idx * 0.4}s`
                  }}
                />
              </div>

              {/* Experience Panel */}
              <motion.div
                whileHover={{ scale: 1.01, borderColor: exp.color, boxShadow: `-4px 4px 0px ${exp.color}44` }}
                transition={{ duration: 0.12 }}
                className="manga-panel exp-panel-card"
                style={{
                  borderLeft: `4px solid ${exp.color}`,
                  padding: '32px',
                  backgroundColor: 'var(--ink)'
                }}
              >
                {/* Corner brackets decoration */}
                <div className="corner-bracket tl" style={{ borderColor: exp.color, width: '8px', height: '8px' }} />
                <div className="corner-bracket br" style={{ borderColor: exp.color, width: '8px', height: '8px' }} />

                {/* Chapter + Badge tag overlay */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  fontSize: '9px',
                  color: 'var(--gray)',
                  fontFamily: 'var(--font-body)',
                  opacity: 0.9
                }}>
                  {exp.badge && (
                    <span style={{ color: 'var(--green)', fontWeight: 'bold', letterSpacing: '1px', animation: 'pulse-glow-sm 2s infinite' }}>
                      {exp.badge}
                    </span>
                  )}
                  <span>{exp.chapter}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
                  <h3 className="bebas" style={{ fontSize: '20px', color: 'var(--white)', margin: 0 }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '12px', color: exp.color, fontFamily: 'var(--font-body)', fontWeight: 'bold' }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--gray)', fontFamily: 'var(--font-body)', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <span>🗓 {exp.duration}</span>
                    <span>📍 {exp.location}</span>
                  </div>
                </div>

                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px', margin: 0, padding: 0 }}>
                  {exp.achievements.map((ach, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255, 255, 255, 0.75)',
                        lineHeight: '1.5',
                        display: 'flex',
                        gap: '8px'
                      }}
                    >
                      <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>▸</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics tags */}
                {exp.metrics && (
                  <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                    {exp.metrics.map(m => (
                      <motion.span
                        key={m}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        style={{
                          fontSize: '9px',
                          padding: '3px 10px',
                          border: `1px solid ${exp.color}`,
                          color: exp.color,
                          fontFamily: 'var(--font-body)',
                          letterSpacing: '1px'
                        }}
                      >
                        {m}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes pulse-node {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.8; }
          }
          @keyframes pulse-glow-sm {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }

          @media (max-width: 768px) {
            .exp-section-container {
              padding: 40px 20px;
            }
            .timeline-item-row {
              display: flex !important;
              flex-direction: column !important;
              gap: 16px !important;
            }
            .exp-panel-card {
              padding: 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Experience;
