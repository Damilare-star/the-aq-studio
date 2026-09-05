import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations/variants'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section
      id="hero"
      className="relative flex flex-col bg-[#050505] overflow-hidden min-h-[100svh]"
    >
      {/* ── Background: subtle grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Ambient violet glow left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%', left: '-10%',
          width: '60vw', height: '80vh',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.10) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── Ambient glow right (for video side) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', right: '-5%',
          width: '40vw', height: '70vh',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
        style={{ height: '100px', background: 'linear-gradient(to top, #050505, transparent)' }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col pt-[calc(64px+2.5rem)] md:pt-[calc(76px+3.5rem)] pb-8 container-wide">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20 flex-1">

          {/* ── LEFT: Text ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center flex-1 max-w-2xl"
          >
            {/* Eyebrow label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#8B5CF6]" />
              <span className="text-[10px] tracking-[0.30em] uppercase font-medium text-[rgba(255,255,255,0.40)]">
                AI-Powered Creative Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-bold text-white leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.8rem)' }}
            >
              Cinematic AI Ads
              <br />
              <span
                className="italic font-light text-[rgba(255,255,255,0.55)]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                That Move Products.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[rgba(255,255,255,0.45)] font-light leading-[1.80] mb-8 max-w-sm"
              style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
            >
              Premium AI commercials for beauty, fashion, food, technology
              and lifestyle brands — delivered in days, not weeks.
            </motion.p>

            {/* Proof stats */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 sm:gap-8 mb-8 pb-8 border-b border-[rgba(255,255,255,0.06)]"
            >
              {[
                { value: '3–7', label: 'Day turnaround' },
                { value: '100%', label: 'AI-powered' },
                { value: '6+', label: 'Industries served' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-white font-bold text-lg leading-none mb-1">{s.value}</p>
                  <p className="text-[rgba(255,255,255,0.30)] text-[10px] tracking-[0.14em] uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-row flex-wrap gap-3">
              <button
                onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none whitespace-nowrap font-semibold text-white text-sm tracking-[0.04em]"
                style={{
                  height: '50px',
                  paddingLeft: '1.75rem',
                  paddingRight: '1.75rem',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #8B5CF6 50%, #a78bfa 100%)',
                  boxShadow: '0 0 32px rgba(139,92,246,0.35)',
                  transition: 'box-shadow 0.3s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(139,92,246,0.60)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 32px rgba(139,92,246,0.35)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                See Our Work →
              </button>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none whitespace-nowrap font-semibold text-white text-sm tracking-[0.04em]"
                style={{
                  height: '50px',
                  paddingLeft: '1.75rem',
                  paddingRight: '1.75rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  transition: 'border-color 0.3s, background 0.3s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.55)'
                  e.currentTarget.style.background = 'rgba(139,92,246,0.08)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Book a Call ↗
              </button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Video — desktop only ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="hidden lg:flex items-center justify-center shrink-0"
            style={{ width: '260px' }}
          >
            <div className="relative" style={{ width: '260px' }}>
              {/* Glow behind video */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: '0 0 80px rgba(139,92,246,0.20), 0 0 120px rgba(139,92,246,0.08)',
                  transform: 'scale(1.05)',
                }}
              />
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: '9/16',
                  background: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <video
                  ref={videoRef}
                  src="/hero-reel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label="AQ Studio showreel"
                />
                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, transparent 45%, rgba(5,5,5,0.55) 100%)' }}
                />
                {/* Top badge */}
                <div
                  className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none"
                >
                  <span
                    className="text-[8px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.50)] font-medium"
                    style={{ background: 'rgba(5,5,5,0.60)', backdropFilter: 'blur(8px)', padding: '3px 8px' }}
                  >
                    Showreel
                  </span>
                  <div className="flex items-center gap-1.5">
                    <motion.span
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="block w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"
                    />
                    <span className="text-[8px] tracking-[0.16em] uppercase text-[rgba(255,255,255,0.35)]">Live</span>
                  </div>
                </div>
                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 pointer-events-none">
                  <p className="text-[9px] tracking-[0.10em] text-[rgba(255,255,255,0.45)]">AQ Studio — 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 border-t border-[rgba(255,255,255,0.05)] overflow-hidden shrink-0"
      >
        <div className="flex items-center py-3 ticker-track">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="text-[rgba(255,255,255,0.35)] text-[9px] tracking-[0.28em] uppercase whitespace-nowrap flex items-center font-medium"
              style={{ gap: '2rem' }}
            >
              AI Commercial Production
              <span className="text-[#8B5CF6] mx-8">✦</span>
              Cinematic Brand Films
              <span className="text-[#8B5CF6] mx-8">✦</span>
              Visual Campaigns
              <span className="text-[#8B5CF6] mx-8">✦</span>
              Beauty · Fashion · Food · Tech
              <span className="text-[#8B5CF6] mx-8">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
