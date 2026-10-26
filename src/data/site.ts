// Everything you'd want to edit about yourself lives here.
export const site = {
  name: 'Manu Mackal',
  title: 'Manu Mackal — Product Designer',
  description: 'Manu Mackal is a product designer with 7+ years across fintech, travel and edge computing.',

  role: 'Product designer',
  experience: '7+ years',
  email: 'manumackal@gmail.com',

  // Header navigation
  nav: [
    { key: 'case-study', label: 'Case study', href: '/case-study/' },
    { key: 'playground', label: 'Playground', href: '/playground/' },
    { key: 'connect', label: 'Connect', href: 'mailto:manumackal@gmail.com' },
  ],
};

export type NavKey = (typeof site.nav)[number]['key'];
