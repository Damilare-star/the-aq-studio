import { motion } from 'framer-motion'
import { SITE_NAME, SITE_EMAIL, SOCIAL_LINKS, NAV_LINKS } from '../../constants'
import { fadeUp, staggerContainer } from '../animations/variants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] border-t border-[rgba(255,255,255,0.06)]">
      <div className="container-wide section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white font-semibold tracking-[0.22em] text-sm uppercase">AQ</span>
              <span className="w-px h-4 bg-[rgba(255,255,255,0.18)]" />
              <span className="text-[rgba(255,255,255,0.55)] font-light tracking-[0.18em] text-sm uppercase">Studio</span>
            </div>
            <p className="text-[rgba(255,255,255,0.40)] text-sm leading-relaxed max-w-xs">
              A high-end AI advertising and creative production studio for modern brands.
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-block mt-6 text-[rgba(255,255,255,0.55)] text-sm hover:text-[#8B5CF6] transition-colors duration-300"
            >
              {SITE_EMAIL}
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <p className="label-tag mb-6">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[rgba(255,255,255,0.40)] text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp}>
            <p className="label-tag mb-6">Follow</p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgba(255,255,255,0.40)] text-sm hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#8B5CF6]">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[rgba(255,255,255,0.22)] text-xs tracking-wide">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-[rgba(255,255,255,0.18)] text-xs tracking-wide">
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
