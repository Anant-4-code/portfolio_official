import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedCounter from '../components/ui/AnimatedCounter';

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'RESEARCH' | 'PUBLICATION' | 'HACKATHON' | 'MILESTONE';
  rank: 'S-RANK' | 'A-RANK' | 'B-RANK';
  iconTag: string;
  unlocked: boolean;
  date: string;
  xp: number;
}

const achievementsData: Achievement[] = [
  {
    id: 'ach-001',
    title: '1ST PRIZE — SRPS RESEARCH',
    description: 'SRPS Research Paper Competition 2025: MPVE framework boosts OCR from 68%→91%. AI + CV for medical intelligence at Ashoka Education Foundation.',
    category: 'RESEARCH',
    rank: 'S-RANK',
    iconTag: '[ AI/CV ]',
    unlocked: true,
    date: '2025',
    xp: 5000
  },
  {
    id: 'ach-002',
    title: 'IEJSE PUBLICATION',
    description: 'Co-authored research on operations research and healthcare efficiency accepted for publication.',
    category: 'PUBLICATION',
    rank: 'S-RANK',
    iconTag: '[ PAPER ]',
    unlocked: true,
    date: 'Sep 2025',
    xp: 4800
  },
  {
    id: 'ach-003',
    title: 'ISRO ANTARIKSH HACKATHON',
    description: 'Developed RAG models for space tech applications (Sep 2025).',
    category: 'HACKATHON',
    rank: 'S-RANK',
    iconTag: '[ ISRO ]',
    unlocked: true,
    date: 'Sep 2025',
    xp: 4000
  },
  {
    id: 'ach-004',
    title: 'GHRHACK 2.0 — 30 HRS',
    description: 'Built AI-powered prescription handwriting recognition with multilingual audio support and confidence scoring in a 30-hour sprint.',
    category: 'HACKATHON',
    rank: 'A-RANK',
    iconTag: '[ 30HRS ]',
    unlocked: true,
    date: '2026',
    xp: 3800
  },
  {
    id: 'ach-005',
    title: 'SUNHACKS 2025',
    description: 'Generative AI hackathon at Sandip University. (Team: MythByte).',
    category: 'HACKATHON',
    rank: 'A-RANK',
    iconTag: '[ GENAI ]',
    unlocked: true,
    date: '2025',
    xp: 3800
  },
  {
    id: 'ach-006',
    title: 'AVISHKAR 2025 — SPPU ZONAL',
    description: 'Represented Ashoka Center for Business & Computer Studies at Savitribai Phule Pune University zonal research festival.',
    category: 'RESEARCH',
    rank: 'A-RANK',
    iconTag: '[ ZONAL ]',
    unlocked: true,
    date: '2025',
    xp: 3200
  },
  {
    id: 'ach-007',
    title: 'GEN AI EXCHANGE — GOOGLE CLOUD',
    description: 'Explored responsible AI development in production-level cloud environment at Google Cloud Gen AI Exchange (2025).',
    category: 'HACKATHON',
    rank: 'B-RANK',
    iconTag: '[ GCLOUD ]',
    unlocked: true,
    date: '2025',
    xp: 2500
  },
  {
    id: 'ach-008',
    title: 'RESEARCH CELL APPRECIATION',
    description: 'ACBCS formal appreciation letter for coordinating Avishkar orientation, SRPS, Start-Up Talk Series, and IPR sessions.',
    category: 'MILESTONE',
    rank: 'B-RANK',
    iconTag: '[ RECOG ]',
    unlocked: true,
    date: 'Mar 2026',
    xp: 2200
  },
  {
    id: 'ach-009',
    title: 'GOOGLE STUDENT AMBASSADOR',
    description: 'Appointed as Google Student Ambassador (Apr 2026 – Present): representing engineering students and hosting GDG events.',
    category: 'MILESTONE',
    rank: 'A-RANK',
    iconTag: '[ AMBASS ]',
    unlocked: true,
    date: 'Apr 2026',
    xp: 3500
  },
  {
    id: 'ach-010',
    title: '??? CLASSIFIED OBJECTIVE ???',
    description: 'This achievement target has not been unlocked yet. Keep pushing system boundaries...',
    category: 'MILESTONE',
    rank: 'S-RANK',
    iconTag: '[ LOCKED ]',
    unlocked: false,
    date: '—',
    xp: 9999
  }
];

// ════════ CUSTOM CIPHER DECODE HOOK ════════
function useCipherDecode(targetText: string, isHovered: boolean, durationMs = 300) {
  const [displayText, setDisplayText] = useState(targetText);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(targetText);
      return;
    }

    const chars = '!@#$%^&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}/\\|X';
    const startTime = performance.now();
    let animId: number;

    const update = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / durationMs);

      const resolvedLength = Math.floor(progress * targetText.length);

      let result = '';
      for (let i = 0; i < targetText.length; i++) {
        if (targetText[i] === ' ' || targetText[i] === '\n') {
          result += targetText[i];
        } else if (i < resolvedLength) {
          result += targetText[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        animId = requestAnimationFrame(update);
      } else {
        setDisplayText(targetText);
      }
    };

    animId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animId);
  }, [targetText, isHovered, durationMs]);

  return displayText;
}

// ════════ TARGET RETICLE & ABSOLUTE LAYERED CARD ════════
const AchievementRevealCard: React.FC<{
  ach: Achievement;
  onSelect: (id: string) => void;
}> = ({ ach, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLocked = !ach.unlocked;

  const decodedTitle = useCipherDecode(ach.title, isHovered, 300);
  const decodedDesc = useCipherDecode(ach.description, isHovered, 350);

  return (
    <div
      style={{ position: 'relative', height: '220px', width: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="achievement-card cursor-target"
        onClick={() => !isLocked && onSelect(ach.id)}
        style={{
          position: 'relative',
          height: '100%',
          minHeight: '220px',
          padding: 0,
          overflow: 'hidden',
          backgroundColor: '#0A0A0A',
          border: `1px solid ${isHovered && !isLocked ? '#FFFFFF' : '#1A1A1A'}`,
          borderRadius: '0px',
          opacity: isLocked ? 0.35 : 1,
          filter: isLocked ? 'grayscale(1)' : 'none',
          transition: 'all 0.15s ease',
          boxShadow: isHovered && !isLocked ? '0 10px 30px rgba(0, 0, 0, 0.95), 0 0 15px rgba(255, 255, 255, 0.08)' : 'none',
          cursor: isLocked ? 'not-allowed' : 'pointer'
        }}
      >
        {/* Top Accent Glow Bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '2px',
            backgroundColor: isHovered && !isLocked ? '#FFFFFF' : '#1A1A1A',
            width: '100%',
            zIndex: 10,
            transition: 'background-color 0.15s ease'
          }}
        />

        {/* ════ TARGET LOCK CORNER BRACKETS ════ */}
        {isHovered && !isLocked && (
          <>
            <div
              style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                width: '10px',
                height: '10px',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                zIndex: 15,
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '10px',
                height: '10px',
                borderTop: '2px solid #FFFFFF',
                borderRight: '2px solid #FFFFFF',
                zIndex: 15,
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '4px',
                left: '4px',
                width: '10px',
                height: '10px',
                borderBottom: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                zIndex: 15,
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '4px',
                right: '4px',
                width: '10px',
                height: '10px',
                borderBottom: '2px solid #FFFFFF',
                borderRight: '2px solid #FFFFFF',
                zIndex: 15,
                pointerEvents: 'none'
              }}
            />

            {/* Target Crosshairs Radar Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                opacity: 0.08,
                zIndex: 2
              }}
            >
              <svg width="180" height="180" viewBox="0 0 100 100" style={{ animation: 'spin 12s linear infinite' }}>
                <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="28" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#FFFFFF" strokeWidth="1" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>
          </>
        )}

        {/* ════ ABSOLUTE LAYER 1: SCRAMBLED MATRIX PREVIEW ════ */}
        {!isLocked && (
          <div
            className="scrambled-layer absolute inset-0 p-6 flex flex-col justify-between"
            style={{
              position: 'absolute',
              inset: 0,
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: isHovered ? 0 : 0.85,
              transition: 'opacity 0.2s ease',
              pointerEvents: 'none',
              overflow: 'hidden',
              fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
              fontSize: '11px',
              color: '#888888',
              lineHeight: '1.4'
            }}
          >
            <div>
              <div style={{ fontSize: '9px', letterSpacing: '1px', color: '#888888', marginBottom: '8px' }}>
                // TARGET_ACQUIRING :: {ach.rank}
              </div>
              <div style={{ wordBreak: 'break-all', color: '#666666' }}>
                {`[#0X99] !@#$%^&* 010101 <>[]{}/\\|X ${ach.id.toUpperCase()}`}
              </div>
              <div style={{ marginTop: '14px', color: '#888888', fontSize: '10px' }}>
                &gt; HOVER TO LOCK TARGET RETICLE...
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #1A1A1A', paddingTop: '8px', color: '#888888' }}>
              <span>[ +{ach.xp.toLocaleString()} XP ]</span>
              <span>{ach.date}</span>
            </div>
          </div>
        )}

        {/* ════ ABSOLUTE LAYER 2: DECODED REAL CONTENT ════ */}
        <div
          className="decoded-layer absolute inset-0 p-6 flex flex-col justify-between"
          style={{
            position: 'absolute',
            inset: 0,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            opacity: isHovered || isLocked ? 1 : 0.1,
            transition: 'opacity 0.2s ease',
            overflow: 'hidden',
            zIndex: 6
          }}
        >
          {/* Header & Title */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span
                style={{
                  fontSize: '9px',
                  fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                  color: '#888888',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}
              >
                {ach.rank} • {ach.category}
              </span>
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                  color: isHovered ? '#FFFFFF' : '#888888',
                  border: isHovered ? '1px solid #FFFFFF' : '1px solid #333333',
                  padding: '2px 6px',
                  borderRadius: '0px',
                  backgroundColor: '#0A0A0A',
                  transition: 'all 0.15s ease'
                }}
              >
                {isHovered ? '[ 🎯 TARGET LOCKED ]' : ach.iconTag}
              </span>
            </div>

            <h3
              style={{
                fontSize: '14px',
                margin: 0,
                fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.3,
                letterSpacing: '0.3px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {decodedTitle}
            </h3>

            <p
              style={{
                fontSize: '11px',
                color: '#888888',
                lineHeight: '1.5',
                marginTop: '8px',
                fontFamily: 'var(--font-body, "JetBrains Mono", monospace)'
              }}
            >
              {decodedDesc}
            </p>
          </div>

          {/* Footer Stats */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #1A1A1A',
              paddingTop: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                +{ach.xp.toLocaleString()} XP
              </span>
              <span style={{ fontSize: '9px', color: '#888888', fontFamily: 'var(--font-body, "JetBrains Mono", monospace)' }}>
                {ach.date}
              </span>
            </div>
            <span
              style={{
                fontSize: '9.5px',
                fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                color: isHovered ? '#FFFFFF' : '#888888',
                letterSpacing: '1px'
              }}
            >
              {isHovered ? '[ LOCK_ENGAGED ]' : '[ SYSTEM_VERIFIED ]'}
            </span>
          </div>
        </div>

        {/* Locked Padlock Overlay */}
        {isLocked && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.8)',
              pointerEvents: 'none',
              zIndex: 20
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                color: '#888888',
                letterSpacing: '2px',
                border: '1px solid #333333',
                padding: '4px 12px',
                borderRadius: '0px',
                backgroundColor: '#0A0A0A'
              }}
            >
              [ CLASSIFIED_LOCKED ]
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// ════════ MAIN ACHIEVEMENTS COMPONENT ════════
const Achievements: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const totalXP = achievementsData.filter(a => a.unlocked).reduce((sum, a) => sum + a.xp, 0);
  const unlockedCount = achievementsData.filter(a => a.unlocked).length;
  const totalCount = achievementsData.length;
  const selectedAch = achievementsData.find(a => a.id === selectedId) || null;

  return (
    <section
      id="achievements"
      style={{
        minHeight: '100vh',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 5,
        maxWidth: '1080px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#000000'
      }}
      className="achievements-section-container"
    >
      {/* Header */}
      <div style={{ marginBottom: '36px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            fontWeight: 800,
            color: '#FFFFFF',
            margin: '0 0 6px 0',
            letterSpacing: '0.5px'
          }}
        >
          // FEATS & ACHIEVEMENTS
        </h2>
        <p style={{ color: '#888888', fontSize: '11px', fontFamily: 'var(--font-body, "JetBrains Mono", monospace)', marginBottom: '20px' }}>
          SYSTEM LOG // RESEARCH PAPERS · HACKATHON TROPHIES · INTERNATIONAL PUBLICATIONS
        </p>

        {/* Neural Monolith XP Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '6px',
                fontSize: '9.5px',
                fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                color: '#888888'
              }}
            >
              <span>ACCUMULATED SYSTEM XP</span>
              <span style={{ color: '#FFFFFF', fontWeight: 700 }}>
                <AnimatedCounter target={totalXP} duration={1500} /> XP
              </span>
            </div>
            <div
              style={{
                height: '4px',
                backgroundColor: '#1A1A1A',
                borderRadius: '0px',
                overflow: 'hidden'
              }}
            >
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '88%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                style={{
                  height: '100%',
                  backgroundColor: '#FFFFFF'
                }}
              />
            </div>
          </div>

          <div
            style={{
              padding: '5px 12px',
              border: '1px solid #1A1A1A',
              backgroundColor: '#0A0A0A',
              fontSize: '10px',
              fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
              color: '#FFFFFF',
              letterSpacing: '0.5px'
            }}
          >
            [ {unlockedCount} / {totalCount} UNLOCKED ]
          </div>
        </div>
      </div>

      {/* Grid Container */}
      <div className="achievements-grid">
        {achievementsData.map((ach, idx) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
          >
            <AchievementRevealCard ach={ach} onSelect={setSelectedId} />
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedAch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(8px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '480px',
                backgroundColor: '#0A0A0A',
                border: '1px solid #FFFFFF',
                borderRadius: '0px',
                overflow: 'hidden',
                padding: 0,
                position: 'relative'
              }}
            >
              <div style={{ padding: '28px' }}>
                <button
                  onClick={() => setSelectedId(null)}
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    backgroundColor: '#0A0A0A',
                    color: '#FFFFFF',
                    border: '1px solid #333333',
                    padding: '3px 8px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                    cursor: 'pointer'
                  }}
                >
                  [ X ]
                </button>

                <div style={{ marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                      color: '#888888',
                      letterSpacing: '1px'
                    }}
                  >
                    {selectedAch.rank} • {selectedAch.category}
                  </span>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      margin: '6px 0 0 0'
                    }}
                  >
                    {selectedAch.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '12px',
                    color: '#888888',
                    lineHeight: '1.6',
                    fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                    marginBottom: '24px'
                  }}
                >
                  {selectedAch.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderTop: '1px solid #1A1A1A',
                    paddingTop: '14px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-body, "JetBrains Mono", monospace)'
                  }}
                >
                  <span style={{ color: '#FFFFFF', fontWeight: 700 }}>
                    +{selectedAch.xp.toLocaleString()} XP
                  </span>
                  <span style={{ color: '#888888' }}>{selectedAch.date}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 16px;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @media (max-width: 768px) {
            .achievements-section-container {
              padding: 40px 20px;
            }
            .achievements-grid {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Achievements;
