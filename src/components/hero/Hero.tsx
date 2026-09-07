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

          {/* RIGHT: Video desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="hidden lg:flex items-center justify-center shrink-0"
            style={{ width: '280px' }}
          >
            <div className="relative" style={{ width: '280px' }}>
              <div
                className="absolute rounded-[20px] pointer-events-none"
                style={{ inset: '-2px', background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(139,92,246,0.05))', filter: 'blur(1px)' }}
              />
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '9/16',
                  borderRadius: '18px',
                  background: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 0 80px rgba(139,92,246,0.15), 0 40px 80px rgba(0,0,0,0.6)',
                }}
              >
                <video
                  ref={videoRef}
                  src="/hero-reel.mp4"
                  autoPlay muted loop playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label="AQ Studio showreel"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.60) 100%)' }} />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[8px] tracking-[0.20em] uppercase text-[rgba(255,255,255,0.55)] font-medium" style={{ background: 'rgba(5,5,5,0.65)', backdropFilter: 'blur(8px)', padding: '4px 10px', borderRadius: '3px' }}>
                    Showreel
                  </span>
                  <div className="flex items-center gap-1.5" style={{ background: 'rgba(5,5,5,0.65)', backdropFilter: 'blur(8px)', padding: '4px 8px', borderRadius: '3px' }}>
                    <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="block w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    <span className="text-[8px] tracking-[0.14em] uppercase text-[rgba(255,255,255,0.40)]">Live</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none px-4 pb-4 pt-10" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.80) 0%, transparent 100%)' }}>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.35)] font-medium">AQ Studio</p>
                  <p className="text-[10px] text-[rgba(255,255,255,0.45)] mt-0.5">AI Commercial Production</p>
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
