import React, { useState } from 'react';
import { motion } from 'motion/react';
import Magnet from '../components/ui/Magnet';
import GlitchText from '../components/ui/GlitchText';
import TiltCard from '../components/ui/TiltCard';

const Research: React.FC = () => {
  const [hoveredPaper, setHoveredPaper] = useState<string | null>(null);

  const papers = [
    {
      id: 'R1',
      journal: 'Conference Presentation — SRPS 2025',
      vol: 'SRPS 2025 • ACBCS / Ashoka Education Foundation',
      title: 'MPVE: Multi-Perspective Vision Enhancement for Computer Vision and Medical Intelligence',
      authors: 'Anant Rai',
      abstract: 'Developed a 3-module CV framework (FVR, GSVE, TCVL) that improves Tesseract OCR on handwritten medical prescriptions from 68% to 91% accuracy (+23 percentage points). Applied in clinical settings for AI-powered prescription parsing. Integrated into the Sanjivani healthcare AI platform.',
      highlights: ['+23 pp OCR Accuracy', 'FVR + GSVE + TCVL Framework', 'Medical AI Application'],
      award: '🥇 1ST PRIZE — SRPS Research Paper Competition 2025',
      link: null,
      borderColor: 'var(--gold)',
      badge: 'AWARDED',
      stat: { label: 'OCR GAIN', val: '+23pp' }
    },
    {
      id: 'R2',
      journal: 'International Educational Journal of Science and Engineering',
      vol: 'IEJSE · VOL 8 · NO 9 · SEP 2025',
      title: 'Integrating Operations Research Methodologies: Enhancing Efficiency and Risk Mitigation Across Healthcare',
      authors: 'Anant Rai, Mrs. Sapna Bhusare, Mr. Mohit Pandey',
      abstract: 'Designed a hybrid OR-ERP model using Linear Programming, Mixed Integer Programming, Discrete Event Simulation, Monte Carlo Simulation, and Data Envelopment Analysis (DEA) techniques. Comparative analysis of Apollo Hospitals and AIIMS demonstrating improvements in ICU bed allocation, patient flow management, and cost-efficiency through ML-based healthcare forecasting.',
      highlights: ['LP + MIP + Monte Carlo', 'Apollo vs AIIMS Analysis', 'ML-based Forecasting'],
      award: '🏆 1ST PRIZE — Conference Presentation | International Publication',
      link: 'https://iejse.com/journals/index.php/iejse/article/view/219',
      borderColor: 'var(--purple)',
      badge: 'PEER REVIEWED',
      stat: { label: 'PUBLICATION', val: 'INTL' }
    }
  ];

  return (
    <section
      id="research"
      style={{
        minHeight: '100vh',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 5,
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      className="research-section-container"
    >
      {/* Background low-opacity watermarks */}
      <div className="manga-watermark watermark-vertical" style={{ top: '5%', right: '2%', opacity: 0.02, fontSize: '10vw' }}>
        機密
      </div>

      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--purple)', animation: 'pulse-node 2s infinite' }} />
          <span className="bangers" style={{ fontSize: '10px', color: 'var(--purple)', letterSpacing: '3px' }}>
            INTEL FILES // PEER-REVIEWED ARCHIVES
          </span>
        </div>
        <GlitchText
          as="h2"
          text="[ SYSTEM SCHEMATICS ]"
          className="bebas"
          style={{ fontSize: '48px', color: 'var(--white)', margin: 0, display: 'block' }}
          interval={6000}
          duration={450}
        />
        <p style={{ color: 'var(--gray)', fontSize: '12px' }}>
          CHAPTER INTEL // 2 PAPERS · 2 FIRST PRIZES · 1 INTERNATIONAL PUBLICATION
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {papers.map((paper, idx) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            onMouseEnter={() => setHoveredPaper(paper.id)}
            onMouseLeave={() => setHoveredPaper(null)}
          >
            <TiltCard
              maxTilt={4}
              className="scanlines-overlay research-panel-card"
              style={{
                padding: '40px',
                border: `3px solid ${hoveredPaper === paper.id ? paper.borderColor : paper.borderColor + '88'}`,
                backgroundColor: 'var(--ink)',
                boxShadow: hoveredPaper === paper.id
                  ? `0 8px 40px ${paper.borderColor}33, -5px 5px 0px ${paper.borderColor}`
                  : `0 8px 32px ${paper.borderColor}22`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.15s ease, box-shadow 0.15s ease'
              }}
            >
              {/* Corner brackets */}
              <div className="corner-bracket tl" style={{ borderColor: paper.borderColor, width: '20px', height: '20px', borderWidth: '3px' }} />
              <div className="corner-bracket tr" style={{ borderColor: paper.borderColor, width: '20px', height: '20px', borderWidth: '3px' }} />
              <div className="corner-bracket br" style={{ borderColor: paper.borderColor, width: '20px', height: '20px', borderWidth: '3px' }} />
              <div className="corner-bracket bl" style={{ borderColor: paper.borderColor, width: '20px', height: '20px', borderWidth: '3px' }} />

              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                border: `2px solid ${paper.borderColor}`,
                color: paper.borderColor,
                padding: '4px 12px',
                fontSize: '11px',
                fontWeight: 'bold',
                letterSpacing: '2px',
                backgroundColor: `${paper.borderColor}15`
              }} className="bebas">
                {paper.badge}
              </div>

              {/* Stat chip */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                color: paper.borderColor,
                opacity: 0.15,
                pointerEvents: 'none',
                letterSpacing: '2px'
              }} className="bangers">
                INTEL ACQUIRED!
              </div>

              {/* Paper ID */}
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: paper.borderColor, marginBottom: '4px', letterSpacing: '2px' }}>
                [{paper.id}] · {paper.vol}
              </div>

              {/* Paper Title */}
              <h3 className="bebas" style={{
                fontSize: '26px',
                color: 'var(--white)',
                lineHeight: '1.2',
                margin: '0 0 12px 0',
                maxWidth: '85%'
              }}>
                {paper.title}
              </h3>

              {/* Authors */}
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--gold)', marginBottom: '24px' }}>
                AUTHORS: {paper.authors}
              </div>

              {/* Abstract snippet */}
              <div style={{ borderLeft: `3px solid ${paper.borderColor}`, paddingLeft: '16px', marginBottom: '24px' }}>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', margin: 0 }}>
                  {paper.abstract}
                </p>
              </div>

              {/* Highlight tags */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {paper.highlights.map(h => (
                  <motion.span
                    key={h}
                    whileHover={{ scale: 1.05, borderColor: paper.borderColor }}
                    style={{
                      fontSize: '9px',
                      color: paper.borderColor,
                      border: `1px solid ${paper.borderColor}66`,
                      padding: '3px 10px',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '1px',
                      cursor: 'default'
                    }}
                  >
                    {h}
                  </motion.span>
                ))}
              </div>

              {/* Award badge */}
              <div style={{
                display: 'inline-flex',
                border: '2px solid var(--gold)',
                color: 'var(--gold)',
                padding: '6px 16px',
                fontSize: '11px',
                fontWeight: 'bold',
                fontFamily: 'var(--font-body)',
                backgroundColor: 'rgba(255, 214, 10, 0.05)',
                marginBottom: paper.link ? '24px' : '0'
              }}>
                {paper.award}
              </div>

              {/* Paper Action link */}
              {paper.link && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Magnet padding={20} magnetStrength={3}>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target"
                      style={{
                        display: 'inline-block',
                        textDecoration: 'none',
                        backgroundColor: paper.borderColor,
                        color: 'var(--black)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 24px',
                        border: '2px solid var(--black)',
                        letterSpacing: '1px'
                      }}
                    >
                      VIEW PAPER →
                    </a>
                  </Magnet>
                </div>
              )}
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          @keyframes pulse-node {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.7; }
          }

          @media (max-width: 768px) {
            .research-section-container {
              padding: 40px 20px;
            }
            .research-panel-card {
              padding: 24px 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Research;
