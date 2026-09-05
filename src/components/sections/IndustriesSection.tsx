import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '../../data/projects'
import { fadeUp, staggerContainer } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

// ─── Industry definitions with their own visual identity ─────────────────────
const INDUSTRIES = [
  {
    name: 'Beauty',
    tagline: 'Aspiration rendered in light.',
    gradient: 'from-[#1a0a1e] via-[#0f0614] to-[#050505]',
    accent: 'rgba(244,114,182,0.45)',
    projectMatch: (p: Project) => p.industry === 'Beauty',
  },
  {
    name: 'Fashion',
    tagline: 'Editorial quality. Commercial speed.',
    gradient: 'from-[#0e0412] via-[#180a1e] to-[#050505]',
    accent: 'rgba(167,139,250,0.45)',
    projectMatch: (p: Project) => p.industry === 'Fashion',
  },
  {
    name: 'Food & Beverage',
    tagline: 'Every frame designed to trigger appetite.',
    gradient: 'from-[#0a0f02] via-[#111a04] to-[#050505]',
    accent: 'rgba(163,230,53,0.40)',
    projectMatch: (p: Project) => p.industry === 'Food',
  },
  {
    name: 'Technology',
    tagline: 'Brand worlds that feel inevitable.',
    gradient: 'from-[#02080f] via-[#050d1a] to-[#050505]',
    accent: 'rgba(56,189,248,0.40)',
    projectMatch: (p: Project) => p.industry === 'Technology',
  },
  {
    name: 'Luxury',
    tagline: 'Restraint is the loudest statement.',
    gradient: 'from-[#0a0a06] via-[#141410] to-[#050505]',
    accent: 'rgba(212,212,180,0.30)',
    projectMatch: (p: Project) => p.industry === 'Luxury',
  },
  {
    name: 'Lifestyle',
    tagline: 'Wellness and culture made aspirational.',
    gradient: 'from-[#031008] via-[#051a0c] to-[#050505]',
    accent: 'rgba(52,211,153,0.38)',
    projectMatch: (p: Project) => p.industry === 'Lifestyle',
  },
] as const

type IndustryName = typeof INDUSTRIES[number]['name']

// ─── Grain overlay ────────────────────────────────────────────────────────────
const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

// ─── Inline mini project card used inside the filtered drawer ────────────────
function MiniProjectCard({ project }: { project: Project }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative overflow-hidden cursor-pointer flex-shrink-0"
      style={{
        width: '240px',
        minWidth: '200px',
        border: '1px solid rgba(255,255,255,0.06)',
        background: '#0a0a0a',
      }}
    >
      {/* Visual thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <motion.div
          className={`absolute inset-0 bg-linear-to-br ${project.gradient}`}
          animate={{ scale: hov ? 1.05 : 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN, backgroundSize: '180px 180px' }}
        />
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${project.accentColor} 0%, transparent 65%)`,
            opacity: hov ? 0.75 : 0.45,
          }}
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ background: 'rgba(5,5,5,0.50)' }}
        >
          <span className="text-[9px] tracking-[0.24em] uppercase text-white border border-[rgba(255,255,255,0.25)] px-4 py-2">
            View Project
          </span>
        </motion.div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[8px] tracking-[0.20em] uppercase text-[rgba(255,255,255,0.45)]"
            style={{ background: 'rgba(5,5,5,0.60)', backdropFilter: 'blur(6px)', padding: '3px 8px' }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Info strip */}
      <div className="p-5">
        <p className="text-[rgba(255,255,255,0.28)] text-[9px] tracking-[0.18em] uppercase mb-1">
          {project.client}
        </p>
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-white font-semibold text-sm tracking-[0.06em]">
            {project.title}
          </h4>
          <motion.span
            animate={{ x: hov ? 3 : 0, y: hov ? -3 : 0 }}
            transition={{ duration: 0.22 }}
            className="text-[#8B5CF6] text-xs shrink-0"
          >
            ↗
          </motion.span>
        </div>
        <p className="text-[rgba(255,255,255,0.35)] text-[10px] leading-relaxed mt-1.5 line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function IndustriesSection() {
  const [selected, setSelected] = useState<IndustryName | null>(null)
  const [hovered, setHovered] = useState<IndustryName | null>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Scroll drawer into view when it opens
  useEffect(() => {
    if (selected && drawerRef.current) {
      setTimeout(() => {
        drawerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 120)
    }
  }, [selected])

  const selectedIndustry = INDUSTRIES.find((i) => i.name === selected)
  const relatedProjects = selected
    ? projects.filter(selectedIndustry!.projectMatch)
    : []

  const handleClick = (name: IndustryName) => {
    setSelected((prev) => (prev === name ? null : name))
  }

  return (
    <section id="industries" className="bg-[#0D0D0D] section-padding">
      <div className="container-wide">

        {/* ── Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>Industries</SectionLabel>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <h2
              className="text-white font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Every category.
              <br />
              <span
                className="italic font-light text-[rgba(255,255,255,0.55)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                One standard.
              </span>
            </h2>
            <p className="text-[rgba(255,255,255,0.35)] text-sm leading-relaxed max-w-xs shrink-0">
              Click any industry to explore
              <br />relevant AI commercial work.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Industry thumbnail grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {INDUSTRIES.map((industry, i) => {
            const isSelected = selected === industry.name
            const isHov = hovered === industry.name
            const projectCount = projects.filter(industry.projectMatch).length
            const isWide = industry.name === 'Luxury' || industry.name === 'Lifestyle'

            return (
              <motion.button
                key={industry.name}
                variants={fadeUp}
                onClick={() => handleClick(industry.name)}
                onMouseEnter={() => setHovered(industry.name)}
                onMouseLeave={() => setHovered(null)}
                className={`relative overflow-hidden text-left cursor-pointer focus:outline-none group ${isWide ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
                style={{
                  minHeight: isWide ? '200px' : '160px',
                  background: '#0D0D0D',
                  border: isSelected ? '1px solid rgba(139,92,246,0.40)' : '1px solid rgba(255,255,255,0.07)',
                }}
                aria-pressed={isSelected}
                aria-label={`Filter by ${industry.name}`}
              >
                {/* Gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${industry.gradient}`}
                  animate={{ opacity: isSelected ? 1 : isHov ? 0.85 : 0 }}
                  transition={{ duration: 0.45 }}
                />

                {/* Accent radial glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: isSelected ? 0.8 : isHov ? 0.6 : 0 }}
                  transition={{ duration: 0.45 }}
                  style={{
                    background: `radial-gradient(ellipse at 25% 35%, ${industry.accent} 0%, transparent 65%)`,
                  }}
                />

                {/* Grain */}
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
                  style={{ backgroundImage: GRAIN, backgroundSize: '180px 180px' }}
                />

                {/* Content */}
                <div className="relative z-10 p-5 sm:p-8 flex flex-col justify-between h-full" style={{ minHeight: '160px' }}>
                  <div>
                    {/* Number */}
                    <span className="text-[rgba(255,255,255,0.18)] text-[9px] font-mono tracking-widest block mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Industry name */}
                    <h3
                      className="text-white font-semibold leading-tight mb-2 transition-colors duration-300"
                      style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}
                    >
                      {industry.name}
                    </h3>

                    {/* Tagline — fades in on hover/select */}
                    <motion.p
                      animate={{ opacity: isSelected || isHov ? 1 : 0, y: isSelected || isHov ? 0 : 6 }}
                      transition={{ duration: 0.35 }}
                      className="text-[rgba(255,255,255,0.42)] text-[11px] leading-relaxed"
                    >
                      {industry.tagline}
                    </motion.p>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-5 flex items-center justify-between">
                    {/* Project count */}
                    <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.28)]">
                      {projectCount > 0 ? `${projectCount} project${projectCount !== 1 ? 's' : ''}` : 'Coming soon'}
                    </span>

                    {/* Arrow / close indicator */}
                    <motion.span
                      animate={{
                        rotate: isSelected ? 45 : 0,
                        color: isSelected ? '#8B5CF6' : 'rgba(255,255,255,0.30)',
                      }}
                      transition={{ duration: 0.25 }}
                      className="text-sm leading-none"
                    >
                      ↗
                    </motion.span>
                  </div>
                </div>

                {/* Selected bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B5CF6]"
                  animate={{ scaleX: isSelected ? 1 : 0 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.button>
            )
          })}
        </motion.div>

        {/* ── Inline project drawer ── */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected}
              ref={drawerRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="pt-10 pb-2">

                {/* Drawer header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="label-tag mb-2 block">
                      {selected}
                    </span>
                    <p className="text-[rgba(255,255,255,0.38)] text-sm">
                      {relatedProjects.length > 0
                        ? `${relatedProjects.length} project${relatedProjects.length !== 1 ? 's' : ''} in this category`
                        : 'New projects coming soon'}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.35)] hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Close
                    <span className="text-sm">✕</span>
                  </button>
                </div>

                {relatedProjects.length > 0 ? (
                  /* Horizontal scrolling project strip */
                  <div className="flex gap-4 overflow-x-auto pb-6" style={{ scrollbarWidth: 'none' }}>
                    <AnimatePresence mode="popLayout">
                      {relatedProjects.map((project) => (
                        <MiniProjectCard key={project.id} project={project} />
                      ))}
                    </AnimatePresence>

                    {/* "See all in portfolio" card */}
                    <motion.button
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: relatedProjects.length * 0.08, duration: 0.4 }}
                      onClick={() => {
                        setSelected(null)
                        document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="flex-shrink-0 flex flex-col items-center justify-center gap-3 cursor-pointer group"
                      style={{
                        width: '140px',
                        aspectRatio: '4/3',
                        border: '1px solid rgba(139,92,246,0.20)',
                        background: 'rgba(139,92,246,0.04)',
                        alignSelf: 'flex-start',
                      }}
                    >
                      <span
                        className="text-[#8B5CF6] text-2xl group-hover:scale-110 transition-transform duration-300"
                      >
                        →
                      </span>
                      <span className="text-[9px] tracking-[0.20em] uppercase text-[rgba(255,255,255,0.35)] text-center px-4 leading-relaxed">
                        View all<br />work
                      </span>
                    </motion.button>
                  </div>
                ) : (
                  /* Empty state */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-16 flex flex-col items-center gap-4"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        border: '1px solid rgba(139,92,246,0.20)',
                        background: 'rgba(139,92,246,0.05)',
                      }}
                    >
                      <span className="text-[#8B5CF6] opacity-50 text-xl">✦</span>
                    </div>
                    <p className="text-[rgba(255,255,255,0.30)] text-sm text-center max-w-xs leading-relaxed">
                      We're actively producing work in this space.
                      <br />
                      <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[#8B5CF6] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                      >
                        Get in touch
                      </button>
                      {' '}to discuss your project.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
