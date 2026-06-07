export const performanceData = [
  // Metallurgical (3)
  {
    id: 1,
    industry: 'Metallurgical',
    title: '600 t/d Active Lime Kiln Plant',
    description: 'Turnkey engineering and supply for a high-efficiency rotary kiln active lime production line.',
    location: 'Jamshedpur, India',
    capacity: '600 tons/day',
    year: '2025',
    image: '/images/tech_lime_1780751871313.webp',
  },
  {
    id: 2,
    industry: 'Metallurgical',
    title: '400 m² Sintering Line Upgrade',
    description: 'Comprehensive upgrade of the main exhaust system and circular cooler for improved energy efficiency.',
    location: 'Pohang, South Korea',
    capacity: '400 m² grate area',
    year: '2024',
    image: '/images/hero_slide_1_1780751463278.webp',
  },
  {
    id: 3,
    industry: 'Metallurgical',
    title: '3500m³ Blast Furnace PCI System',
    description: 'Complete pulverized coal injection system featuring dense-phase conveying and multi-lance injection.',
    location: 'Dung Quat, Vietnam',
    capacity: '120 tons/hour',
    year: '2023',
    image: '/images/tech_pneumatic_1780751853220.webp',
  },
  
  // Power Generation (3)
  {
    id: 4,
    industry: 'Power Generation',
    title: '5x660MW Coal Milling System',
    description: 'Supply of 30 vertical roller mills for a supercritical thermal power plant.',
    location: 'Barh, India',
    capacity: '5 x 660 MW',
    year: '2025',
    image: '/images/tech_grinding_1780751799211.webp',
  },
  {
    id: 5,
    industry: 'Power Generation',
    title: 'Fly Ash Pneumatic Conveying',
    description: 'Long-distance dense-phase pneumatic conveying system for fly ash disposal.',
    location: 'Mailiao, Taiwan',
    capacity: '150 tons/hour',
    year: '2022',
    image: '/images/tech_pneumatic_1780751853220.webp',
  },
  {
    id: 6,
    industry: 'Power Generation',
    title: 'Boiler PCI Retrofit Project',
    description: 'Retrofit of existing coal injection system to handle high-moisture lignite coal.',
    location: 'Datong, China',
    capacity: '80 tons/hour',
    year: '2021',
    image: '/images/tech_feeding_1780751840036.webp',
  },
  
  // Mining/Chemical/Beneficiation (3)
  {
    id: 7,
    industry: 'Beneficiation',
    title: 'Iron Ore Beneficiation Plant',
    description: 'Primary and secondary crushing circuit utilizing high-pressure roller mills.',
    location: 'Pilbara, Australia',
    capacity: '3000 tons/hour',
    year: '2024',
    image: '/images/tech_crushing_1780751814463.webp',
  },
  {
    id: 8,
    industry: 'Chemical',
    title: 'Lead Smelting Process Integration',
    description: 'Custom material handling and feeding system for a secondary lead smelting operation.',
    location: 'Tsumeb, Namibia',
    capacity: '150,000 t/a',
    year: '2023',
    image: '/images/hero_slide_2_1780751477217.webp',
  },
  {
    id: 9,
    industry: 'Chemical',
    title: 'Chemical Powder Drying Line',
    description: 'Indirect heated rotary dryer system for sensitive chemical compounds.',
    location: 'Rayong, Thailand',
    capacity: '20 tons/hour',
    year: '2022',
    image: '/images/tech_drying_1780751825785.webp',
  },
];

export const performanceDetailData = {
  'metallurgical': {
    industry: 'Metallurgical Industry',
    description: 'Delivering robust equipment and EPC services for iron and steel production.',
    stats: [
      { label: 'Completed Projects', value: '45+' },
      { label: 'Countries Served', value: '12' },
      { label: 'Years Experience', value: '30+' }
    ],
    projects: [
      {
        name: '600 t/d Active Lime Kiln Plant',
        location: 'Jamshedpur, India',
        capacity: '600 tons/day',
        year: '2025'
      },
      {
        name: '400 m² Sintering Line Upgrade',
        location: 'Pohang, South Korea',
        capacity: '400 m² grate area',
        year: '2024'
      },
      {
        name: '3500m³ Blast Furnace PCI System',
        location: 'Dung Quat, Vietnam',
        capacity: '120 tons/hour',
        year: '2023'
      }
    ]
  },
  'power-generation': {
    industry: 'Power Generation',
    description: 'Providing reliable coal milling and ash handling systems for thermal power plants.',
    stats: [
      { label: 'Completed Projects', value: '30+' },
      { label: 'MW Installed Capacity', value: '50k+' },
      { label: 'Years Experience', value: '25+' }
    ],
    projects: [
      {
        name: '5x660MW Coal Milling System',
        location: 'Barh, India',
        capacity: '5 x 660 MW',
        year: '2025'
      },
      {
        name: 'Fly Ash Pneumatic Conveying',
        location: 'Mailiao, Taiwan',
        capacity: '150 tons/hour',
        year: '2022'
      },
      {
        name: 'Boiler PCI Retrofit Project',
        location: 'Datong, China',
        capacity: '80 tons/hour',
        year: '2021'
      }
    ]
  },
  'beneficiation': {
    industry: 'Beneficiation Industry',
    description: 'Advanced crushing and grinding solutions for maximum mineral recovery.',
    stats: [
      { label: 'Completed Projects', value: '25+' },
      { label: 'Ore Processed (MT)', value: '100+' },
      { label: 'Years Experience', value: '20+' }
    ],
    projects: [
      {
        name: 'Iron Ore Beneficiation Plant',
        location: 'Pilbara, Australia',
        capacity: '3000 tons/hour',
        year: '2024'
      }
    ]
  },
  'chemical': {
    industry: 'Chemical Industry',
    description: 'Specialized thermal drying and material handling for sensitive chemical compounds.',
    stats: [
      { label: 'Completed Projects', value: '15+' },
      { label: 'Process Types', value: '8+' },
      { label: 'Years Experience', value: '15+' }
    ],
    projects: [
      {
        name: 'Lead Smelting Process Integration',
        location: 'Tsumeb, Namibia',
        capacity: '150,000 t/a',
        year: '2023'
      },
      {
        name: 'Chemical Powder Drying Line',
        location: 'Rayong, Thailand',
        capacity: '20 tons/hour',
        year: '2022'
      }
    ]
  }
};
