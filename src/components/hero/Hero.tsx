import { useRef } from 'react'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section id="hero" className="relative flex flex-col bg-[#050505] overflow-hidden min-h-[100svh]">

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 0% 40%, rgba(139,92,246,0.09) 0%, transparent 60%)' }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
        style={{ height: '120px', background: 'linear-gradient(to top, #050505 0%, transparent 100%)' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col container-wide pt-[calc(64px+3rem)] md:pt-[calc(76px+4rem)] pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 flex-1">

          {/* LEFT: Text */}
          <div className="flex flex-col justify-center flex-1 max-w-[640px]">

            {/* Eyebrow */}
            <motion.div custom={0} variants={reveal} initial="hidden" animate="visible" className="flex items-center gap-3 mb-7">
              <span className="w-6 h-px bg-[#8B5CF6]" />
              <span className="text-[10px] tracking-[0.30em] uppercase font-medium text-[rgba(255,255,255,0.35)]">
                AI-Powered Creative Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} variants={reveal} initial="hidden" animate="visible"
              className="font-bold text-white leading-[1.04] tracking-[-0.02em] mb-7"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              Cinematic AI Ads
              <br />
              <span className="italic font-light text-[rgba(255,255,255,0.40)]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                That Move Products.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2} variants={reveal} initial="hidden" animate="visible"
              className="text-[rgba(255,255,255,0.42)] font-light leading-[1.85] mb-8 max-w-[480px]"
              style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
            >
              Premium AI commercials for beauty, fashion, food, technology
              and lifestyle brands — delivered in days, not weeks.
            </motion.p>

            {/* Stats row */}
            <motion.div
              custom={3} variants={reveal} initial="hidden" animate="visible"
              className="flex items-center gap-8 mb-9 pb-9 border-b border-[rgba(255,255,255,0.07)]"
            >
              {[
                { value: '3-7',  label: 'Day delivery' },
                { value: '100%', label: 'AI-powered' },
                { value: '6+',   label: 'Industries' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-white font-bold leading-none mb-1.5" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)' }}>
                    {s.value}
                  </p>
                  <p className="text-[rgba(255,255,255,0.28)] text-[9px] tracking-[0.18em] uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div custom={4} variants={reveal} initial="hidden" animate="visible" className="flex flex-row flex-wrap gap-3">
              <button
                onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none whitespace-nowrap font-semibold text-white text-sm tracking-[0.04em]"
                style={{
                  height: '52px',
                  paddingLeft: '2rem',
                  paddingRight: '2rem',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #8B5CF6 50%, #a78bfa 100%)',
                  boxShadow: '0 0 32px rgba(139,92,246,0.30)',
                  transition: 'box-shadow 0.3s, transform 0.25s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 52px rgba(139,92,246,0.55)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 32px rgba(139,92,246,0.30)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                See Our Work
              </button>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none whitespace-nowrap font-semibold text-white text-sm tracking-[0.04em]"
                style={{
                  height: '52px',
                  paddingLeft: '2rem',
                  paddingRight: '2rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'border-color 0.3s, background 0.3s, transform 0.25s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.50)'; e.currentTarget.style.background = 'rgba(139,92,246,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Book a Call
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Video desktop only — iPhone 16 frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="hidden lg:flex items-center justify-center shrink-0"
            style={{ width: '300px' }}
          >
            {/* Outer glow */}
            <div className="relative" style={{ width: '300px' }}>
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '-20px',
                  background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* iPhone body */}
              <div
                className="relative"
                style={{
                  borderRadius: '52px',
                  background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #111 100%)',
                  padding: '10px',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.12), 0 40px 80px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                {/* Side buttons — left */}
                <div className="absolute pointer-events-none" style={{ left: '-3px', top: '100px', width: '3px', height: '36px', background: '#333', borderRadius: '2px 0 0 2px' }} />
                <div className="absolute pointer-events-none" style={{ left: '-3px', top: '148px', width: '3px', height: '64px', background: '#333', borderRadius: '2px 0 0 2px' }} />
                <div className="absolute pointer-events-none" style={{ left: '-3px', top: '224px', width: '3px', height: '64px', background: '#333', borderRadius: '2px 0 0 2px' }} />
                {/* Side button — right (power) */}
                <div className="absolute pointer-events-none" style={{ right: '-3px', top: '160px', width: '3px', height: '80px', background: '#333', borderRadius: '0 2px 2px 0' }} />

                {/* Screen bezel */}
                <div
                  style={{
                    borderRadius: '44px',
                    overflow: 'hidden',
                    background: '#000',
                    aspectRatio: '9/19.5',
                    position: 'relative',
                  }}
                >
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 pt-4 pb-1 pointer-events-none">
                    <span className="text-white text-[11px] font-semibold" style={{ letterSpacing: '-0.02em' }}>9:41</span>
                    <div className="flex items-center gap-1.5">
                      {/* Signal bars */}
                      <svg width="17" height="12" viewBox="0 0 17 12" fill="white" opacity="0.9">
                        <rect x="0" y="8" width="3" height="4" rx="0.5"/>
                        <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5"/>
                        <rect x="9" y="3" width="3" height="9" rx="0.5"/>
                        <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3"/>
                      </svg>
                      {/* Wifi */}
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="white" opacity="0.9">
                        <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                        <path d="M3.5 6.5a6.5 6.5 0 0 1 9 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                        <path d="M1 4a10 10 0 0 1 14 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
                      </svg>
                      {/* Battery */}
                      <div className="flex items-center gap-0.5">
                        <div style={{ width: '24px', height: '12px', border: '1.5px solid rgba(255,255,255,0.8)', borderRadius: '3px', padding: '2px', display: 'flex', alignItems: 'center' }}>
                          <div style={{ width: '75%', height: '100%', background: 'white', borderRadius: '1px' }} />
                        </div>
                        <div style={{ width: '2px', height: '6px', background: 'rgba(255,255,255,0.8)', borderRadius: '0 1px 1px 0' }} />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Island */}
                  <div
                    className="absolute z-20 pointer-events-none"
                    style={{
                      top: '12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '120px',
                      height: '34px',
                      background: '#000',
                      borderRadius: '20px',
                    }}
                  />

                  {/* Video */}
                  <video
                    ref={videoRef}
                    src="/hero-reel.mp4"
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label="AQ Studio showreel"
                  />

                  {/* Subtle vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)' }}
                  />

                  {/* Home indicator */}
                  <div
                    className="absolute bottom-3 left-1/2 pointer-events-none z-20"
                    style={{ transform: 'translateX(-50%)', width: '120px', height: '4px', background: 'rgba(255,255,255,0.50)', borderRadius: '2px' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 border-t border-[rgba(255,255,255,0.05)] overflow-hidden shrink-0"
      >
        <div className="flex items-center py-3 ticker-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[rgba(255,255,255,0.30)] text-[9px] tracking-[0.26em] uppercase whitespace-nowrap flex items-center font-medium" style={{ gap: '2rem' }}>
              AI Commercial Production
              <span className="text-[#8B5CF6] mx-8">✦</span>
              Cinematic Brand Films
              <span className="text-[#8B5CF6] mx-8">✦</span>
              3-7 Day Delivery
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
