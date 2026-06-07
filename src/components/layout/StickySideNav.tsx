import React from 'react';
import './StickySideNav.css';

interface StickySideNavProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

const StickySideNav: React.FC<StickySideNavProps> = ({ activeSection = 'hero', onNavigate }) => {
  const sections = [
    { id: 'hero',         label: 'Chapter 00: Home' },
    { id: 'skills',       label: 'Chapter 01: Skills' },
    { id: 'projects',     label: 'Chapter 02: Projects' },
    { id: 'experience',   label: 'Chapter 03: Story Arc' },
    { id: 'research',     label: 'Chapter 04: Intel' },
    { id: 'achievements', label: 'Chapter 05: Unlocks' },
    { id: 'contact',      label: 'Chapter 06: Climax' }
  ];

  const handleClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky-side-nav" aria-label="Section Navigation">
      {sections.map(sec => (
        <div
          key={sec.id}
          className={`nav-dot-container cursor-target ${activeSection === sec.id ? 'active' : ''}`}
          onClick={() => handleClick(sec.id)}
          title={sec.label}
        >
          <div className="nav-comic-bubble">{sec.label}</div>
          <div className="nav-dot" />
        </div>
      ))}
    </nav>
  );
};

export default StickySideNav;
