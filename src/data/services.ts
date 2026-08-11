export interface Service {
  id: string
  number: string
  title: string
  description: string
  deliverables: string[]
  // SVG icon path data — the visual/graphic treatment per card
  iconPaths: string[]
  accentColor: string
  gradient: string
}

export const services: Service[] = [
  {
    id: 'ai-commercial',
    number: '01',
    title: 'AI Commercial Production',
    description: 'Full-production AI-generated commercials that rival traditional film — delivered in weeks, not months.',
    deliverables: ['Brand Films', 'TV Commercials', 'Campaign Trailers', 'Launch Films'],
    accentColor: 'rgba(139,92,246,0.18)',
    gradient: 'from-[#0a0612] to-[#050505]',
    iconPaths: [
      'M 4 8 L 4 24 L 20 16 Z',                          // play triangle
      'M 8 4 L 8 28',                                     // left bar
      'M 24 4 L 24 28',                                   // right bar
    ],
  },
  {
    id: 'cinematic-product',
    number: '02',
    title: 'Cinematic Product Ads',
    description: 'Hero-level product cinematography using generative AI — every surface, texture and light crafted with intent.',
    deliverables: ['Hero Product Films', 'E-Commerce Video', 'Macro Cinematography', 'Launch Reels'],
    accentColor: 'rgba(244,114,182,0.15)',
    gradient: 'from-[#12040e] to-[#050505]',
    iconPaths: [
      'M 16 4 L 16 28',                                   // vertical axis
      'M 4 16 L 28 16',                                   // horizontal axis
      'M 16 4 L 20 10 L 16 8 L 12 10 Z',                 // top diamond
    ],
  },
  {
    id: 'product-visualization',
    number: '03',
    title: 'AI Product Visualization',
    description: 'Photorealistic product renders and environments built entirely with generative AI — no studio, no limits.',
    deliverables: ['3D-Style Renders', 'Environment Builds', 'Lifestyle Contexts', 'Packshot Films'],
    accentColor: 'rgba(56,189,248,0.14)',
    gradient: 'from-[#020a10] to-[#050505]',
    iconPaths: [
      'M 16 4 L 28 10 L 28 22 L 16 28 L 4 22 L 4 10 Z',  // hexagon
      'M 16 4 L 16 28',
      'M 4 10 L 28 22',
    ],
  },
  {
    id: 'creative-direction',
    number: '04',
    title: 'Creative Direction',
    description: 'Senior creative direction for brands who need a precise visual language before a single frame is generated.',
    deliverables: ['Moodboards', 'Visual Territory', 'Style Frames', 'Brand Bible'],
    accentColor: 'rgba(251,191,36,0.13)',
    gradient: 'from-[#0d0a02] to-[#050505]',
    iconPaths: [
      'M 4 4 L 28 28',                                    // diagonal
      'M 4 28 L 28 4',                                    // cross diagonal
      'M 16 4 A 12 12 0 1 1 15.99 4',                    // circle
    ],
  },
  {
    id: 'campaign-concepts',
    number: '05',
    title: 'AI Campaign Concepts',
    description: 'Full campaign ideation and concept development — from strategic brief to visual concept deck, rapidly.',
    deliverables: ['Campaign Strategy', 'Concept Decks', 'Visual Directions', 'Messaging Frameworks'],
    accentColor: 'rgba(52,211,153,0.13)',
    gradient: 'from-[#030e08] to-[#050505]',
    iconPaths: [
      'M 4 24 L 10 14 L 16 18 L 22 10 L 28 16',          // chart line
      'M 4 28 L 28 28',                                   // baseline
    ],
  },
  {
    id: 'social-video',
    number: '06',
    title: 'Social Media Video Ads',
    description: 'Scroll-stopping vertical and square format AI video ads built for performance across Instagram, TikTok and YouTube.',
    deliverables: ['9:16 Vertical Ads', '1:1 Square Ads', 'Story Formats', 'Paid Social Cuts'],
    accentColor: 'rgba(99,102,241,0.15)',
    gradient: 'from-[#04040e] to-[#050505]',
    iconPaths: [
      'M 10 4 L 10 28 L 20 4 L 20 28',                   // two verticals with gap
      'M 4 16 L 28 16',
    ],
  },
  {
    id: 'launch-films',
    number: '07',
    title: 'Product Launch Films',
    description: 'Cinematic launch films that introduce a new product to the world — with the drama and tension of a feature film trailer.',
    deliverables: ['60s Hero Film', '15s Cut-downs', 'Teaser Films', 'Behind The Scenes'],
    accentColor: 'rgba(251,146,60,0.13)',
    gradient: 'from-[#0e0602] to-[#050505]',
    iconPaths: [
      'M 4 20 Q 16 4 28 20',                             // arc
      'M 16 4 L 16 24',                                   // stem
      'M 12 24 L 20 24',                                  // base
    ],
  },
  {
    id: 'visual-storytelling',
    number: '08',
    title: 'Visual Storytelling',
    description: 'Brand narratives told entirely through moving images — emotion-first filmmaking using the full power of generative AI.',
    deliverables: ['Brand Documentaries', 'Narrative Films', 'Emotional Campaigns', 'Anthology Series'],
    accentColor: 'rgba(167,139,250,0.15)',
    gradient: 'from-[#080612] to-[#050505]',
    iconPaths: [
      'M 4 12 Q 16 4 28 12 Q 16 20 4 12',               // eye shape
      'M 16 8 A 4 4 0 1 1 15.99 8',                     // pupil
    ],
  },
]
