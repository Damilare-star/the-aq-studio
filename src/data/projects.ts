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
    id: 'noir-case',
    projectId: 'noir-fragrance',
    client: 'Maison Delvaux',
    industry: 'Beauty / Fragrance',
    category: 'Luxury Campaign',
    year: '2024',
    headline: 'How we made a fragrance feel like a memory.',
    subheadline: 'A cinematic AI campaign built entirely from shadow, silence and restraint.',
    challenge: 'Traditional fragrance films rely on celebrity. This brief had no talent — only the product and an emotion. The client needed to launch globally with zero production infrastructure and a 3-week timeline.',
    creativeDirection: 'We built a world from shadow. Every frame was composed around negative space, slow breath, and the idea that luxury is what you don\'t show. The visual language: deep purples, absolute silence, and a single product that commanded every frame.',
    execution: 'Our AI pipeline generated 140+ candidate frames across 6 visual territories. We selected 12, composited them into a 45-second film, graded to a bespoke LUT, and layered a minimal sound design. Delivered broadcast-ready in 18 days.',
    process: [
      'Brand immersion and scent narrative workshop — 1 day',
      'Visual territory development — 3 moodboard directions presented',
      'AI environment generation with bespoke cinematic lighting language',
      'Frame selection, compositing and colour grade',
      'Sound design, final grade and delivery in all required formats',
    ],
    results: [
      '12M organic impressions in the first week',
      'Featured in Vogue, Hypebeast and It\'s Nice That',
      'Sold out first production run within 72 hours of launch',
      'Cost 94% less than an equivalent traditional production',
    ],
    gradient: 'from-[#0a0612] via-[#1a0a2e] to-[#050505]',
    accentColor: 'rgba(139,92,246,0.45)',
  },
  {
    id: 'obsidian-case',
    projectId: 'obsidian-auto',
    client: 'Veloce Motors',
    industry: 'Automotive / Technology',
    category: 'AI Commercial',
    year: '2024',
    headline: 'Building a car launch without a car on set.',
    subheadline: 'How a 60-second EV commercial was produced entirely with generative AI.',
    challenge: 'The vehicle was still in pre-production. No physical car existed for the shoot window. A traditional production was impossible. The brand needed a launch film in 4 weeks that could run on broadcast, digital and out-of-home.',
    creativeDirection: 'We treated the car as a concept — not a product. The visual language became about the feeling of velocity, precision and silence that defines electric driving. Dark environments, cinematic motion blur, and environments that felt inevitable rather than fantastical.',
    execution: 'Using approved CAD references and the brand\'s design language, we generated photorealistic AI environments and vehicle renders across 8 distinct sequences. All composited into a single 60-second film with a custom sound design built from the car\'s actual motor recordings.',
    process: [
      'CAD and brand asset review — establishing technical constraints',
      'Visual direction: 2 territory presentations, 1 selected',
      'AI vehicle and environment generation — 200+ frames produced',
      'Sequence editing, motion design and compositing',
      'Sound design using real motor audio + broadcast delivery',
    ],
    results: [
      '4.2M views on launch day across social channels',
      'Selected for D&AD New Blood Awards consideration',
      'Delivered 3 days ahead of schedule',
      'Client brief: "Indistinguishable from a traditional £400k production"',
    ],
    gradient: 'from-[#04080f] via-[#080d1a] to-[#050505]',
    accentColor: 'rgba(56,189,248,0.40)',
  },
  {
    id: 'luminary-case',
    projectId: 'luminary-fashion',
    client: 'House of Édition',
    industry: 'Fashion',
    category: 'Product Film',
    year: '2024',
    headline: 'Rewriting what a fashion campaign can look like.',
    subheadline: 'An SS24 editorial campaign that dissolved the boundary between photography and generative art.',
    challenge: 'The brand was repositioning upmarket and needed visual work that looked nothing like their previous output — or anyone else\'s. Budget: limited. Timeline: 2 weeks to final delivery. Ambition: unlimited.',
    creativeDirection: 'We rejected the conventional fashion campaign grammar entirely. No models in obvious poses. No predictable colour palette. Instead: abstract spatial environments, garments as sculptural objects, and a colour language pulled from Renaissance painting filtered through a generative AI lens.',
    execution: 'A 30-second hero film plus 24 key still frames. Every image AI-generated from a locked visual brief, then refined through 3 rounds of creative direction. The result looks like nothing else in the contemporary fashion space.',
    process: [
      'Brand repositioning workshop and competitor landscape review',
      'Visual territory: 4 directions, client selected 1 with modifications',
      'AI generation of 300+ candidate images across 6 garment categories',
      'Editorial curation down to 24 hero frames + 30s film edit',
      'Retouching, colour grade and multi-format delivery',
    ],
    results: [
      'Campaign picked up by 14 fashion publications without a PR push',
      '340% increase in Instagram follower growth in the 30 days post-launch',
      'Waitlist for SS24 collection sold out before physical launch',
      'Client retained for AW24 and SS25 campaigns',
    ],
    gradient: 'from-[#12040e] via-[#1c0a18] to-[#050505]',
    accentColor: 'rgba(244,114,182,0.40)',
  },
]
