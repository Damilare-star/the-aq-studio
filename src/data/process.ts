export interface ProcessStep {
  number: string
  title: string
  verb: string        // short action word for large display
  description: string
  detail: string      // one extra sentence of depth
  duration: string    // typical time for this phase
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    verb: 'Discover',
    description: 'Understand the brand, product and audience.',
    detail: 'We immerse ourselves in your world — your category, your competitors, your customer and the emotion you want to own.',
    duration: '1–2 days',
  },
  {
    number: '02',
    title: 'Concept',
    verb: 'Concept',
    description: 'Develop the creative direction and visual concept.',
    detail: 'A precise visual territory, moodboards, style frames and a locked narrative — so every frame we generate has a reason to exist.',
    duration: '2–3 days',
  },
  {
    number: '03',
    title: 'Produce',
    verb: 'Produce',
    description: 'Use AI and cinematic production techniques to create the campaign.',
    detail: 'Our AI pipelines generate photorealistic environments, product visuals and motion sequences — directed like a film, not prompted like a chatbot.',
    duration: '5–8 days',
  },
  {
    number: '04',
    title: 'Refine',
    verb: 'Refine',
    description: 'Polish the visuals, motion, sound and storytelling.',
    detail: 'Every frame is graded, every transition timed, every sound design element placed. We iterate with you until it\'s exactly right.',
    duration: '2–3 days',
  },
  {
    number: '05',
    title: 'Deliver',
    verb: 'Deliver',
    description: 'Deliver campaign-ready creative assets.',
    detail: 'Final files in every format you need — broadcast, social, digital — ready to go live the moment you are.',
    duration: '1 day',
  },
]
