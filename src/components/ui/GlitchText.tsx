import React, { useEffect, useRef, useState, type ElementType } from 'react';

const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#@$%&';

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  interval?: number;
  duration?: number;
  as?: ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  style = {},
  interval = 3000,
  duration = 400,
  as: Tag = 'span'
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const [glitchOffsets, setGlitchOffsets] = useState({ cx: 0, cy: 0, rx: 0, ry: 0, cclip: '0% 0 0% 0', rclip: '0% 0 0% 0' });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startGlitch = () => {
    setIsGlitching(true);
    let count = 0;
    const maxFrames = Math.floor(duration / 40);

    frameRef.current = setInterval(() => {
      count++;
      const progress = count / maxFrames;

      setDisplayText(
        text.split('').map((char, idx) => {
          if (char === ' ') return ' ';
          if (idx < Math.floor(progress * text.length)) return char;
          return Math.random() < 0.3
            ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            : char;
        }).join('')
      );

      setGlitchOffsets({
        cx: (Math.random() - 0.5) * 4,
        cy: (Math.random() - 0.5) * 2,
        rx: (Math.random() - 0.5) * 6,
        ry: (Math.random() - 0.5) * 2,
        cclip: `inset(${Math.random() * 40}% 0 ${Math.random() * 40}% 0)`,
        rclip: `inset(${Math.random() * 60}% 0 ${Math.random() * 20}% 0)`
      });

      if (count >= maxFrames) {
        clearInterval(frameRef.current!);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 40);
  };

  useEffect(() => {
    const schedule = () => {
      timerRef.current = setTimeout(() => {
        startGlitch();
        schedule();
      }, interval + Math.random() * 1000);
    };

    timerRef.current = setTimeout(() => {
      startGlitch();
      schedule();
    }, interval * 0.5 + Math.random() * 500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [text, interval, duration]);

  return (
    <Tag
      className={className}
      style={{ ...style, position: 'relative', display: 'inline-block' }}
      data-text={text}
    >
      {displayText}
      {isGlitching && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            color: 'var(--cyan)',
            clipPath: glitchOffsets.cclip,
            transform: `translate(${glitchOffsets.cx}px, ${glitchOffsets.cy}px)`,
            pointerEvents: 'none', opacity: 0.6, mixBlendMode: 'screen',
          }}
        >
          {displayText}
        </span>
      )}
      {isGlitching && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            color: 'var(--red)',
            clipPath: glitchOffsets.rclip,
            transform: `translate(${glitchOffsets.rx}px, ${glitchOffsets.ry}px)`,
            pointerEvents: 'none', opacity: 0.5, mixBlendMode: 'screen',
          }}
        >
          {displayText}
        </span>
      )}
    </Tag>
  );
};

export default GlitchText;
