import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../../constants'

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
      className="relative text-[rgba(255,255,255,0.50)] hover:text-white text-[11px] tracking-[0.13em] uppercase font-medium transition-colors duration-300 cursor-pointer pb-0.5 min-h-[44px] flex items-center"
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href === '#hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="absolute inset-0 transition-all duration-500"
          style={scrolled
            ? { background: '#000000', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }
            : { background: 'transparent', backdropFilter: 'none', WebkitBackdropFilter: 'none', borderBottom: '1px solid transparent', boxShadow: 'none' }
          }
        />
        <div className="relative container-wide">
          <div className="flex items-center justify-between h-[64px] md:h-[76px]">

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              className="flex items-center shrink-0 z-10 min-h-[44px]"
              aria-label="AQ Studio — Home"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-white font-bold uppercase tracking-wider"
                style={{ fontSize: '18px' }}
              >
                THE AQ STUDIO
              </motion.span>
            </a>

            <nav
              className="hidden lg:flex items-center gap-8 xl:gap-12 absolute left-1/2 -translate-x-1/2"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href + link.label} label={link.label} href={link.href} onClick={handleNavClick} />
              ))}
            </nav>

            <div className="lg:hidden flex items-center gap-2 z-10">

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col justify-center items-center gap-[5px] min-w-[44px] min-h-[44px] cursor-pointer rounded-md active:bg-white/5 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} className="block w-5 h-px bg-white origin-center" />
                <motion.span animate={menuOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="block w-5 h-px bg-white" />
                <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} className="block w-5 h-px bg-white origin-center" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu" key="mobile-menu"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/97 backdrop-blur-xl flex flex-col overflow-y-auto"
          >
            <div className="flex-1 flex flex-col justify-center gap-0 pt-24 pb-8 container-wide">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href + link.label}
                  initial={{ opacity: 0, x: -24 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 text-2xl font-light text-[rgba(255,255,255,0.70)] tracking-tight cursor-pointer hover:text-white active:text-white transition-colors duration-200 border-b border-[rgba(255,255,255,0.05)] last:border-0 min-h-[56px] flex items-center active:bg-white/5"
                >{link.label}</motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
