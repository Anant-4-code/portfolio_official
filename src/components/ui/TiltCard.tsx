import React, { useRef, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  spotlightColor?: string;
  onClick?: () => void;
}

/**
 * Wraps children in a 3D tilt card with a dynamic spotlight effect.
 * Tilt responds to mouse position within the element.
 */
const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  style = {},
  maxTilt = 8,
  spotlightColor = 'rgba(255, 214, 10, 0.06)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);
  const currentRotX = useRef(0);
  const currentRotY = useRef(0);
  const isHovered = useRef(false);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    if (!cardRef.current) return;

    currentRotX.current = lerp(currentRotX.current, targetRotX.current, 0.15);
    currentRotY.current = lerp(currentRotY.current, targetRotY.current, 0.15);

    cardRef.current.style.transform = `perspective(800px) rotateX(${currentRotX.current}deg) rotateY(${currentRotY.current}deg)`;

    const stillMoving =
      Math.abs(currentRotX.current - targetRotX.current) > 0.01 ||
      Math.abs(currentRotY.current - targetRotY.current) > 0.01;

    if (isHovered.current || stillMoving) {
      animRef.current = requestAnimationFrame(animate);
    } else {
      animRef.current = null;
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      targetRotY.current = dx * maxTilt;
      targetRotX.current = -dy * maxTilt;

      if (spotRef.current) {
        const spotX = ((e.clientX - rect.left) / rect.width) * 100;
        const spotY = ((e.clientY - rect.top) / rect.height) * 100;
        spotRef.current.style.background = `radial-gradient(circle at ${spotX}% ${spotY}%, ${spotlightColor} 0%, transparent 60%)`;
        spotRef.current.style.opacity = '1';
      }

      if (!animRef.current) {
        animRef.current = requestAnimationFrame(animate);
      }
    },
    [maxTilt, spotlightColor, animate]
  );

  const handleMouseEnter = useCallback(() => {
    isHovered.current = true;
    if (!animRef.current) {
      animRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const handleMouseLeave = useCallback(() => {
    isHovered.current = false;
    targetRotX.current = 0;
    targetRotY.current = 0;
    if (spotRef.current) {
      spotRef.current.style.opacity = '0';
    }
    if (!animRef.current) {
      animRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        transition: 'box-shadow 0.15s ease, border-color 0.15s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Spotlight overlay */}
      <div
        ref={spotRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.2s ease',
          borderRadius: 'inherit',
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default TiltCard;
