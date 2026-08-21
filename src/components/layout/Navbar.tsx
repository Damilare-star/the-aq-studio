import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../../constants'

// ─── Nav link with animated underline accent ─────────────────────────────────
function NavLink({
  label,
  href,
  onClick,
}: {
  label: string
  href: string
  onClick: (href: string) => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={() => onClick(href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative text-[rgba(255,255,255,0.50)] hover:text-white text-[11px] tracking-[0.13em] uppercase font-medium transition-colors duration-300 cursor-pointer pb-0.5"
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-[#8B5CF6]"
        initial={false}
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      />
    </button>
  )
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Fixed header ── */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glass surface */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={
            scrolled
              ? {
                  background: 'rgba(5,5,5,0.88)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }
              : {
                  background: 'transparent',
                  backdropFilter: 'none',
                  WebkitBackdropFilter: 'none',
                  borderBottom: '1px solid transparent',
                  boxShadow: 'none',
                }
          }
        />

        {/* Inner constraint */}
        <div
          className="relative mx-auto w-full"
          style={{
            maxWidth: '1440px',
            paddingLeft: 'clamp(2rem, 6vw, 6rem)',
            paddingRight: 'clamp(2rem, 6vw, 6rem)',
          }}
        >
          <div className="flex items-center justify-between h-[68px] md:h-[76px]">

            {/* ── LEFT: Logo + wordmark ── */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              className="flex items-center gap-0 shrink-0 z-10"
              aria-label="AQ Studio — Home"
            >
              <motion.span
                className="text-white font-bold uppercase select-none"
                style={{ fontSize: '18px', letterSpacing: '0.20em' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                AQ
              </motion.span>

              <motion.span
                className="inline-block w-px bg-[rgba(255,255,255,0.20)] mx-3.5 self-stretch"
                style={{ marginTop: '20px', marginBottom: '20px' }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />

              <motion.span
                className="hidden min-[400px]:inline text-[rgba(255,255,255,0.50)] font-light uppercase select-none"
                style={{ fontSize: '11px', letterSpacing: '0.24em' }}
                initial={{ opacity: 0, x: -8, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' }}
                transition={{ delay: 0.72, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                The AQ Studio
              </motion.span>
            </a>

            {/* ── CENTER: Navigation ── */}
            <nav
              className="hidden lg:flex items-center gap-10 xl:gap-12 absolute left-1/2 -translate-x-1/2"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href + link.label}
                  label={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                />
              ))}
            </nav>

            {/* ── RIGHT: CTA ── */}
            <div className="hidden md:flex items-center shrink-0 z-10">
              <motion.button
                onClick={() => handleNavClick('#contact')}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                initial="rest"
                animate="rest"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="text-[11px] tracking-[0.14em] uppercase font-medium text-white px-8 py-3 rounded-full border border-[rgba(139,92,246,0.35)] bg-[rgba(139,92,246,0.07)] hover:bg-[rgba(139,92,246,0.20)] hover:border-[rgba(139,92,246,0.65)] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                style={{ boxShadow: '0 0 0 0 rgba(139,92,246,0)' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(139,92,246,0.22)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 0 0 rgba(139,92,246,0)' }}
              >
                Let's Work Together&nbsp;→
              </motion.button>
            </div>

            {/* ── MOBILE: Hamburger ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer z-10"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-px bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-px bg-white"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-px bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl flex flex-col"
          >
            <div
              className="flex-1 flex flex-col justify-center gap-1 mt-20"
              style={{ paddingLeft: 'clamp(2rem, 6vw, 6rem)', paddingRight: 'clamp(2rem, 6vw, 6rem)' }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href + link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: i * 0.06 + 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 text-3xl font-light text-[rgba(255,255,255,0.70)] tracking-tight cursor-pointer hover:text-white transition-colors duration-200 border-b border-[rgba(255,255,255,0.05)] last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div
              className="pb-14 pt-6"
              style={{ paddingLeft: 'clamp(2rem, 6vw, 6rem)', paddingRight: 'clamp(2rem, 6vw, 6rem)' }}
            >
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full text-center text-[11px] tracking-[0.18em] uppercase font-medium text-white rounded-full border border-[rgba(139,92,246,0.40)] bg-[rgba(139,92,246,0.08)] py-4 hover:bg-[rgba(139,92,246,0.20)] transition-all duration-300 cursor-pointer"
              >
                Let's Work Together →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
