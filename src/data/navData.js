export const navItems = [
  {
    label: 'Home',
    href: '/',
    dropdown: null,
  },
  {
    label: 'Technology',
    href: '/technology',
    dropdown: null,
  },
  {
    label: 'Products',
    href: '/products',
    dropdown: {
      heading: 'Product Catalog',
      seeAllHref: '/products',
      links: [
        { label: 'Crushing & Sizing', href: '/products/category/crushing-sizing' },
        { label: 'Grinding', href: '/products/category/grinding' },
        { label: 'Metering & Conveying', href: '/products/category/metering-conveying' },
        { label: 'PCI for Furnace & Kiln', href: '/products/category/pci-furnace-kiln' },
        { label: 'Environmental Dedusting', href: '/products/category/environmental-dedusting' },
        { label: 'Thermal Drying', href: '/products/category/thermal-drying' },
        { label: 'Calcining & Smelting', href: '/products/category/calcining-smelting' },
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
    dropdown: null,
  },
  {
    label: 'Reference',
    href: '/reference',
    dropdown: null,
  },
  {
    label: 'Contact Us',
    href: '/company/contact',
    dropdown: null,
  },
];
