import Hero                    from '../components/hero/Hero'
import ShowreelSection         from '../components/sections/ShowreelSection'
import ServicesSection         from '../components/sections/ServicesSection'
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection'
import CaseStudySection        from '../components/sections/CaseStudySection'
import IndustriesSection       from '../components/sections/IndustriesSection'
import ProcessSection          from '../components/sections/ProcessSection'
import AboutSection            from '../components/sections/AboutSection'
import TestimonialsSection     from '../components/sections/TestimonialsSection'
import ContactSection          from '../components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Featured Showreel */}
      <ShowreelSection />

      {/* 3. Services */}
      <ServicesSection />

      {/* 4. Featured Projects */}
      <FeaturedProjectsSection />

      {/* 5. Case Study */}
      <CaseStudySection />

      {/* 6. Industries */}
      <IndustriesSection />

      {/* 7. Process */}
      <ProcessSection />

      {/* 8. About */}
      <AboutSection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. Contact */}
      <ContactSection />
    </>
  )
}
