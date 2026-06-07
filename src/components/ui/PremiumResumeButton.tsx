import React from 'react';

export default function PremiumResumeButton({ resumeUrl = "/img/resume.pdf" }) {
  return (
    <a
      href={resumeUrl}
      download="Anant_Rai_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mecha-sticker-pill-btn group cursor-target"
    >
      {/* Background Pill Core (Angled block that surges left-to-right) */}
      <span className="sticker-pill-element" />

      {/* Content Container holding Text Label & Decorative Target Accents */}
      <span className="btn-inner-content">
        <span className="hardware-bracket-left">[</span>
        <span className="main-text-string">RESUME</span>
        <span className="download-arrow-icon">↓</span>
        <span className="hardware-bracket-right">]</span>
      </span>

      {/* Absolute Stacking Layer Stylesheet Override */}
      <style>{`
        .mecha-sticker-pill-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 2.4rem;
          font-family: 'Courier New', Courier, monospace;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 2.5px;
          color: #FFE500; /* Signature Cyber Yellow Base */
          text-decoration: none;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid rgba(255, 229, 0, 0.8);
          overflow: hidden;
          
          /* Hardcoded Aggressive Mecha Geometric Corner Slash Cutout */
          clip-path: polygon(0 0, 92% 0, 100% 35%, 100% 100%, 8% 100%, 0 65%);
          
          transition: border-color 0.15s steps(2), box-shadow 0.2s ease;
          user-select: none;
          cursor: pointer;
        }

        /* THE ANGLING STICKER PILL SLIDER LAYER */
        .mecha-sticker-pill-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -20%; /* Hidden off-canvas bound to compensate for the skew slope */
          width: 0%;
          height: 100%;
          background-color: #FFE500; /* Solid yellow block fill */
          transform: skewX(-20deg); /* Aggressive technical slant */
          transform-origin: left center;
          z-index: 1;
          
          /* High-acceleration mechanical deceleration curve */
          transition: width 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }

        /* Container forcing typography over the moving background pill */
        .btn-inner-content {
          position: relative;
          z-index: 10; /* Locked securely on top plane */
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.1s ease-out;
        }

        /* Dynamic HUD accent micro-elements */
        .hardware-bracket-left, .hardware-bracket-right {
          opacity: 0.4;
          transition: opacity 0.15s ease;
        }
        .download-arrow-icon {
          font-size: 12px;
          margin-left: 2px;
        }

        /* INTERACTIVE HOVER MATRIX STATES */

        /* 1. Surge the Angled Pill background across the framework */
        .mecha-sticker-pill-btn:hover::before {
          width: 140%; /* Fully populates the canvas area */
        }

        /* 2. Instant Text Inversion to Deep Matte Black */
        .mecha-sticker-pill-btn:hover .btn-inner-content {
          color: #0F0F0F; /* Ensures high contrast against hot yellow */
        }
        
        .mecha-sticker-pill-btn:hover .hardware-bracket-left,
        .mecha-sticker-pill-btn:hover .hardware-bracket-right {
          opacity: 1;
        }

        /* 3. Inject High-Energy Terminal Hardware Glitch Flicker Strike */
        .mecha-sticker-pill-btn:hover {
          border-color: #FFFFFF;
          box-shadow: 0 0 16px rgba(255, 229, 0, 0.6);
          animation: hardwareGlitchStrike 0.24s steps(3) infinite alternate;
        }

        /* Custom Keyframe configuration recreating the original screen flash glitch */
        @keyframes hardwareGlitchStrike {
          0% { 
            opacity: 0.8;
            background-color: rgba(255, 229, 0, 0.08);
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            background-color: transparent;
            transform: scale(1.02); /* Structural micro-expansion thump */
          }
          100% { 
            opacity: 0.9;
            background-color: rgba(255, 229, 0, 0.15);
            transform: scale(1);
          }
        }
      `}</style>
    </a>
  );
}
