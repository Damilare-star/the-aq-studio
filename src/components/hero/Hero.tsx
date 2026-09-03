import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations/variants'

export default function Hero() {
  const videoRef = useRef(null)

  return (
    <section
      id="hero"
      className="relative flex flex-col bg-[#050505] overflow-hidden min-h-[100svh]"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 0% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
        style={{ height: '80px', background: 'linear-gradient(to top, #050505, transparent)' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col pt-[calc(64px+2rem)] md:pt-[calc(76px+3rem)] pb-8 container-wide">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 flex-1">

          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center flex-1 py-6 lg:py-0"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] tracking-[0.28em] uppercase font-medium text-[rgba(255,255,255,0.38)] mb-5"
            >
              {"Product Ads\u00a0\u00a0\u2022\u00a0\u00a0AI-Powered\u00a0\u00a0\u2022\u00a0\u00a0Cinematic"}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-bold text-white leading-[1.08] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.4rem)' }}
            >
              Cinematic AI Commercials{' '}
              <span className="text-[#8B5CF6]">That Make Products</span>{' '}
              Impossible To Ignore.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[rgba(255,255,255,0.45)] font-light leading-[1.75] mb-8 max-w-md text-sm sm:text-base"
            >
              Premium AI-powered product advertising for eCommerce, beauty,
              fashion, food, technology and lifestyle brands.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              {/* Primary CTA */}
              <button
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 rounded-full cursor-pointer select-none whitespace-nowrap font-semibold text-white text-sm tracking-[0.06em] px-7 min-h-[52px]"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #8B5CF6 50%, #a78bfa 100%)',
                  boxShadow: '0 0 28px rgba(139,92,246,0.30)',
                  transition: 'box-shadow 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 44px rgba(139,92,246,0.55)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 28px rgba(139,92,246,0.30)' }}
              >
                {"View Work \u2192"}
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 rounded-full cursor-pointer select-none whitespace-nowrap font-semibold text-white text-sm tracking-[0.06em] px-7 min-h-[52px]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
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
                Book a Call <span className="text-[#8B5CF6]">{"↗"}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Video — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hidden lg:flex items-center justify-center shrink-0"
            style={{ width: '240px', minWidth: '240px' }}
          >
            <div
              className="relative overflow-hidden rounded-2xl w-full"
              style={{
                aspectRatio: '9/16',
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 0 60px rgba(139,92,246,0.12), 0 0 0 1px rgba(139,92,246,0.06)',
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
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,5,5,0.50) 100%)' }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <div>
                  <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.35)] font-medium">Showreel</p>
                  <p className="text-[10px] tracking-[0.12em] text-[rgba(255,255,255,0.50)] mt-0.5">AQ Studio — 2024</p>
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
              className="text-[rgba(255,255,255,0.45)] text-[10px] tracking-[0.28em] uppercase whitespace-nowrap flex items-center font-medium"
              style={{ gap: '2rem' }}
            >
              AI Commercial Production
              <span className="text-[#8B5CF6] mx-8">{"✦"}</span>
              Cinematic Brand Films
              <span className="text-[#8B5CF6] mx-8">{"✦"}</span>
              Visual Campaigns
              <span className="text-[#8B5CF6] mx-8">{"✦"}</span>
              {"Beauty \u00b7 Fashion \u00b7 Food \u00b7 Tech"}
              <span className="text-[#8B5CF6] mx-8">{"✦"}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
