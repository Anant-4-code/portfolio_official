import React from 'react';

// Anime Avatar Illustration (Manga style in gold/black)
export const AnimeAvatarSVG: React.FC = () => (
  <svg viewBox="0 0 320 320" width="100%" height="100%" style={{ background: '#131318', display: 'block' }}>
    {/* Manga panel border lines */}
    <rect x="10" y="10" width="300" height="300" fill="none" stroke="#ffd60a" strokeWidth="2" />
    {/* Abstract ninja character mask/hood */}
    <path d="M60 260 C80 140, 100 80, 160 80 C220 80, 240 140, 260 260 Z" fill="#222" stroke="#444" strokeWidth="2" />
    {/* Manga Speedlines in background */}
    <line x1="160" y1="10" x2="160" y2="70" stroke="#ffd60a" strokeWidth="1.5" opacity="0.3" />
    <line x1="30" y1="30" x2="100" y2="100" stroke="#ffd60a" strokeWidth="1" opacity="0.2" />
    <line x1="290" y1="30" x2="220" y2="100" stroke="#ffd60a" strokeWidth="1" opacity="0.2" />
    {/* Hair spikes (Manga/Shonen classic) */}
    <path d="M110 90 L130 50 L140 85 L160 40 L175 80 L195 45 L205 90 Z" fill="#ffd60a" />
    {/* Cyberpunk Glowing Eyes */}
    <ellipse cx="130" cy="150" rx="15" ry="4" fill="#00C9E0" />
    <ellipse cx="190" cy="150" rx="15" ry="4" fill="#00C9E0" />
    {/* Eye scars / speed lines */}
    <path d="M120 140 L140 160" stroke="#ffd60a" strokeWidth="2" />
    <path d="M200 140 L180 160" stroke="#ffd60a" strokeWidth="2" />
    {/* Ninja collar mask */}
    <path d="M120 180 Q160 200 200 180 L200 240 Q160 250 120 240 Z" fill="#ffd60a" opacity="0.8" />
    {/* Forehead protector */}
    <rect x="120" y="100" width="80" height="20" rx="2" fill="#ffd60a" />
    <text x="160" y="115" fontFamily="monospace" fontSize="11" fill="#131318" fontWeight="bold" textAnchor="middle">AI-99</text>
  </svg>
);

// Real Portrait Vector Illustration (Cyberpunk developer style)
export const RealAvatarSVG: React.FC = () => (
  <svg viewBox="0 0 320 320" width="100%" height="100%" style={{ background: '#0D0D0F', display: 'block' }}>
    <rect x="10" y="10" width="300" height="300" fill="none" stroke="#00C9E0" strokeWidth="2" />
    {/* Background code text elements */}
    <text x="30" y="50" fill="#00C9E0" opacity="0.15" fontSize="8" fontFamily="monospace">const anant = new Developer();</text>
    <text x="30" y="70" fill="#00C9E0" opacity="0.15" fontSize="8" fontFamily="monospace">anant.skills = ["AI", "Web"];</text>
    {/* Human shoulders / hoodie outline */}
    <path d="M70 280 Q160 210 250 280" fill="#1e1e24" stroke="#00C9E0" strokeWidth="1" />
    {/* Human Head */}
    <circle cx="160" cy="150" r="50" fill="#ffdbb5" stroke="#00C9E0" strokeWidth="1.5" />
    {/* Spectacles (Classic developer look) */}
    <rect x="125" y="135" width="30" height="20" rx="3" fill="none" stroke="#00C9E0" strokeWidth="2" />
    <rect x="165" y="135" width="30" height="20" rx="3" fill="none" stroke="#00C9E0" strokeWidth="2" />
    <line x1="155" y1="145" x2="165" y2="145" stroke="#00C9E0" strokeWidth="2" />
    {/* Smile */}
    <path d="M145 180 Q160 190 175 180" fill="none" stroke="#222" strokeWidth="2" />
    {/* Hair (tidy developer spikes) */}
    <path d="M110 130 C120 100 200 100 210 130 Z" fill="#222" />
  </svg>
);

// Project Mockup SVG Generators
interface MockupProps {
  title: string;
  category: 'AI' | 'DEV' | 'CREATIVE' | 'AUTOMATION';
}

export const ProjectMockupSVG: React.FC<MockupProps> = ({ title, category }) => {
  const accentColor = category === 'AI' ? '#00C9E0' : category === 'CREATIVE' ? '#BF8FFF' : '#FFD60A';

  return (
    <svg viewBox="0 0 400 250" width="100%" height="100%" style={{ background: '#131318', display: 'block' }}>
      {/* Halftone Screentone Grid overlay */}
      <defs>
        <pattern id="dotpattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#fff" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="400" height="250" fill="url(#dotpattern)" />
      
      {/* Code window interface */}
      <rect x="20" y="20" width="360" height="210" rx="6" fill="#0d0d0f" stroke="#333" strokeWidth="2" />
      {/* Title bar dots */}
      <circle cx="40" cy="35" r="4" fill="#ff3b5c" />
      <circle cx="52" cy="35" r="4" fill="#ffd60a" />
      <circle cx="64" cy="35" r="4" fill="#3dffa0" />
      
      <text x="160" y="40" fill="#888" fontSize="10" fontFamily="monospace" textAnchor="middle">{category} // PANEL_FILE</text>
      <line x1="20" y1="50" x2="380" y2="50" stroke="#222" strokeWidth="1" />
      
      {/* App visual representations */}
      <rect x="40" y="70" width="320" height="130" rx="4" fill="#131318" stroke={accentColor} strokeWidth="1" strokeDasharray="4 2" />
      
      {/* Large central text title */}
      <text x="200" y="130" fill={accentColor} fontSize="28" fontFamily="Bebas Neue" textAnchor="middle" letterSpacing="2">{title}</text>
      <text x="200" y="160" fill="#666" fontSize="9" fontFamily="monospace" textAnchor="middle">VER_1.0 // INITIALIZED SUCCESS</text>
    </svg>
  );
};
