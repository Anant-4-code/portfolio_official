import React, { useState, useEffect } from 'react';
import './GhostInTheMachine.css';

interface GhostInTheMachineProps {
  mouseX?: number;
  mouseY?: number;
}

const HEX_CODES = ['0x8F9A', '0x3E1B', '0x94C2', '0xFA07', '0x5C89', '0x7D3E'];

export const GhostInTheMachine: React.FC<GhostInTheMachineProps> = ({ mouseX = 0, mouseY = 0 }) => {
  const [telemetry, setTelemetry] = useState({
    mem: '0x8F9A',
    acc: '98.4%',
    fps: '120.0',
    status: 'OPTIMAL'
  });

  /* Rapidly updating telemetry simulation (~800ms ticks) */
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHex = HEX_CODES[Math.floor(Math.random() * HEX_CODES.length)];
      const randomFps = (118.5 + Math.random() * 3).toFixed(1);
      const randomAcc = (98.1 + Math.random() * 0.7).toFixed(1);
      setTelemetry({
        mem: randomHex,
        acc: `${randomAcc}%`,
        fps: `${randomFps}`,
        status: 'ACTIVE'
      });
    }, 850);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ghost-machine-wrapper" aria-hidden="true">
      {/* 1. WebGL Cursor Spotlight Layer */}
      <div
        className="ghost-cursor-spotlight"
        style={{
          background: `radial-gradient(circle 380px at ${mouseX}px ${mouseY}px, rgba(0, 201, 224, 0.12) 0%, rgba(255, 214, 10, 0.04) 45%, transparent 75%)`
        }}
      />

      {/* 2. Ambient Data Visualization Chart (CNN Architecture & OCR Curve SVG) */}
      <div className="ghost-data-vis-container">
        <svg className="ghost-chart-svg" viewBox="0 0 800 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 255, 204, 0.03)" />
              <stop offset="50%" stopColor="rgba(0, 255, 204, 0.15)" />
              <stop offset="100%" stopColor="rgba(0, 201, 224, 0.03)" />
            </linearGradient>
          </defs>

          {/* Background Neural Layer Grid Lines */}
          <line x1="100" y1="50" x2="700" y2="50" stroke="rgba(0, 255, 204, 0.05)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="100" y1="150" x2="700" y2="150" stroke="rgba(0, 255, 204, 0.05)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="100" y1="250" x2="700" y2="250" stroke="rgba(0, 255, 204, 0.05)" strokeWidth="1" strokeDasharray="4 4" />

          {/* CNN Neural Interconnections */}
          <path d="M 120,80 Q 250,200 400,100 T 680,180" stroke="url(#cyanGradient)" strokeWidth="1.5" fill="none" className="ghost-wave-line" />
          <path d="M 120,220 Q 300,60 480,240 T 680,80" stroke="rgba(255, 214, 10, 0.07)" strokeWidth="1" fill="none" className="ghost-wave-line" />

          {/* CNN Layer Nodes */}
          <circle cx="120" cy="80" r="4" className="ghost-neural-node" />
          <circle cx="250" cy="160" r="3.5" className="ghost-neural-node" />
          <circle cx="400" cy="100" r="5" className="ghost-neural-node" />
          <circle cx="540" cy="210" r="3" className="ghost-neural-node" />
          <circle cx="680" cy="180" r="4.5" className="ghost-neural-node" />

          {/* OCR Performance Benchmark Area Curve */}
          <path d="M 100,260 C 200,240 280,180 380,120 C 480,60 580,90 700,40 L 700,280 L 100,280 Z" fill="rgba(0, 201, 224, 0.015)" stroke="rgba(0, 201, 224, 0.06)" strokeWidth="1" />
        </svg>
      </div>

      {/* 3. Micro-Grid Accents & Corner Reticles [ + ] */}
      <div className="ghost-reticle-corner tl">
        <span className="crosshair-plus">[ + ]</span> SYS_GRID_01
      </div>
      <div className="ghost-reticle-corner tr">
        SYS_CALIB <span className="crosshair-plus">[ + ]</span>
      </div>
      <div className="ghost-reticle-corner bl">
        <span className="crosshair-plus">[ + ]</span> OCR_TENSOR
      </div>
      <div className="ghost-reticle-corner br">
        CNN_CORE <span className="crosshair-plus">[ + ]</span>
      </div>

      {/* Live Telemetry String Ticker */}
      <div className="ghost-telemetry-box">
        <span className="telemetry-pulse-dot" />
        <span>SYS_MEM: {telemetry.mem}</span>
        <span>|</span>
        <span>CNN_ACC: {telemetry.acc}</span>
        <span>|</span>
        <span>FPS: {telemetry.fps}</span>
        <span>|</span>
        <span>{telemetry.status}</span>
      </div>
    </div>
  );
};

export default GhostInTheMachine;
