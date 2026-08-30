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
          MAIN CONTENT
      ══════════════════════════════════════════════ */}
      <div
        className="relative z-10 flex-1 flex items-center w-full mx-auto pt-20 md:pt-24 lg:pt-28 pb-4"
        style={{
          maxWidth: '1440px',
          paddingLeft:  'clamp(1.25rem, 5vw, 6rem)',
          paddingRight: 'clamp(1.25rem, 5vw, 6rem)',
        }}
      >
        <div
          className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto] lg:grid-cols-[45fr_55fr] items-center w-full h-full"
          style={{ gap: 'clamp(0.75rem, 3vw, 4.5rem)' }}
        >

          {/* ══════════════ LEFT ══════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-3 md:mb-5">
              <span className="text-[9px] sm:text-[10px] tracking-[0.20em] sm:tracking-[0.30em] uppercase font-medium text-[rgba(255,255,255,0.38)]">
                Product Ads&nbsp;•&nbsp;AI&nbsp;•&nbsp;Cinematic
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-bold text-white leading-[1.08] tracking-tight mb-3 md:mb-5"
              style={{ fontSize: 'clamp(1.35rem, 3.8vw, 4.2rem)', maxWidth: '560px' }}
            >
              Cinematic AI Commercials{' '}
              <span className="text-[#8B5CF6]">That Make Products</span>{' '}
              Impossible To Ignore.
            </motion.h1>

            {/* Description — hidden on small mobile to save space */}
            <motion.p
              variants={fadeUp}
              className="hidden sm:block text-[rgba(255,255,255,0.45)] font-light leading-[1.70] mb-6 md:mb-7"
              style={{ fontSize: 'clamp(0.75rem, 1vw, 0.95rem)', maxWidth: '460px' }}
            >
              Premium AI-powered product advertising for eCommerce, beauty, fashion, food, technology and lifestyle brands.
            </motion.p>

            {/* CTAs — stack on mobile, row on sm+ */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:flex-wrap sm:items-center"
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
                className="group relative inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none whitespace-nowrap overflow-hidden"
                style={{
                  height: 'clamp(40px, 5vh, 50px)',
                  paddingLeft: 'clamp(1rem, 2vw, 1.75rem)',
                  paddingRight: 'clamp(1rem, 2vw, 1.75rem)',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #8B5CF6 50%, #a78bfa 100%)',
                  boxShadow: '0 0 28px rgba(139,92,246,0.30), 0 2px 12px rgba(0,0,0,0.4)',
                  fontSize: 'clamp(0.65rem, 1.2vw, 0.775rem)',
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
                className="inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none whitespace-nowrap"
                style={{
                  height: 'clamp(40px, 5vh, 50px)',
                  paddingLeft: 'clamp(1rem, 2vw, 1.75rem)',
                  paddingRight: 'clamp(1rem, 2vw, 1.75rem)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  fontSize: 'clamp(0.65rem, 1.2vw, 0.775rem)',
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
            className="flex items-center justify-center h-full"
          >
            {/* Mobile: fixed narrow width keeps it small beside text.
                lg+: height-based so it fills the column. */}
            <div
              className="relative overflow-hidden rounded-xl lg:rounded-2xl hero-video-wrap"
              style={{
                width: 'clamp(90px, 28vw, 220px)',
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

              {/* Corner label — only shown on desktop */}
              <div className="hidden lg:flex absolute bottom-4 left-4 right-4 items-end justify-between pointer-events-none">
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
