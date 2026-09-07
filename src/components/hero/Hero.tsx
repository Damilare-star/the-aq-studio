import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations/variants'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section
      id="hero"
      className="relative flex flex-col bg-[#050505] overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 0% 50%, rgba(139,92,246,0.07) 0%, transparent 65%)' }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
        style={{ height: '100px', background: 'linear-gradient(to top, #050505, transparent)' }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 flex-1 flex items-center container-wide"
        style={{
          paddingTop: 'calc(var(--navbar-h, 68px) + 2rem)',
          paddingBottom: '2rem',
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-10 lg:gap-16">

          {/* LEFT: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col max-w-[600px]"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-[10px] tracking-[0.28em] uppercase font-medium mb-5 text-[rgba(255,255,255,0.38)]"
            >
              AI-Powered&nbsp;&nbsp;•&nbsp;&nbsp;
              <span className="text-[#8B5CF6]">Cinematic</span>
              &nbsp;&nbsp;•&nbsp;&nbsp;Impactful
            </motion.p>

            {/* Headline — responsive, no forced line breaks */}
            <motion.h1
              variants={fadeUp}
              className="font-bold text-white leading-[1.08] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)' }}
            >
              Cinematic AI Commercials{' '}
              <span className="text-[#8B5CF6]">That Make Products</span>{' '}
              Impossible To Ignore.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[rgba(255,255,255,0.42)] leading-[1.75] mb-8"
              style={{ fontSize: 'clamp(0.82rem, 1vw, 0.95rem)', maxWidth: '420px' }}
            >
              Premium AI-powered advertising for beauty, fashion, food,
              technology and lifestyle brands.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button
                onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full cursor-pointer font-semibold text-white text-sm whitespace-nowrap"
                style={{
                  height: '48px',
                  paddingLeft: '1.6rem',
                  paddingRight: '1.6rem',
                  background: 'linear-gradient(135deg, #7c3aed, #8B5CF6, #a78bfa)',
                  boxShadow: '0 0 28px rgba(139,92,246,0.35)',
                  transition: 'box-shadow 0.3s, transform 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 48px rgba(139,92,246,0.60)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 28px rgba(139,92,246,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                View Work →
              </button>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full cursor-pointer font-semibold text-white text-sm whitespace-nowrap"
                style={{
                  height: '48px',
                  paddingLeft: '1.6rem',
                  paddingRight: '1.6rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  transition: 'border-color 0.3s, background 0.3s, transform 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.55)'; e.currentTarget.style.background = 'rgba(139,92,246,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Book a Call ↗
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Video — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hidden lg:block shrink-0"
            style={{ width: '240px' }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: '9/16',
                width: '240px',
                borderRadius: '20px',
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 60px rgba(139,92,246,0.14), 0 32px 60px rgba(0,0,0,0.6)',
              }}
            >
              <video
                ref={videoRef}
                src="/hero-reel.mp4"
                autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="AQ Studio showreel"
              />
              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, transparent 45%, rgba(5,5,5,0.55) 100%)' }}
              />
              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <div>
                  <p className="text-[9px] tracking-[0.20em] uppercase text-[rgba(255,255,255,0.35)] font-medium">Showreel</p>
                  <p className="text-[10px] text-[rgba(255,255,255,0.45)] mt-0.5">AQ Studio — 2024</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="block w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"
                  />
                  <span className="text-[9px] tracking-[0.16em] uppercase text-[rgba(255,255,255,0.28)]">Live</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="relative z-10 border-t border-[rgba(255,255,255,0.05)] overflow-hidden shrink-0"
      >
        <div className="flex items-center py-3 ticker-track">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="text-[rgba(255,255,255,0.32)] text-[9px] tracking-[0.26em] uppercase whitespace-nowrap flex items-center font-medium"
              style={{ gap: '2rem' }}
            >
              AI Commercial Production
              <span className="text-[#8B5CF6] mx-8">✦</span>
              Cinematic Brand Films
              <span className="text-[#8B5CF6] mx-8">✦</span>
              3–7 Day Delivery
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
