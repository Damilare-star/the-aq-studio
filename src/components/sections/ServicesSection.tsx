import { useState } from 'react'
import { motion } from 'framer-motion'
import { services, type Service } from '../../data/services'
import { fadeUp, staggerContainer } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

// ─── Grain ────────────────────────────────────────────────────────────────────
const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

// ─── Service icon — unique SVG graphic per card ───────────────────────────────
function ServiceIcon({ paths, accentColor, hovered }: { paths: string[]; accentColor: string; hovered: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={hovered ? accentColor.replace(/[\d.]+\)$/, '0.9)') : 'rgba(255,255,255,0.22)'}
          strokeWidth={i === 0 ? 1.4 : 1}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{
            stroke: hovered
              ? accentColor.replace(/[\d.]+\)$/, '0.85)')
              : 'rgba(255,255,255,0.22)',
            strokeWidth: hovered ? (i === 0 ? 1.8 : 1.2) : (i === 0 ? 1.4 : 1),
          }}
          transition={{ duration: 0.35 }}
        />
      ))}
    </svg>
  )
}

// ─── Single service card ──────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-default flex flex-col"
      style={{
        background: '#0a0a0a',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.055)'}`,
        transition: 'border-color 0.35s ease',
      }}
    >
      {/* Background gradient — unique per service, reveals on hover */}
      <motion.div
        className={`absolute inset-0 bg-linear-to-br ${service.gradient}`}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
      />

      {/* Accent radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        style={{
          background: `radial-gradient(ellipse at 20% 20%, ${service.accentColor} 0%, transparent 60%)`,
        }}
      />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: GRAIN, backgroundSize: '160px 160px' }}
      />

      {/* Top accent line — slides in on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{ background: `linear-gradient(to right, transparent, ${service.accentColor.replace(/[\d.]+\)$/, '0.8)')}, transparent)` }}
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Card content */}
      <div className="relative z-10 p-8 flex flex-col flex-1">

        {/* Header row — number + icon */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-[9px] tracking-[0.24em] font-mono text-[rgba(255,255,255,0.20)]">
            {service.number}
          </span>
          <ServiceIcon
            paths={service.iconPaths}
            accentColor={service.accentColor}
            hovered={hovered}
          />
        </div>

        {/* Title */}
        <h3
          className="text-white font-semibold leading-tight mb-3 transition-colors duration-300"
          style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[rgba(255,255,255,0.42)] text-sm leading-[1.75] mb-6 flex-1">
          {service.description}
        </p>

        {/* Deliverables */}
        <div className="flex flex-wrap gap-2">
          {service.deliverables.map((d) => (
            <motion.span
              key={d}
              animate={{
                borderColor: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)',
                color: hovered ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.28)',
              }}
              transition={{ duration: 0.3 }}
              className="text-[9px] tracking-[0.14em] uppercase px-3 py-1.5 border"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              {d}
            </motion.span>
          ))}
        </div>

        {/* Bottom arrow — appears on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex items-center gap-2"
        >
          <span className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
          <span className="text-[#8B5CF6] text-sm">→</span>
        </motion.div>
      </div>
    </motion.article>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#050505] section-padding">
      <div className="container-wide">

        {/* ── Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
          <div>
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel>Services</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-white font-bold leading-[1.06] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Every service built
              <br />
              <span
                className="italic font-light text-[rgba(255,255,255,0.55)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                for impact.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="max-w-xs shrink-0">
            <p className="text-[rgba(255,255,255,0.38)] text-sm leading-relaxed mb-6">
              From concept to final delivery — we produce AI creative that performs.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase font-medium text-[rgba(255,255,255,0.45)] border border-[rgba(255,255,255,0.10)] px-6 py-3 hover:border-[rgba(139,92,246,0.45)] hover:text-white hover:bg-[rgba(139,92,246,0.06)] transition-all duration-300 cursor-pointer"
            >
              Discuss your project
              <span className="text-[#8B5CF6]">→</span>
            </button>
          </motion.div>
        </motion.div>

        {/* ── Services grid — 4 col desktop, 2 col tablet, 1 col mobile ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-[rgba(255,255,255,0.25)] text-xs tracking-wide max-w-md leading-relaxed">
            All services include creative direction, production, post-production and delivery.
            Turnaround from brief to final delivery: <span className="text-[rgba(255,255,255,0.45)]">2–4 weeks</span>.
          </p>
          <button
            onClick={() => document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[10px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.30)] hover:text-[#8B5CF6] transition-colors duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            See our process
            <span>→</span>
          </button>
        </motion.div>

      </div>
    </section>
  )
}
