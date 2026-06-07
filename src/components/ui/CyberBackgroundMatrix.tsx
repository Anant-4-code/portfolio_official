export default function CyberBackgroundMatrix() {
  // Array of highly specific mecha-terminal telemetry strings to scatter across layout empty zones
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
      
      {/* LEFT PLANE: Deep Macro Japanese Character Watermark */}
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

      {/* SUBTLE BOUNDARY LABELS: Scattered Micro System Watermarks */}
      <div className="sys-ref-watermark tracking-label-1">[ SYS_REF // CHAR_SHEET_01 ]</div>
      <div className="sys-ref-watermark tracking-label-2">A_THREAT_LEVEL_DATA // CLIMAX_ARC_66</div>

      {/* Encapsulated Baseline Matrix Stylesheet */}
      <style>{`
        .matrix-canvas-master {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          pointer-events: none; /* Prevents background text from blocking clicks on main content cards */
          z-index: -1;
          overflow: hidden;
          background-color: transparent;
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
          opacity: 0.03; /* Extremely faint background bleed */
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
          opacity: 0.08; /* Subtle terminal presence */
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

        /* Subtle mechanical pulse animation on row rendering */
        .log-row-string {
          white-space: nowrap;
          animation: matrixTextPulse 4s infinite ease-in-out alternate;
        }

        /* Small structural metadata labels alignment */
        .sys-ref-watermark {
          position: absolute;
          font-family: monospace;
          font-size: 10px;
          color: #FFE500; /* Subtle cyber yellow hint */
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
      `}</style>
    </div>
  );
}
