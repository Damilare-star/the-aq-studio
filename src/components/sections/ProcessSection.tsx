import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { processSteps } from '../../data/process'
import { fadeUp, staggerContainer } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

const TOTAL = '3–10 business days'

export default function ProcessSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="process" className="bg-[#090909] section-padding">
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
                final commercial.
              </span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-[rgba(255,255,255,0.35)] text-sm leading-relaxed max-w-xs shrink-0"
          >
            A clear five-phase process from creative direction to final delivery.
          </motion.p>
        </motion.div>

        {/* ── Steps ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-0"
        >
          {processSteps.map((step, i) => {
            const isOpen = active === i
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Step row — click to expand */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full text-left cursor-pointer focus:outline-none group"
                >
                  <div className="grid grid-cols-[48px_1fr_auto] md:grid-cols-[64px_1fr_200px_auto] items-center gap-4 py-6">

                    {/* Number */}
                    <span
                      className="text-[10px] font-mono tracking-[0.22em] transition-colors duration-300"
                      style={{ color: isOpen ? '#8B5CF6' : 'rgba(255,255,255,0.25)' }}
                    >
                      {step.number}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-semibold tracking-tight transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                        color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.70)',
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description — hidden on mobile, shown md+ */}
                    <p
                      className="hidden md:block text-xs leading-relaxed transition-colors duration-300"
                      style={{ color: isOpen ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.28)' }}
                    >
                      {step.description}
                    </p>

                    {/* Duration + arrow */}
                    <div className="flex items-center gap-3 justify-end">
                      <span
                        className="text-[9px] tracking-[0.16em] uppercase border px-2.5 py-1 hidden sm:block transition-all duration-300"
                        style={{
                          color: isOpen ? 'rgba(139,92,246,0.90)' : 'rgba(255,255,255,0.22)',
                          borderColor: isOpen ? 'rgba(139,92,246,0.30)' : 'rgba(255,255,255,0.08)',
                        }}
                      >
                        {step.duration}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-sm"
                        style={{ color: isOpen ? '#8B5CF6' : 'rgba(255,255,255,0.25)' }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </button>

                {/* Expandable detail */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-[calc(48px+1rem)] md:pl-[calc(64px+1rem)] pr-4 md:pr-8">
                        {/* Show description on mobile here */}
                        <p className="md:hidden text-[rgba(255,255,255,0.45)] text-sm leading-[1.85] mb-3">
                          {step.description}
                        </p>
                        <p className="text-[rgba(255,255,255,0.55)] text-sm leading-[1.85] max-w-2xl">
                          {step.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Total turnaround bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-4">
            <span className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.28)]">
              Total turnaround
            </span>
            <span className="text-white text-sm font-semibold">{TOTAL}</span>
          </div>
          <p className="text-[rgba(255,255,255,0.22)] text-[11px] leading-relaxed">
            Larger campaigns and multi-asset productions are scoped separately.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
