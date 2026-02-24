"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speedMs?: number;
}

export function TypingText({ text, speedMs = 30 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index < text.length) {
        window.setTimeout(tick, speedMs);
      }
    };

    tick();

    return () => {
      cancelled = true;
    };
  }, [text, speedMs]);

  return (
    <span className="inline-flex items-center">
      <span>{displayed}</span>
      <span className="typing-caret h-4" />
    </span>
  );
}

