import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  className?: string;
  style?: React.CSSProperties;
  decimals?: number;
}

/**
 * Counts up to `target` once it enters the viewport.
 * Uses requestAnimationFrame for a buttery smooth animation.
 */
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 1200,
  className = '',
  style = {},
  decimals = 0,
}) => {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const startVal = 0;

    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const value = startVal + (target - startVal) * eased;

      setCurrent(parseFloat(value.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(update);
      } else {
        setCurrent(target);
      }
    };

    rafRef.current = requestAnimationFrame(update);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, target, duration, decimals]);

  const displayValue = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();

  return (
    <span ref={containerRef} className={className} style={style}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
