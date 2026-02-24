"use client";

import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
}

export function MagneticButton({ children }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = ref.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);

    const strength = 0.09;
    const maxOffset = 5;

    const offsetX = Math.max(
      -maxOffset,
      Math.min(maxOffset, relX * strength)
    );
    const offsetY = Math.max(
      -maxOffset,
      Math.min(maxOffset, relY * strength)
    );

    target.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  };

  const handleMouseLeave = () => {
    const target = ref.current;
    if (!target) return;
    target.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-250 ease-lab-ease"
      data-cursor="button"
    >
      {children}
    </div>
  );
}

