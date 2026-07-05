import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Magnet from '../components/ui/Magnet';
import FuzzyText from '../components/ui/FuzzyText';
import GlitchText from '../components/ui/GlitchText';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted('sending');
    setTimeout(() => {
      setSubmitted('sent');
      setTimeout(() => setSubmitted('idle'), 4000);
    }, 1500);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { label: 'GITHUB', href: 'https://github.com/Anant-4-code', icon: '⌘', color: '#BF8FFF' },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/anant-rai-a79565312', icon: '◉', color: '#00C9E0' },
    { label: 'EMAIL', href: 'mailto:anantrai0809@gmail.com', icon: '◈', color: '#3DFFA0' },
    { label: 'HUGGING FACE', href: 'https://huggingface.co/Anant4code', icon: '🤗', color: '#FFD60A' },
    { label: 'PHONE', href: 'tel:+918624043412', icon: '◌', color: '#FF7C40' }
  ];

  const inputStyle = (fieldName: string): React.CSSProperties => ({
    width: '100%',
    padding: '12px 0 14px 0',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: focusedField === fieldName ? '2px solid var(--gold)' : '1px solid rgba(255,255,255,0.18)',
    color: 'var(--white)',
    fontSize: '13px',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    borderRadius: '0',
    transition: 'border-color 0.12s ease',
    boxSizing: 'border-box'
  });

  return (
    <section
      id="contact"
      className="contact-section-root"
    >
      {/* Concentric rings bg */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.05 }}>
        <svg viewBox="0 0 800 800" width="100%" height="100%">
          <circle cx="400" cy="400" r="100" fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="var(--gold)" strokeWidth="1" />
          <circle cx="400" cy="400" r="300" fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="400" cy="400" r="400" fill="none" stroke="var(--gold)" strokeWidth="1" />
        </svg>
      </div>

      {/* BG watermark left */}
      <div className="manga-watermark watermark-vertical" style={{ top: '5%', left: '1%', opacity: 0.03, fontSize: '9vw', pointerEvents: 'none', zIndex: 0, userSelect: 'none', color: 'var(--gold)' }}>
        最終決戦
      </div>

      {/* BG watermark right */}
      <div className="manga-watermark watermark-vertical" style={{ top: '30%', right: '1%', opacity: 0.025, fontSize: '7vw', pointerEvents: 'none', zIndex: 0, userSelect: 'none', fontFamily: 'Bangers, cursive', color: 'var(--cyan)', letterSpacing: '-2px' }}>
        接続
      </div>

      {/* Giant ghost text center */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'Bangers, cursive', fontSize: 'clamp(60px, 12vw, 140px)', color: 'var(--white)', opacity: 0.022, pointerEvents: 'none', zIndex: 0, userSelect: 'none', whiteSpace: 'nowrap', letterSpacing: '8px' }}>
        FINAL FORM
      </div>

      {/* ── Scattered anime SFX labels ── */}
      {/* Top-left SFX */}
      <div style={{ position: 'absolute', top: '8%', left: '4%', fontFamily: 'Bangers, cursive', fontSize: '28px', color: 'var(--gold)', opacity: 0.12, transform: 'rotate(-12deg)', pointerEvents: 'none', zIndex: 0, userSelect: 'none', letterSpacing: '2px' }}>
        CONTACT!
      </div>

      {/* Top-right SFX */}
      <div style={{ position: 'absolute', top: '12%', right: '5%', fontFamily: 'Bangers, cursive', fontSize: '20px', color: 'var(--cyan)', opacity: 0.1, transform: 'rotate(8deg)', pointerEvents: 'none', zIndex: 0, userSelect: 'none', letterSpacing: '1px' }}>
        LINK UP!
      </div>

      {/* Mid-left SFX */}
      <div style={{ position: 'absolute', top: '42%', left: '2%', fontFamily: 'Bangers, cursive', fontSize: '16px', color: 'var(--purple)', opacity: 0.13, transform: 'rotate(-5deg)', pointerEvents: 'none', zIndex: 0, userSelect: 'none', letterSpacing: '2px' }}>
        PING!!
      </div>

      {/* Mid-right SFX */}
      <div style={{ position: 'absolute', top: '55%', right: '3%', fontFamily: 'Bangers, cursive', fontSize: '22px', color: 'var(--green)', opacity: 0.1, transform: 'rotate(10deg)', pointerEvents: 'none', zIndex: 0, userSelect: 'none' }}>
        KZZZT!
      </div>

      {/* Bottom-left SFX */}
      <div style={{ position: 'absolute', bottom: '18%', left: '3%', fontFamily: 'Bangers, cursive', fontSize: '18px', color: 'var(--white)', opacity: 0.07, transform: 'rotate(-8deg)', pointerEvents: 'none', zIndex: 0, userSelect: 'none' }}>
        TRANSMIT
      </div>

      {/* Bottom-right SFX */}
      <div style={{ position: 'absolute', bottom: '22%', right: '4%', fontFamily: 'Bangers, cursive', fontSize: '14px', color: 'var(--gold)', opacity: 0.1, transform: 'rotate(6deg)', pointerEvents: 'none', zIndex: 0, userSelect: 'none', letterSpacing: '2px' }}>
        ACK!
      </div>

      {/* Corner coordinate markers */}
      <div style={{ position: 'absolute', top: '4%', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-body)', fontSize: '8px', color: 'rgba(255,255,255,0.06)', pointerEvents: 'none', zIndex: 0, letterSpacing: '2px' }}>
        [ SECTOR_FINAL // X:0000 Y:FFFF ]
      </div>
      <div style={{ position: 'absolute', top: '6%', right: '2%', fontFamily: 'var(--font-body)', fontSize: '7px', color: 'rgba(0,201,224,0.12)', pointerEvents: 'none', zIndex: 0, letterSpacing: '1px', writingMode: 'vertical-rl' }}>
        CH.07 // CONTACT_NODE // ACTIVE
      </div>
      <div style={{ position: 'absolute', bottom: '35%', left: '1.5%', fontFamily: 'var(--font-body)', fontSize: '7px', color: 'rgba(255,214,10,0.1)', pointerEvents: 'none', zIndex: 0, letterSpacing: '1px', writingMode: 'vertical-rl' }}>
        TX_READY // HANDSHAKE_INIT // 0x4E2A
      </div>

      {/* Dashed cross-hair ticks */}
      <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)', width: '1px', height: '40px', background: 'rgba(255,214,10,0.05)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translateX(-50%)', width: '1px', height: '40px', background: 'rgba(0,201,224,0.05)', pointerEvents: 'none', zIndex: 0 }} />


      {/* Inner content wrapper */}
      <div className="contact-inner">

        {/* ── Section Header ── */}
        <div style={{ marginBottom: '48px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--gold)' }} />
            <GlitchText
              text="[ TO BE CONTINUED... ] // FINAL BOSS ENCOUNTER"
              className="bangers"
              style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '3px' }}
              interval={5000}
              duration={400}
            />
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--gold)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <FuzzyText
              fontSize="44px"
              fontWeight={900}
              fontFamily="Bangers"
              color="#FFE500"
            >
              READY TO COLLABORATE?
            </FuzzyText>
          </div>
          <p style={{ color: 'var(--gray)', fontSize: '12px', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', fontFamily: 'var(--font-body)' }}>
            Got a quest? Drop a message below and I'll respond faster than a shonen protagonist's power-up.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="contact-grid">

          {/* LEFT: Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="contact-form-col"
          >
            <div className="manga-panel contact-panel-card" style={{ padding: '32px', borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'var(--ink)', height: '100%', boxSizing: 'border-box' }}>
              <div className="corner-bracket tl" style={{ width: '10px', height: '10px' }} />
              <div className="corner-bracket tr" style={{ width: '10px', height: '10px' }} />
              <div className="corner-bracket br" style={{ width: '10px', height: '10px' }} />
              <div className="corner-bracket bl" style={{ width: '10px', height: '10px' }} />

              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="bangers" style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '2px' }}>TRANSMISSION FORM</span>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--green)', boxShadow: '0 0 6px var(--green)', animation: 'contact-pulse 2s infinite' }} />
                <span style={{ fontSize: '8px', color: 'var(--green)', fontFamily: 'var(--font-body)', fontWeight: 'bold' }}>OPEN TO WORK</span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Name */}
                <div style={{ position: 'relative', marginTop: '8px' }}>
                  <span style={{ position: 'absolute', top: '-8px', left: '0', fontSize: '9px', fontFamily: 'var(--font-body)', color: focusedField === 'name' ? 'var(--gold)' : 'rgba(255,255,255,0.3)', letterSpacing: '1px', transition: 'color 0.12s' }}>[ NAME ]</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} placeholder="INPUT NAME DECODE" required style={inputStyle('name')} />
                </div>

                {/* Email */}
                <div style={{ position: 'relative', marginTop: '8px' }}>
                  <span style={{ position: 'absolute', top: '-8px', left: '0', fontSize: '9px', fontFamily: 'var(--font-body)', color: focusedField === 'email' ? 'var(--gold)' : 'rgba(255,255,255,0.3)', letterSpacing: '1px', transition: 'color 0.12s' }}>[ EMAIL ]</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} placeholder="INPUT EMAIL MATRIX" required style={inputStyle('email')} />
                </div>

                {/* Message */}
                <div style={{ position: 'relative', marginTop: '8px' }}>
                  <span style={{ position: 'absolute', top: '-8px', left: '0', fontSize: '9px', fontFamily: 'var(--font-body)', color: focusedField === 'message' ? 'var(--gold)' : 'rgba(255,255,255,0.3)', letterSpacing: '1px', transition: 'color 0.12s' }}>[ MESSAGE ]</span>
                  <textarea name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} placeholder="TRANSMIT MESSAGE PACKETS" rows={5} required style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '100px' }} />
                </div>

                <Magnet padding={20} magnetStrength={3}>
                  <button
                    type="submit"
                    className="cursor-target bebas contact-submit-btn"
                    style={{
                      padding: '14px 28px',
                      backgroundColor: submitted === 'sent' ? 'var(--green)' : 'var(--gold)',
                      color: 'var(--black)',
                      border: '2px solid var(--black)',
                      fontSize: '18px',
                      letterSpacing: '3px',
                      width: '100%',
                      transition: 'background-color 0.2s ease, box-shadow 0.1s ease',
                      boxShadow: '3px 3px 0 rgba(0,0,0,0.5)'
                    }}
                  >
                    {submitted === 'sending' ? 'SENDING...' : submitted === 'sent' ? 'SENT! ✓' : 'SEND MESSAGE →'}
                  </button>
                </Magnet>
              </form>

              <AnimatePresence>
                {submitted === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    style={{ marginTop: '16px', padding: '12px 16px', border: '1px solid var(--green)', backgroundColor: 'rgba(61,255,160,0.05)', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span style={{ color: 'var(--green)', fontSize: '14px' }}>✓</span>
                    <span style={{ fontSize: '10px', color: 'var(--green)', fontFamily: 'var(--font-body)', letterSpacing: '1px' }}>TRANSMISSION RECEIVED // RESPONSE INCOMING</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT: Status + Channels */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="contact-info-col"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Current Status */}
            <div className="manga-panel contact-panel-card" style={{ padding: '28px', borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'var(--ink)' }}>
              <div className="corner-bracket tl" style={{ width: '8px', height: '8px' }} />
              <div className="corner-bracket br" style={{ width: '8px', height: '8px' }} />
              <span className="bangers" style={{ fontSize: '10px', color: 'var(--cyan)', letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>CURRENT STATUS</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { key: 'AVAILABILITY', val: '● OPEN TO WORK', color: 'var(--green)', pulse: true },
                  { key: 'RESPONSE TIME', val: '< 24 HOURS', color: 'var(--gold)', pulse: false },
                  { key: 'LOCATION', val: 'NASHIK, INDIA · GMT+5:30', color: 'var(--white)', pulse: false },
                  { key: 'PREFERRED ROLES', val: 'AI ENG / FULLSTACK / RESEARCH', color: 'var(--cyan)', pulse: false }
                ].map(row => (
                  <div key={row.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-body)', flexShrink: 0 }}>{row.key}</span>
                    <span style={{ fontSize: '9px', color: row.color, fontFamily: 'var(--font-body)', fontWeight: 'bold', textAlign: 'right' }}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Channels */}
            <div className="manga-panel contact-panel-card" style={{ padding: '28px', borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'var(--ink)' }}>
              <div className="corner-bracket tl" style={{ width: '8px', height: '8px' }} />
              <div className="corner-bracket br" style={{ width: '8px', height: '8px' }} />
              <span className="bangers" style={{ fontSize: '10px', color: '#BF8FFF', letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>CONNECT CHANNELS</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target contact-channel-link"
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      border: `1px solid ${hoveredLink === link.label ? link.color + '55' : 'rgba(255,255,255,0.06)'}`,
                      backgroundColor: hoveredLink === link.label ? link.color + '12' : 'rgba(255,255,255,0.02)',
                      textDecoration: 'none',
                      transition: 'all 0.1s var(--ease-sharp)',
                      transform: hoveredLink === link.label ? 'translateX(4px)' : 'translateX(0)'
                    }}
                  >
                    <span style={{ fontSize: '14px', color: link.color, width: '20px', textAlign: 'center', flexShrink: 0 }}>{link.icon}</span>
                    <span className="bebas" style={{ fontSize: '14px', color: 'var(--white)', letterSpacing: '2px', flex: 1 }}>{link.label}</span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: hoveredLink === link.label ? link.color : 'rgba(255,255,255,0.2)',
                        animation: hoveredLink === link.label ? 'arrow-blink 0.5s steps(2) infinite' : 'none',
                        transition: 'color 0.1s'
                      }}
                    >→</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Full-width Quote Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            marginTop: '40px',
            padding: '28px 36px',
            borderLeft: '4px solid var(--gold)',
            borderRight: '1px solid rgba(255,214,10,0.2)',
            backgroundColor: 'rgba(255,214,10,0.04)',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontFamily: 'var(--font-body)', lineHeight: '1.7', margin: 0, flex: 1 }}>
            "The only way to do great work is to love what you do — and ship it before the deadline."
          </p>
          <span style={{ fontSize: '9px', color: 'var(--gold)', fontFamily: 'var(--font-body)', letterSpacing: '2px', flexShrink: 0, fontWeight: 'bold' }}>
            — ANANT RAI // 2026
          </span>
        </motion.div>

      </div>{/* end contact-inner */}

      {/* ══════════════════════════════════════════
          TERMINAL FOOTER
      ══════════════════════════════════════════ */}
      <footer className="terminal-footer">
        {/* Top divider line */}
        <div className="terminal-footer-line" />

        {/* Corner coordinates */}
        <div className="terminal-footer-bar">
          {/* Left — version metadata */}
          <div className="footer-left">
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '8px', color: 'rgba(255,255,255,0.2)', letterSpacing: '1.5px', lineHeight: '1.6' }}>
              <div>[SYS_END // 0xFFFF]</div>
              <div style={{ color: 'rgba(255,255,255,0.12)', marginTop: '2px' }}>UI_VER // 2.1 // MANGA_CYBERPUNK_ENGINE</div>
            </div>
          </div>

          {/* Center — copyright */}
          <div className="footer-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="bangers" style={{ fontSize: '18px', color: 'var(--gold)', letterSpacing: '2px' }}>AR</span>
            
            {/* Manga Colophon credits strip */}
            <div style={{
              border: '1.5px solid rgba(255, 214, 10, 0.3)',
              padding: '12px 18px',
              fontFamily: 'monospace',
              fontSize: '8.5px',
              color: 'rgba(255, 255, 255, 0.6)',
              backgroundColor: 'rgba(13, 13, 15, 0.8)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px 14px',
              maxWidth: '380px',
              marginTop: '10px',
              textAlign: 'left',
              boxShadow: '3px 3px 0px rgba(0,0,0,0.5)'
            }}>
              <div>• AUTHOR: ANANT RAI</div>
              <div>• VOL: 01 // SHONEN ARC</div>
              <div>• STATUS: OPTIMAL</div>
              <div>• TO BE CONTINUED...</div>
            </div>
            
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', marginTop: '12px' }}>
              DESIGNED & ENGINEERED BY ANANT RAI // {new Date().getFullYear()}
            </div>
          </div>

          {/* Right — system status */}
          <div className="footer-right">
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '8px', color: 'rgba(255,255,255,0.2)', letterSpacing: '1.5px', lineHeight: '1.6', textAlign: 'right' }}>
              <div>[LAT_LON // 19.99_73.78]</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px', marginTop: '4px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#3DFFA0', boxShadow: '0 0 5px #3DFFA0', animation: 'contact-pulse 2s infinite' }} />
                <span style={{ color: '#3DFFA0', fontWeight: 'bold', fontSize: '8px' }}>[ STATUS: OPTIMAL ]</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .contact-section-root {
          position: relative;
          z-index: 5;
          overflow: hidden;
          background-color: #0D0D0F;
        }

        .contact-inner {
          max-width: 1080px;
          margin: 0 auto;
          width: 100%;
          padding: 120px 40px 0;
          position: relative;
          z-index: 2;
        }

        /* Desktop: fixed 2-col with equal height */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        .contact-form-col,
        .contact-info-col {
          display: flex;
          flex-direction: column;
        }

        @keyframes contact-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        @keyframes arrow-blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.12);
          font-family: var(--font-body);
          font-size: 11px;
        }

        /* Terminal Footer */
        .terminal-footer {
          position: relative;
          margin-top: 120px;
          z-index: 3;
        }

        .terminal-footer-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,214,10,0.3) 20%, rgba(255,214,10,0.3) 80%, transparent);
        }

        .terminal-footer-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          gap: 20px;
        }

        .footer-left, .footer-right { flex: 1; }
        .footer-center { flex: 0; text-align: center; white-space: nowrap; }
        .footer-right { display: flex; justify-content: flex-end; }

        /* Mobile */
        @media (max-width: 1024px) {
          .contact-inner {
            padding: 60px 1.5rem 0;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .terminal-footer-bar {
            flex-direction: column;
            align-items: center;
            padding: 20px 1.5rem;
            gap: 12px;
            text-align: center;
          }
          .footer-right {
            justify-content: center;
          }
          .footer-left { text-align: center; }
        }

        @media (max-width: 600px) {
          .contact-inner { padding: 40px 1.5rem 0; }
          .contact-panel-card { padding: 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
