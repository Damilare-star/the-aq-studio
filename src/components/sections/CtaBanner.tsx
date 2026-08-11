import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations/variants'

export default function CtaBanner() {
  return (
    <section className="bg-[#0D0D0D] border-y border-[rgba(255,255,255,0.06)] py-24">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-[rgba(255,255,255,0.30)] text-[10px] tracking-[0.3em] uppercase mb-6"
          >
            Ready to begin?
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-white font-light leading-tight mb-10"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)' }}
          >
            Your brand deserves{' '}
            <span
              className="italic"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              cinema.
            </span>
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs tracking-[0.16em] uppercase font-medium text-white bg-[rgba(139,92,246,0.12)] border border-[rgba(139,92,246,0.30)] px-8 py-3.5 hover:bg-[rgba(139,92,246,0.20)] hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer"
            >
              Start a Project
            </button>
            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs tracking-[0.16em] uppercase font-medium text-[rgba(255,255,255,0.40)] hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              View Portfolio
              <span className="text-[#8B5CF6]">→</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
