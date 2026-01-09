
import { Project, Category } from './types';

export const CATEGORIES: Category[] = [
  'ALL',
  'Brand & Identity',
  'Graphic',
  'Product',
  'Communication',
  'Advertising',
  'Film',
  'Web Production',
  'Art Direction & Production'
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MIDNIGHTWAVE HAUS',
    category: 'Brand & Identity',
    subTitle: 'Artist Identity Design',
    year: '2025',
    description: 'A comprehensive branding project for MIDNIGHTWAVE HAUS, focusing on dark aesthetics and fluid typography. The project encompassed logo design, brand guidelines, and visual identity for digital platforms.',
    imageUrl: 'https://picsum.photos/seed/m1/800/600',
    detailImages: [
      'https://picsum.photos/seed/m1d1/1200/1600',
      'https://picsum.photos/seed/m1d2/1200/1600',
      'https://picsum.photos/seed/m1d3/1200/1600'
    ]
  },
  {
    id: '2',
    title: 'BABY DONT CRY',
    category: 'Film',
    subTitle: 'Artist Logo Motion Video',
    year: '2025',
    description: 'Logo motion and teaser video for the "BABY DONT CRY" campaign. The visual style uses glitch effects and high-contrast black and white imagery to convey emotional depth.',
    imageUrl: 'https://picsum.photos/seed/b2/800/600',
    detailImages: [
      'https://picsum.photos/seed/b2d1/1200/1600',
      'https://picsum.photos/seed/b2d2/1200/1600'
    ]
  },
  {
    id: '3',
    title: 'TUOMIO 24FW \'Resonance\'',
    category: 'Art Direction & Production',
    subTitle: 'Art Directing & Production',
    year: '2024',
    description: 'Art direction for the Fall/Winter 2024 collection "Resonance" by TUOMIO. The shoot took place in an industrial setting to contrast the organic textures of the clothing.',
    imageUrl: 'https://picsum.photos/seed/t3/800/600',
    detailImages: [
      'https://picsum.photos/seed/t3d1/1200/1600',
      'https://picsum.photos/seed/t3d2/1200/1600',
      'https://picsum.photos/seed/t3d3/1200/1600'
    ]
  },
  {
    id: '4',
    title: 'THE ACTION',
    category: 'Graphic',
    subTitle: 'ALBUM DESIGN',
    year: '2025',
    description: 'Album artwork for the latest release by THE ACTION. The design features bold, kinetic typography and abstract shapes that mirror the high-energy sound of the record.',
    imageUrl: 'https://picsum.photos/seed/a4/800/600',
    detailImages: [
      'https://picsum.photos/seed/a4d1/1200/1600',
      'https://picsum.photos/seed/a4d2/1200/1600'
    ]
  }
  // Simplified for brevity, same pattern for others
];
