import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, fadeRight } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

const differentiators = [
  {
    title: 'Creative direction first.',
    description: 'Every commercial starts with the idea — not the AI. I define the visual direction, story, product focus, mood, and shot language before generating a single frame.',
  },
  {
    title: 'Cinematic — not generic content.',
    description: 'I create commercials, not just AI videos. Every frame is designed with cinematic composition, lighting, movement, pacing, and visual storytelling — so the result feels like advertising, not another AI-generated social post.',
  },
  {
    title: 'Product precision.',
    description: 'Your product stays at the center. From the first frame to the final shot, the creative is built around your product, your brand identity, and what makes the product worth choosing.',
  },
  {
    title: 'Built for performance.',
    description: 'Beautiful is only the beginning. The goal is to stop the scroll, hold attention, communicate the product, and create desire — while delivering assets ready for social media, e-commerce, and paid advertising.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#090909] section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">

          {/* Left */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp} className="mb-4"><SectionLabel>About AQ Studio</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="text-white font-bold leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Why AQ Studio
              <br />
              <span className="italic font-light text-[rgba(255,255,255,0.55)]" style={{ fontFamily: 'Playfair Display, serif' }}>exists.</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-[rgba(255,255,255,0.48)] text-sm leading-[1.85] max-w-lg">
              <p>Great products deserve more than ordinary advertising.</p>
              <p>Traditional product commercials can require large crews, expensive locations, complex production, and weeks of coordination.</p>
              <p>AI has changed what's possible — but technology alone doesn't make a great commercial.</p>
              <p>The AQ Studio combines cinematic creative direction with AI-powered production to turn products into visual stories people remember.</p>
              <p>From beauty and skincare to fashion, food, beverages, technology, and lifestyle products, I create cinematic commercials designed to make products impossible to ignore.</p>
              <p>Every frame has a purpose. Every shot serves the product. Every commercial is built to make people stop, look, and remember.</p>
            </motion.div>

            {/* Stat row */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-[rgba(255,255,255,0.06)]"
            >
              {[
                { value: 'CINEMATIC',       label: 'Creative-first production' },
                { value: 'AI-POWERED',      label: 'Modern visual production' },
                { value: 'PRODUCT-FOCUSED', label: 'Built for brands & e-commerce' },
              ].map((stat) => (
                <div key={stat.value}>
                  <p className="text-white font-bold text-sm leading-tight mb-1.5 tracking-[0.06em]">{stat.value}</p>
                  <p className="text-[rgba(255,255,255,0.30)] text-[10px] tracking-[0.14em] uppercase leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-[9px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.28)] mb-4">Why Brands Choose AQ Studio</p>
              <p
                className="text-white font-light leading-tight mb-5 italic"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontFamily: 'Playfair Display, serif' }}
              >
                "Cinematic quality without the traditional production overhead."
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'AI-powered production',
                  'Fast creative turnaround',
                  'Built for product & brand performance',
                  'Cinematic visuals without traditional production costs',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="text-[#8B5CF6] mt-0.5 shrink-0 text-xs">✦</span>
                    <p className="text-[rgba(255,255,255,0.50)] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="space-y-0">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeRight}
                  className={"py-5 sm:py-6 " + (i < differentiators.length - 1 ? 'border-b border-[rgba(255,255,255,0.06)]' : '')}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[rgba(139,92,246,0.55)] text-[10px] font-mono tracking-widest mt-0.5 shrink-0">0{i + 1}</span>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-2 tracking-tight">{item.title}</h3>
                      <p className="text-[rgba(255,255,255,0.40)] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
