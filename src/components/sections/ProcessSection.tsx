import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    duration: '01 DAY',
    description: 'We understand your product, audience, positioning and the creative objective behind the campaign.',
    details: ['Product', 'Audience', 'Positioning', 'Objective'],
  },
  {
    number: '02',
    title: 'Concept',
    duration: '1–2 DAYS',
    description: 'We turn strategy into a visual direction through creative concepts, storyboards and cinematic references.',
    details: ['Creative Direction', 'Storyboards', 'Mood', 'Visual Language'],
  },
  {
    number: '03',
    title: 'Produce',
    duration: '3–5 DAYS',
    description: 'We generate, direct and assemble the commercial using AI, motion, editing, sound and cinematic production.',
    details: ['AI Generation', 'Direction', 'Motion', 'Sound'],
  },
  {
    number: '04',
    title: 'Refine',
    duration: '1–2 DAYS',
    description: 'Every frame is polished. We refine the edit, colour, pacing, sound and visual details until everything feels right.',
    details: ['Editing', 'Colour', 'Sound', 'Polish'],
  },
  {
    number: '05',
    title: 'Deliver',
    duration: '01 DAY',
    description: 'Your final commercial is exported, formatted and prepared for the platforms and placements that matter.',
    details: ['Final Master', 'Social Formats', 'Delivery', 'Launch'],
  },
]

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(2)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 30%'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-20 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/[0.035] blur-[150px]" />

      <div className="relative z-10 mx-auto" style={{ width: '90%' }}>

        {/* ── Header ── */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-purple-500" />
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-purple-400">
                Process
              </span>
            </div>
            <h2 className="max-w-[800px] text-[clamp(1.75rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
              From brief to
              <br />
              <span className="font-serif font-normal italic tracking-[-0.04em] text-zinc-500">
                final commercial.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            className="max-w-[470px] lg:ml-auto"
          >
            <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              A focused five-phase production process designed to move from creative
              direction to a finished commercial with clarity, speed and cinematic quality.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-zinc-800" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400">5 PHASES</span>
            </div>
          </motion.div>
        </div>

        {/* ── Process rows ── */}
        <div className="relative mt-20 lg:mt-28">

          <div className="space-y-0">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  tabIndex={0}
                  className="group relative outline-none"
                >
                  <div
                    className={`relative grid min-h-[140px] items-center border-t border-white/[0.08] py-7 transition-all duration-500 lg:grid-cols-[1fr_280px_70px] lg:gap-8 ${isActive ? 'border-white/[0.14]' : ''}`}
                  >
                    {/* Title + description + tags */}
                    <div>
                      <div className="flex items-center gap-4">
                        <h3
                          className={`text-lg font-medium tracking-[-0.03em] transition-all duration-500 sm:text-xl ${isActive ? 'translate-x-1 text-white' : 'text-white opacity-90'}`}
                        >
                          {step.title}
                        </h3>
                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-purple-500 transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                        />
                      </div>

                      <p
                        className={`mt-3 max-w-[600px] text-sm leading-6 transition-all duration-500 sm:text-[15px] ${isActive ? 'text-white opacity-75' : 'text-zinc-400 opacity-70'}`}
                      >
                        {step.description}
                      </p>

                      <div
                        className={`mt-4 flex flex-wrap gap-2 transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                      >
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] text-zinc-400"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="mt-7 flex items-center justify-between lg:mt-0 lg:justify-self-end">
                      <span
                        className={`text-[9px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-400'}`}
                      >
                        {step.duration}
                      </span>
                      <span className="lg:hidden">
                        <ArrowRight size={16} className="text-zinc-400" />
                      </span>
                    </div>

                    {/* Arrow button */}
                    <div className="hidden items-center justify-end lg:flex">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${isActive ? 'border-purple-500/40 bg-purple-500/10' : 'border-white/[0.08]'}`}
                      >
                        <ArrowUpRight
                          size={16}
                          className={`transition-all duration-500 ${isActive ? 'text-purple-400' : 'text-zinc-700'}`}
                        />
                      </div>
                    </div>
                  </div>

                </motion.div>
              )
            })}

            {/* Bottom border */}
            <div className="border-t border-white/[0.08]" />
          </div>
        </div>

        {/* ── Total turnaround ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-zinc-600">
              Total Turnaround
            </span>
            <span className="text-sm font-medium tracking-tight text-white sm:text-base">
              3–10 business days
            </span>
          </div>
          <p className="text-[10px] leading-5 text-zinc-400 sm:text-right">
            Larger campaigns and multi-asset
            <br className="hidden sm:block" />
            productions are scoped separately.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
