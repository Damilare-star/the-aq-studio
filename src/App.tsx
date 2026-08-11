import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import LoadingScreen from './components/common/LoadingScreen'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {/* Cinematic loading screen */}
      <LoadingScreen onComplete={handleLoadComplete} />

      {/* Homepage — reveals with cinematic fade+lift after loader exits */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="site"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrowserRouter>
              <RootLayout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </RootLayout>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
