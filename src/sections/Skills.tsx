import React, { useState } from 'react';
import { motion } from 'motion/react';
import GlitchText from '../components/ui/GlitchText';
import TiltCard from '../components/ui/TiltCard';
import { TechnicalOrbitSphere } from '../components/ui/TechnicalOrbitSphere';

interface SkillCategory {
  title: string;
  rank: string;
  rankClass: string;
  color: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'ML / DL & Computer Vision',
    rank: 'S-RANK',
    rankClass: 'tier-s',
    color: 'var(--gold)',
    items: ['Python', 'YOLOv7/v8', 'ONNX Runtime', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn', 'MPVE Framework', 'Tesseract OCR', 'Gradio', 'Attention Heatmaps', 'Bounding Box Regression']
  },
  {
    title: 'LLM / GenAI & Automation',
    rank: 'S-RANK',
    rankClass: 'tier-s',
    color: 'var(--cyan)',
    items: ['Ollama (Llama 3.2)', 'Gemini API 1.5 Flash', 'OpenAI API', 'RAG Pipelines', 'Knowledge Graph (KG-oT)', 'GNN', 'n8n', 'Make.com', 'Zapier', 'Prompt Engineering', 'LangChain', 'Multi-Agent Systems']
  },
  {
    title: 'Full-Stack Development',
    rank: 'A-RANK',
    rankClass: 'tier-aplus',
    color: 'var(--purple)',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'GraphQL', 'WebSockets', 'Tailwind CSS', 'Chart.js']
  },
  {
    title: 'Databases & Backend',
    rank: 'A-RANK',
    rankClass: 'tier-aplus',
    color: 'var(--orange)',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'SQLite', 'SQLAlchemy', 'Pydantic', 'JWT / OAuth2', 'Socket.IO', 'Jinja2']
  },
  {
    title: 'MLOps & DevOps',
    rank: 'B+-RANK',
    rankClass: 'tier-a',
    color: 'var(--green)',
    items: ['Docker', 'AWS', 'Vercel', 'Netlify', 'Render', 'Hugging Face Spaces', 'Git', 'GitHub', 'CI/CD Pipelines', 'Postman', 'Figma', 'VS Code']
  },
  {
    title: 'Mobile & Other Languages',
    rank: 'B+-RANK',
    rankClass: 'tier-bplus',
    color: 'var(--red)',
    items: ['Kotlin', 'Android Studio (MVVM)', 'React Native', 'Java', 'C', 'HTML5 / CSS3', 'Bootstrap', 'Material UI']
  }
];

const matrixPhrases = ['システム起動', 'データ転送', '同期完了', '展開メカニズム', '作戦コード', '解析マトリクス', '接続確立'];

const matrixStreams = [
  { text: matrixPhrases[0], left: '4%', top: '5%', fontSize: '15px', delay: '0s' },
  { text: matrixPhrases[1], left: '12%', top: '35%', fontSize: '13px', delay: '-3s' },
  { text: matrixPhrases[2], left: '22%', top: '8%', fontSize: '16px', delay: '-7s' },
  { text: matrixPhrases[3], left: '32%', top: '55%', fontSize: '12px', delay: '-12s' },
  { text: matrixPhrases[4], left: '42%', top: '22%', fontSize: '17px', delay: '-2s' },
  { text: matrixPhrases[5], left: '52%', top: '45%', fontSize: '14px', delay: '-8s' },
  { text: matrixPhrases[6], left: '62%', top: '12%', fontSize: '15px', delay: '-15s' },
  { text: matrixPhrases[0], left: '72%', top: '50%', fontSize: '13px', delay: '-5s' },
  { text: matrixPhrases[1], left: '82%', top: '10%', fontSize: '16px', delay: '-1s' },
  { text: matrixPhrases[2], left: '90%', top: '60%', fontSize: '14px', delay: '-10s' },
  { text: matrixPhrases[3], left: '8%', top: '70%', fontSize: '13px', delay: '-14s' },
  { text: matrixPhrases[4], left: '28%', top: '78%', fontSize: '15px', delay: '-4s' },
  { text: matrixPhrases[5], left: '48%', top: '72%', fontSize: '13px', delay: '-9s' },
  { text: matrixPhrases[6], left: '68%', top: '76%', fontSize: '16px', delay: '-11s' },
  { text: matrixPhrases[0], left: '86%', top: '30%', fontSize: '15px', delay: '-6s' },
];

const Skills: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      style={{
        minHeight: 'var(--section-min-height, 100vh)',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 5,
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      className="skills-section-container"
    >
      {/* Background Matrix Effect */}
      <div
        className="skills-matrix-bg-wrapper"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        {matrixStreams.map((stream, idx) => (
          <div
            key={idx}
            className="skills-matrix-line"
            style={{
              position: 'absolute',
              left: stream.left,
              top: stream.top,
              fontSize: stream.fontSize,
              color: '#FFE500',
              opacity: 0.03,
              writingMode: 'vertical-rl',
              fontFamily: 'monospace, sans-serif',
              whiteSpace: 'nowrap',
              animation: 'matrixDrift 20s linear infinite',
              animationDelay: stream.delay
            }}
          >
            {stream.text}
          </div>
        ))}
      </div>

      <div className="manga-watermark" style={{ bottom: '10%', left: '5%', opacity: 0.02, fontSize: '10vw' }}>
        POWER LEVEL
      </div>

      <div style={{ marginBottom: '40px' }}>
        <GlitchText
          as="h2"
          text="[ CHARACTER SHEET ]"
          className="bebas"
          style={{ fontSize: '48px', color: 'var(--white)', margin: 0, display: 'block' }}
          interval={4000}
          duration={500}
        />
        <p style={{ color: 'var(--gray)', fontSize: '12px' }}>
          SKILLS TIER LIST // UNLOCKED ABILITIES SYSTEM
        </p>
      </div>

      {/* 3D Technical Orbit Sphere */}
      <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
        <TechnicalOrbitSphere />
      </div>

      {/* Grid of 6 tier cards */}
      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            onMouseEnter={() => setHoveredIdx(index)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              filter: hoveredIdx !== null && hoveredIdx !== index ? 'blur(1px) brightness(0.6)' : 'none',
              transition: 'filter 0.25s ease'
            }}
          >
            <TiltCard
              className="manga-panel cursor-target skill-tier-card"
              spotlightColor="rgba(255,255,255,0.04)"
              style={{
                borderWidth: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Corner brackets */}
              <div className="corner-bracket tl" style={{ borderColor: cat.color }} />
              <div className="corner-bracket tr" style={{ borderColor: cat.color }} />
              <div className="corner-bracket br" style={{ borderColor: cat.color }} />
              <div className="corner-bracket bl" style={{ borderColor: cat.color }} />

              {/* Accent border left */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  backgroundColor: cat.color
                }}
              />

              {/* Header info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--white)', margin: 0 }} className="bebas">
                  {cat.title}
                </h3>
                <span
                  className={`bangers ${cat.rankClass}`}
                  style={{
                    fontSize: '16px',
                    border: '1.5px solid',
                    padding: '1px 8px',
                    borderRadius: '0',
                    backgroundColor: 'rgba(13, 13, 15, 0.6)'
                  }}
                >
                  {cat.rank}
                </span>
              </div>

              {/* Skill chips inside card */}
              <div className="skill-badges-container">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className="skill-badge"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '10px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '0px',
                      transition: 'border-color 0.1s, background-color 0.1s, color 0.1s, box-shadow 0.1s'
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = cat.color;
                      el.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      el.style.color = '#fff';
                      el.style.boxShadow = `0 0 6px ${cat.color}55`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      el.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                      el.style.color = 'rgba(255, 255, 255, 0.8)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
          }

          .skill-tier-card {
            padding: 32px !important;
          }

          .skill-badges-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
          }

          @media (max-width: 768px) {
            .skills-section-container {
              padding: 40px 20px;
            }
            .skills-grid {
              display: flex;
              flex-direction: column;
              gap: 16px;
            }
            .skill-tier-card {
              padding: 1rem !important;
            }
            .skill-badges-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 6px;
            }
            .skill-badge {
              display: flex !important;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 6px 4px !important;
              font-size: 9px !important;
              width: 100%;
            }
          }

          @keyframes matrixDrift {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(50px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
