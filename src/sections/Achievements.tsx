import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlitchText from '../components/ui/GlitchText';
import TiltCard from '../components/ui/TiltCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'CERTIFICATION' | 'AWARD' | 'MILESTONE' | 'SKILL_UNLOCK';
  tier: 'LEGENDARY' | 'EPIC' | 'RARE' | 'COMMON';
  icon: string;
  unlocked: boolean;
  date: string;
  xp: number;
  color: string;
}

const achievementsData: Achievement[] = [
  {
    id: 'ach-001',
    title: '1ST PRIZE — SRPS RESEARCH',
    description: 'SRPS Research Paper Competition 2025: MPVE framework boosts OCR from 68%→91%. AI + CV for medical intelligence at Ashoka Education Foundation.',
    category: 'AWARD',
    tier: 'LEGENDARY',
    icon: '🥇',
    unlocked: true,
    date: '2025',
    xp: 5000,
    color: 'var(--gold)'
  },
  {
    id: 'ach-002',
    title: 'IEJSE INTERNATIONAL PUBLICATION',
    description: 'Published in IEJSE Vol. 8 No. 9 (Sep 2025): OR + ML hybrid model for hospital ICU allocation, patient flow & cost-efficiency. 1st Prize at conference.',
    category: 'AWARD',
    tier: 'LEGENDARY',
    icon: '📄',
    unlocked: true,
    date: 'Sep 2025',
    xp: 4800,
    color: 'var(--purple)'
  },
  {
    id: 'ach-003',
    title: 'ISRO ANTARIKSH HACKATHON',
    description: 'MOSDAC LLM assistant with spatio-temporal knowledge graph, GNN multi-hop reasoning & Knowledge Graph of Thoughts (KG-oT) for persistent context.',
    category: 'MILESTONE',
    tier: 'EPIC',
    icon: '🚀',
    unlocked: true,
    date: '2025',
    xp: 4000,
    color: 'var(--cyan)'
  },
  {
    id: 'ach-004',
    title: 'GHRHACK 2.0 — 30 HRS',
    description: 'Built AI-powered prescription handwriting recognition with multilingual audio support and confidence scoring in a 30-hour sprint.',
    category: 'AWARD',
    tier: 'EPIC',
    icon: '⚡',
    unlocked: true,
    date: '2026',
    xp: 3800,
    color: 'var(--gold)'
  },
  {
    id: 'ach-005',
    title: 'SUNHACKS UX AWARD',
    description: 'Built StudyGenie AI study assistant with roadmaps, quizzes, and mindmaps in 36 hours at Sandip University. Earned recognition for innovation & usability.',
    category: 'AWARD',
    tier: 'EPIC',
    icon: '🏆',
    unlocked: true,
    date: '2025',
    xp: 3800,
    color: 'var(--green)'
  },
  {
    id: 'ach-006',
    title: 'AVISHKAR 2025 — SPPU ZONAL',
    description: 'Represented Ashoka Center for Business & Computer Studies at Savitribai Phule Pune University zonal research festival.',
    category: 'AWARD',
    tier: 'RARE',
    icon: '🔴',
    unlocked: true,
    date: '2025',
    xp: 3200,
    color: 'var(--red)'
  },
  {
    id: 'ach-007',
    title: 'GEN AI EXCHANGE — GOOGLE CLOUD',
    description: 'Explored responsible AI development in production-level cloud environment at the Google Cloud Gen AI Exchange Hackathon (2025).',
    category: 'MILESTONE',
    tier: 'RARE',
    icon: '🔵',
    unlocked: true,
    date: '2025',
    xp: 2500,
    color: 'var(--cyan)'
  },
  {
    id: 'ach-008',
    title: 'RESEARCH CELL APPRECIATION',
    description: 'ACBCS formal appreciation letter for coordinating Avishkar orientation, SRPS, Start-Up Talk Series, and IPR sessions (Mar 2026).',
    category: 'MILESTONE',
    tier: 'RARE',
    icon: '📋',
    unlocked: true,
    date: 'Mar 2026',
    xp: 2200,
    color: 'var(--gold)'
  },
  {
    id: 'ach-009',
    title: 'GOOGLE STUDENT AMBASSADOR',
    description: 'Appointed as Google Student Ambassador (Apr 2026 – Present): representing engineering students and hosting GDG community events across India.',
    category: 'MILESTONE',
    tier: 'EPIC',
    icon: '🌐',
    unlocked: true,
    date: 'Apr 2026',
    xp: 3500,
    color: 'var(--cyan)'
  },
  {
    id: 'ach-010',
    title: '??? HIDDEN BOSS ???',
    description: 'This achievement has not been unlocked yet. Keep pushing boundaries...',
    category: 'MILESTONE',
    tier: 'LEGENDARY',
    icon: '🔒',
    unlocked: false,
    date: '—',
    xp: 9999,
    color: 'var(--gray)'
  }
];

const tierGradient: Record<string, string> = {
  LEGENDARY: 'linear-gradient(135deg, #FFD60A 0%, #FF7C40 100%)',
  EPIC: 'linear-gradient(135deg, #00C9E0 0%, #BF8FFF 100%)',
  RARE: 'linear-gradient(135deg, #BF8FFF 0%, #3DFFA0 100%)',
  COMMON: 'linear-gradient(135deg, #888890 0%, #555 100%)'
};

const tierLabel: Record<string, string> = {
  LEGENDARY: '★★★★★',
  EPIC: '★★★★',
  RARE: '★★★',
  COMMON: '★★'
};

const Achievements: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
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
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      className="achievements-section-container"
    >
      <div className="manga-watermark" style={{ top: '15%', left: '5%', opacity: 0.02, fontSize: '10vw' }}>
        TROPHIES
      </div>

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <GlitchText
          as="h2"
          text="[ FEATS OF STRENGTH ]"
          className="bebas"
          style={{ fontSize: '48px', color: 'var(--white)', margin: 0, display: 'block' }}
          interval={5500}
          duration={450}
        />
        <p style={{ color: 'var(--gray)', fontSize: '12px', marginBottom: '20px' }}>
          CHAPTER ACHIEVEMENTS // 5+ HACKATHONS · 2 RESEARCH PRIZES · 1 INTL PUBLICATION
        </p>

        {/* XP Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '6px',
              fontSize: '9px',
              fontFamily: 'var(--font-body)',
              color: 'var(--gray)'
            }}>
              <span>TOTAL XP ACCUMULATED</span>
              <span style={{ color: 'var(--gold)' }}>
                <AnimatedCounter target={totalXP} duration={1500} /> XP
              </span>
            </div>
            <div style={{
              height: '6px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderRadius: '0',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '88%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                style={{
                  height: '100%',
                  background: tierGradient.LEGENDARY
                }}
              />
            </div>
          </div>

          <div style={{
            padding: '6px 14px',
            border: '1px solid rgba(255,214,10,0.3)',
            backgroundColor: 'rgba(255,214,10,0.05)',
            fontSize: '10px',
            fontFamily: 'var(--font-body)',
            color: 'var(--gold)',
            letterSpacing: '1px'
          }}>
            {unlockedCount}/{totalCount} UNLOCKED
          </div>
        </div>
      </div>

      {/* Achievement Grid */}
      <div className="achievements-grid">
        {achievementsData.map((ach, idx) => {
          const isHovered = hoveredId === ach.id;
          const isLocked = !ach.unlocked;

          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredId(ach.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => !isLocked && setSelectedId(ach.id)}
            >
              <TiltCard
                className="cursor-target ach-panel-card"
                maxTilt={5}
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  border: `2px solid ${isHovered && !isLocked ? ach.color : 'rgba(255,255,255,0.08)'}`,
                  backgroundColor: isLocked ? '#0c0c0e' : 'var(--ink)',
                  opacity: isLocked ? 0.5 : 1,
                  filter: isLocked ? 'grayscale(1)' : 'none',
                  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                  boxShadow: isHovered && !isLocked ? `-3px 3px 0px ${ach.color}` : 'none',
                  position: 'relative',
                  display: 'block'
                }}
              >
                {/* Tier gradient top strip */}
                <div
                  style={{
                    height: '3px',
                    background: isLocked ? 'var(--gray)' : tierGradient[ach.tier],
                    width: '100%'
                  }}
                />

                <div style={{ padding: '20px' }}>
                  {/* Icon + Title Row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    {/* Achievement Icon */}
                    <motion.div
                      animate={{
                        scale: isHovered && !isLocked ? [1, 1.15, 1] : 1,
                        rotate: isHovered && !isLocked ? [0, -8, 8, 0] : 0
                      }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        border: `2px solid ${isLocked ? 'var(--gray)' : ach.color}`,
                        backgroundColor: `rgba(255,255,255,0.02)`,
                        flexShrink: 0,
                        position: 'relative'
                      }}
                    >
                      {ach.icon}
                      {/* Expanding ring on hover */}
                      {isHovered && !isLocked && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0.6 }}
                          animate={{ scale: 1.8, opacity: 0 }}
                          transition={{ duration: 0.7, repeat: Infinity }}
                          style={{
                            position: 'absolute',
                            inset: '-4px',
                            border: `2px solid ${ach.color}`,
                            borderRadius: '2px',
                            pointerEvents: 'none'
                          }}
                        />
                      )}
                    </motion.div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                        <span style={{
                          fontSize: '8px',
                          fontFamily: 'var(--font-body)',
                          color: isLocked ? 'var(--gray)' : ach.color,
                          letterSpacing: '1px'
                        }}>
                          {ach.tier} • {ach.category.replace('_', ' ')}
                        </span>
                      </div>
                      <h3 className="bebas" style={{
                        fontSize: '16px',
                        margin: 0,
                        color: isLocked ? 'var(--gray)' : 'var(--white)',
                        lineHeight: 1.2
                      }}>
                        {ach.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '10px',
                    color: isLocked ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.6)',
                    lineHeight: '1.5',
                    marginTop: '12px',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {ach.description}
                  </p>

                  {/* Footer: XP + Date + Stars */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '14px',
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(255,255,255,0.06)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontSize: '10px',
                        fontFamily: 'var(--font-body)',
                        color: isLocked ? 'var(--gray)' : 'var(--gold)',
                        fontWeight: 'bold'
                      }}>
                        +{ach.xp.toLocaleString()} XP
                      </span>
                      <span style={{ fontSize: '8px', color: 'var(--gray)', fontFamily: 'var(--font-body)' }}>
                        {ach.date}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '10px',
                      letterSpacing: '2px',
                      color: isLocked ? 'var(--gray)' : ach.color,
                      filter: isLocked ? 'none' : `drop-shadow(0 0 4px ${ach.color})`
                    }}>
                      {tierLabel[ach.tier]}
                    </span>
                  </div>
                </div>

                {/* Locked overlay */}
                {isLocked && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      pointerEvents: 'none'
                    }}
                  >
                    <span className="bangers" style={{ fontSize: '14px', color: 'var(--gray)', letterSpacing: '3px' }}>
                      🔒 LOCKED
                    </span>
                  </div>
                )}
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {/* Achievement Detail Modal */}
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
              backgroundColor: 'rgba(13, 13, 15, 0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
              className="manga-panel"
              style={{
                width: '100%',
                maxWidth: '480px',
                backgroundColor: 'var(--ink)',
                border: `3px solid ${selectedAch.color}`,
                overflow: 'hidden',
                padding: 0
              }}
            >
              {/* Animated top bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  height: '4px',
                  background: tierGradient[selectedAch.tier],
                  transformOrigin: 'left'
                }}
              />

              <div style={{ padding: '32px' }}>
                {/* Close */}
                <button
                  className="bangers cursor-target"
                  onClick={() => setSelectedId(null)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--red)',
                    color: 'var(--white)',
                    border: '2px solid var(--black)',
                    padding: '2px 10px',
                    fontSize: '12px'
                  }}
                >
                  ✕
                </button>

                {/* Icon large display */}
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
                    style={{ fontSize: '56px', lineHeight: 1 }}
                  >
                    {selectedAch.icon}
                  </motion.div>
                  <div style={{ marginTop: '8px', fontSize: '12px', color: selectedAch.color, letterSpacing: '3px', fontFamily: 'var(--font-body)' }}>
                    {selectedAch.tier}
                  </div>
                  <div style={{ fontSize: '12px', color: selectedAch.color, letterSpacing: '3px' }}>
                    {tierLabel[selectedAch.tier]}
                  </div>
                </div>

                <h3 className="bebas" style={{ fontSize: '28px', color: 'var(--white)', textAlign: 'center', margin: '0 0 16px 0' }}>
                  {selectedAch.title}
                </h3>

                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', textAlign: 'center', fontFamily: 'var(--font-body)', marginBottom: '24px' }}>
                  {selectedAch.description}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                    +{selectedAch.xp.toLocaleString()} XP
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--gray)', fontFamily: 'var(--font-body)' }}>
                    {selectedAch.date}
                  </span>
                  <span style={{ fontSize: '11px', color: selectedAch.color, fontFamily: 'var(--font-body)' }}>
                    {selectedAch.category}
                  </span>
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
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 16px;
          }

          .ach-panel-card {
            transition: transform 0.12s var(--ease-enter), border-color 0.12s var(--ease-enter), box-shadow 0.12s var(--ease-enter) !important;
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
