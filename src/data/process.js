export const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Tell Me What You Want to Build',
    shortTitle: 'Discovery',
    description: 'We start with a conversation about your project goals, requirements, constraints, and timeline. I\'ll ask the right questions to understand the technical scope and your expectations.',
    icon: 'message-square',
    details: [
      'Project requirements gathering',
      'Technical feasibility discussion',
      'Budget & timeline alignment',
      'Communication preferences',
    ],
    deliverables: ['Project brief', 'Initial estimates', 'Scope document'],
  },
  {
    id: 2,
    number: '02',
    title: 'I Design the Solution',
    shortTitle: 'Design',
    description: 'I create a detailed technical design including architecture diagrams, component selection, schematic captures, PCB layouts (if needed), firmware architecture, and a development roadmap with milestones.',
    icon: 'layout',
    details: [
      'System architecture design',
      'Component selection & BOM',
      'Schematic & PCB design',
      'Firmware architecture',
      'Risk assessment & mitigation',
    ],
    deliverables: ['Technical specification', 'Schematics', 'BOM', 'Development roadmap'],
  },
  {
    id: 3,
    number: '03',
    title: 'I Develop and Test the System',
    shortTitle: 'Development',
    description: 'Iterative development with regular updates. Firmware development, PCB fabrication/assembly, integration testing, debugging, and validation against requirements. You get access to progress demos and test reports.',
    icon: 'code',
    details: [
      'Firmware development (sprints)',
      'PCB fabrication & assembly',
      'Hardware bring-up & debugging',
      'Integration testing',
      'Performance optimization',
      'Stress & reliability testing',
    ],
    deliverables: ['Working prototype', 'Source code', 'Test reports', 'Documentation'],
  },
  {
    id: 4,
    number: '04',
    title: 'You Receive the Completed Project',
    shortTitle: 'Delivery',
    description: 'Final delivery includes the working hardware, complete source code with documentation, build instructions, test reports, and 30 days of post-delivery support for questions and minor adjustments.',
    icon: 'package',
    details: [
      'Final hardware delivery',
      'Complete source code (Git repo)',
      'Build & deployment guide',
      'API documentation',
      'Test & validation reports',
      '30-day support included',
    ],
    deliverables: ['Hardware', 'Code repository', 'Documentation', 'Support period'],
  },
];

export const processHighlights = [
  'Transparent communication at every stage',
  'Iterative development with demos',
  'Rigorous testing before delivery',
  'Complete documentation & source code',
  'Post-delivery support included',
];

export default processSteps;