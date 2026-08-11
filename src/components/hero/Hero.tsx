import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations/variants'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden bg-[#050505]"
      style={{ height: '100dvh', minHeight: '600px', maxHeight: '1080px' }}
    >
      {/* ── Ambient glow ── */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none"
        style={{
          width: '55vw',
          height: '70vh',
          background: 'radial-gradient(ellipse at left center, rgba(139,92,246,0.055) 0%, transparent 65%)',
        }}
      />

      {/* ── Bottom fade into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '120px',
          background: 'linear-gradient(to top, #050505, transparent)',
          zIndex: 2,
        }}
      />

      {/* ══════════════════════════════════════════════
          MAIN CONTENT — fills remaining height between
          navbar (76px) and ticker (~40px)
      ══════════════════════════════════════════════ */}
      <div
        className="relative z-10 flex-1 flex items-center w-full mx-auto"
        style={{
          maxWidth: '1440px',
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
          paddingTop:   '80px',   /* clears navbar */
          paddingBottom: '16px',
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] items-center w-full h-full"
          style={{ gap: 'clamp(2rem, 4vw, 4.5rem)' }}
        >

          {/* ══════════════ LEFT ══════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-4 md:mb-5">
              <span className="text-[10px] tracking-[0.30em] uppercase font-medium text-[rgba(255,255,255,0.38)]">
                AI-Powered&nbsp;&nbsp;•&nbsp;&nbsp;Cinematic&nbsp;&nbsp;•&nbsp;&nbsp;Impactful
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-bold text-white leading-[1.08] tracking-tight mb-4 md:mb-5"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 4.2rem)', maxWidth: '560px' }}
            >
              Cinematic AI Commercials{' '}
              <span className="text-[#8B5CF6]">That Make Products</span>{' '}
              Impossible To Ignore.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[rgba(255,255,255,0.45)] font-light leading-[1.70] mb-6 md:mb-7"
              style={{ fontSize: 'clamp(0.85rem, 1vw, 0.95rem)', maxWidth: '460px' }}
            >
              Premium AI-powered advertising for beauty, fashion, food,
              technology and lifestyle brands.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Primary */}
              <motion.button
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                initial="rest"
                animate="rest"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
                transition={{ type: 'spring', stiffness: 380, damping: 20 }}
                className="group relative inline-flex items-center justify-center gap-3 rounded-full cursor-pointer select-none whitespace-nowrap overflow-hidden"
                style={{
                  height: '50px',
                  paddingLeft: '1.75rem',
                  paddingRight: '1.75rem',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #8B5CF6 50%, #a78bfa 100%)',
                  boxShadow: '0 0 28px rgba(139,92,246,0.30), 0 2px 12px rgba(0,0,0,0.4)',
                  fontSize: '0.775rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 42px rgba(139,92,246,0.50), 0 4px 20px rgba(0,0,0,0.5)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 28px rgba(139,92,246,0.30), 0 2px 12px rgba(0,0,0,0.4)' }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 60%)' }} />
                <span className="relative z-10">View Work</span>
                <motion.span
                  className="relative z-10 text-base leading-none"
                  variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >→</motion.span>
              </motion.button>

              {/* Secondary */}
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                initial="rest"
                animate="rest"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
                transition={{ type: 'spring', stiffness: 380, damping: 20 }}
                className="inline-flex items-center justify-center gap-3 rounded-full cursor-pointer select-none whitespace-nowrap"
                style={{
                  height: '50px',
                  paddingLeft: '1.75rem',
                  paddingRight: '1.75rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  fontSize: '0.775rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                  transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.60)'
                  e.currentTarget.style.background = 'rgba(139,92,246,0.08)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(139,92,246,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <span>Book a Call</span>
                <motion.span
                  className="text-[#8B5CF6] text-sm leading-none"
                  variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >↗</motion.span>
              </motion.button>
            </motion.div>

          </motion.div>

          {/* ══════════════ RIGHT — Video ══════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="hidden lg:flex items-center justify-center h-full"
          >
            {/*
              Video is constrained by the column height.
              We use a wrapper that fills available column height
              and limits the video to that — no overflow.
            */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                /* Fill column height minus top/bottom padding */
                height: 'min(68vh, 640px)',
                width: 'auto',
                aspectRatio: '9/16',
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 0 70px rgba(139,92,246,0.10), 0 0 0 1px rgba(139,92,246,0.07)',
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
                style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(5,5,5,0.45) 100%)' }}
              />

              {/* Corner label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <div>
                  <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.35)] font-medium">Showreel</p>
                  <p className="text-[10px] tracking-[0.12em] text-[rgba(255,255,255,0.55)] font-light mt-0.5">AQ Studio — 2024</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="block w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"
                  />
                  <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.30)]">Live</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Ticker strip ── */}
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
              className="text-[rgba(255,255,255,0.45)] text-[10px] tracking-[0.28em] uppercase whitespace-nowrap flex items-center font-medium"
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
