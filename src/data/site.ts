// Everything you'd want to edit about yourself lives here.
export const site = {
  name: 'Manu Mackal',
  title: 'Manu Mackal — Product Designer',
  description: 'Manu Mackal is a product designer with 7+ years across fintech, travel and edge computing.',

  role: 'Product designer',
  experience: '7+ years',

  // Contact (the Connect sheet at the bottom of the home page)
  email: 'manumackal@gmail.com',
  phone: '+91 81295 82221',
  whatsapp: 'https://wa.me/918129582221',
  location: 'Trivandrum, India',

  // Header navigation. The home page is one long scroll, so these jump to its stages.
  nav: [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'case-study', label: 'Case study', href: '/#case-study' },
    { key: 'playground', label: 'Playground', href: '/#playground' },
    { key: 'connect', label: 'Connect', href: '/#connect' },
  ],
};

export type NavKey = (typeof site.nav)[number]['key'];
