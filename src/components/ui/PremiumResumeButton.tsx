export default function PremiumResumeButton({ resumeUrl = "/img/resume.pdf" }) {
  return (
    <a
      href={resumeUrl}
      download="Anant_Rai_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mecha-sticker-pill-btn group cursor-target"
    >
      <span className="btn-inner-content">
        <span className="hardware-bracket-left">[</span>
        <span className="main-text-string">RESUME</span>
        <span className="download-arrow-icon">↓</span>
        <span className="hardware-bracket-right">]</span>
      </span>

      <style>{`
        .mecha-sticker-pill-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          font-family: var(--font-body), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          color: #888888;
          text-decoration: none;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid #333333;
          border-radius: 0;
          transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease;
          user-select: none;
          cursor: pointer;
        }

        .btn-inner-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .hardware-bracket-left, .hardware-bracket-right {
          opacity: 0.6;
        }
        .download-arrow-icon {
          font-size: 11px;
          margin-left: 2px;
        }

        .mecha-sticker-pill-btn:hover {
          color: #FFFFFF;
          border-color: #FFFFFF;
          background-color: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </a>
  );
}
