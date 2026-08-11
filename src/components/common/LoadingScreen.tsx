import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

/**
 * AQ Studio — Cinematic Loading Screen
 *
 * Plays /public/loading screen aq.mp4 full-screen.
 * Behaviour:
 *  1. Video plays automatically, muted, full-screen cover
 *  2. When the video ends → fade out loading screen → reveal homepage
 *  3. Safety timeout (8s) fires onComplete in case the video
 *     fails to load or the 'ended' event never fires
 *
 * To swap the video: drop a new file in /public and update VIDEO_SRC below.
 */

const VIDEO_SRC = '/loading screen aq.mp4'
const SAFETY_TIMEOUT_MS = 8000   // max wait before forcing completion
const EXIT_DURATION_S   = 0.8    // fade-out duration

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(true)
  const didComplete = useRef(false)

  const handleDone = () => {
    if (didComplete.current) return
    didComplete.current = true
    setVisible(false)
    setTimeout(onComplete, EXIT_DURATION_S * 1000 + 50)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Play as soon as the component mounts
    video.play().catch(() => {
      // Autoplay blocked — fire completion immediately
      handleDone()
    })

    video.addEventListener('ended', handleDone)

    // Safety: never block the user longer than SAFETY_TIMEOUT_MS
    const safety = setTimeout(handleDone, SAFETY_TIMEOUT_MS)

    return () => {
      video.removeEventListener('ended', handleDone)
      clearTimeout(safety)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[110] bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: EXIT_DURATION_S,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* ── Full-screen video ── */}
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />

          {/* ── Very subtle vignette so edges stay cinematic ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
