import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { fadeUp, staggerContainer } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section id="testimonials" className="bg-[#050505] section-padding">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-14"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>Testimonials</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            What clients
            <br />
            <span
              className="italic font-light text-[rgba(255,255,255,0.55)]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              say.
            </span>
          </motion.h2>
        </motion.div>

        {/* Main testimonial display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Large quote mark */}
          <div
            className="absolute -top-6 left-0 text-[rgba(139,92,246,0.12)] select-none pointer-events-none"
            style={{ fontFamily: 'Georgia, serif', fontSize: '10rem', lineHeight: 1 }}
          >
            "
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 xl:gap-20 items-start">

            {/* Quote */}
            <div>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white font-light leading-[1.6] mb-10"
                  style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}
                >
                  "{current.quote}"
                </motion.blockquote>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`attr-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-[rgba(139,92,246,0.12)] border border-[rgba(139,92,246,0.20)] flex items-center justify-center shrink-0">
                    <span className="text-[#8B5CF6] text-xs font-semibold">
                      {current.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{current.author}</p>
                    <p className="text-[rgba(255,255,255,0.35)] text-xs tracking-wide mt-0.5">
                      {current.title}, {current.company}
                    </p>
                  </div>
                  <div className="ml-4 pl-4 border-l border-[rgba(255,255,255,0.08)]">
                    <p className="text-[rgba(255,255,255,0.25)] text-[10px] tracking-[0.16em] uppercase">
                      {current.industry}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation — right column: horizontal scroll on mobile, vertical on lg */}
            <div className="flex flex-row gap-3 overflow-x-auto lg:overflow-x-visible lg:flex-col lg:pt-2 pb-2 lg:pb-0"
              style={{ scrollbarWidth: 'none' }}
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`shrink-0 text-left px-6 py-5 border transition-all duration-300 cursor-pointer lg:shrink ${
                    i === active
                      ? 'border-[rgba(139,92,246,0.35)] bg-[rgba(139,92,246,0.07)]'
                      : 'border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)]'
                  }`}
                >
                  <p className={`text-xs font-medium transition-colors duration-300 ${i === active ? 'text-white' : 'text-[rgba(255,255,255,0.38)]'}`}>
                    {t.author}
                  </p>
                  <p className="text-[9px] tracking-[0.14em] uppercase text-[rgba(255,255,255,0.22)] mt-1">
                    {t.company}
                  </p>
                </button>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
