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
    description: 'Hero product films and e-commerce video crafted with cinematic composition, lighting, and motion.',
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
    id: 'launch-films',
    number: '03',
    title: 'Product Launch Films',
    description: 'Cinematic launch films and teasers that introduce products with maximum impact.',
    deliverables: ['Hero Film', '15s Cut-downs', 'Teasers', 'Behind The Scenes'],
    accentColor: 'rgba(251,146,60,0.13)',
    gradient: 'from-[#0e0602] to-[#050505]',
    iconPaths: [
      'M 4 20 Q 16 4 28 20',
      'M 16 4 L 16 24',
      'M 12 24 L 20 24',
    ],
  },
  {
    id: 'social-ugc',
    number: '04',
    title: 'Social & UGC Content',
    description: 'Scroll-stopping vertical ads and UGC-style content designed for paid social and organic reach.',
    deliverables: ['Vertical Ads', 'UGC-Style Content', 'Story Formats', 'Paid Social Cuts'],
    accentColor: 'rgba(99,102,241,0.15)',
    gradient: 'from-[#04040e] to-[#050505]',
    iconPaths: [
      'M 10 4 L 10 28 L 20 4 L 20 28',
      'M 4 16 L 28 16',
    ],
  },
  {
    id: 'product-visualization',
    number: '05',
    title: 'AI Product Visualization',
    description: 'Photorealistic 3D-style product scenes and visual assets for campaigns, launches, and advertising.',
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
    number: '06',
    title: 'Creative Direction',
    description: 'Visual territory, mood, and brand storytelling — the thinking that makes every frame intentional.',
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
    number: '07',
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
]
