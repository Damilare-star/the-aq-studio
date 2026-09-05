import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '../../data/projects'
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

// Drop your final commercial video into /public and update this path
const CASE_VIDEO_SRC = '/case-study-video.mp4'

export default function CaseStudySection() {
  const study = caseStudies[0]
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  // Pause when scrolled out of view
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  if (!study) return null

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) { v.pause(); setPlaying(false) }
    else { v.muted = false; v.play(); setPlaying(true) }
  }

  return (
    <section id="case-studies" className="bg-[#050505] section-padding">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-10 md:mb-12"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>Case Study</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-white font-bold leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}
          >
            {study.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-[rgba(255,255,255,0.45)] text-sm leading-[1.85] max-w-2xl italic"
          >
            {study.subheadline}
          </motion.p>
        </motion.div>

        {/* Client bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-6 sm:gap-8 mb-10 pb-8 border-b border-[rgba(255,255,255,0.06)]"
        >
          {[
            { label: 'Industry', value: study.industry },
            { label: 'Category', value: study.category },
            { label: 'Year', value: study.year },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.28)] mb-1">{item.label}</p>
              <p className="text-white text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">

          {/* Left column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {[
              { label: 'Challenge',          content: study.challenge },
              { label: 'Creative Direction', content: study.creativeDirection },
              { label: 'Execution',          content: study.execution },
            ].map((block) => (
              <motion.div key={block.label} variants={fadeLeft}>
                <p className="label-tag mb-4">{block.label}</p>
                <p className="text-[rgba(255,255,255,0.55)] text-sm leading-[1.85]">{block.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {/* Process */}
            <motion.div variants={fadeRight}>
              <p className="label-tag mb-4">Process</p>
              <ol className="space-y-4">
                {study.process.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[rgba(139,92,246,0.60)] text-[10px] font-mono tracking-widest mt-0.5 shrink-0">0{i + 1}</span>
                    <span className="text-[rgba(255,255,255,0.50)] text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Results */}
            <motion.div variants={fadeRight}>
              <p className="label-tag mb-4">Results</p>
              <ul className="space-y-3">
                {study.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#8B5CF6] mt-0.5 shrink-0 text-xs">✦</span>
                    <span className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Final Commercial video */}
            <motion.div variants={fadeRight}>
              <p className="label-tag mb-4">Final Commercial</p>
              <div
                className="relative overflow-hidden rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #0a0f02 0%, #111a04 50%, #050505 100%)',
                  border: '1px solid rgba(163,230,53,0.15)',
                }}
              >
                {/* Video element — plays when file is present */}
                <video
                  ref={videoRef}
                  src={CASE_VIDEO_SRC}
                  loop
                  playsInline
                  muted
                  className="w-full h-auto block"
                  onError={() => {/* video not added yet */}}
                />

                {/* Play/pause overlay */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer group"
                  aria-label={playing ? 'Pause' : 'Play final commercial'}
                >
                  {!playing && (
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-full border border-[rgba(163,230,53,0.40)] bg-[rgba(163,230,53,0.08)]"
                      style={{ boxShadow: '0 0 30px rgba(163,230,53,0.15)' }}
                    >
                      <span
                        className="block ml-1"
                        style={{
                          width: 0, height: 0,
                          borderTop: '9px solid transparent',
                          borderBottom: '9px solid transparent',
                          borderLeft: '16px solid rgba(163,230,53,0.80)',
                        }}
                      />
                    </div>
                  )}
                  {!playing && (
                    <span className="text-[10px] tracking-[0.24em] uppercase text-[rgba(255,255,255,0.35)]">
                      Watch Film
                    </span>
                  )}
                </button>

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <div>
                    <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.30)]">AQ Studio</p>
                    <p className="text-[10px] text-[rgba(255,255,255,0.45)] mt-0.5">Final Commercial — 2024</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="block w-1.5 h-1.5 rounded-full bg-[rgba(163,230,53,0.70)]"
                    />
                    <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.28)]">
                      {playing ? 'Playing' : 'Ready'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
