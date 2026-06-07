import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // stagger delay in ms
  duration?: number; // letter transition duration in seconds
  ease?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties['textAlign'];
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 30, // 30ms stagger
  duration = 0.5,
  ease = 'easeOut',
  threshold = 0.15,
  rootMargin = '0px',
  textAlign = 'center'
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          controls.start('visible');
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, threshold, rootMargin]);

  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000
      }
    }
  };

  const childVariants = {
    hidden: () => ({
      opacity: 0,
      y: Math.random() * 60 - 30 // random between -30px and 30px
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: ease as unknown as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
        textAlign: textAlign
      }}
      className={`split-text-container ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={childVariants}
              style={{ display: 'inline-block', willChange: 'transform, opacity' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default SplitText;
