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

  const links = [
    { id: 'hero', label: '[ HOME ]', code: 'SYS_BOOT' },
    { id: 'skills', label: '[ CHARACTER SHEET ]', code: 'PWR_LVL' },
    { id: 'projects', label: '[ MISSION ARCHIVE ]', code: 'OPS_LOG' },
    { id: 'experience', label: '[ BATTLE CHRONICLES ]', code: 'FLD_DEP' },
    { id: 'research', label: '[ SYSTEM SCHEMATICS ]', code: 'INT_FIL' },
    { id: 'achievements', label: '[ FEATS OF STRENGTH ]', code: 'XP_LOCK' },
    { id: 'contact', label: '[ CONTACT ]', code: 'COM_LNK' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
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
        {/* Brand Logo */}
        <div className="navbar-logo" onClick={() => handleClick('hero')}>
          <span className="logo-text">AR</span>
          <span className="logo-dot" />
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {links.map(link => (
            <li
              key={link.id}
              className={`navbar-link-item ${activeSection === link.id ? 'active' : ''}`}
            >
              <Magnet padding={8} magnetStrength={3}>
                <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleClick(link.id); }}>
                  {link.label}
                </a>
              </Magnet>
            </li>
          ))}
        </ul>

        {/* Call To Action */}
        <div className="navbar-cta-wrapper">
          <Magnet padding={12} magnetStrength={2}>
            <button className="nav-cta-btn" onClick={() => handleClick('contact')}>
              [ HIRE ME → ]
            </button>
          </Magnet>
        </div>

        {/* Mobile Reticle Toggle */}
        <button
          className={`mobile-reticle-toggle ${menuOpen ? 'reticle-active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="reticle-symbol">{menuOpen ? '[ × ]' : '[ ＋ ]'}</span>
        </button>
      </header>

      {/* Mobile Terminal Overlay */}
      <div className={`mobile-overlay-nav ${menuOpen ? 'visible' : ''}`}>
        <div className="mobile-overlay-header">
          <div style={{ color: '#FFFFFF', fontSize: '11px', fontFamily: 'var(--font-body, "JetBrains Mono", monospace)', letterSpacing: '1px' }}>
            // DIRECTORY OVERRIDE MENU
          </div>
          <div style={{ color: '#888888', fontSize: '9px', fontFamily: 'var(--font-body, "JetBrains Mono", monospace)', marginTop: '4px' }}>
            SELECT SYSTEM MODULE TO NAVIGATE
          </div>
        </div>

        <ul className="mobile-menu-list">
          {links.map((link, index) => (
            <li
              key={link.id}
              className="mobile-link-item"
              style={{
                transitionDelay: `${index * 35}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'transform 0.25s ease, opacity 0.25s ease'
              }}
            >
              <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleClick(link.id); }}>
                <span className="link-code" style={{ color: '#FFFFFF', marginRight: '14px', opacity: 0.5 }}>{link.code}</span>
                <span className="link-text">{link.label}</span>
              </a>
            </li>
          ))}

          <li
            className="mobile-link-item"
            style={{
              transitionDelay: `${links.length * 35}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              marginTop: '16px'
            }}
          >
            <button
              className="nav-cta-btn"
              onClick={() => handleClick('contact')}
              style={{ width: '100%', padding: '10px 0', textAlign: 'center' }}
            >
              [ HIRE ME → ]
            </button>
          </li>
        </ul>

        <div className="mobile-overlay-footer">
          // AR OVERRIDE TERMINAL V3.0 // NASHIK CORE
        </div>
      </div>
    </>
  );
};

export default Navbar;
