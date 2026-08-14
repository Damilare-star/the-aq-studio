import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, fadeRight } from '../animations/variants'
import SectionLabel from '../ui/SectionLabel'

const differentiators = [
  {
    title: 'Creative direction first.',
    description: 'Every project starts with a human creative director who sets the visual territory before AI touches a single frame.',
  },
  {
    title: 'Cinematic — not content.',
    description: 'We hold our work to the standard of a world-class director of photography. Not a social media post. A film.',
  },
  {
    title: 'Brand precision.',
    description: 'We understand brand strategy deeply. The visuals are only as powerful as the thinking behind them.',
  },
  {
    title: 'Built for performance.',
    description: 'Beautiful doesn\'t mean decorative. Every piece of work is built to stop the scroll, hold attention, and move product.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#090909] section-padding">
      <div className="container-wide">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28 items-start">

          {/* Left — Why we exist */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel>About AQ Studio</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-white font-bold leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Why AQ Studio
              <br />
              <span
                className="italic font-light text-[rgba(255,255,255,0.55)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                exists.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-[rgba(255,255,255,0.48)] text-sm leading-[1.85] max-w-lg"
            >
              <p>
                Great products deserve more than ordinary advertising.
              </p>
              <p>
                Traditional product commercials can require large crews, expensive locations, complex production, and weeks of coordination.
              </p>
              <p>
                AI has changed what's possible — but technology alone doesn't make a great commercial.
              </p>
              <p>
                The AQ Studio combines cinematic creative direction with AI-powered production to turn products into visual stories people remember.
              </p>
              <p>
                From beauty and skincare to fashion, food, beverages, technology, and lifestyle products, I create cinematic commercials designed to make products impossible to ignore.
              </p>
              <p>
                Every frame has a purpose. Every shot serves the product. Every commercial is built to make people stop, look, and remember.
              </p>
            </motion.div>

            {/* Stat row */}
            <motion.div
              variants={fadeUp}
              className="mt-16 grid grid-cols-3 gap-6 pt-10 border-t border-[rgba(255,255,255,0.06)]"
            >
              {[
                { value: 'CINEMATIC',         label: 'Creative-first production' },
                { value: 'AI-POWERED',        label: 'Modern visual production' },
                { value: 'PRODUCT-FOCUSED',   label: 'Built for brands & e-commerce' },
              ].map((stat) => (
                <div key={stat.value}>
                  <p className="text-white font-bold text-sm leading-tight mb-1.5 tracking-[0.06em]">{stat.value}</p>
                  <p className="text-[rgba(255,255,255,0.30)] text-[10px] tracking-[0.14em] uppercase leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — What makes it different */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <p
                className="text-white font-bold leading-tight"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                What makes the creative
                <br />
                direction{' '}
                <span
                  className="italic font-light text-[rgba(255,255,255,0.55)]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  different.
                </span>
              </p>
            </motion.div>

            <div className="space-y-0">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeRight}
                  className={`py-7 ${i < differentiators.length - 1 ? 'border-b border-[rgba(255,255,255,0.06)]' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[rgba(139,92,246,0.55)] text-[10px] font-mono tracking-widest mt-0.5 shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-[rgba(255,255,255,0.40)] text-sm leading-relaxed">
                        {item.description}
                      </p>
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
