export default function CyberBackgroundMatrix() {
  const terminalLogsColumnA = [
    "> INITIALIZING COGNITIVE CORE PROCESSES... [ OK ]",
    "> LOADING ARSENAL & SKILL MATRICES... [ 100% ]",
    "> ACCESSING PILOT DATA LOG_81... [ CONNECTED ]",
    "> BOOSTING NEURAL LINK SYNC STATE... [ ACTIVE ]",
    "TX_READY // HANDSHAKE_INIT // SEC_AUTH_01"
  ];

  const terminalLogsColumnB = [
    "> THREAT_LEVEL_DATA // CLIMAX_ARC_66",
    "> CONNECTING PILOT DATA LOG_01... [ OK ]",
    "> SYSTEM READY // ACCESS GRANTED [ ✓ ]",
    "A_THREAT_LEVEL_DATA // SYSTEM_STABLE_002"
  ];

  return (
    <div className="matrix-canvas-master">
      {/* 1. SCROLLING NUMBER STRIP TICKER */}
      <div className="scrolling-number-strip" aria-hidden="true">
        <div className="ticker-track">
          <span>01001011 992810 88201 02910 882103 77482 1290 88210 00192 384910</span>
          <span>01001011 992810 88201 02910 882103 77482 1290 88210 00192 384910</span>
        </div>
      </div>

      {/* 2. PERSISTENT CORNER STAMPS */}
      <div className="corner-stamp-tl">[ SYS_ACTIVE // AR-v2.1 ]</div>
      <div className="corner-stamp-tr">LAT_EST_UP // 2026-07-04</div>
      <div className="corner-stamp-bl">SCAN_ID // 0x8F9C3E</div>
      <div className="corner-stamp-br">SEC_LVL // S_THREAT</div>

      {/* 3. HALFTONE DOT ACCENTS */}
      <div className="halftone-cluster pos-top-left" />
      <div className="halftone-cluster pos-bottom-right" />

      {/* 4. ANIMATED CIRCUIT LINES */}
      <svg className="cyber-circuits" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M100 100 H300 L350 150 V400 L420 470 H600" stroke="rgba(0, 201, 224, 0.15)" strokeWidth="1.5" />
        <path d="M700 700 H500 L450 650 V450 L380 380 H200" stroke="rgba(255, 214, 10, 0.15)" strokeWidth="1.5" />
      </svg>

      {/* 5. DEPTH-SEPARATED JAPANESE TEXT */}
      <div className="depth-japanese-container" aria-hidden="true">
        <div className="jp-deep far">人工知能</div>
        <div className="jp-deep mid">機械学習</div>
        <div className="jp-deep near">開発者</div>
      </div>

      {/* 6. DEEP WATERMARK HEADER */}
      <div className="macro-japanese-column">
        最終決戦
      </div>

      {/* TOP RIGHT VOID: Cascading Diagnostic Core Telemetry */}
      <div className="terminal-cascade-zone top-right-void">
        {terminalLogsColumnA.map((log, i) => (
          <div key={i} className="log-row-string" style={{ animationDelay: `${i * 0.4}s` }}>
            {log}
          </div>
        ))}
      </div>

      {/* BOTTOM RIGHT VOID: System Secondary Data Metrics Stream */}
      <div className="terminal-cascade-zone bottom-right-void">
        {terminalLogsColumnB.map((log, i) => (
          <div key={i} className="log-row-string" style={{ animationDelay: `${(i + 3) * 0.5}s` }}>
            {log}
          </div>
        ))}
      </div>

      {/* SUBTLE BOUNDARY LABELS */}
      <div className="sys-ref-watermark tracking-label-1">[ SYS_REF // CHAR_SHEET_01 ]</div>
      <div className="sys-ref-watermark tracking-label-2">A_THREAT_LEVEL_DATA // CLIMAX_ARC_66</div>

      {/* Encapsulated Stylesheet */}
      <style>{`
        .matrix-canvas-master {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
          background-color: transparent;
        }

        /* Ticker number strip */
        .scrolling-number-strip {
          position: fixed;
          left: 14px;
          top: 0;
          bottom: 0;
          width: 20px;
          overflow: hidden;
          font-family: monospace;
          font-size: 8px;
          color: #00C9E0;
          opacity: 0.12;
          writing-mode: vertical-rl;
          z-index: 1;
          pointer-events: none;
        }
        .ticker-track {
          display: flex;
          flex-direction: column;
          animation: ticker-scroll 24s linear infinite;
        }
        .ticker-track span {
          padding: 20px 0;
        }
        @keyframes ticker-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        /* Persistent stamps */
        .corner-stamp-tl, .corner-stamp-tr, .corner-stamp-bl, .corner-stamp-br {
          position: fixed;
          font-family: monospace;
          font-size: 8px;
          color: rgba(255, 255, 255, 0.22);
          z-index: 99;
          pointer-events: none;
          letter-spacing: 1.5px;
        }
        .corner-stamp-tl { top: 16px; left: 40px; }
        .corner-stamp-tr { top: 16px; right: 40px; }
        .corner-stamp-bl { bottom: 16px; left: 40px; }
        .corner-stamp-br { bottom: 16px; right: 40px; }

        /* Halftone Dot clusters */
        .halftone-cluster {
          position: absolute;
          width: 180px;
          height: 180px;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px);
          background-size: 6px 6px;
          pointer-events: none;
          z-index: -2;
        }
        .pos-top-left { top: 12%; left: 8%; }
        .pos-bottom-right { bottom: 15%; right: 5%; }

        /* Cyber circuit lines */
        .cyber-circuits {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -3;
        }
        .cyber-circuits path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: draw-circuit 14s linear infinite;
        }
        @keyframes draw-circuit {
          0% { stroke-dashoffset: 1200; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1200; }
        }

        /* Depth watermarks */
        .depth-japanese-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: -4;
        }
        .jp-deep {
          position: absolute;
          font-family: var(--font-jp);
          font-weight: 900;
          writing-mode: vertical-rl;
          user-select: none;
        }
        .jp-deep.far {
          right: 15%;
          top: 15%;
          font-size: 8vh;
          color: rgba(255, 255, 255, 0.015);
          filter: blur(4px);
          animation: float-parallax-far 25s ease-in-out infinite;
        }
        .jp-deep.mid {
          left: 10%;
          bottom: 20%;
          font-size: 11vh;
          color: rgba(0, 201, 224, 0.02);
          filter: blur(2px);
          animation: float-parallax-mid 18s ease-in-out infinite;
        }
        .jp-deep.near {
          right: 25%;
          bottom: 10%;
          font-size: 14vh;
          color: rgba(255, 214, 10, 0.025);
          animation: float-parallax-near 12s ease-in-out infinite;
        }
        @keyframes float-parallax-far {
          0%, 100% { transform: translateY(0px) scale(0.95); }
          50% { transform: translateY(-30px) scale(1.02); }
        }
        @keyframes float-parallax-mid {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-parallax-near {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.08); }
        }

        /* Deep Macro Japanese Column Configurations */
        .macro-japanese-column {
          position: absolute;
          left: 2rem;
          top: 8%;
          writing-mode: vertical-rl;
          text-orientation: upright;
          font-family: 'sans-serif', 'Impact', sans-serif;
          font-weight: 900;
          font-size: clamp(90px, 10vw, 150px);
          color: #ffffff;
          opacity: 0.03;
          letter-spacing: -10px;
          user-select: none;
          z-index: -5;
        }

        /* Monospace Diagnostics Cascades */
        .terminal-cascade-zone {
          position: absolute;
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          color: #ffffff;
          opacity: 0.08;
          display: flex;
          flex-direction: column;
          gap: 6px;
          user-select: none;
        }

        .top-right-void {
          top: 40px;
          right: 3rem;
          text-align: right;
          align-items: flex-end;
        }

        .bottom-right-void {
          bottom: 60px;
          right: 4rem;
          text-align: left;
          align-items: flex-start;
        }

        .log-row-string {
          white-space: nowrap;
          animation: matrixTextPulse 4s infinite ease-in-out alternate;
        }

        .sys-ref-watermark {
          position: absolute;
          font-family: monospace;
          font-size: 10px;
          color: #FFE500;
          opacity: 0.12;
          letter-spacing: 1px;
          user-select: none;
        }

        .tracking-label-1 {
          top: 140px;
          left: 25%;
        }

        .tracking-label-2 {
          bottom: 220px;
          right: 35%;
          writing-mode: vertical-rl;
        }

        @keyframes matrixTextPulse {
          0% { opacity: 0.4; transform: translateX(0px); }
          50% { opacity: 1; transform: translateX(2px); }
          100% { opacity: 0.6; transform: translateX(-1px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track, .cyber-circuits path, .jp-deep.far, .jp-deep.mid, .jp-deep.near, .log-row-string {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
