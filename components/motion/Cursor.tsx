"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "link" | "button" | "card";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [isMoving, setIsMoving] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rafId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setIsMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = window.setTimeout(() => setIsMoving(false), 150);

      const target = event.target as HTMLElement | null;
      if (!target) return;
      const cursorAttr = target.closest<HTMLElement>("[data-cursor]")?.dataset
        .cursor as CursorMode | undefined;

      if (cursorAttr === "link") setMode("link");
      else if (cursorAttr === "button") setMode("button");
      else if (cursorAttr === "card") setMode("card");
      else setMode("default");
    };

    let moveTimeout: number;

    const render = () => {
      // Slight trailing for ring
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      rafId = window.requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove);
    rafId = window.requestAnimationFrame(render);

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => setIsScrolling(false), 200);
    };
    let scrollTimeout: number;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(rafId);
      clearTimeout(moveTimeout);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const ringModeClass =
    mode === "link"
      ? "cursor-ring--link"
      : mode === "button"
      ? "cursor-ring--button"
      : mode === "card"
      ? "cursor-ring--card"
      : "";

  const glowClass = (isMoving || isScrolling) ? "cursor-glow" : "";

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${ringModeClass} ${glowClass}`} />
    </>
  );
}

