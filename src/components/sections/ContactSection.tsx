import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, fadeRight } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'
import { SITE_EMAIL } from '../../constants'

const socials = [
  { label: 'Instagram',   handle: '@theaqstudio_',   href: 'https://www.instagram.com/theaqstudio_',                                        icon: '↗' },
  { label: 'LinkedIn',    handle: 'The AQ Studio',    href: 'https://www.linkedin.com/in/abdulquadri-abdulquadri-olatunji-9138871a4',         icon: '↗' },
  { label: 'Twitter / X', handle: '@AIFeedsWith_OLA', href: 'https://x.com/AIFeedsWith_OLA',                                                 icon: '↗' },
]

const FORMSPREE = 'https://formspree.io/f/xvkpqnzo'

type FormData = { name: string; brand: string; email: string; brief: string }

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: '', brand: '', email: '', brief: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) { setSubmitted(true) }
      else { setError('Something went wrong. Please try again or email us directly.') }
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const fields: Array<{ name: keyof FormData; label: string; type: string; placeholder: string }> = [
    { name: 'name',  label: 'Your Name',       type: 'text',  placeholder: 'Your Name' },
    { name: 'brand', label: 'Brand / Company', type: 'text',  placeholder: 'Acme Brand Co.' },
    { name: 'email', label: 'Email Address',   type: 'email', placeholder: 'Email Address' },
  ]

  return (
    <section id="contact" className="bg-[#090909] section-padding">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} className="mb-10 md:mb-14"
        >
          <motion.div variants={fadeUp} className="mb-4"><SectionLabel>Contact</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {"Let\u2019s make something"}
            <br />
            <span className="italic font-light text-[rgba(255,255,255,0.55)]" style={{ fontFamily: 'Playfair Display, serif' }}>remarkable.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">

          {/* Left — contact info */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} className="space-y-8 sm:space-y-10"
          >
            <motion.p variants={fadeUp} className="text-[rgba(255,255,255,0.45)] text-sm leading-[1.85] max-w-sm">
              We work with a select number of brands at a time, so every project gets the creative attention it deserves.
            </motion.p>

            <motion.div variants={fadeUp}>
              <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.28)] mb-3">Email</p>
              <a
                href={"mailto:" + SITE_EMAIL}
                className="group inline-flex items-center gap-2 text-white text-sm hover:text-[#8B5CF6] active:text-[#8B5CF6] transition-colors duration-300 py-2"
              >
                {SITE_EMAIL}
                <span className="text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">{"↗"}</span>
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.28)] mb-4">Follow</p>
              <div className="space-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-[rgba(255,255,255,0.07)] px-5 sm:px-6 py-4 sm:py-5 hover:border-[rgba(139,92,246,0.35)] hover:bg-[rgba(139,92,246,0.05)] active:bg-[rgba(139,92,246,0.08)] transition-all duration-300 min-h-[60px]"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">{s.label}</p>
                      <p className="text-[rgba(255,255,255,0.28)] text-xs mt-0.5">{s.handle}</p>
                    </div>
                    <span className="text-[rgba(139,92,246,0.50)] group-hover:text-[#8B5CF6] transition-colors duration-300">{s.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2">
              <motion.button
                whileHover="hover" whileTap={{ scale: 0.97 }} initial="rest" animate="rest"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
                transition={{ type: 'spring', stiffness: 380, damping: 20 }}
                onClick={() => window.open('https://calendly.com', '_blank')}
                className="inline-flex items-center justify-center gap-3 rounded-full cursor-pointer whitespace-nowrap font-semibold text-white text-sm tracking-[0.06em] w-full sm:w-auto"
                style={{ height: '52px', paddingLeft: '2rem', paddingRight: '2rem', background: 'linear-gradient(135deg, #7c3aed 0%, #8B5CF6 50%, #a78bfa 100%)', boxShadow: '0 0 24px rgba(139,92,246,0.25)' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(139,92,246,0.45)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(139,92,246,0.25)' }}
              >
                Book a Call
                <motion.span variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }} transition={{ type: 'spring', stiffness: 400, damping: 18 }} className="text-sm">{"↗"}</motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start justify-center min-h-80 py-12"
              >
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-[#8B5CF6] text-3xl mb-5 block"
                >{"✦"}</motion.span>
                <h3 className="text-white text-xl font-semibold mb-3">Message received.</h3>
                <p className="text-[rgba(255,255,255,0.40)] text-sm leading-relaxed max-w-xs">
                  We review every inquiry personally. If your project is a strong fit, you will hear from us within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {fields.map((field) => (
                  <motion.div key={field.name} variants={fadeRight}>
                    <label htmlFor={field.name} className="block text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.28)] mb-2.5 font-medium">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-b border-[rgba(255,255,255,0.10)] py-4 text-white text-sm placeholder-[rgba(255,255,255,0.18)] focus:outline-none focus:border-[#8B5CF6] transition-colors duration-300"
                    />
                  </motion.div>
                ))}

                <motion.div variants={fadeRight}>
                  <label htmlFor="brief" className="block text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.28)] mb-2.5 font-medium">Project Brief</label>
                  <textarea
                    id="brief" name="brief" rows={4}
                    value={formData.brief} onChange={handleChange}
                    placeholder="Tell us about your brand, project, timeline and goals..."
                    className="w-full bg-transparent border-b border-[rgba(255,255,255,0.10)] py-4 text-white text-sm placeholder-[rgba(255,255,255,0.18)] focus:outline-none focus:border-[#8B5CF6] transition-colors duration-300 resize-none"
                  />
                </motion.div>

                <motion.div variants={fadeRight}>
                  {error && <p className="text-red-400 text-xs mb-4 leading-relaxed">{error}</p>}
                  <motion.button
                    type="submit" disabled={submitting}
                    whileHover="hover" whileTap={{ scale: 0.97 }} initial="rest" animate="rest"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
                    transition={{ type: 'spring', stiffness: 380, damping: 20 }}
                    className="mt-6 inline-flex items-center justify-center gap-3 rounded-full cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-white text-sm tracking-[0.06em] w-full sm:w-auto"
                    style={{ height: '52px', paddingLeft: '2rem', paddingRight: '2rem', background: 'linear-gradient(135deg, #7c3aed 0%, #8B5CF6 50%, #a78bfa 100%)', boxShadow: '0 0 20px rgba(139,92,246,0.20)' }}
                    onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.boxShadow = '0 0 36px rgba(139,92,246,0.40)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(139,92,246,0.20)' }}
                  >
                    {submitting ? 'Sending…' : 'Send Brief'}
                    {!submitting && (
                      <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>{"→"}</motion.span>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
