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
      {/* Full-screen background video */}
      <video
        ref={videoRef}
        src="/hero-reel.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{ 
          zIndex: 1,
          objectFit: 'cover',
          objectPosition: 'center 30%',
        }}
        aria-label="AQ Studio showreel"
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
          zIndex: 2,
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ 
          height: '150px', 
          background: 'linear-gradient(to top, #050505, transparent)',
          zIndex: 2,
        }}
      />

      {/* ── Centered Content ── */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center container-wide"
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl px-4"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] tracking-[0.20em] uppercase font-medium mb-4 sm:mb-5 md:mb-6 text-[rgba(255,255,255,0.70)] whitespace-nowrap"
          >
            AI-Powered&nbsp;&nbsp;•&nbsp;&nbsp;<span className="text-[#8B5CF6]">Cinematic</span>
          </motion.p>

          {/* Headline — centered, large, smartwatch optimized */}
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.15] tracking-tight mb-5 sm:mb-6 md:mb-8"
            style={{ fontSize: 'clamp(1.2rem, 6vw, 4rem)' }}
          >
            Cinematic AI Commercials
            <br />
            <span className="text-[#8B5CF6]">
              That Make Products
              <br />
              Impossible To Ignore.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-[rgba(255,255,255,0.80)] leading-[1.6] mb-8 sm:mb-12 md:mb-14 max-w-2xl px-2"
            style={{ fontSize: 'clamp(0.75rem, 2vw, 1.1rem)' }}
          >
            Premium AI-powered advertising for beauty, fashion, food, technology and lifestyle brands.
          </motion.p>

          {/* CTAs — stacked on mobile, side-by-side on desktop */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch lg:items-center justify-center w-full lg:w-auto mt-4"
          >
            <button
              onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 cursor-pointer font-semibold text-white whitespace-nowrap w-full lg:w-auto"
              style={{
                height: '52px',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                background: 'linear-gradient(135deg, #7c3aed, #8B5CF6, #a78bfa)',
                boxShadow: '0 0 30px rgba(139,92,246,0.5)',
                transition: 'box-shadow 0.3s, transform 0.2s',
                borderRadius: '0',
                marginTop: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 50px rgba(139,92,246,0.7)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.5)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              View Work →
            </button>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 cursor-pointer font-semibold text-white whitespace-nowrap w-full lg:w-auto"
              style={{
                height: '52px',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s, background 0.3s, transform 0.2s',
                borderRadius: '0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.70)'
                e.currentTarget.style.background = 'rgba(139,92,246,0.15)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Book a Call ↗
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="relative z-10 border-t border-[rgba(255,255,255,0.15)] overflow-hidden shrink-0 bg-black/40 backdrop-blur-sm"
      >
        <div className="flex items-center py-3 ticker-track">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="text-[rgba(255,255,255,0.50)] text-[9px] tracking-[0.26em] uppercase whitespace-nowrap flex items-center font-medium"
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
