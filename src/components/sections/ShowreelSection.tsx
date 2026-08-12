import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

export default function ShowreelSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.muted = false
      v.play()
      setPlaying(true)
    }
  }

  return (
    <section id="showreel" className="bg-[#050505] section-padding">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel>Featured Showreel</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-white font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              One reel.
              <br />
              <span
                className="italic font-light text-[rgba(255,255,255,0.60)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Every capability.
              </span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-[rgba(255,255,255,0.40)] text-sm leading-relaxed max-w-xs"
          >
            A 45-second showcase of cinematic AI product commercials built for brands across beauty, fashion, food, technology, and lifestyle.
          </motion.p>
        </motion.div>

        {/* Video wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: '16/9',
            background: '#090909',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            src="/hero-reel.mp4"
            loop
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay when paused */}
          {!playing && (
            <div className="absolute inset-0 bg-[rgba(5,5,5,0.45)] pointer-events-none" />
          )}

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,5,5,0.55) 100%)',
            }}
          />

          {/* Play / Pause button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            aria-label={playing ? 'Pause showreel' : 'Play showreel'}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
              className={`flex items-center justify-center w-16 h-16 rounded-full border transition-all duration-300 ${
                playing
                  ? 'border-[rgba(255,255,255,0.15)] bg-[rgba(5,5,5,0.5)] opacity-0 group-hover:opacity-100'
                  : 'border-[rgba(139,92,246,0.50)] bg-[rgba(139,92,246,0.12)]'
              }`}
              style={!playing ? { boxShadow: '0 0 36px rgba(139,92,246,0.22)' } : {}}
            >
              {playing ? (
                /* Pause icon */
                <span className="flex gap-1">
                  <span className="block w-1 h-5 bg-white rounded-full" />
                  <span className="block w-1 h-5 bg-white rounded-full" />
                </span>
              ) : (
                /* Play icon */
                <span
                  className="block ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '9px solid transparent',
                    borderBottom: '9px solid transparent',
                    borderLeft: '16px solid white',
                  }}
                />
              )}
            </motion.div>

            {/* Label under button when paused */}
            {!playing && (
              <span className="absolute mt-24 text-[10px] tracking-[0.24em] uppercase text-[rgba(255,255,255,0.35)]">
                Watch Showreel
              </span>
            )}
          </button>

          {/* Bottom meta */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between pointer-events-none">
            <div>
              <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.30)]">AQ Studio</p>
              <p className="text-[11px] tracking-[0.10em] text-[rgba(255,255,255,0.50)] font-light mt-0.5">2024 Showreel — 0:45</p>
            </div>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="block w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"
              />
              <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.28)]">HD</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
