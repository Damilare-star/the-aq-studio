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
    author: 'Amara Diallo',
    title: 'Founder',
    company: 'Lumière Beauty Co.',
    industry: 'Luxury / Beauty',
  },
  {
    id: 't2',
    quote: 'We went from brief to final film in days. The result looked like a £500k production. The ROI was immediate and significant.',
    author: 'Toyin Odunlami',
    title: 'Growth Lead',
    company: 'Northfield Supplements',
    industry: 'Supplements',
  },
  {
    id: 't3',
    quote: 'What sets AQ apart is the restraint. Every other AI studio throws everything at the screen. These visuals were considered, cinematic and on-brand.',
    author: 'Bukayo Charles',
    title: 'Lead Engineer',
    company: 'Édition Studio',
    industry: 'Fashion',
  },
  {
    id: 't4',
    quote: 'The creative direction was exceptional. They didn\'t just generate content — they told a story. Our campaign outperformed every benchmark we had.',
    author: 'Priya Menon',
    title: 'Marketing Manager',
    company: 'Torque & Co.',
    industry: 'Automotive',
  },
]
