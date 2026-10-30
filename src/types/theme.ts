export type DesignDirection = 'option-a' | 'option-b';

export interface ThemeConfig {
  id: DesignDirection;
  name: string;
  tagline: string;
  description: string;
  keyDifferentiators: string[];
}

export const DESIGN_DIRECTIONS: Record<DesignDirection, ThemeConfig> = {
  'option-a': {
    id: 'option-a',
    name: 'Option A: Promotional Storefront',
    tagline: 'High-utility, product-focused eCommerce guided by 4imprint usability conventions',
    description: 'Emphasizes scannable product card grids, instant promotional ribbons, prominent search, structured tiered pricing tables, quick spec sheets, and clear conversion calls to action.',
    keyDifferentiators: [
      'Promotional Commerce Header with Quick Search & Category mega-bar',
      'High-density Product Grid with Quantity Tier Badges ("As low as $X.XX")',
      'Structured 3-step Bag Customizer workflow with specification calculator',
      'Promotional trust badges & conference readiness assurance indicators',
      'Commercial deep-navy (#0B3B60) and vibrant action-amber (#E65100) palette'
    ]
  },
  'option-b': {
    id: 'option-b',
    name: 'Option B: Corporate & Editorial Experience',
    tagline: 'Sophisticated executive presentation & conference-solutions curation',
    description: 'Emphasizes conference event storytelling, editorial typography, full-bleed imagery staging, event tier packages, and a minimalist design atelier experience.',
    keyDifferentiators: [
      'Editorial Masterhead with architectural typography and quiet elegance',
      'Curated Conference Solutions showcases & Keynote Event Suites',
      'Magazine-style category layouts with generous whitespace and editorial serif accents',
      'Studio Atelier Customizer with floating dark controls and design summary',
      'Obsidian slate (#1A2328), antique bronze (#B8860B), and warm gallery cream palette'
    ]
  }
};

