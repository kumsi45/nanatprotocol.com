import { Service, GalleryItem, Testimonial, Branch } from './types';

export const SERVICES: Service[] = [
  {
    id: 'luxury-suit-rental',
    title: 'Luxury Suit Rental',
    description: 'Access our exclusive collection of world-class executive suits for any high-profile occasion.',
    image: 'https://images.unsplash.com/photo-1594932224828-b4b05a832fe3?auto=format&fit=crop&q=80',
    category: 'Fashion',
  },
  {
    id: 'wedding-decoration',
    title: 'Wedding & Event Decoration',
    description: 'Transform your special day into a cinematic experience with our premium decoration services.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    category: 'Events',
  },
  {
    id: 'premium-car-rental',
    title: 'Premium Car Rental',
    description: 'Arrive in authority with our fleet of high-end luxury vehicles and professional chauffeurs.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    category: 'Logistics',
  },
  {
    id: 'mens-suit-sales',
    title: 'Ready-made Men’s Suits',
    description: 'Purchase premium crafted suits that define class and professional excellence.',
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80',
    category: 'Retail',
  },
  {
    id: 'executive-shoes',
    title: 'Executive Suit Shoes',
    description: 'Complete your look with our collection of premium, handcrafted executive footwear.',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80',
    category: 'Retail',
  },
  {
    id: 'professional-laundry',
    title: 'Professional Laundry',
    description: 'Meticulous care for your high-end garments using specialized premium treatment.',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80',
    category: 'Protocol',
  },
  {
    id: 'vip-protocol',
    title: 'VIP Protocol Services',
    description: 'Discreet, professional, and elite protocol management for dignitaries and executives.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    category: 'Protocol',
  },
  {
    id: 'groom-package',
    title: 'Signature Groom Package',
    description: 'The ultimate all-inclusive transformation: suit, shoes, car, and protocol assistance.',
    image: 'https://images.unsplash.com/photo-1550005814-02a466f62ea2?auto=format&fit=crop&q=80',
    category: 'Signature',
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', title: 'Royal Wedding Adaba', category: 'Decoration', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
  { id: '2', title: 'Executive Styling', category: 'Suits', image: 'https://images.unsplash.com/photo-1594932224828-b4b05a832fe3?auto=format&fit=crop&q=80' },
  { id: '3', title: 'Luxury Fleet', category: 'Cars', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80' },
  { id: '4', title: 'Groom Perfection', category: 'Events', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80' },
  { id: '5', title: 'Bespoke Collection', category: 'Fashion', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80' },
  { id: '6', title: 'VIP Reception', category: 'Protocol', image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80' },
  { id: 'suit-1', title: 'Elite Groom Styling', category: 'Suits', image: 'https://images.unsplash.com/photo-1594932224828-b4b05a832fe3?auto=format&fit=crop&q=80' },
  { id: 'suit-2', title: 'Prestige Formal Wear', category: 'Suits', image: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80' },
  { id: 'suit-3', title: 'Executive Portrait', category: 'Suits', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80' },
  { id: 'suit-4', title: 'Signature White Suit', category: 'Suits', image: 'https://images.unsplash.com/photo-1617130863739-4c21e8e69248?auto=format&fit=crop&q=80' },
  { id: 'suit-5', title: 'Corporate Excellence', category: 'Suits', image: 'https://images.unsplash.com/photo-1598460350580-e7632450596c?auto=format&fit=crop&q=80' },
  { id: 'suit-6', title: 'Modern Professional', category: 'Suits', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Samuel Bekele',
    role: 'CEO, Highland Ventures',
    content: 'NANAT PROTOCOL handled our executive visit with absolute perfection. Their attention to detail in protocol and transportation is unmatched.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Helen Tadesse',
    role: 'Bride',
    content: 'Our wedding decoration in Adaba was breathtaking. It felt like something out of a luxury magazine. Thank you, Nanat team!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Dr. Michael Kebede',
    role: 'Executive Client',
    content: 'The suit rental service is a game changer. The fit, quality, and grooming package made me feel truly prestigious at the gala.',
    rating: 5,
  }
];

export const BRANCHES: Branch[] = [
  {
    name: 'Adaba Main Branch',
    location: 'Arsi Zone',
    address: 'Main Commercial Terminal, Adaba, Arsi, Ethiopia',
    phone: '+251 990069892',
    whatsapp: '+251 990069892',
  },
  {
    name: 'Shashamene Branch',
    location: 'West Arsi',
    address: 'Executive Plaza, Central Shashamene, Ethiopia',
    phone: '+251 965254377',
    whatsapp: '+251 965254377',
  }
];
