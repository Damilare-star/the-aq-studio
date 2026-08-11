export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  industry: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'AQ Studio delivered something our traditional agency couldn\'t in three months — in three weeks. The quality was beyond anything we expected from AI production.',
    author: 'Isabelle Fontaine',
    title: 'Chief Marketing Officer',
    company: 'Maison Delvaux',
    industry: 'Luxury / Beauty',
  },
  {
    id: 't2',
    quote: 'The creative direction was exceptional. They didn\'t just generate content — they told a story. Our campaign outperformed every benchmark we had.',
    author: 'Marcus Chen',
    title: 'Brand Director',
    company: 'Veloce Motors',
    industry: 'Automotive',
  },
  {
    id: 't3',
    quote: 'What sets AQ apart is the restraint. Every other AI studio throws everything at the screen. These visuals were considered, cinematic and on-brand.',
    author: 'Sofia Andersson',
    title: 'Creative Director',
    company: 'House of Édition',
    industry: 'Fashion',
  },
  {
    id: 't4',
    quote: 'We went from brief to final film in 18 days. The result looked like a £500k production. The ROI was immediate and significant.',
    author: 'James Okafor',
    title: 'Head of Digital',
    company: 'Nova Wellness',
    industry: 'Supplements',
  },
]
