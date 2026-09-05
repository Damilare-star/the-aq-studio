import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, type Project } from '../../data/projects'
import { fadeUp, staggerContainer } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

// ─── All categories derived from data ────────────────────────────────────────
const ALL_CATEGORIES = ['All', 'AI Commercial', 'Luxury Campaign', 'Product Film', 'Beauty', 'Fashion', 'Food', 'Technology', 'Lifestyle']

// ─── Grain overlay (inline SVG data URI) ─────────────────────────────────────
const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

// ─── Single project card ──────────────────────────────────────────────────────
function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const [hovered, setHovered] = useState(false)

  // Aspect ratios per span type
  const aspectRatio =
    project.span === 'wide' ? '16/7' :
    project.span === 'tall' ? '3/4'  : '4/3'

  return (
    <article
      className="group relative overflow-hidden bg-[#0a0a0a] cursor-pointer"
      style={{ border: '1px solid rgba(255,255,255,0.05)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Thumbnail ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio }}>

        {/* Gradient visual */}
        <motion.div
          className={`absolute inset-0 bg-linear-to-br ${project.gradient}`}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Film grain texture */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN, backgroundSize: '220px 220px' }}
        />

        {/* Accent color wash — very subtle, unique per project */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${project.accentColor} 0%, transparent 60%)`,
            opacity: hovered ? 0.7 : 0.4,
            transition: 'opacity 0.55s ease',
          }}
        />

        {/* ── Top metadata bar ── */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-5 pointer-events-none">
          <span
            className="text-[9px] tracking-[0.24em] uppercase font-medium"
            style={{
              color: 'rgba(255,255,255,0.45)',
              background: 'rgba(5,5,5,0.55)',
              backdropFilter: 'blur(8px)',
              padding: '4px 10px',
            }}
          >
            {project.category}
          </span>
          <span className="text-[9px] tracking-[0.16em] text-[rgba(255,255,255,0.28)]">
            {project.year} · {project.duration}
          </span>
        </div>

        {/* ── Hover overlay ── */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.40) 50%, transparent 100%)' }}
        >
          {/* Title on hover */}
          <motion.div
            animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[rgba(255,255,255,0.45)] text-[10px] tracking-[0.2em] uppercase mb-1.5">
              {project.client}
            </p>
            <h3 className="text-white font-bold text-2xl tracking-[0.06em] leading-none mb-3">
              {project.title}
            </h3>
            <p className="text-[rgba(255,255,255,0.55)] text-xs leading-relaxed max-w-xs mb-4">
              {project.description}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)] border border-[rgba(255,255,255,0.14)] px-3 py-1.5">
                {project.industry}
              </span>
              <span className="text-[#8B5CF6] text-sm">↗</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Priority badge for first card */}
        {priority && (
          <div className="absolute bottom-5 right-5 pointer-events-none">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[rgba(139,92,246,0.70)] border border-[rgba(139,92,246,0.25)] px-2.5 py-1">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* ── Below-fold info strip (always visible) ── */}
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <h3 className="text-white font-semibold text-sm tracking-[0.08em] truncate">
            {project.title}
          </h3>
          <span className="text-[rgba(255,255,255,0.18)] hidden sm:block">·</span>
          <span className="text-[rgba(255,255,255,0.35)] text-[10px] tracking-[0.14em] uppercase hidden sm:block truncate">
            {project.client}
          </span>
        </div>
        <motion.span
          animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0, opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
          className="text-[#8B5CF6] text-sm shrink-0 ml-3"
        >
          ↗
        </motion.span>
      </div>
    </article>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function FeaturedProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects.slice(0, 6)
    : projects.filter((p) =>
        p.tags.includes(activeFilter) ||
        p.industry === activeFilter ||
        p.category === activeFilter
      ).slice(0, 6)

  return (
    <section id="work" className="bg-[#050505] section-padding">
      <div className="container-wide">

        {/* ── Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12"
        >
          <div>
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel>Featured Work</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-white font-bold leading-[1.06] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              AI video ads that make
              <br />
              <span
                className="italic font-light text-[rgba(255,255,255,0.55)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                products impossible to ignore.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-[rgba(255,255,255,0.38)] text-sm leading-relaxed max-w-[260px] shrink-0"
          >
            Each project built from a real brief, a precise creative direction, and a cinematic standard.
          </motion.p>
        </motion.div>

        {/* ── Filter tabs — horizontally scrollable on mobile ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex overflow-x-auto gap-2 mb-8 pb-1 sm:flex-wrap"
          style={{ scrollbarWidth: 'none' }}
        >
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="shrink-0 text-[10px] tracking-[0.16em] uppercase font-medium px-5 py-2.5 transition-all duration-250 cursor-pointer"
              style={{
                border: `1px solid ${activeFilter === cat ? 'rgba(139,92,246,0.50)' : 'rgba(255,255,255,0.09)'}`,
                color: activeFilter === cat ? '#8B5CF6' : 'rgba(255,255,255,0.38)',
                background: activeFilter === cat ? 'rgba(139,92,246,0.08)' : 'transparent',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Masonry-style grid ── */}
        {/*
          Layout logic:
          - Row 1: wide card (col-span-2) + tall card  →  3-col grid
          - Row 2: normal × 3
          - Row 3: wide card × 1 (col-span-2) + normal × 1
          We use CSS grid with explicit column spans via className.
        */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className={
                project.span === 'wide'
                  ? 'lg:col-span-2'
                  : project.span === 'tall'
                  ? 'lg:row-span-2'
                  : ''
              }
            >
              <ProjectCard project={project} priority={i === 0} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-[rgba(255,255,255,0.25)] text-sm tracking-wide">
              No projects in this category yet.
            </p>
          </div>
        )}

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.16em] uppercase font-medium text-[rgba(255,255,255,0.40)] border border-[rgba(255,255,255,0.10)] px-8 min-h-[52px] hover:border-[rgba(139,92,246,0.40)] hover:text-white hover:bg-[rgba(139,92,246,0.05)] transition-all duration-300 cursor-pointer"
          >
            Start Your Project
            <span className="text-[#8B5CF6]">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  )
}
