import React, { useEffect, useState, useRef } from 'react';
import './AmbientKanji.css';

interface NeonSignData {
  id: string;
  word: string;
  side: 'left' | 'right';
  left?: string;
  right?: string;
  top: string;
  fontSize: string;
  letterSpacing: string;
  rotation: string;
  scale: string;
  opacityDepth: number;
}

const KANJI_WORDS = [
  '人工知能',
  '機械学習',
  '開発者',
  '研究者',
  '経験',
  'スキル',
  '電脳',
  '未来',
  '覚醒',
  '接続'
];

const COLOR_PALETTE = ['cyan', 'cyan', 'white', 'cyan', 'pink', 'amber'];

export const AmbientKanji: React.FC = () => {
  const [signs, setSigns] = useState<NeonSignData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Generate organic randomized sign placement & sizes */
    const generatedSigns: NeonSignData[] = [
      // Left margin signs — varied sizes & vertical offsets
      { id: 'l1', word: KANJI_WORDS[0], side: 'left', left: '1.2%', top: '8%', fontSize: '18px', letterSpacing: '0.45rem', rotation: '-2deg', scale: '1.1', opacityDepth: 0.95 },
      { id: 'l2', word: KANJI_WORDS[1], side: 'left', left: '4.8%', top: '38%', fontSize: '11px', letterSpacing: '0.25rem', rotation: '1.5deg', scale: '0.85', opacityDepth: 0.7 },
      { id: 'l3', word: KANJI_WORDS[2], side: 'left', left: '2.1%', top: '65%', fontSize: '14px', letterSpacing: '0.35rem', rotation: '-1deg', scale: '0.95', opacityDepth: 0.85 },
      { id: 'l4', word: KANJI_WORDS[6], side: 'left', left: '5.5%', top: '82%', fontSize: '22px', letterSpacing: '0.5rem', rotation: '3deg', scale: '1.25', opacityDepth: 1.0 },

      // Right margin signs — varied sizes & vertical offsets
      { id: 'r1', word: KANJI_WORDS[3], side: 'right', right: '1.5%', top: '12%', fontSize: '12px', letterSpacing: '0.3rem', rotation: '2.5deg', scale: '0.9', opacityDepth: 0.8 },
      { id: 'r2', word: KANJI_WORDS[4], side: 'right', right: '4.2%', top: '34%', fontSize: '20px', letterSpacing: '0.55rem', rotation: '-3deg', scale: '1.2', opacityDepth: 0.95 },
      { id: 'r3', word: KANJI_WORDS[5], side: 'right', right: '2.0%', top: '60%', fontSize: '10px', letterSpacing: '0.2rem', rotation: '1deg', scale: '0.75', opacityDepth: 0.65 },
      { id: 'r4', word: KANJI_WORDS[7], side: 'right', right: '5.0%', top: '78%', fontSize: '15px', letterSpacing: '0.4rem', rotation: '-2deg', scale: '1.0', opacityDepth: 0.9 }
    ];

    setSigns(generatedSigns);
  }, []);

  /* Randomize tube parameters once rendered */
  useEffect(() => {
    if (!containerRef.current || signs.length === 0) return;
    const chars = containerRef.current.querySelectorAll<HTMLElement>('.neon-char');

    chars.forEach((el) => {
      // Random color weighted toward cyan/white
      const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
      el.setAttribute('data-color', color);

      // Random duration between 3.8s and 7.2s
      const durationVal = 3.8 + Math.random() * 3.4;
      const duration = durationVal.toFixed(2);
      el.style.setProperty('--duration', `${duration}s`);

      // Random negative delay so each character starts mid-cycle
      const delay = -(Math.random() * durationVal).toFixed(2);
      el.style.setProperty('--delay', `${delay}s`);

      // ~60% lit ending, ~40% dim ending
      const isLit = Math.random() < 0.6;
      el.classList.add(isLit ? 'ending-lit' : 'ending-dim');
    });
  }, [signs]);

  return (
    <div ref={containerRef} className="ambient-kanji-container" aria-hidden="true">
      {signs.map((sign) => (
        <div
          key={sign.id}
          className="neon-sign"
          aria-label={sign.word}
          style={{
            left: sign.left,
            right: sign.right,
            top: sign.top,
            transform: `rotate(${sign.rotation}) scale(${sign.scale})`,
            opacity: sign.opacityDepth
          }}
        >
          {sign.word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className="neon-char"
              aria-hidden="true"
              style={{
                fontSize: sign.fontSize,
                letterSpacing: sign.letterSpacing
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AmbientKanji;
