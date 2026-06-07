import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlitchText from '../components/ui/GlitchText';
import TiltCard from '../components/ui/TiltCard';

interface GalleryItem {
  id: string;
  title: string;
  category: 'BRANDING' | 'UI' | 'ILLUSTRATION' | 'AI' | 'MOTION';
  accentColor: string;
  desc: string;
  tags: string[];
  stat: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 'gal1',
    title: 'Sanjivani UI Dashboard',
    category: 'UI',
    accentColor: '#00C9E0',
    desc: 'Full clinical AI dashboard interface. Doctor Panel with prescription queue, fracture detection alerts, dosage analytics, and multilingual patient mode.',
    tags: ['React', 'FastAPI', 'ONNX', 'UI/UX'],
    stat: '68%→91% OCR'
  },
  {
    id: 'gal2',
    title: 'SkillGenie Career Board',
    category: 'UI',
    accentColor: '#3DFFA0',
    desc: 'Career roadmap visualisation board with skill-gap radar charts, 5-year market trajectory curves, and AI mentor chat interface.',
    tags: ['Gemini AI', 'Chart.js', 'React'],
    stat: '100+ Users'
  },
  {
    id: 'gal3',
    title: 'MPVE Framework Diagram',
    category: 'AI',
    accentColor: '#FFD60A',
    desc: 'Architecture schematic of the custom Multi-Perspective Vision Enhancement framework — FVR, GSVE, and TCVL modules with OCR pipeline.',
    tags: ['CV Framework', 'Research', 'Tesseract'],
    stat: '+23pp Acc'
  },
  {
    id: 'gal4',
    title: 'ISRO KG Reasoning Graph',
    category: 'AI',
    accentColor: '#BF8FFF',
    desc: 'Spatio-temporal knowledge graph visualisation for MOSDAC satellite queries. GNN multi-hop reasoning paths with KG-oT context nodes.',
    tags: ['GNN', 'KG-oT', 'Multi-Agent'],
    stat: 'ISRO 2025'
  },
  {
    id: 'gal5',
    title: 'Vartalaab Socket Architecture',
    category: 'BRANDING',
    accentColor: '#FF7C40',
    desc: 'System architecture diagram for the Vartalaab real-time chat platform — Socket.IO relay matrix, JWT auth flow, and MongoDB schema.',
    tags: ['Socket.IO', 'Node.js', 'System Design'],
    stat: '<100ms'
  },
  {
    id: 'gal6',
    title: 'Anant Rai Cyberpunk ID Card',
    category: 'ILLUSTRATION',
    accentColor: '#FF3B5C',
    desc: 'Custom vector ID card in manga × cyber aesthetic. Features tier badges, skill rank indicators, and a dossier-style layout.',
    tags: ['Figma', 'Vector Art', 'Design'],
    stat: 'AR•DB v2.1'
  }
];

const filters: ('ALL' | GalleryItem['category'])[] = ['ALL', 'UI', 'AI', 'ILLUSTRATION', 'BRANDING', 'MOTION'];

// Unique SVG preview for each gallery item
const GalleryPreviewSVG: React.FC<{ item: GalleryItem; isHovered: boolean }> = ({ item, isHovered }) => {
  const c = item.accentColor;

  const svgMap: Record<string, React.ReactElement> = {
    gal1: (
      <svg viewBox="0 0 240 160" width="100%" height="100%">
        {/* Doctor Panel mockup */}
        <rect x="0" y="0" width="240" height="160" fill="#0d0d0f" />
        <rect x="8" y="8" width="70" height="144" fill="#131318" rx="1" stroke={c} strokeWidth="1" strokeDasharray="2 2" />
        <rect x="12" y="14" width="62" height="20" fill={c} fillOpacity="0.15" rx="1" />
        <text x="16" y="28" fill={c} fontSize="7" fontFamily="monospace">PATIENT QUEUE</text>
        {[0, 1, 2, 3].map(i => (
          <rect key={i} x="12" y={40 + i * 22} width="62" height="16" fill="#1a1a22" rx="1" stroke={c} strokeWidth="0.5" strokeOpacity="0.3" />
        ))}
        <rect x="84" y="8" width="148" height="68" fill="#131318" rx="1" stroke={c} strokeWidth="1" />
        <text x="90" y="22" fill={c} fontSize="7" fontFamily="monospace">FRACTURE DETECTION</text>
        <circle cx="140" cy="50" r="24" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M125 50 L155 50 M140 35 L140 65" stroke={c} strokeWidth="0.7" strokeDasharray="2 2" />
        <rect x="128" y="42" width="8" height="16" fill={c} fillOpacity="0.3" rx="1" />
        <text x="90" y="80" fill={c} fontSize="6" fontFamily="monospace">OCR: 91% ACCURACY</text>
        <rect x="84" y="82" width="148" height="70" fill="#131318" rx="1" stroke={c} strokeWidth="1" />
        <text x="90" y="96" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">DOSE ANALYTICS</text>
        {[0, 1, 2, 3, 4].map(i => (
          <rect key={i} x={92 + i * 20} y={130 - i * 8} width="14" height={8 + i * 8} fill={c} fillOpacity={0.3 + i * 0.1} rx="1" />
        ))}
      </svg>
    ),
    gal2: (
      <svg viewBox="0 0 240 160" width="100%" height="100%">
        <rect x="0" y="0" width="240" height="160" fill="#0d0d0f" />
        {/* Radar chart */}
        <polygon points="120,20 155,55 145,95 95,95 85,55" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5" />
        <polygon points="120,35 145,60 138,85 102,85 95,60" fill={c} fillOpacity="0.06" stroke={c} strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="120" y1="20" x2="120" y2="57" stroke={c} strokeWidth="0.7" />
        <line x1="155" y1="55" x2="120" y2="57" stroke={c} strokeWidth="0.7" />
        <line x1="145" y1="95" x2="120" y2="57" stroke={c} strokeWidth="0.7" />
        <line x1="95" y1="95" x2="120" y2="57" stroke={c} strokeWidth="0.7" />
        <line x1="85" y1="55" x2="120" y2="57" stroke={c} strokeWidth="0.7" />
        {['ML/AI', 'WEB', 'RESEARCH', 'HACK', 'AUTO'].map((l, i) => {
          const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
          return <text key={l} x={120 + Math.cos(angle) * 50} y={57 + Math.sin(angle) * 50} fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">{l}</text>;
        })}
        {/* Trajectory lines */}
        <path d="M10 140 Q60 120 110 130 Q160 125 230 100" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M10 150 Q60 140 110 145 Q160 140 230 130" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <text x="12" y="115" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="monospace">5-YR MARKET FORECAST</text>
      </svg>
    ),
    gal3: (
      <svg viewBox="0 0 240 160" width="100%" height="100%">
        <rect x="0" y="0" width="240" height="160" fill="#0d0d0f" />
        {/* MPVE Framework blocks */}
        <rect x="80" y="8" width="80" height="24" fill={c} fillOpacity="0.2" stroke={c} strokeWidth="1.5" rx="1" />
        <text x="120" y="23" fill={c} fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">INPUT IMAGE</text>
        <line x1="120" y1="32" x2="120" y2="44" stroke={c} strokeWidth="1" strokeDasharray="2 1" />
        {/* Three modules */}
        {[['FVR', 30], ['GSVE', 100], ['TCVL', 170]].map(([label, x]) => (
          <g key={String(label)}>
            <line x1="120" y1="44" x2={Number(x) + 30} y2="44" stroke={c} strokeWidth="0.7" />
            <rect x={Number(x)} y="44" width="60" height="22" fill="#131318" stroke={c} strokeWidth="1" rx="1" />
            <text x={Number(x) + 30} y="58" fill={c} fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{label}</text>
            <line x1={Number(x) + 30} y1="66" x2={Number(x) + 30} y2="78" stroke={c} strokeWidth="0.7" strokeDasharray="2 1" />
          </g>
        ))}
        <rect x="80" y="78" width="80" height="24" fill="#131318" stroke={c} strokeWidth="1.5" rx="1" />
        <text x="120" y="93" fill={c} fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FUSION LAYER</text>
        <line x1="120" y1="102" x2="120" y2="114" stroke={c} strokeWidth="1" strokeDasharray="2 1" />
        <rect x="75" y="114" width="90" height="24" fill={c} fillOpacity="0.2" stroke={c} strokeWidth="2" rx="1" />
        <text x="120" y="129" fill={c} fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">OCR OUTPUT: 91%</text>
        <text x="120" y="152" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="monospace" textAnchor="middle">MPVE FRAMEWORK — ANANT RAI, 2025</text>
      </svg>
    ),
    gal4: (
      <svg viewBox="0 0 240 160" width="100%" height="100%">
        <rect x="0" y="0" width="240" height="160" fill="#0d0d0f" />
        {/* Knowledge graph nodes */}
        {[
          { x: 120, y: 80, r: 12, label: 'MOSDAC' },
          { x: 55, y: 45, r: 8, label: 'SAT' },
          { x: 185, y: 45, r: 8, label: 'GNN' },
          { x: 55, y: 115, r: 8, label: 'QUERY' },
          { x: 185, y: 115, r: 8, label: 'KG-oT' },
          { x: 120, y: 20, r: 6, label: 'LLM' },
          { x: 20, y: 80, r: 6, label: 'RAG' },
          { x: 220, y: 80, r: 6, label: 'CTX' },
        ].map(n => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke={c} strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r={n.r * 0.5} fill={c} fillOpacity="0.3" />
            <text x={n.x} y={n.y + n.r + 8} fill={c} fontSize="5" fontFamily="monospace" textAnchor="middle" opacity="0.7">{n.label}</text>
          </g>
        ))}
        {/* Edges */}
        {[
          [120, 80, 55, 45], [120, 80, 185, 45], [120, 80, 55, 115], [120, 80, 185, 115],
          [120, 80, 120, 20], [120, 80, 20, 80], [120, 80, 220, 80],
          [55, 45, 185, 45], [55, 115, 185, 115]
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="0.7" strokeOpacity="0.3" strokeDasharray="2 2" />
        ))}
      </svg>
    ),
    gal5: (
      <svg viewBox="0 0 240 160" width="100%" height="100%">
        <rect x="0" y="0" width="240" height="160" fill="#0d0d0f" />
        {/* Socket.IO architecture */}
        {/* Client boxes */}
        {[20, 20, 20].map((_, i) => (
          <rect key={i} x={10 + i * 2} y={30 + i * 18} width="50" height="16" fill="#131318" stroke={c} strokeWidth="0.8" rx="1" />
        ))}
        <text x="35" y="40" fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">CLIENT A</text>
        <text x="37" y="58" fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">CLIENT B</text>
        <text x="37" y="76" fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">CLIENT C</text>
        {/* Relay server */}
        <rect x="90" y="40" width="60" height="80" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="2" rx="1" />
        <text x="120" y="60" fill={c} fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SOCKET.IO</text>
        <text x="120" y="74" fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">RELAY</text>
        <text x="120" y="88" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace" textAnchor="middle">{"<100ms"}</text>
        {/* MongoDB */}
        <rect x="180" y="55" width="50" height="50" fill="#131318" stroke={c} strokeWidth="0.8" rx="1" />
        <text x="205" y="75" fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">MONGO</text>
        <text x="205" y="87" fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">DB</text>
        {/* Connections */}
        <line x1="60" y1="46" x2="90" y2="70" stroke={c} strokeWidth="0.7" strokeDasharray="2 2" />
        <line x1="60" y1="64" x2="90" y2="80" stroke={c} strokeWidth="0.7" strokeDasharray="2 2" />
        <line x1="60" y1="72" x2="90" y2="90" stroke={c} strokeWidth="0.7" strokeDasharray="2 2" />
        <line x1="150" y1="80" x2="180" y2="80" stroke={c} strokeWidth="1" strokeDasharray="2 2" />
        {/* JWT */}
        <rect x="90" y="130" width="60" height="16" fill="#131318" stroke="rgba(255,214,10,0.5)" strokeWidth="0.8" rx="1" />
        <text x="120" y="141" fill="rgba(255,214,10,0.7)" fontSize="6" fontFamily="monospace" textAnchor="middle">JWT AUTH</text>
      </svg>
    ),
    gal6: (
      <svg viewBox="0 0 240 160" width="100%" height="100%">
        <rect x="0" y="0" width="240" height="160" fill="#0d0d0f" />
        {/* Cyberpunk ID card */}
        <rect x="20" y="15" width="200" height="130" fill="#131318" rx="2" stroke={c} strokeWidth="2" />
        {/* Speed lines behind */}
        {[0, 30, 60, 90, 120].map(angle => (
          <line key={angle} x1="120" y1="80"
            x2={120 + Math.cos((angle / 180) * Math.PI) * 120}
            y2={80 + Math.sin((angle / 180) * Math.PI) * 120}
            stroke={c} strokeWidth="0.3" strokeOpacity="0.15" />
        ))}
        {/* Avatar circle */}
        <circle cx="68" cy="72" r="32" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5" />
        <circle cx="68" cy="60" r="14" fill="#1a1a22" stroke={c} strokeWidth="1" />
        <rect x="50" y="72" width="36" height="20" fill="#1a1a22" stroke={c} strokeWidth="1" rx="1" />
        {/* Text info */}
        <text x="115" y="35" fill={c} fontSize="8" fontFamily="monospace" fontWeight="bold">ANANT RAI</text>
        <text x="115" y="48" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">AI/ML ENGINEER</text>
        <rect x="115" y="55" width="45" height="10" fill={c} fillOpacity="0.15" rx="1" />
        <text x="138" y="63" fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">S-RANK</text>
        <rect x="115" y="70" width="35" height="8" fill="rgba(255,255,255,0.04)" stroke={c} strokeWidth="0.5" />
        <text x="133" y="77" fill={c} fontSize="5" fontFamily="monospace" textAnchor="middle">9.73 SGPA</text>
        <rect x="115" y="82" width="35" height="8" fill="rgba(255,255,255,0.04)" stroke={c} strokeWidth="0.5" />
        <text x="133" y="89" fill={c} fontSize="5" fontFamily="monospace" textAnchor="middle">5+ HACKATHONS</text>
        {/* Bottom bar */}
        <rect x="20" y="130" width="200" height="15" fill={c} fillOpacity="0.15" />
        <text x="120" y="141" fill={c} fontSize="6" fontFamily="monospace" textAnchor="middle">AR•DB // MANGA × CYBER // v2.1</text>
        {/* Corner marks */}
        <polyline points="20,25 30,15 40,15" fill="none" stroke={c} strokeWidth="1.5" />
        <polyline points="200,145 210,135 220,135" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  };

  return (
    <div style={{ width: '100%', height: '100%', transition: 'filter 0.3s ease', filter: isHovered ? 'none' : 'grayscale(0.7) contrast(1.1)' }}>
      {svgMap[item.id]}
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | GalleryItem['category']>('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredItems = galleryData.filter(
    item => activeFilter === 'ALL' || item.category === activeFilter
  );

  return (
    <section
      id="gallery"
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
      className="gallery-section-container"
    >
      <div className="manga-watermark watermark-vertical" style={{ top: '10%', right: '2%', opacity: 0.02, fontSize: '10vw' }}>
        EXHIBIT
      </div>

      <div style={{ marginBottom: '32px' }}>
        <GlitchText
          as="h2"
          text="[ CREATIVE DISPLAY ]"
          className="bebas"
          style={{ fontSize: '48px', color: 'var(--white)', margin: 0, display: 'block' }}
          interval={5500}
          duration={450}
        />
        <p style={{ color: 'var(--gray)', fontSize: '12px' }}>
          CRT DISPLAY // PROJECT VISUAL ARCHIVES — CLICK TO EXPAND
        </p>
      </div>

      {/* Filter chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="cursor-target bebas"
            style={{
              padding: '5px 14px',
              fontSize: '11px',
              letterSpacing: '2px',
              backgroundColor: activeFilter === filter ? 'var(--gold)' : 'rgba(255,255,255,0.04)',
              color: activeFilter === filter ? 'var(--black)' : activeFilter === 'ALL' ? 'var(--white)' : 'rgba(255,255,255,0.5)',
              border: `1px solid ${activeFilter === filter ? 'var(--gold)' : 'rgba(255,255,255,0.1)'}`,
              transition: 'all 0.15s var(--ease-sharp)',
              borderRadius: '0'
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
          minHeight: '300px'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map(item => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedItem(item)}
            >
              <TiltCard
                className="manga-panel cursor-target gallery-card"
                maxTilt={6}
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderColor: hoveredId === item.id ? item.accentColor : 'rgba(255, 255, 255, 0.12)',
                  backgroundColor: 'var(--ink)',
                  height: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'none',
                  transition: 'border-color 0.12s var(--ease-sharp), box-shadow 0.12s var(--ease-sharp)',
                  boxShadow: hoveredId === item.id ? `-4px 4px 0px ${item.accentColor}` : 'none'
                }}
              >
                {/* Preview area */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#0d0d0f',
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'stretch',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <GalleryPreviewSVG item={item} isHovered={hoveredId === item.id} />

                  {/* Stat chip */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    fontSize: '9px',
                    fontFamily: 'var(--font-body)',
                    color: item.accentColor,
                    border: `1px solid ${item.accentColor}`,
                    padding: '2px 6px',
                    backgroundColor: 'rgba(13,13,15,0.8)',
                    letterSpacing: '1px'
                  }}>
                    {item.stat}
                  </div>
                </div>

                {/* Title label bottom */}
                <div style={{ padding: '12px 16px', borderTop: `1px solid ${item.accentColor}33` }}>
                  <div style={{ fontSize: '8px', color: item.accentColor, fontFamily: 'var(--font-body)', fontWeight: 'bold', letterSpacing: '2px' }}>
                    {item.category}
                  </div>
                  <h3 className="bebas" style={{ fontSize: '16px', margin: '2px 0 0 0', color: 'var(--white)' }}>
                    {item.title}
                  </h3>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(13, 13, 15, 0.92)',
              backdropFilter: 'blur(8px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.88, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 24 }}
              transition={{ type: 'spring', damping: 24, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
              className="manga-panel"
              style={{
                width: '100%',
                maxWidth: '660px',
                border: `3px solid ${selectedItem.accentColor}`,
                backgroundColor: 'var(--ink)',
                overflow: 'hidden',
                padding: 0
              }}
            >
              {/* Accent top bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  height: '3px',
                  background: `linear-gradient(90deg, ${selectedItem.accentColor}, transparent)`,
                  transformOrigin: 'left'
                }}
              />

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px 0' }}>
                <div>
                  <span className="bangers" style={{ fontSize: '10px', color: selectedItem.accentColor, letterSpacing: '2px' }}>
                    {selectedItem.category} // EXHIBIT
                  </span>
                  <h3 className="bebas" style={{ fontSize: '26px', margin: '4px 0 0 0' }}>
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  className="bangers cursor-target"
                  onClick={() => setSelectedItem(null)}
                  style={{
                    backgroundColor: 'var(--red)',
                    color: 'var(--white)',
                    border: '2px solid var(--black)',
                    padding: '2px 10px',
                    fontSize: '12px'
                  }}
                >
                  ✕ CLOSE
                </button>
              </div>

              {/* SVG preview */}
              <div style={{ width: '100%', height: '280px', backgroundColor: '#0d0d0f', margin: '16px 0', display: 'flex', alignItems: 'stretch' }}>
                <GalleryPreviewSVG item={selectedItem} isHovered={true} />
              </div>

              {/* Description + tags */}
              <div style={{ padding: '0 24px 24px' }}>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', lineHeight: '1.7', marginBottom: '16px' }}>
                  {selectedItem.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedItem.tags.map(t => (
                    <span key={t} style={{
                      fontSize: '9px',
                      color: selectedItem.accentColor,
                      border: `1px solid ${selectedItem.accentColor}`,
                      padding: '3px 10px',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '1px'
                    }}>{t}</span>
                  ))}
                  <span style={{
                    fontSize: '9px',
                    color: 'var(--gold)',
                    border: '1px solid var(--gold)',
                    padding: '3px 10px',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '1px'
                  }}>{selectedItem.stat}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          .gallery-card {
            transition: border-color 0.12s var(--ease-sharp), box-shadow 0.12s var(--ease-sharp) !important;
          }
          @media (max-width: 768px) {
            .gallery-section-container {
              padding: 40px 20px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
