export interface Project {
  id: string
  title: string
  client: string
  industry: string
  category: string
  year: string
  duration: string
  objective: string
  description: string
  tags: string[]
  featured: boolean
  // span controls the masonry layout weight: 'wide' = 2-col, 'tall' = 2-row, 'normal' = 1×1
  span: 'wide' | 'tall' | 'normal'
  gradient: string
  accentColor: string
  // videoSrc?: string  — e.g. '/projects/noir.mp4'  — add when ready
}

export const projects: Project[] = [
  {
    id: 'noir-fragrance',
    title: 'NOIR',
    client: 'Maison Delvaux',
    industry: 'Beauty',
    category: 'Luxury Campaign',
    year: '2024',
    duration: '0:45',
    objective: 'Launch a luxury fragrance to a global audience through a cinematic brand film.',
    description: 'A visual narrative built entirely from shadow and light — exploring the idea that luxury is what you don\'t show.',
    tags: ['Luxury Campaign', 'Beauty'],
    featured: true,
    span: 'wide',
    gradient: 'from-[#0a0612] via-[#1a0a2e] to-[#050505]',
    accentColor: 'rgba(139,92,246,0.5)',
  },
  {
    id: 'obsidian-auto',
    title: 'OBSIDIAN',
    client: 'Veloce Motors',
    industry: 'Technology',
    category: 'AI Commercial',
    year: '2024',
    duration: '1:00',
    objective: 'Position a new EV as the most visually striking car of its generation.',
    description: 'High-octane cinematic sequences merging AI environments with precision automotive engineering.',
    tags: ['AI Commercial', 'Technology'],
    featured: true,
    span: 'tall',
    gradient: 'from-[#04080f] via-[#080d1a] to-[#050505]',
    accentColor: 'rgba(56,189,248,0.4)',
  },
  {
    id: 'luminary-fashion',
    title: 'LUMINARY',
    client: 'House of Édition',
    industry: 'Fashion',
    category: 'Product Film',
    year: '2024',
    duration: '0:30',
    objective: 'Redefine the brand\'s visual identity for the SS24 season.',
    description: 'Editorial AI imagery that dissolves the boundary between fashion photography and generative art.',
    tags: ['Product Film', 'Fashion'],
    featured: true,
    span: 'normal',
    gradient: 'from-[#12040e] via-[#1c0a18] to-[#050505]',
    accentColor: 'rgba(244,114,182,0.4)',
  },
  {
    id: 'aurum-jewelry',
    title: 'AURUM',
    client: 'Maison Aurum',
    industry: 'Jewelry',
    category: 'Luxury Campaign',
    year: '2024',
    duration: '0:45',
    objective: 'Showcase fine jewelry through otherworldly cinematic visuals.',
    description: 'Macro AI cinematography that reveals the soul of precious metals and stones in impossible detail.',
    tags: ['Luxury Campaign', 'Jewelry'],
    featured: true,
    span: 'normal',
    gradient: 'from-[#100a02] via-[#1e1204] to-[#050505]',
    accentColor: 'rgba(251,191,36,0.35)',
  },
  {
    id: 'soleil-beauty',
    title: 'SOLEIL',
    client: 'Lumière Beauty',
    industry: 'Beauty',
    category: 'Beauty',
    year: '2024',
    duration: '0:30',
    objective: 'Launch a skincare line with imagery that communicates purity and radiance.',
    description: 'Ethereal light and texture — AI-generated visuals that make the invisible visible.',
    tags: ['Beauty', 'Lifestyle'],
    featured: true,
    span: 'normal',
    gradient: 'from-[#0f0602] via-[#1e0e04] to-[#050505]',
    accentColor: 'rgba(251,146,60,0.35)',
  },
  {
    id: 'verdant-food',
    title: 'VERDANT',
    client: 'Verdant Kitchen',
    industry: 'Food',
    category: 'Product Film',
    year: '2024',
    duration: '0:30',
    objective: 'Make a premium food brand feel cinematic and aspirational.',
    description: 'Slow-motion hero shots and tactile macro visuals — every frame designed to trigger appetite.',
    tags: ['Product Film', 'Food'],
    featured: false,
    span: 'wide',
    gradient: 'from-[#040f06] via-[#081a0a] to-[#050505]',
    accentColor: 'rgba(74,222,128,0.35)',
  },
  {
    id: 'nova-supplements',
    title: 'NOVA',
    client: 'Nova Wellness',
    industry: 'Lifestyle',
    category: 'AI Commercial',
    year: '2023',
    duration: '0:45',
    objective: 'Elevate a supplement brand into the premium lifestyle space.',
    description: 'Kinetic product reveals and abstract biomorphic visuals that make wellness feel aspirational.',
    tags: ['AI Commercial', 'Lifestyle'],
    featured: false,
    span: 'normal',
    gradient: 'from-[#03100a] via-[#071a0f] to-[#050505]',
    accentColor: 'rgba(52,211,153,0.35)',
  },
  {
    id: 'axiom-tech',
    title: 'AXIOM',
    client: 'Forma Systems',
    industry: 'Technology',
    category: 'AI Commercial',
    year: '2023',
    duration: '1:00',
    objective: 'Build a futuristic brand world for a next-generation tech brand.',
    description: 'A complete AI-generated brand universe — environments, products and narrative built from scratch.',
    tags: ['AI Commercial', 'Technology'],
    featured: false,
    span: 'normal',
    gradient: 'from-[#040a12] via-[#0a1428] to-[#050505]',
    accentColor: 'rgba(99,102,241,0.4)',
  },
  {
    id: 'celesté-skincare',
    title: 'CELESTÉ',
    client: 'Celesté Skin',
    industry: 'Skincare',
    category: 'Product Film',
    year: '2024',
    duration: '0:30',
    objective: 'Position a new serum as the pinnacle of modern skincare science.',
    description: 'Molecular-level AI visuals fused with soft light — skincare that looks like art.',
    tags: ['Product Film', 'Skincare'],
    featured: false,
    span: 'normal',
    gradient: 'from-[#080510] via-[#120a20] to-[#050505]',
    accentColor: 'rgba(167,139,250,0.40)',
  },
  {
    id: 'maison-luxury',
    title: 'MAISON',
    client: 'Maison Collective',
    industry: 'Luxury',
    category: 'Luxury Campaign',
    year: '2024',
    duration: '0:45',
    objective: 'Define a new visual language for an emerging luxury house.',
    description: 'Pure restraint — a campaign where silence and negative space communicate more than any product shot.',
    tags: ['Luxury Campaign', 'Luxury'],
    featured: false,
    span: 'wide',
    gradient: 'from-[#0a0a08] via-[#141410] to-[#050505]',
    accentColor: 'rgba(212,212,180,0.25)',
  },
  {
    id: 'grove-consumer',
    title: 'GROVE',
    client: 'Grove & Co.',
    industry: 'Consumer Products',
    category: 'Product Film',
    year: '2024',
    duration: '0:30',
    objective: 'Make an everyday consumer product feel premium and desirable.',
    description: 'Elevated product cinematography that transforms the ordinary into the covetable.',
    tags: ['Product Film', 'Consumer Products'],
    featured: false,
    span: 'normal',
    gradient: 'from-[#060a04] via-[#0e1408] to-[#050505]',
    accentColor: 'rgba(134,239,172,0.30)',
  },
]

export interface CaseStudy {
  id: string
  projectId: string
  client: string
  industry: string
  category: string
  year: string
  headline: string
  subheadline: string
  challenge: string
  creativeDirection: string
  execution: string
  process: string[]
  results: string[]
  gradient: string
  accentColor: string
  // videoSrc?: string — e.g. '/case-studies/noir.mp4'
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ugc-host',
    projectId: 'ugc-host',
    client: 'Food & Beverage Brand',
    industry: 'Food & Beverage',
    category: 'UGC / AI Commercial',
    year: '2024',
    headline: 'How we made one AI host feel like a real recurring presenter.',
    subheadline: '"The brief: a single UGC-style host, one continuous identity, moving from a sunlit kitchen to an open field to a clean studio shot — with nothing to give away that it was AI."',
    challenge: 'UGC-style ads live and die on believability — the moment a host\'s face shifts even slightly between cuts, the illusion breaks. This brief asked for one host across three environments with almost nothing in common: a warm, cluttered home kitchen, an open oat field at golden hour, and a bare studio backdrop. Same face, same warmth, zero visible drift.',
    creativeDirection: 'We treated her like a real recurring presenter, not a generated asset — matching lighting temperature and behaviour to each setting (soft morning light in the kitchen, golden hour warmth in the field, flat neutral studio light) while keeping her identity, expression range, and tone locked across all three.',
    execution: 'Our AI pipeline generated and matched her across every environment, then paired it with fast, native-style caption text ("QUIET KITCHEN, SOFT LIGHT," "WHERE IT\'S GROWN NOT MANUFACTURED") to keep the pacing and feel authentically UGC rather than polished commercial.',
    process: [
      'Host identity lock and expression range development',
      'Environment-by-environment lighting match (kitchen, field, studio)',
      'AI generation against the consistency-lock reference',
      'Caption pacing and native-style text overlay',
      'Final grade and delivery',
    ],
    results: [
      'One host, three unrelated environments, zero visible identity drift.',
      'A caption-and-pacing style built to read as organic, not produced.',
      'A reusable consistency system for any brand wanting a recurring AI presenter.',
    ],
    gradient: 'from-[#0a0f02] via-[#111a04] to-[#050505]',
    accentColor: 'rgba(163,230,53,0.40)',
  },
]
