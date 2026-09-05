import Hero                    from '../components/hero/Hero'
import ShowreelSection         from '../components/sections/ShowreelSection'
import ServicesSection         from '../components/sections/ServicesSection'
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

      {/* 4. Case Study */}
      <CaseStudySection />

      {/* 5. Industries */}
      <IndustriesSection />

      {/* 6. Process */}
      <ProcessSection />

      {/* 7. About */}
      <AboutSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Contact */}
      <ContactSection />
    </>
  )
}
