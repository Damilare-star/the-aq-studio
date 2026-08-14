export interface ProcessStep {
  number: string
  title: string
  verb: string
  description: string
  detail: string
  duration: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    verb: 'Discover',
    description: 'DISCOVER',
    detail: 'I get inside your brand, product, audience, competitors, and campaign objective to understand what the creative needs to communicate.',
    duration: '1 day',
  },
  {
    number: '02',
    title: 'Concept',
    verb: 'Concept',
    description: 'CONCEPT',
    detail: 'Develop the concept, visual direction, story, and creative approach around your product.',
    duration: '1–2 days',
  },
  {
    number: '03',
    title: 'Produce',
    verb: 'Produce',
    description: 'PRODUCE',
    detail: 'Generate and produce cinematic product visuals using an AI-driven production workflow, then shape them into the commercial.',
    duration: '3–5 days',
  },
  {
    number: '04',
    title: 'Refine',
    verb: 'Refine',
    description: 'REFINE',
    detail: 'Refine the visuals, pacing, motion, sound design, transitions, and storytelling until the commercial feels finished.',
    duration: '1–2 days',
  },
  {
    number: '05',
    title: 'Deliver',
    verb: 'Deliver',
    description: 'DELIVER',
    detail: 'Deliver the final commercial in the required formats, optimized for web, social, and paid advertising.',
    duration: '1 day',
  },
]
