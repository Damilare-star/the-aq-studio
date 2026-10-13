import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '../../data/projects'
import { fadeUp, staggerContainer } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

// ─── Video type with individual descriptions ──────────────────────────────────
type VideoWithDescription = {
  path: string
  description: string
}

// ─── Industry definitions ─────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    name: 'Beauty',
    tagline: 'Aspiration rendered in light.',
    gradient: 'from-[#1a0a1e] via-[#0f0614] to-[#050505]',
    accent: 'rgba(244,114,182,0.45)',
    thumbnail: '/beauty%20tumbnail.jpeg',
    videos: [
      {
        path: '/beauty%201.mp4',
        description: 'A beauty commercial for TRP Face Serum, built around the connection between everyday rituals, natural ingredients, and radiant skin. Warm cinematic lighting, rich botanical details, and intimate lifestyle moments give the product a natural place within the story, while carefully composed product shots keep the serum at the centre of attention. The creative direction brings together lifestyle storytelling and premium product presentation to create a beauty campaign that feels warm, aspirational, and commercially appealing.',
      }
    ],
    projectMatch: (p: Project) => p.industry === 'Beauty',
  },
  {
    name: 'Fashion',
    tagline: 'Editorial quality. Commercial speed.',
    gradient: 'from-[#0e0412] via-[#180a1e] to-[#050505]',
    accent: 'rgba(167,139,250,0.45)',
    thumbnail: null as string | null, // Add your thumbnail path here
    videos: [] as VideoWithDescription[], // Add your video paths here
    projectMatch: (p: Project) => p.industry === 'Fashion',
  },
  {
    name: 'Food & Beverage',
    tagline: 'Every frame designed to trigger appetite.',
    gradient: 'from-[#0a0f02] via-[#111a04] to-[#050505]',
    accent: 'rgba(163,230,53,0.40)',
    thumbnail: '/oat.jpeg',
    videos: [
      {
        path: '/case-study-video.mp4',
        description: 'BLOOM & OATS — Talking Head Commercial Series. Brand: Fictional organic oat milk brand, DTC-focused. Challenge: In a crowded plant-based milk category, most brands either hide behind lifestyle imagery or lean too hard on environmental messaging. Bloom & Oats needed a voice — literally and figuratively — that felt genuine, conversational, and human. Solution: A talking-head format built around an authentic Nigerian woman host who speaks directly to camera with the warmth and specificity of a friend sharing a discovery, not a corporate spokesperson reading a brief. The format strips away production noise — no dramatic B-roll, no manipulative music cues — just presence, clarity, and the product itself. The Approach: Shot in intimate warm lighting (soft home/kitchen setting), single locked camera, minimal cuts, maximum eye contact, script written as natural speech, not ad-copy, product featured casually but consistently in frame. Tone: conversational educator, not salesperson.',
      },
      {
        path: '/food%20and%20beverage%201.mp4',
        description: '', // Add description for video 2
      },
      {
        path: '/food%20and%20beverage%202.mp4',
        description: '', // Add description for video 3
      },
      {
        path: '/food%20and%20beverage%203.mp4',
        description: '', // Add description for video 4
      },
    ],
    projectMatch: (p: Project) => p.industry === 'Food',
  },
  {
    name: 'Technology',
    tagline: 'Brand worlds that feel inevitable.',
    gradient: 'from-[#02080f] via-[#050d1a] to-[#050505]',
    accent: 'rgba(56,189,248,0.40)',
    thumbnail: null as string | null, // Add your thumbnail path here
    videos: [] as VideoWithDescription[], // Add your video paths here
    projectMatch: (p: Project) => p.industry === 'Technology',
  },
  {
    name: 'Luxury',
    tagline: 'Restraint is the loudest statement.',
    gradient: 'from-[#0a0a06] via-[#141410] to-[#050505]',
    accent: 'rgba(212,212,180,0.30)',
    thumbnail: null as string | null, // Add your thumbnail path here
    videos: [] as VideoWithDescription[], // Add your video paths here
    projectMatch: (p: Project) => p.industry === 'Luxury',
  },
  {
    name: 'Lifestyle',
    tagline: 'Wellness and culture made aspirational.',
    gradient: 'from-[#031008] via-[#051a0c] to-[#050505]',
    accent: 'rgba(52,211,153,0.38)',
    thumbnail: null as string | null, // Add your thumbnail path here
    videos: [] as VideoWithDescription[], // Add your video paths here
    projectMatch: (p: Project) => p.industry === 'Lifestyle',
  },
] as const

type IndustryName = typeof INDUSTRIES[number]['name']

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

// ─── YouTube-style video modal ────────────────────────────────────────────────
function VideoModal({ 
  videos, 
  industryName, 
  onClose 
}: { 
  videos: VideoWithDescription[]
  industryName: string
  onClose: () => void 
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { 
      if (e.key === 'Escape') onClose()
      // Spacebar to play/pause
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        const video = videoRef.current
        if (video) {
          if (video.paused) {
            video.play()
          } else {
            video.pause()
          }
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // When switching video, replay and reset description
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }
    setShowFullDescription(false)
  }, [activeIndex])

  const currentVideo = videos[activeIndex]
  
  // Truncate description to ~2 lines (~14 words, ~7 words per line)
  const words = currentVideo.description.split(' ')
  const shouldTruncate = words.length > 14
  const truncatedDescription = shouldTruncate && !showFullDescription 
    ? words.slice(0, 14).join(' ') + '...'
    : currentVideo.description

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[200] overflow-y-auto flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full flex flex-col items-center py-8 px-4"
          style={{ maxWidth: '800px' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[rgba(255,255,255,0.60)] hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase z-10"
          >
            Close ✕
          </button>

          {/* Main video */}
          <div className="relative w-full overflow-hidden rounded-2xl mb-6" style={{ border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 0 80px rgba(139,92,246,0.12), 0 40px 80px rgba(0,0,0,0.8)' }}>
            <video
              ref={videoRef}
              src={currentVideo.path}
              controls
              playsInline
              autoPlay
              className="w-full h-auto block bg-black"
            />
          </div>

          {/* Video info section - only show title if multiple videos */}
          {currentVideo.description && (
            <div className="w-full mb-6">
              {videos.length > 1 && (
                <h3 className="text-white text-lg font-semibold mb-2">{industryName} — Film {activeIndex + 1}</h3>
              )}
              <p className="text-[rgba(255,255,255,0.60)] text-sm leading-relaxed">
                {truncatedDescription}
                {shouldTruncate && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="ml-2 text-[rgba(139,92,246,0.80)] hover:text-[#8B5CF6] transition-colors cursor-pointer"
                  >
                    {showFullDescription ? 'See less' : 'See more'}
                  </button>
                )}
              </p>
            </div>
          )}

          {/* Video selector tabs */}
          {videos.length > 1 && (
            <div className="w-full mb-6">
              <h4 className="text-[rgba(255,255,255,0.70)] text-xs tracking-[0.14em] uppercase mb-3 font-semibold">All Films ({videos.length})</h4>
              <div className="flex gap-2 flex-wrap" style={{ marginTop: '16px', marginBottom: '16px' }}>
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="cursor-pointer transition-all duration-200"
                    style={{
                      padding: '8px 18px',
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: i === activeIndex ? '#fff' : 'rgba(255,255,255,0.60)',
                      border: `1.5px solid ${i === activeIndex ? 'rgba(139,92,246,0.70)' : 'rgba(255,255,255,0.25)'}`,
                      background: i === activeIndex ? 'rgba(139,92,246,0.20)' : 'rgba(0,0,0,0.60)',
                      borderRadius: '6px',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    Film {i + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Related videos placeholder */}
          <div className="w-full">
            <h4 className="text-[rgba(255,255,255,0.70)] text-xs tracking-[0.14em] uppercase mb-4 font-semibold">Related Videos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Placeholder for future related videos */}
              <div 
                className="aspect-video rounded-lg border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center"
              >
                <p className="text-[rgba(255,255,255,0.30)] text-xs">Coming Soon</p>
              </div>
              <div 
                className="aspect-video rounded-lg border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center"
              >
                <p className="text-[rgba(255,255,255,0.30)] text-xs">Coming Soon</p>
              </div>
              <div 
                className="aspect-video rounded-lg border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center"
              >
                <p className="text-[rgba(255,255,255,0.30)] text-xs">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Label */}
          <div className="flex items-center gap-3 mt-6">
            <span className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.65)] font-semibold">AQ Studio</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(139,92,246,0.70)]" />
            <span className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.65)] font-semibold">{industryName}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Mini project card ────────────────────────────────────────────────────────
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
      style={{ width: '240px', minWidth: '200px', border: '1px solid rgba(255,255,255,0.06)', background: '#0a0a0a' }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <motion.div className={`absolute inset-0 bg-linear-to-br ${project.gradient}`} animate={{ scale: hov ? 1.05 : 1 }} transition={{ duration: 0.55 }} />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: '180px 180px' }} />
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500" style={{ background: `radial-gradient(ellipse at 30% 40%, ${project.accentColor} 0%, transparent 65%)`, opacity: hov ? 0.75 : 0.45 }} />
        <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ opacity: hov ? 1 : 0 }} transition={{ duration: 0.25 }} style={{ background: 'rgba(5,5,5,0.50)' }}>
          <span className="text-[9px] tracking-[0.24em] uppercase text-white border border-[rgba(255,255,255,0.25)] px-4 py-2">View Project</span>
        </motion.div>
        <div className="absolute top-3 left-3">
          <span className="text-[8px] tracking-[0.20em] uppercase text-[rgba(255,255,255,0.45)]" style={{ background: 'rgba(5,5,5,0.60)', backdropFilter: 'blur(6px)', padding: '3px 8px' }}>
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[rgba(255,255,255,0.28)] text-[9px] tracking-[0.18em] uppercase mb-1">{project.client}</p>
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-white font-semibold text-sm tracking-[0.06em]">{project.title}</h4>
          <motion.span animate={{ x: hov ? 3 : 0, y: hov ? -3 : 0 }} transition={{ duration: 0.22 }} className="text-[#8B5CF6] text-xs shrink-0">↗</motion.span>
        </div>
        <p className="text-[rgba(255,255,255,0.35)] text-[10px] leading-relaxed mt-1.5 line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function IndustriesSection() {
  const [selected, setSelected] = useState<IndustryName | null>(null)
  const [hovered, setHovered] = useState<IndustryName | null>(null)
  const [modalData, setModalData] = useState<{ videos: VideoWithDescription[]; name: string } | null>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selected && drawerRef.current) {
      setTimeout(() => { drawerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) }, 120)
    }
  }, [selected])

  const selectedIndustry = INDUSTRIES.find((i) => i.name === selected)
  const relatedProjects = selected ? projects.filter(selectedIndustry!.projectMatch) : []

  const handleClick = (name: IndustryName) => {
    const industry = INDUSTRIES.find((i) => i.name === name)
    // If this industry has a video — open the modal instead of drawer
    if (industry?.videos.length) {
      setModalData({ 
        videos: [...industry.videos], 
        name: industry.name
      })
      return
    }
    setSelected((prev) => (prev === name ? null : name))
  }

  return (
    <section id="industries" className="bg-[#0D0D0D] section-padding">
      <div className="container-wide">

        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-12">
          <motion.div variants={fadeUp} className="mb-4"><SectionLabel>Industries</SectionLabel></motion.div>
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
              Every category.
              <br />
              <span className="italic font-light text-[rgba(255,255,255,0.55)]" style={{ fontFamily: 'Playfair Display, serif' }}>One standard.</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.35)] text-sm leading-relaxed max-w-xs shrink-0">
              Tap any industry to explore relevant AI commercial work.
            </p>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INDUSTRIES.map((industry, i) => {
            const isSelected = selected === industry.name
            const isHov = hovered === industry.name
            const projectCount = projects.filter(industry.projectMatch).length
            const isWide = industry.name === 'Luxury' || industry.name === 'Lifestyle'
            const hasVideo = industry.videos.length > 0

            return (
              <motion.button
                key={industry.name}
                variants={fadeUp}
                onClick={() => handleClick(industry.name)}
                onMouseEnter={() => setHovered(industry.name)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden text-left cursor-pointer focus:outline-none group col-span-1"
                style={{
                  minHeight: '180px',
                  background: '#0D0D0D',
                  border: isSelected ? '1px solid rgba(139,92,246,0.40)' : '1px solid rgba(255,255,255,0.07)',
                }}
                aria-pressed={isSelected}
                aria-label={`${hasVideo ? 'Play video for' : 'Filter by'} ${industry.name}`}
              >
                {/* Thumbnail image (Food & Beverage) */}
                {industry.thumbnail && (
                  <>
                    <img
                      src={industry.thumbnail}
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ opacity: isHov ? 0.55 : 0.35, transition: 'opacity 0.45s ease' }}
                    />
                    {/* Dark overlay so text stays readable */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.60) 30%, rgba(5,5,5,0.15) 100%)' }} />
                  </>
                )}

                {/* Gradient background (non-thumbnail cards) */}
                {!industry.thumbnail && (
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${industry.gradient}`}
                    animate={{ opacity: isSelected ? 1 : isHov ? 0.85 : 0 }}
                    transition={{ duration: 0.45 }}
                  />
                )}

                {/* Accent glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: isSelected ? 0.8 : isHov ? 0.6 : 0 }}
                  transition={{ duration: 0.45 }}
                  style={{ background: `radial-gradient(ellipse at 25% 35%, ${industry.accent} 0%, transparent 65%)` }}
                />

                {/* Grain */}
                <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: '180px 180px' }} />

                {/* Play icon overlay for video cards */}
                {hasVideo && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{ opacity: isHov ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-full border"
                      style={{ border: '1.5px solid rgba(255,255,255,0.60)', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }}
                    >
                      <span style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '16px solid white', marginLeft: '3px', display: 'block' }} />
                    </div>
                  </motion.div>
                )}

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between items-center text-center h-full" style={{ minHeight: '160px' }}>
                  <div>
                    <div className="mb-4 h-[13px]" />
                    <h3 className="text-white font-semibold leading-tight mb-2 transition-colors duration-300" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}>
                      {industry.name}
                    </h3>
                    <motion.p
                      animate={{ opacity: isSelected || isHov ? 1 : 0, y: isSelected || isHov ? 0 : 6 }}
                      transition={{ duration: 0.35 }}
                      className="text-[rgba(255,255,255,0.42)] text-[11px] leading-relaxed md:opacity-0 md:translate-y-[6px]"
                      style={{ opacity: 1, transform: 'translateY(0)' }}
                    >
                      {industry.tagline}
                    </motion.p>
                  </div>

                  <div className="mt-5 flex items-center justify-center gap-3 w-full">
                    <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.28)]" style={{ marginBottom: '2px' }}>
                      {hasVideo ? 'Watch film' : projectCount > 0 ? `${projectCount} project${projectCount !== 1 ? 's' : ''}` : 'Coming soon'}
                    </span>
                    <motion.span
                      animate={{ rotate: isSelected ? 45 : 0, color: isSelected ? '#8B5CF6' : 'rgba(255,255,255,0.30)' }}
                      transition={{ duration: 0.25 }}
                      className="text-sm leading-none"
                    >
                      {hasVideo ? '▶' : '↗'}
                    </motion.span>
                  </div>
                </div>

                {/* Selected accent line */}
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

        {/* Inline project drawer — for non-video industries */}
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
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="label-tag mb-2 block">{selected}</span>
                    <p className="text-[rgba(255,255,255,0.38)] text-sm">
                      {relatedProjects.length > 0 ? `${relatedProjects.length} project${relatedProjects.length !== 1 ? 's' : ''} in this category` : 'New projects coming soon'}
                    </p>
                  </div>
                  <button onClick={() => setSelected(null)} className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.35)] hover:text-white transition-colors duration-200 cursor-pointer">
                    Close <span className="text-sm">✕</span>
                  </button>
                </div>

                {relatedProjects.length > 0 ? (
                  <div className="flex gap-4 overflow-x-auto pb-6" style={{ scrollbarWidth: 'none' }}>
                    <AnimatePresence mode="popLayout">
                      {relatedProjects.map((project) => <MiniProjectCard key={project.id} project={project} />)}
                    </AnimatePresence>
                    <motion.button
                      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: relatedProjects.length * 0.08, duration: 0.4 }}
                      onClick={() => { setSelected(null); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
                      className="flex-shrink-0 flex flex-col items-center justify-center gap-3 cursor-pointer group"
                      style={{ width: '140px', aspectRatio: '4/3', border: '1px solid rgba(139,92,246,0.20)', background: 'rgba(139,92,246,0.04)', alignSelf: 'flex-start' }}
                    >
                      <span className="text-[#8B5CF6] text-2xl group-hover:scale-110 transition-transform duration-300">→</span>
                      <span className="text-[9px] tracking-[0.20em] uppercase text-[rgba(255,255,255,0.35)] text-center px-4 leading-relaxed">View all<br />work</span>
                    </motion.button>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(139,92,246,0.20)', background: 'rgba(139,92,246,0.05)' }}>
                      <span className="text-[#8B5CF6] opacity-50 text-xl">✦</span>
                    </div>
                    <p className="text-[rgba(255,255,255,0.30)] text-sm text-center max-w-xs leading-relaxed">
                      We're actively producing work in this space.{' '}
                      <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#8B5CF6] hover:opacity-80 transition-opacity duration-200 cursor-pointer">
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

      {/* YouTube-style video modal */}
      {modalData && (
        <VideoModal 
          videos={modalData.videos} 
          industryName={modalData.name}
          onClose={() => setModalData(null)} 
        />
      )}

    </section>
  )
}
