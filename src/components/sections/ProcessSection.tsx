import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { processSteps } from '../../data/process'
import { fadeUp, staggerContainer } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

// Total duration label
const TOTAL = '2–4 weeks'

export default function ProcessSection() {
  const [active, setActive] = useState(0)
  const step = processSteps[active]

  return (
    <section id="process" className="bg-[#090909] section-padding overflow-hidden">
      <div className="container-wide">

        {/* ── Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <div>
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel>Process</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-white font-bold leading-[1.06] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              From brief to
              <br />
              <span
                className="italic font-light text-[rgba(255,255,255,0.55)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                campaign in {TOTAL}.
              </span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-[rgba(255,255,255,0.35)] text-sm leading-relaxed max-w-xs shrink-0"
          >
            Five phases. No surprises.
            <br />A process designed so every decision has a reason.
          </motion.p>
        </motion.div>

        {/* ── Main layout: step selector left + detail right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-0 lg:gap-px bg-transparent lg:bg-[rgba(255,255,255,0.05)]">

          {/* ── LEFT: step list ── */}
          <div className="flex flex-col">
            {processSteps.map((s, i) => {
              const isActive = i === active
              return (
                <motion.button
                  key={s.number}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                  className="relative text-left group cursor-pointer focus:outline-none"
                  style={{
                    background: isActive ? 'rgba(139,92,246,0.06)' : 'transparent',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    transition: 'background 0.35s ease',
                  }}
                  aria-pressed={isActive}
                >
                  {/* Active left bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8B5CF6]"
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    style={{ originY: 0.5 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />

                  <div className="px-8 py-8 flex items-center gap-6">
                    {/* Number */}
                    <span
                      className="text-[10px] font-mono tracking-[0.22em] shrink-0 transition-colors duration-300"
                      style={{ color: isActive ? '#8B5CF6' : 'rgba(255,255,255,0.20)' }}
                    >
                      {s.number}
                    </span>

                    {/* Title + description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3">
                        <h3
                          className="font-semibold tracking-tight transition-colors duration-300"
                          style={{
                            fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
                            color: isActive ? '#ffffff' : 'rgba(255,255,255,0.50)',
                          }}
                        >
                          {s.title}
                        </h3>
                        <span
                          className="text-[9px] tracking-[0.16em] uppercase border px-2 py-0.5 transition-all duration-300"
                          style={{
                            color: isActive ? 'rgba(139,92,246,0.80)' : 'rgba(255,255,255,0.18)',
                            borderColor: isActive ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.07)',
                          }}
                        >
                          {s.duration}
                        </span>
                      </div>
                      <p
                        className="text-xs leading-relaxed mt-1 transition-colors duration-300"
                        style={{ color: isActive ? 'rgba(255,255,255,0.50)' : 'rgba(255,255,255,0.28)' }}
                      >
                        {s.description}
                      </p>
                    </div>

                    {/* Chevron */}
                    <motion.span
                      animate={{ x: isActive ? 0 : -4, opacity: isActive ? 1 : 0.25 }}
                      transition={{ duration: 0.25 }}
                      className="text-[#8B5CF6] text-sm shrink-0"
                    >
                      →
                    </motion.span>
                  </div>
                </motion.button>
              )
            })}

            {/* Total bar */}
            <div
              className="px-8 py-5 flex items-center justify-between mt-auto"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <span className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.25)]">
                Total turnaround
              </span>
              <span className="text-white text-sm font-semibold">{TOTAL}</span>
            </div>
          </div>

          {/* ── RIGHT: detail panel ── */}
          <div
            className="relative bg-[#050505] flex flex-col overflow-hidden"
            style={{ minHeight: '460px' }}
          >
            {/* Large background verb — decorative */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              aria-hidden="true"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={step.verb}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-bold uppercase tracking-tighter text-[rgba(255,255,255,0.025)]"
                  style={{ fontSize: 'clamp(6rem, 14vw, 11rem)', lineHeight: 1 }}
                >
                  {step.verb}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Accent glow */}
            <AnimatePresence>
              <motion.div
                key={`glow-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.08) 0%, transparent 60%)',
                }}
              />
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-12 flex-1">

              {/* Step indicator dots */}
              <div className="flex items-center gap-2 mb-10">
                {processSteps.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActive(i)}
                    className="cursor-pointer focus:outline-none"
                    animate={{
                      width: i === active ? 24 : 6,
                      background: i === active ? '#8B5CF6' : 'rgba(255,255,255,0.18)',
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: 4, borderRadius: 2 }}
                    aria-label={`Step ${i + 1}`}
                  />
                ))}
              </div>

              {/* Main copy */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 flex flex-col justify-center"
                >
                  <span className="text-[#8B5CF6] text-[10px] tracking-[0.28em] uppercase font-mono mb-5 block">
                    {step.number} — {step.title}
                  </span>

                  <h3
                    className="text-white font-bold leading-tight mb-5"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
                  >
                    {step.description}
                  </h3>

                  <p className="text-[rgba(255,255,255,0.45)] text-sm leading-[1.85] max-w-sm">
                    {step.detail}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Bottom nav */}
              <div className="flex items-center justify-between mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <button
                  onClick={() => setActive((p) => Math.max(0, p - 1))}
                  disabled={active === 0}
                  className="text-[10px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.28)] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer flex items-center gap-2"
                >
                  ← Prev
                </button>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.20)]">
                  {active + 1} / {processSteps.length}
                </span>
                <button
                  onClick={() => setActive((p) => Math.min(processSteps.length - 1, p + 1))}
                  disabled={active === processSteps.length - 1}
                  className="text-[10px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.28)] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer flex items-center gap-2"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom flow diagram — decorative horizontal timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex items-center gap-0 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {processSteps.map((s, i) => (
            <div key={s.number} className="flex items-center flex-shrink-0">
              {/* Node */}
              <button
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-2.5 cursor-pointer group focus:outline-none"
              >
                <motion.div
                  animate={{
                    background: i === active ? '#8B5CF6' : 'rgba(255,255,255,0.08)',
                    borderColor: i === active ? '#8B5CF6' : 'rgba(255,255,255,0.12)',
                    scale: i === active ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-9 h-9 rounded-full border flex items-center justify-center"
                >
                  <span
                    className="text-[9px] font-mono tracking-wide"
                    style={{ color: i === active ? '#fff' : 'rgba(255,255,255,0.30)' }}
                  >
                    {s.number}
                  </span>
                </motion.div>
                <span
                  className="text-[9px] tracking-[0.16em] uppercase whitespace-nowrap transition-colors duration-300"
                  style={{ color: i === active ? 'rgba(255,255,255,0.70)' : 'rgba(255,255,255,0.25)' }}
                >
                  {s.title}
                </span>
              </button>

              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div className="flex-1 mx-3 flex items-center" style={{ minWidth: '48px' }}>
                  <motion.div
                    className="h-px flex-1"
                    animate={{
                      background: i < active
                        ? 'rgba(139,92,246,0.60)'
                        : 'rgba(255,255,255,0.08)',
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <span
                    className="text-[8px] mx-1 transition-colors duration-300"
                    style={{ color: i < active ? 'rgba(139,92,246,0.60)' : 'rgba(255,255,255,0.12)' }}
                  >
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
