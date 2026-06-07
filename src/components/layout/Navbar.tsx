import React, { useEffect, useState, useRef } from 'react';
import Magnet from '../ui/Magnet';
import './Navbar.css';

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection = 'hero', onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // New Shonen / Terminal section names mapping
  const links = [
    { id: 'hero', label: 'HOME', code: 'SYS_BOOT' },
    { id: 'skills', label: '[ CHARACTER SHEET ]', code: 'PWR_LVL' },
    { id: 'projects', label: '[ MISSION ARCHIVE ]', code: 'OPS_LOG' },
    { id: 'experience', label: '[ BATTLE CHRONICLES ]', code: 'FLD_DEP' },
    { id: 'research', label: '[ SYSTEM SCHEMATICS ]', code: 'INT_FIL' },
    { id: 'achievements', label: '[ FEATS OF STRENGTH ]', code: 'XP_LOCK' },
    { id: 'contact', label: '[ TO BE CONTINUED... ]', code: 'COM_LNK' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 80);
      // Hide when scrolling down past 120px, show when scrolling up
      if (currentY > 120) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''} ${hidden && !menuOpen ? 'navbar-hidden' : ''}`}>
        <div className="navbar-logo bangers" onClick={() => handleClick('hero')}>
          AR
        </div>

        <ul className="navbar-links">
          {links.map(link => (
            <li
              key={link.id}
              className={`navbar-link-item ${activeSection === link.id ? 'active' : ''}`}
            >
              <Magnet padding={10} magnetStrength={4}>
                <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleClick(link.id); }}>
                  {link.label}
                </a>
              </Magnet>
            </li>
          ))}
          <li className="navbar-link-item">
            <Magnet padding={20} magnetStrength={3}>
              <button className="nav-cta-btn" onClick={() => handleClick('contact')}>
                HIRE ME →
              </button>
            </Magnet>
          </li>
        </ul>

        {/* Mobile Navigation Override button - Target reticle style [ + ] */}
        <button
          className={`mobile-reticle-toggle ${menuOpen ? 'reticle-active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="reticle-inner">
            <span className="reticle-symbol">{menuOpen ? '[ × ]' : '[ ＋ ]'}</span>
          </div>
        </button>
      </header>

      {/* Mobile Terminal-style Boot-up Overlay Menu */}
      <div className={`mobile-overlay-nav ${menuOpen ? 'visible' : ''}`}>
        {/* Terminal frame/header decoration */}
        <div className="mobile-overlay-header">
          <div className="bangers" style={{ color: 'var(--red)', fontSize: '14px', letterSpacing: '2px' }}>
            SYSTEM DIRECTORY OVERRIDE // ACTIVE
          </div>
          <div style={{ color: 'var(--gray)', fontSize: '8px', fontFamily: 'var(--font-body)', marginTop: '4px' }}>
            SECURE ACCESS MATRIX · SELECT CHANNEL TERMINAL
          </div>
        </div>

        <ul className="mobile-menu-list">
          {links.map((link, index) => (
            <li
              key={link.id}
              className="mobile-link-item"
              style={{ 
                transitionDelay: `${index * 40}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(-15px)',
                transition: 'transform 0.35s var(--ease-spring), opacity 0.35s'
              }}
            >
              <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleClick(link.id); }}>
                <span className="link-code" style={{ color: 'var(--gold)', marginRight: '16px' }}>{link.code}</span>
                <span className="link-text">{link.label}</span>
              </a>
            </li>
          ))}
          
          <li
            className="mobile-link-item"
            style={{ 
              transitionDelay: `${links.length * 40}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(-15px)',
              transition: 'transform 0.35s var(--ease-spring), opacity 0.35s',
              marginTop: '16px'
            }}
          >
            <button 
              className="nav-cta-btn" 
              onClick={() => handleClick('contact')}
              style={{ width: '100%', padding: '12px', fontSize: '16px', cursor: 'none' }}
            >
              HIRE ME →
            </button>
          </li>
        </ul>

        {/* Footer info in overlay */}
        <div className="mobile-overlay-footer" style={{ fontFamily: 'var(--font-body)', fontSize: '7px', color: 'rgba(255, 255, 255, 0.25)', position: 'absolute', bottom: '24px', textAlign: 'center', width: '100%', left: 0 }}>
          AR OVERRIDE TERMINAL V3.0 // NASHIK CORE
        </div>
      </div>
    </>
  );
};

export default Navbar;
