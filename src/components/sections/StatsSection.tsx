import { motion } from 'framer-motion'
import { stats } from '../../data/stats'
import { fadeUp, staggerContainer } from '../animations/variants'
import Divider from '../ui/Divider'

export default function StatsSection() {
  return (
    <section className="bg-[#0D0D0D] section-padding">
      <div className="container-wide">
        <Divider className="mb-6" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.04)]"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-[#0D0D0D] px-3 sm:px-8 py-5 sm:py-6 text-center"
            >
              <p
                className="text-white font-light leading-none mb-2"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 3.5rem)' }}
              >
                {stat.value}
              </p>
              <p className="text-[rgba(255,255,255,0.35)] text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-medium leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <Divider className="mt-6" />
      </div>
    </section>
  )
}
