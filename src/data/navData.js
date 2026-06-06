export const navItems = [
  {
    label: 'Home',
    href: '/',
    dropdown: null,
  },
  {
    label: 'Technology',
    href: '/technology',
    dropdown: {
      heading: 'Technology Solutions',
      seeAllHref: '/technology',
      links: [
        { label: 'PCI for Furnace & Kiln', href: '/technology/pci-furnace-kiln' },
        { label: 'Grinding', href: '/technology/grinding' },
        { label: 'Crushing & Sizing', href: '/technology/crushing-sizing' },
        { label: 'Drying & Preheating', href: '/technology/drying-preheating' },
        { label: 'Feeding & Metering', href: '/technology/feeding-metering' },
        { label: 'Pneumatic Conveying', href: '/technology/pneumatic-conveying' },
        { label: 'Active Lime', href: '/technology/active-lime' },
        { label: 'Pelletizing', href: '/technology/pelletizing' },
        { label: 'Sintering', href: '/technology/sintering' },
        { label: 'BF Ironmaking', href: '/technology/bf-ironmaking' },
        { label: 'Flue Gas Purification', href: '/technology/flue-gas-purification' },
        { label: 'Beneficiation', href: '/technology/beneficiation' },
      ],
    },
  },
  {
    label: 'Products',
    href: '/products',
    dropdown: {
      heading: 'Product Catalog',
      seeAllHref: '/products',
      links: [
        { label: 'Crushing & Sizing', href: '/products/crushing-sizing' },
        { label: 'Grinding', href: '/products/grinding' },
        { label: 'Metering & Conveying', href: '/products/metering-conveying' },
        { label: 'PCI for Furnace & Kiln', href: '/products/pci-furnace-kiln' },
        { label: 'Environmental Dedusting', href: '/products/environmental-dedusting' },
        { label: 'Thermal Drying', href: '/products/thermal-drying' },
        { label: 'Calcining & Smelting', href: '/products/calcining-smelting' },
      ],
    },
  },
  {
    label: 'Performance',
    href: '/performance',
    dropdown: {
      heading: 'Industry Performance',
      seeAllHref: '/performance',
      links: [
        { label: 'Metallurgical Industry', href: '/performance/metallurgical' },
        { label: 'Power Generation', href: '/performance/power-generation' },
        { label: 'Beneficiation Industry', href: '/performance/beneficiation' },
        { label: 'Chemical Industry', href: '/performance/chemical' },
      ],
    },
  },
  {
    label: 'Services',
    href: '/services',
    dropdown: {
      heading: 'Our Services',
      seeAllHref: '/services',
      links: [
        { label: 'Design & Engineering', href: '/services/design-engineering' },
        { label: 'Supervision on Installation', href: '/services/supervision-installation' },
        { label: 'Supervision on Commissioning', href: '/services/supervision-commissioning' },
        { label: 'Operation', href: '/services/operation' },
        { label: 'Training', href: '/services/training' },
        { label: 'Spares', href: '/services/spares' },
        { label: 'Diagnosis & Consultation', href: '/services/diagnosis-consultation' },
        { label: 'Upgrades & Retrofits', href: '/services/upgrades-retrofits' },
        { label: 'Intelligent Service Center', href: '/services/intelligent-service-center' },
      ],
    },
  },
  {
    label: 'Innovation',
    href: '/innovation',
    dropdown: {
      heading: 'Innovation & IP',
      seeAllHref: '/innovation',
      links: [
        { label: 'Patent', href: '/innovation/patent' },
        { label: 'Copyright', href: '/innovation/copyright' },
        { label: 'Know-how', href: '/innovation/know-how' },
      ],
    },
  },
  {
    label: 'Company',
    href: '/company',
    dropdown: {
      heading: 'About ANDE',
      seeAllHref: '/company',
      links: [
        { label: 'Company Profile', href: '/company' },
        { label: 'Culture', href: '/company/culture' },
        { label: 'Honor & Qualification', href: '/company/honor' },
        { label: 'Company Appearance', href: '/company/appearance' },
        { label: 'Manufacturing Facilities', href: '/company/manufacturing' },
        { label: 'Contact Us', href: '/company/contact' },
        { label: 'News', href: '/news' },
      ],
    },
  },
];
