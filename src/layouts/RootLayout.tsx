import type { ReactNode } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="bg-[#050505] text-white">
      <Navbar />
      <main
        className="snap-container"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
