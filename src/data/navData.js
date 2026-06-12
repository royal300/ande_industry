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
    dropdown: null,
  },
  {
    label: 'Services',
    href: '/services',
    dropdown: null,
  },
  {
    label: 'Innovation',
    href: '/innovation',
    dropdown: null,
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
