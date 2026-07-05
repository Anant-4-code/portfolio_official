import { useState, useEffect, useCallback, useRef } from 'react';
import './index.css';

// Layout
import PageLoader from './components/layout/PageLoader';
import Navbar from './components/layout/Navbar';
import StickySideNav from './components/layout/StickySideNav';

// Cursor
import SplashCursor from './components/ui/SplashCursor';
import TargetCursor from './components/ui/TargetCursor';
import ParticleField from './components/ui/ParticleField';
import CyberBackgroundMatrix from './components/ui/CyberBackgroundMatrix';

// Sections
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Research from './sections/Research';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

const SECTION_IDS = [
  'hero',
  'skills',
  'projects',
  'experience',
  'research',
  'achievements',
  'contact'
];

const MATRIX_TERMINAL_LINES = [
  '> INITIALIZING COGNITIVE CORE PROCESSES...',
  '> LOADING SKILL MATRICES... [ 100% ]',
  '> DEPLOYING ANANT_RAI.EXE... [ READY ]',
  '> SYSTEM READY // ACCESS GRANTED.',
  'TX_READY // HANDSHAKE_INIT //'
];

const MATRIX_TERMINAL_STREAMS = [
  { text: MATRIX_TERMINAL_LINES[0], left: '5%', top: '18%', delay: '-2s', duration: '18s' },
  { text: MATRIX_TERMINAL_LINES[1], left: '12%', top: '62%', delay: '-9s', duration: '21s' },
  { text: MATRIX_TERMINAL_LINES[2], left: '84%', top: '14%', delay: '-4s', duration: '19s' },
  { text: MATRIX_TERMINAL_LINES[3], left: '91%', top: '48%', delay: '-13s', duration: '24s' },
  { text: MATRIX_TERMINAL_LINES[4], left: '73%', top: '78%', delay: '-7s', duration: '20s' },
  { text: MATRIX_TERMINAL_LINES[1], left: '27%', top: '84%', delay: '-16s', duration: '23s' },
  { text: MATRIX_TERMINAL_LINES[0], left: '96%', top: '73%', delay: '-11s', duration: '18s' },
  { text: MATRIX_TERMINAL_LINES[4], left: '3%', top: '42%', delay: '-5s', duration: '22s' }
];

const MATRIX_WATERMARKS = [
  { text: '// CHAPTER_06 //', left: '7%', top: '91%' },
  { text: '[ FEATS OF STRENGTH_05 ]', left: '66%', top: '63%' },
  { text: '[ SYS_REF // CHAR_SHEET_01 ]', left: '18%', top: '32%' }
];

const DataMatrixBackdrop: React.FC = () => (
  <div className="data-matrix-backdrop" aria-hidden="true">
    <div className="data-matrix-macro">最終決戦</div>
    <div className="data-matrix-terminal-layer">
      {MATRIX_TERMINAL_STREAMS.map((stream, index) => (
        <span
          key={`${stream.text}-${index}`}
          className="data-matrix-terminal-stream"
          style={{
            left: stream.left,
            top: stream.top,
            animationDelay: stream.delay,
            animationDuration: stream.duration
          }}
        >
          {stream.text}
        </span>
      ))}
    </div>
    <div className="data-matrix-watermark-layer">
      {MATRIX_WATERMARKS.map((mark) => (
        <span
          key={mark.text}
          className="data-matrix-id-watermark"
          style={{ left: mark.left, top: mark.top }}
        >
          {mark.text}
        </span>
      ))}
    </div>
  </div>
);

const SectionDivider: React.FC<{ tag: string }> = ({ tag }) => (
  <div className="layout-divider">
    <span className="layout-divider-label">
      {tag}
    </span>
    <span className="layout-divider-label" style={{ fontFamily: 'var(--font-jp)', opacity: 0.5 }}>
      [ セクション分割 ]
    </span>
  </div>
);

function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mainRef = useRef<HTMLElement>(null);

  // Pure IntersectionObserver active section tracking — no scroll position math
  useEffect(() => {
    if (!loaded) return;

    const observers: IntersectionObserver[] = [];
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    const debouncedSetActive = (sectionId: string) => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => setActiveSection(sectionId), 80);
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) debouncedSetActive(entry.target.id);
      });
    };

    const timer = setTimeout(() => {
      SECTION_IDS.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '-30% 0px -50% 0px',
            threshold: 0
          });
          observer.observe(element);
          observers.push(observer);
        }
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      if (debounceTimer) clearTimeout(debounceTimer);
      observers.forEach(obs => obs.disconnect());
    };
  }, [loaded]);

  const handleNavigate = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

      <CyberBackgroundMatrix />
      <ParticleField />
      <SplashCursor SIM_RESOLUTION={32} DYE_RESOLUTION={256} PRESSURE_ITERATIONS={6} SPLAT_RADIUS={0.25} />
      <TargetCursor />
      <DataMatrixBackdrop />

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <StickySideNav activeSection={activeSection} onNavigate={handleNavigate} />

      <main ref={mainRef} style={{ position: 'relative', zIndex: 2 }}>
        <Hero onNavigate={handleNavigate} />
        <SectionDivider tag="[SYS_REF // CHAR_SHEET_01]" />
        <Skills />
        <SectionDivider tag="[SYS_REF // MISS_ARCHIVE_02]" />
        <Projects />
        <SectionDivider tag="[SYS_REF // BTL_CHRONICLE_03]" />
        <Experience />
        <SectionDivider tag="[SYS_REF // SYS_SCHEMATICS_04]" />
        <Research />
        <SectionDivider tag="[SYS_REF // FEAT_STRENGTH_05]" />
        <Achievements />
        <SectionDivider tag="[SYS_REF // TO_BE_CONTINUED_06]" />
        <Contact />
      </main>
    </>
  );
}

export default App;
