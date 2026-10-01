import type { Variants } from 'framer-motion'

// Helper to check if user prefers reduced motion
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false

// Mobile-optimized: shorter durations, less motion distance
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: prefersReducedMotion ? 0.3 : 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: prefersReducedMotion ? 0.2 : 0.6, 
      ease: 'easeOut' 
    },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: prefersReducedMotion ? 0.3 : 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: prefersReducedMotion ? 0.3 : 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0.05 : 0.08,
      delayChildren: prefersReducedMotion ? 0 : 0.05,
    },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0.03 : 0.05,
      delayChildren: prefersReducedMotion ? 0 : 0.03,
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: prefersReducedMotion ? 0.3 : 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
}

export const lineReveal: Variants = {
  hidden: { scaleX: prefersReducedMotion ? 1 : 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { 
      duration: prefersReducedMotion ? 0.2 : 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
}
