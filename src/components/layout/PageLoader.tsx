import React, { useState, useEffect } from 'react';

// Specialized text component utilizing your portfolio typography tokens
const FuzzyText = ({ children, fontSize = "54px", fontWeight = 900, fontFamily = "Bangers", color = "#FFE500" }: { children: React.ReactNode; fontSize?: string; fontWeight?: number; fontFamily?: string; color?: string }) => {
  return (
    <span style={{ fontSize, fontWeight, fontFamily, color, textTransform: 'uppercase', letterSpacing: '2px' }}>
      {children}
    </span>
  );
};

interface PageLoaderProps {
  onComplete?: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [bootStage, setBootStage] = useState('greetings'); // 'greetings' | 'diagnostics' | 'exiting'
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState('');
  const [greetingSpark, setGreetingSpark] = useState(false);

  const greetings = ['HELLO', 'नमस्ते', 'こんにちは', 'SAT SRI AKAAL', 'HOLA', 'BONJOUR', 'SYSTEM ONLINE'];

  const diagnosticLogs = [
    { threshold: 0, text: "> INITIALIZING COGNITIVE CORE PROCESSES... [ OK ]" },
    { threshold: 30, text: "> SYNCING MISSION ARCHIVES & PROJECT BLUEPRINTS... [ 100% ]" },
    { threshold: 65, text: "> INJECTING DYNAMIC JAPANESE TEXT BACKGROUND TEXTURE... [ ACTIVE ]" },
    { threshold: 85, text: "> DEPLOYING COMPILER SIMULATORS & INTERACTIVE DATA GRID... [ READY ]" }
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  // Word Ticks & Ticks-Spark Lifecycle
  useEffect(() => {
    if (bootStage !== 'greetings') return;

    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(wordInterval);
          setBootStage('diagnostics');
          return prev;
        }
        return prev + 1;
      });
    }, 280);

    return () => clearInterval(wordInterval);
  }, [bootStage]);

  // Flash micro-spark on word change tick
  useEffect(() => {
    if (bootStage === 'greetings' && currentWordIndex > 0) {
      setGreetingSpark(true);
      const timer = setTimeout(() => setGreetingSpark(false), 200);
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, bootStage]);

  useEffect(() => {
    if (bootStage !== 'diagnostics') return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setBootStage('exiting'), 150);
          return 100;
        }
        const step = prev < 40 ? 4 : prev < 75 ? 2 : 5;
        const nextProgress = prev + step;

        const activeLog = diagnosticLogs.reduce((acc, log) => {
          if (nextProgress >= log.threshold) return log.text;
          return acc;
        }, diagnosticLogs[0].text);
        setCurrentLog(activeLog);

        return nextProgress > 100 ? 100 : nextProgress;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [bootStage]);

  useEffect(() => {
    if (bootStage === 'exiting') {
      const completionTimeout = setTimeout(() => {
        document.body.style.overflow = 'auto';
        if (onComplete) onComplete();
      }, 600); // 100ms offset for sparks completion
      return () => clearTimeout(completionTimeout);
    }
  }, [bootStage, onComplete]);

  return (
    <div className={`boot-wrapper ${bootStage === 'exiting' ? 'trigger-iris-split' : ''}`}>
      {/* Top Hatch Segment */}
      <div className="iris-panel top-panel" />

      {/* Central Core Screen */}
      <div className="loader-center-core">
        {bootStage === 'greetings' && (
          <div className="greeting-node-frame" style={{ position: 'relative' }}>
            <FuzzyText>{greetings[currentWordIndex]}</FuzzyText>
            {greetingSpark && (
              <div className="greetings-spark-container">
                <svg viewBox="0 0 100 100" className="greeting-spark-svg" fill="none">
                  <path d="M10 20 L40 40 L20 60 L90 80" stroke="#FFE500" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        )}

        {bootStage !== 'greetings' && (
          <div className="terminal-matrix-hud">
            <div className="branding-logo-initials">AR</div>
            
            {/* Structural Progression Rail */}
            <div className="progress-rail-container">
              <div 
                className="progress-fill-beam" 
                style={{ width: `${progress}%` }}
              />
              <span className="metrics-percentage-ticker">{progress}%</span>
            </div>

            {/* Micro logs outputs */}
            <div className="diagnostic-log-terminal">
              {currentLog}
            </div>
          </div>
        )}
      </div>

      {/* Exit split sparks */}
      {bootStage === 'exiting' && (
        <div className="exit-spark-wrapper">
          <svg className="exit-spark-svg" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="loader-spark-halftone" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="#FFE500" />
              </pattern>
            </defs>
            {/* Tapered needle arcs with halftone fill */}
            <path className="spark-arc spark-left" d="M500 200 L420 180 L440 210 L320 175 L350 220 L200 190 L230 225 L50 200" stroke="url(#loader-spark-halftone)" strokeWidth="9" strokeLinecap="round" />
            <path className="spark-arc spark-right" d="M500 200 L580 220 L560 190 L680 225 L650 180 L800 210 L770 175 L950 200" stroke="url(#loader-spark-halftone)" strokeWidth="9" strokeLinecap="round" />
          </svg>
          <div className="exit-sfx-text bangers">バリバリ</div>
        </div>
      )}

      {/* Bottom Hatch Segment */}
      <div className="iris-panel bottom-panel" />

      {/* Page Loader Stylesheet */}
      <style>{`
        .boot-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #0F0F0F;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .iris-panel {
          position: absolute;
          left: 0;
          width: 100%;
          height: 50%;
          background-color: #0F0F0F;
          z-index: 2;
          transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .top-panel { top: 0; transform-origin: top; }
        .bottom-panel { bottom: 0; transform-origin: bottom; }

        .trigger-iris-split .top-panel { transform: translateY(-100%); }
        .trigger-iris-split .bottom-panel { transform: translateY(100%); }
        .trigger-iris-split .loader-center-core { opacity: 0; transition: opacity 0.2s ease-out; }

        .loader-center-core {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          max-width: 600px;
          padding: 2rem;
        }

        .greeting-node-frame {
          animation: fastGlitchFlicker 0.15s steps(2) infinite alternate;
        }

        .greetings-spark-container {
          position: absolute;
          top: -20px;
          right: -40px;
          width: 44px;
          height: 44px;
          pointer-events: none;
        }

        .greeting-spark-svg {
          width: 100%;
          height: 100%;
          animation: draw-greetings-spark 0.18s steps(2) forwards;
        }

        @keyframes draw-greetings-spark {
          0% { transform: scale(0.6) rotate(0deg); opacity: 1; }
          100% { transform: scale(1.3) rotate(40deg); opacity: 0; }
        }

        /* Exit moment sparks wrapper */
        .exit-spark-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          pointer-events: none;
        }

        .exit-spark-svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        /* Frame-by-frame lightning arcs */
        .spark-arc {
          transform-origin: 500px 200px;
          animation: exit-spark-sequence 0.5s steps(4) forwards;
        }

        @keyframes exit-spark-sequence {
          0% { transform: scaleX(0.05); opacity: 1; }
          25% { transform: scaleX(0.4) scaleY(1.4); opacity: 1; }
          50% { transform: scaleX(0.7) scaleY(0.7); opacity: 0.8; stroke-dasharray: 40, 20; }
          75% { transform: scaleX(0.9) scaleY(0.4); opacity: 0.4; stroke-dasharray: 10, 40; }
          100% { transform: scaleX(1) scaleY(0); opacity: 0; }
        }

        /* SFX Text */
        .exit-sfx-text {
          font-size: 82px;
          color: #FFE500;
          text-shadow: 4px 4px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000;
          z-index: 10;
          transform: scale(0.6) rotate(-10deg);
          animation: exit-sfx-sequence 0.4s steps(3) forwards;
        }

        @keyframes exit-sfx-sequence {
          0% { transform: scale(0.6) rotate(-10deg); opacity: 0; }
          20% { transform: scale(1.3) rotate(-15deg); opacity: 1; }
          80% { transform: scale(1.1) rotate(-12deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(-12deg); opacity: 0; }
        }

        .terminal-matrix-hud {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .branding-logo-initials {
          font-family: 'Bangers', sans-serif;
          font-size: 48px;
          color: #FFE500;
          font-style: italic;
          font-weight: 900;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .progress-rail-container {
          position: relative;
          width: 100%;
          height: 4px;
          background-color: #222222;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
        }

        .progress-fill-beam {
          height: 100%;
          background-color: #FFE500;
          box-shadow: 0 0 14px #FFE500, 0 0 4px #FFE500;
          transition: width 0.05s linear;
        }

        .metrics-percentage-ticker {
          position: absolute;
          right: 0;
          top: -24px;
          font-family: monospace;
          font-size: 14px;
          color: #FFE500;
          font-weight: bold;
        }

        .diagnostic-log-terminal {
          font-family: monospace;
          font-size: 11px;
          color: #888888;
          text-align: left;
          width: 100%;
          min-height: 20px;
          white-space: nowrap;
          overflow: hidden;
          letter-spacing: 0.5px;
        }

        @keyframes fastGlitchFlicker {
          0% { transform: scale(0.98); filter: hue-rotate(0deg); opacity: 0.95; }
          100% { transform: scale(1); filter: hue-rotate(5deg); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .spark-arc, .exit-sfx-text, .greeting-spark-svg {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
