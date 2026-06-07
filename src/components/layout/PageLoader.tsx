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

  const greetings = ['HELLO', 'नमस्ते', 'こんにちは', 'SAT SRI AKAAL', 'HOLA', 'BONJOUR', 'SYSTEM ONLINE'];

  // Terminal diagnostic string logs mapped directly to progress tracking percentage milestones
  const diagnosticLogs = [
    { threshold: 0, text: "> INITIALIZING COGNITIVE CORE PROCESSES... [ OK ]" },
    { threshold: 30, text: "> SYNCING MISSION ARCHIVES & PROJECT BLUEPRINTS... [ 100% ]" },
    { threshold: 65, text: "> INJECTING DYNAMIC JAPANESE TEXT BACKGROUND TEXTURE... [ ACTIVE ]" },
    { threshold: 85, text: "> DEPLOYING COMPILER SIMULATORS & INTERACTIVE DATA GRID... [ READY ]" }
  ];

  // Freeze document body scrolling immediately when loader mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  // Lifecycle 1: Rapid multi-lingual text cycle ticker
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
    }, 280); // Strict pacing speed per translation string

    return () => clearInterval(wordInterval);
  }, [bootStage]);

  // Lifecycle 2: Non-linear system loading bar progression tracking mechanics
  useEffect(() => {
    if (bootStage !== 'diagnostics') return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setBootStage('exiting'), 150); // Small pause at 100% charge for impact
          return 100;
        }
        // Non-linear acceleration curves simulating variable data streaming rates
        const step = prev < 40 ? 4 : prev < 75 ? 2 : 5;
        const nextProgress = prev + step;

        // Dynamic terminal tracker string matching log update thresholds
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

  // Lifecycle 3: Animation complete callback cleanup hook
  useEffect(() => {
    if (bootStage === 'exiting') {
      const completionTimeout = setTimeout(() => {
        document.body.style.overflow = 'auto'; // Unfreeze document interaction safely
        if (onComplete) onComplete();
      }, 500); // Synchronized to match the horizontal iris split CSS slide execution window
      return () => clearTimeout(completionTimeout);
    }
  }, [bootStage, onComplete]);

  return (
    <div className={`boot-wrapper ${bootStage === 'exiting' ? 'trigger-iris-split' : ''}`}>
      {/* Top Hatch Segment */}
      <div className="iris-panel top-panel" />

      {/* Central Screen Control Plane Container */}
      <div className="loader-center-core">
        {bootStage === 'greetings' && (
          <div className="greeting-node-frame">
            <FuzzyText>{greetings[currentWordIndex]}</FuzzyText>
          </div>
        )}

        {bootStage !== 'greetings' && (
          <div className="terminal-matrix-hud">
            <div className="branding-logo-initials">AR</div>
            
            {/* Structural Progression Bar Rail */}
            <div className="progress-rail-container">
              <div 
                className="progress-fill-beam" 
                style={{ width: `${progress}%` }}
              />
              <span className="metrics-percentage-ticker">{progress}%</span>
            </div>

            {/* Micro Terminal Log Outputs */}
            <div className="diagnostic-log-terminal">
              {currentLog}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Hatch Segment */}
      <div className="iris-panel bottom-panel" />

      {/* Encapsulated Component Stylesheet Mapping Block */}
      <style>{`
        .boot-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #0F0F0F; /* Solid, 100% non-translucent matte black */
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
      `}</style>
    </div>
  );
};

export default PageLoader;
