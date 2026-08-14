export interface Service {
  id: string
  number: string
  title: string
  description: string
  deliverables: string[]
  iconPaths: string[]
  accentColor: string
  gradient: string
}

export const services: Service[] = [
  {
    id: 'ai-commercial',
    number: '01',
    title: 'AI Commercial Production',
    description: 'Cinematic AI-generated commercials built around your product, brand, and campaign objective.',
    deliverables: ['Brand Films', 'TV Commercials', 'Campaign Trailers', 'Launch Films'],
    accentColor: 'rgba(139,92,246,0.18)',
    gradient: 'from-[#0a0612] to-[#050505]',
    iconPaths: [
      'M 4 8 L 4 24 L 20 16 Z',
      'M 8 4 L 8 28',
      'M 24 4 L 24 28',
    ],
  },
  {
    id: 'cinematic-product',
    number: '02',
    title: 'Cinematic Product Ads',
    description: 'High-end product advertising crafted with generative AI, cinematic composition, lighting, and motion.',
    deliverables: ['Hero Product Films', 'E-Commerce Video', 'Macro Cinematography', 'Launch Reels'],
    accentColor: 'rgba(244,114,182,0.15)',
    gradient: 'from-[#12040e] to-[#050505]',
    iconPaths: [
      'M 16 4 L 16 28',
      'M 4 16 L 28 16',
      'M 16 4 L 20 10 L 16 8 L 12 10 Z',
    ],
  },
  {
    id: 'product-visualization',
    number: '03',
    title: 'AI Product Visualization',
    description: 'Photorealistic product scenes and visual assets for campaigns, launches, and social advertising.',
    deliverables: ['3D-Style Renders', 'Environment Builds', 'Lifestyle Contexts', 'Packshot Films'],
    accentColor: 'rgba(56,189,248,0.14)',
    gradient: 'from-[#020a10] to-[#050505]',
    iconPaths: [
      'M 16 4 L 28 10 L 28 22 L 16 28 L 4 22 L 4 10 Z',
      'M 16 4 L 16 28',
      'M 4 10 L 28 22',
    ],
  },
  {
    id: 'creative-direction',
    number: '04',
    title: 'Creative Direction',
    description: 'Concept development, visual language, mood, storytelling, and creative direction for product campaigns.',
    deliverables: ['Moodboards', 'Visual Territory', 'Style Frames', 'Brand Bible'],
    accentColor: 'rgba(251,191,36,0.13)',
    gradient: 'from-[#0d0a02] to-[#050505]',
    iconPaths: [
      'M 4 4 L 28 28',
      'M 4 28 L 28 4',
      'M 16 4 A 12 12 0 1 1 15.99 4',
    ],
  },
  {
    id: 'campaign-concepts',
    number: '05',
    title: 'AI Campaign Concepts',
    description: 'End-to-end creative concepts for product launches, paid campaigns, and brand storytelling.',
    deliverables: ['Campaign Strategy', 'Concept Decks', 'Visual Directions', 'Messaging Frameworks'],
    accentColor: 'rgba(52,211,153,0.13)',
    gradient: 'from-[#030e08] to-[#050505]',
    iconPaths: [
      'M 4 24 L 10 14 L 16 18 L 22 10 L 28 16',
      'M 4 28 L 28 28',
    ],
  },
  {
    id: 'social-video',
    number: '06',
    title: 'Social Media Video Ads',
    description: 'Scroll-stopping vertical ads designed for TikTok, Instagram, YouTube Shorts, and paid social.',
    deliverables: ['9:16 Vertical Ads', '1:1 Square Ads', 'Story Formats', 'Paid Social Cuts'],
    accentColor: 'rgba(99,102,241,0.15)',
    gradient: 'from-[#04040e] to-[#050505]',
    iconPaths: [
      'M 10 4 L 10 28 L 20 4 L 20 28',
      'M 4 16 L 28 16',
    ],
  },
  {
    id: 'launch-films',
    number: '07',
    title: 'Product Launch Films',
    description: 'Cinematic launch films and teasers that introduce products with impact.',
    deliverables: ['60s Hero Film', '15s Cut-downs', 'Teaser Films', 'Behind The Scenes'],
    accentColor: 'rgba(251,146,60,0.13)',
    gradient: 'from-[#0e0602] to-[#050505]',
    iconPaths: [
      'M 4 20 Q 16 4 28 20',
      'M 16 4 L 16 24',
      'M 12 24 L 20 24',
    ],
  },
  {
    id: 'visual-storytelling',
    number: '08',
    title: 'Visual Storytelling',
    description: 'Product-led visual narratives built to make brands memorable and products impossible to ignore.',
    deliverables: ['Brand Documentaries', 'Narrative Films', 'Emotional Campaigns', 'Anthology Series'],
    accentColor: 'rgba(167,139,250,0.15)',
    gradient: 'from-[#080612] to-[#050505]',
    iconPaths: [
      'M 4 12 Q 16 4 28 12 Q 16 20 4 12',
      'M 16 8 A 4 4 0 1 1 15.99 8',
    ],
  },
]
