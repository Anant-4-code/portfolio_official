import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import GlitchText from '../components/ui/GlitchText';
import TiltCard from '../components/ui/TiltCard';
import { ProjectMockupSVG } from '../assets/illustrations';

interface Project {
  id: string;
  chapter: string;
  title: string;
  description: string;
  fullDetails: string;
  category: 'AI' | 'DEV' | 'CREATIVE' | 'AUTOMATION';
  tags: string[];
  outcome: string;
  timeline: string;
  gridArea?: string;
  borderColor: string;
  links?: { label: string; href: string }[];
}

const projectsList: Project[] = [
  {
    id: 'proj1',
    chapter: 'CH.01',
    title: 'SANJIVANI AI',
    description: 'End-to-end healthcare AI platform: MPVE OCR (68%→91%), YOLOv7 fracture detection, 12 Indian languages.',
    fullDetails: 'Multi-layer clinical AI system featuring the custom MPVE (Multi-Perspective Vision Enhancement) framework. Handwritten prescription OCR boosted from 68% to 91% accuracy on 100 samples. YOLOv7-p6 trained on 20,327 GRAZPEDWRI-DX pediatric X-rays for fracture detection. Includes dose scheduling, adherence analytics, multilingual audio (12 Indian languages via NVIDIA Magpie TTS), and Doctor Panel with full treatment-cycle monitoring. Local LLM (Llama 3.2:3b) extracts medicine/dosage offline.',
    category: 'AI',
    tags: ['YOLOv7', 'FastAPI', 'ONNX', 'OpenCV', 'Ollama/Llama', 'React'],
    outcome: 'MPVE framework boosted OCR by +23 pp. Real-time YOLOv7 pediatric fracture alerts on 20K+ X-rays.',
    timeline: '3 Months',
    gridArea: 'sanjivani',
    borderColor: 'var(--cyan)',
    links: [{ label: 'GITHUB', href: 'https://github.com/Anant-4-code/BinaryEXE' }]
  },
  {
    id: 'proj2',
    chapter: 'CH.02',
    title: 'SKILLGENIE',
    description: 'AI career advisor with Gemini 1.5 Flash — personalised roadmaps, skill-gap analysis & 5-year market forecasts.',
    fullDetails: 'Gemini 1.5 Flash-powered career platform generating personalised learning roadmaps, skill-gap analysis, and 5–8 year market projections. Curated resources via YouTube & Google APIs. 24/7 AI mentor chat with context-aware responses. JWT-secured auth and Vercel deployment. Live publicly with active users.',
    category: 'AI',
    tags: ['React', 'Node.js', 'Gemini AI 1.5 Flash', 'YouTube API', 'JWT', 'Vercel'],
    outcome: '24/7 AI mentor with personalised roadmaps and market forecasting. Live on Vercel.',
    timeline: '6 Weeks',
    gridArea: 'skillgenie',
    borderColor: 'var(--green)',
    links: [
      { label: 'GITHUB', href: 'https://github.com/Anant-4-code/SkillGuieni' },
      { label: 'LIVE', href: 'https://skillgenie-frontend.vercel.app/' }
    ]
  },
  {
    id: 'proj3',
    chapter: 'CH.03',
    title: 'ISRO MOSDAC BOT',
    description: 'LLM + Knowledge Graph AI assistant for ISRO\'s MOSDAC satellite portal with GNN multi-hop reasoning.',
    fullDetails: 'LLM-augmented virtual assistant designed for Bharatiya Antariksh Hackathon 2025 (ISRO). Uses a spatio-temporal knowledge graph with Graph Neural Networks (GNN) for multi-hop reasoning and persistent context via Knowledge Graph of Thoughts (KG-oT). Hierarchical Multi-Agent RAG pipeline for complex MOSDAC satellite data queries.',
    category: 'AI',
    tags: ['LLM', 'GNN', 'Knowledge Graph', 'Multi-Agent RAG', 'KG-oT'],
    outcome: 'Secured top positions at Bharatiya Antariksh Hackathon — ISRO 2025.',
    timeline: 'Hackathon (48hrs)',
    gridArea: 'isrobot',
    borderColor: 'var(--purple)'
  },
  {
    id: 'proj4',
    chapter: 'CH.04',
    title: 'VARTALAAB',
    description: 'Real-time high-speed chat app: sub-100ms WebSocket relay, JWT auth, MongoDB, responsive mobile-first.',
    fullDetails: 'Secure, scalable real-time chat platform built with Socket.IO messaging relays, MongoDB schemas, JWT/OAuth auth, and dynamic CSS theming. Features sub-100ms message propagation for concurrent socket conversations, group chats, and a mobile-first responsive design. Deployed and live.',
    category: 'DEV',
    tags: ['React', 'Socket.IO', 'Node.js', 'MongoDB', 'JWT'],
    outcome: 'Sub-100ms latency for concurrent socket conversations. Full group chat and mobile-first layout.',
    timeline: '4 Weeks',
    gridArea: 'vartalaab',
    borderColor: 'var(--gold)',
    links: [{ label: 'GITHUB', href: 'https://github.com/Anant-4-code/vartalaab' }]
  },
  {
    id: 'proj5',
    chapter: 'CH.05',
    title: 'YOLOV7 FRACTURE DETECTOR',
    description: 'YOLOv7-p6 trained on 20,327 pediatric X-rays — 9 fracture classes, ONNX 2-3x speedup, live on HF Spaces.',
    fullDetails: 'Standalone YOLOv7-p6 model trained on the full GRAZPEDWRI-DX dataset (20,327 X-rays, 6,091 pediatric cases) for 9 fracture/anomaly classes. ONNX export delivers 2–3x CPU inference speedup. Confidence-weighted attention heatmaps for radiologist-readable explainability. Interactive Gradio demo live on Hugging Face Spaces.',
    category: 'AI',
    tags: ['YOLOv7-p6', 'ONNX Runtime', 'OpenCV', 'Gradio', 'Hugging Face'],
    outcome: '2–3x CPU inference via ONNX. Attention heatmaps for explainability. Live HF Spaces demo.',
    timeline: '6 Weeks',
    gridArea: 'fracture',
    borderColor: 'var(--red)',
    links: [
      { label: 'GITHUB', href: 'https://github.com/Anant-4-code/GRAZPEDWRI-DX-Fracture-Detection' },
      { label: 'HF DEMO', href: 'https://huggingface.co/spaces/Anant4code/GRAZPEDWRI-DX-Fracture-Detection' }
    ]
  },
  {
    id: 'proj6',
    chapter: 'CH.06',
    title: 'WEATHERWISE',
    description: 'Full-stack weather platform with Gemini AI contextual recommendations, maps & 6-day forecasts.',
    fullDetails: 'Full-stack weather platform with AI-powered contextual recommendations via Gemini API, interactive OpenWeatherMap-driven maps, 6-day forecasts, auto-location detection, and 100+ active users. React frontend, Node.js backend, clean component architecture.',
    category: 'DEV',
    tags: ['React', 'Node.js', 'OpenWeatherMap API', 'Gemini AI'],
    outcome: '100+ active users. AI-powered weather contextualisation via Gemini.',
    timeline: '3 Weeks',
    gridArea: 'weather',
    borderColor: 'var(--orange)',
    links: [
      { label: 'GITHUB', href: 'https://github.com/Anant-4-code/Weather_app' },
      { label: 'LIVE', href: 'https://anant-4-code.github.io/Weather_app/' }
    ]
  }
];

const Projects: React.FC = () => {
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const modalRoot = typeof document !== 'undefined' ? document.body : null;

  return (
    <section
      id="projects"
      style={{
        minHeight: '100vh',
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
      className="projects-section-container"
    >
      <div className="manga-watermark watermark-vertical" style={{ top: '15%', left: '2%', opacity: 0.02, fontSize: '10vw' }}>
        WORKS
      </div>

      <div style={{ marginBottom: '40px' }}>
        <GlitchText
          as="h2"
          text="[ MISSION ARCHIVE ]"
          className="bebas"
          style={{ fontSize: '48px', color: 'var(--white)', margin: 0, display: 'block' }}
          interval={5000}
          duration={450}
        />
        <p style={{ color: 'var(--gray)', fontSize: '12px' }}>
          CHAPTER PORTFOLIO // CLICK CARD FOR BLUEPRINT FILES
        </p>
      </div>

      {/* Asymmetric Manga Grid Area */}
      <div
        className="projects-asymmetric-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gridAutoRows: '220px',
          gap: '24px'
        }}
      >
        <style>
          {`
            .projects-asymmetric-grid {
              grid-template-areas:
                "sanjivani skillgenie isrobot"
                "sanjivani vartalaab fracture"
                "weather weather fracture";
            }
            @media (max-width: 900px) {
              .projects-asymmetric-grid {
                grid-template-columns: 1fr 1fr !important;
                grid-template-areas:
                  "sanjivani sanjivani"
                  "skillgenie isrobot"
                  "vartalaab fracture"
                  "weather weather" !important;
              }
            }
            @media (max-width: 600px) {
              .projects-asymmetric-grid {
                grid-template-columns: 1fr !important;
                grid-auto-rows: minmax(220px, auto) !important;
                grid-template-areas: none !important;
                display: flex !important;
                flex-direction: column !important;
              }
              .projects-section-container {
                padding: 40px 20px !important;
              }
            }
          `}
        </style>

        {projectsList.map((proj) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            style={{
              gridArea: proj.gridArea,
              height: '100%',
              minHeight: '220px',
              filter: hoveredId && hoveredId !== proj.id ? 'brightness(0.55) saturate(0.4)' : 'none',
              transition: 'filter 0.2s ease'
            }}
            onMouseEnter={() => setHoveredId(proj.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <TiltCard
              onClick={() => setSelectedProj(proj)}
              className="manga-panel cursor-target scanlines-overlay project-card-layout"
              maxTilt={6}
              spotlightColor={`${proj.borderColor === 'var(--cyan)' ? 'rgba(0,201,224,0.08)' : proj.borderColor === 'var(--gold)' ? 'rgba(255,214,10,0.08)' : 'rgba(255,255,255,0.05)'}`}
              style={{
                padding: 0,
                borderWidth: '2.5px',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                cursor: 'none',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              {/* Corner brackets */}
              <div className="corner-bracket tl" style={{ borderColor: proj.borderColor }} />
              <div className="corner-bracket br" style={{ borderColor: proj.borderColor }} />

              {/* Category badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                fontSize: '8px',
                fontFamily: 'var(--font-body)',
                color: proj.borderColor,
                border: `1px solid ${proj.borderColor}`,
                padding: '2px 8px',
                letterSpacing: '2px',
                zIndex: 4,
                backgroundColor: 'rgba(13,13,15,0.7)'
              }}>
                {proj.category}
              </div>

              {/* Background desaturated mockup image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  transition: 'filter 0.3s ease, opacity 0.3s ease',
                  filter: 'grayscale(0.65) contrast(1.15) sepia(0.05)',
                  opacity: 0.85
                }}
                className="proj-bg-mockup"
              >
                <ProjectMockupSVG title={proj.title} category={proj.category} />
              </div>

              {/* Hover details cover sheet */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(13, 13, 15, 0.92)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  transition: 'opacity 0.15s var(--ease-enter), transform 0.15s var(--ease-enter)'
                }}
                className="proj-hover-cover"
              >
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
                  {proj.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {proj.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{ fontSize: '8px', color: proj.borderColor, border: `1px solid ${proj.borderColor}`, padding: '2px 6px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title / Info bar */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'linear-gradient(to top, rgba(13, 13, 15, 0.95) 60%, transparent)'
                }}
              >
                <div>
                  <span className="bangers" style={{ fontSize: '11px', color: 'var(--gold)', display: 'block', marginBottom: '2px' }}>
                    {proj.chapter}
                  </span>
                  <h3 className="bebas" style={{ fontSize: '20px', margin: 0 }}>
                    {proj.title}
                  </h3>
                </div>
                <span className="bangers" style={{ fontSize: '12px', color: proj.borderColor, opacity: 0.8 }}>
                  [ OPEN ]
                </span>
              </div>

              <style>
                {`
                  .manga-panel:hover .proj-bg-mockup {
                    filter: grayscale(0) contrast(1.1) !important;
                    opacity: 0.9 !important;
                  }
                  .manga-panel:hover .proj-hover-cover {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                  }
                  .project-card-layout {
                    transition: transform 0.12s var(--ease-enter), border-color 0.12s var(--ease-enter), box-shadow 0.12s var(--ease-enter) !important;
                  }
                  .project-card-layout:hover {
                    border-color: var(--gold) !important;
                    box-shadow: 4px 4px 0px var(--gold) !important;
                  }
                  .project-modal-container,
                  .project-modal-container *,
                  .project-modal-card,
                  .project-modal-card * {
                    cursor: auto !important;
                  }
                  .project-modal-link,
                  .project-modal-container button,
                  .project-modal-container a {
                    cursor: pointer !important;
                  }
                `}
              </style>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Expanded Blueprint Modal Overlay */}
      {modalRoot && createPortal(
      <AnimatePresence>
        {selectedProj && (
          <motion.div
            className="project-modal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2147483000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 24px',
              overflowY: 'auto'
            }}
            onClick={() => setSelectedProj(null)}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(13, 13, 15, 0.96)',
                zIndex: 0
              }}
            />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="manga-panel project-modal-card"
              style={{
                width: '100%',
                maxWidth: '780px',
                backgroundColor: 'var(--ink)',
                border: `3px solid ${selectedProj.borderColor}`,
                padding: '0 0 2rem 0',
                overflow: 'visible',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated top accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  height: '3px',
                  background: `linear-gradient(90deg, ${selectedProj.borderColor}, transparent)`,
                  transformOrigin: 'left',
                  width: '100%'
                }}
              />

              {/* Corner brackets */}
              <div className="corner-bracket tl" style={{ width: '20px', height: '20px', borderWidth: '3px', borderColor: selectedProj.borderColor }} />
              <div className="corner-bracket tr" style={{ width: '20px', height: '20px', borderWidth: '3px', borderColor: selectedProj.borderColor }} />
              <div className="corner-bracket br" style={{ width: '20px', height: '20px', borderWidth: '3px', borderColor: selectedProj.borderColor }} />
              <div className="corner-bracket bl" style={{ width: '20px', height: '20px', borderWidth: '3px', borderColor: selectedProj.borderColor }} />

              {/* Close Button */}
              <button
                className="bangers"
                onClick={() => setSelectedProj(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'var(--red)',
                  color: 'var(--white)',
                  border: '2px solid var(--black)',
                  padding: '4px 12px',
                  zIndex: 20,
                  fontSize: '14px',
                  letterSpacing: '1px'
                }}
              >
                ✕ CLOSE
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', alignItems: 'stretch' }}>
                {/* Left panel mockup */}
                <div style={{ background: '#0d0d0f', borderRight: '2px solid rgba(255,255,255,0.12)', borderBottom: '2px solid rgba(255,255,255,0.12)', minHeight: '320px', display: 'flex', overflow: 'hidden' }}>
                  <ProjectMockupSVG title={selectedProj.title} category={selectedProj.category} />
                </div>

                {/* Right panel text */}
                <div style={{ padding: '32px 32px 64px 32px', display: 'flex', flexDirection: 'column', gap: '20px', height: 'auto', minHeight: 'auto', maxHeight: 'none', alignSelf: 'start' }}>
                  <div>
                    <span className="bangers" style={{ fontSize: '12px', color: 'var(--gold)' }}>
                      {selectedProj.chapter} // BLUEPRINT_DOSSIER
                    </span>
                    <h3 className="bebas" style={{ fontSize: '32px', color: 'var(--white)', margin: '4px 0 0 0' }}>
                      {selectedProj.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedProj.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '9px', color: 'var(--cyan)', border: '1px solid var(--cyan)', padding: '2px 8px', borderRadius: '2px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                    {selectedProj.fullDetails}
                  </p>

                  <div style={{ borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '10px', color: 'var(--white)' }}>
                      <strong style={{ color: 'var(--gold)' }}>MISSION IMPACT: </strong> {selectedProj.outcome}
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--white)' }}>
                      <strong style={{ color: 'var(--purple)' }}>TIMELINE ARCS: </strong> {selectedProj.timeline}
                    </div>
                  </div>

                  {/* Links */}
                  {selectedProj.links && selectedProj.links.length > 0 && (
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '0' }}>
                      {selectedProj.links.map(link => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-modal-link"
                          style={{
                            display: 'inline-block',
                            textDecoration: 'none',
                            backgroundColor: selectedProj.borderColor,
                            color: 'var(--black)',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            padding: '8px 18px',
                            border: '2px solid var(--black)',
                            letterSpacing: '1px'
                          }}
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      modalRoot
      )}
    </section>
  );
};

export default Projects;
