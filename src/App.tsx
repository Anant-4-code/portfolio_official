import { useState, useEffect, useCallback, useRef } from 'react';
import './index.css';

// Layout
import PageLoader from './components/layout/PageLoader';
import Navbar from './components/layout/Navbar';
import StickySideNav from './components/layout/StickySideNav';

import ReactiveDarkMeshCanvas from './components/ui/ReactiveDarkMeshCanvas';

// Cursor
import SplashCursor from './components/ui/SplashCursor';
import TargetCursor from './components/ui/TargetCursor';

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

  // Bulletproof active section scroll tracker
  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Top of page check
      if (scrollPosition < 80) {
        setActiveSection('hero');
        return;
      }

      // Bottom of page check
      if (scrollPosition + viewportHeight >= documentHeight - 40) {
        setActiveSection('contact');
        return;
      }

      const targetY = viewportHeight * 0.4;
      let activeId = 'hero';
      let minDistance = Infinity;

      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If 40% viewport height point falls inside this section
          if (rect.top <= targetY && rect.bottom >= targetY) {
            activeId = id;
            minDistance = 0;
          } else if (minDistance !== 0) {
            const distToTop = Math.abs(rect.top - targetY);
            const distToBottom = Math.abs(rect.bottom - targetY);
            const dist = Math.min(distToTop, distToBottom);
            if (dist < minDistance) {
              minDistance = dist;
              activeId = id;
            }
          }
        }
      });

      setActiveSection(activeId);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [loaded]);

  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

      <ReactiveDarkMeshCanvas />
      <SplashCursor COLOR="#d4d4d8" SIM_RESOLUTION={32} DYE_RESOLUTION={256} PRESSURE_ITERATIONS={6} SPLAT_RADIUS={0.25} />
      <TargetCursor />

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
