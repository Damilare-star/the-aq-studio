import { motion } from 'framer-motion'
import { caseStudies } from '../../data/projects'
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

export default function CaseStudySection() {
  const study = caseStudies[0]
  if (!study) return null

  return (
    <section id="case-studies" className="bg-[#050505] section-padding">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>Case Study</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-white font-bold leading-tight max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {study.headline}
          </motion.h2>
        </motion.div>

        {/* Client bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-8 mb-16 pb-10 border-b border-[rgba(255,255,255,0.06)]"
        >
          {[
            { label: 'Client', value: study.client },
            { label: 'Industry', value: study.industry },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.28)] mb-1">{item.label}</p>
              <p className="text-white text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {[
              { label: 'Challenge', content: study.challenge },
              { label: 'Creative Direction', content: study.creativeDirection },
              { label: 'Execution', content: study.execution },
            ].map((block) => (
              <motion.div key={block.label} variants={fadeLeft}>
                <p className="label-tag mb-4">{block.label}</p>
                <p className="text-[rgba(255,255,255,0.55)] text-sm leading-[1.8]">{block.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {/* Process */}
            <motion.div variants={fadeRight}>
              <p className="label-tag mb-6">Process</p>
              <ol className="space-y-4">
                {study.process.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[rgba(139,92,246,0.60)] text-[10px] font-mono tracking-widest mt-0.5 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-[rgba(255,255,255,0.50)] text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Results */}
            <motion.div variants={fadeRight}>
              <p className="label-tag mb-6">Results</p>
              <ul className="space-y-3">
                {study.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#8B5CF6] mt-0.5 shrink-0 text-xs">✦</span>
                    <span className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Final commercial placeholder */}
            <motion.div variants={fadeRight}>
              <p className="label-tag mb-4">Final Commercial</p>
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, #0a0612 0%, #1a0a2e 50%, #050505 100%)',
                  border: '1px solid rgba(139,92,246,0.15)',
                }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-[rgba(139,92,246,0.30)] bg-[rgba(139,92,246,0.08)] flex items-center justify-center mx-auto mb-3">
                    <span
                      className="ml-1"
                      style={{
                        width: 0, height: 0,
                        borderTop: '7px solid transparent',
                        borderBottom: '7px solid transparent',
                        borderLeft: '12px solid rgba(139,92,246,0.70)',
                        display: 'block',
                      }}
                    />
                  </div>
                  <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(139,92,246,0.45)]">
                    Final film — add video file
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
