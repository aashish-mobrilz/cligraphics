import { Category } from '../types/category';

export const CATEGORIES: Category[] = [
  {
    id: 'bags',
    name: 'Bags',
    slug: 'bags',
    description: 'Conference totes, convention messenger bags, eco-cotton shoppers, and drawstring event backpacks engineered for high-visibility event branding.',
    shortDescription: 'Conference totes, convention messengers, and attendee bags.',
    type: 'product',
    iconName: 'ShoppingBag',
    itemCountLabel: '24 Sample Styles',
    featuredBadge: 'Online Customizer Available',
    subcategories: ['Conference Totes', 'Messenger Bags', 'Eco Cotton Shoppers', 'Backpacks & Cinch Bags', 'Zippered Portfolios']
  },
  {
    id: 'lanyards',
    name: 'Lanyards',
    slug: 'lanyards',
    description: 'Full-color dye-sublimated lanyards, woven conference neckstraps, badge reels, and clear vinyl credential holders.',
    shortDescription: 'Custom printed neckstraps, badge reels & event credentials.',
    type: 'product',
    iconName: 'Tag',
    itemCountLabel: '18 Sample Options',
    featuredBadge: 'Conference Essential',
    subcategories: ['Full-Color Sublimation', 'Ribbed Polyester', 'Double-Clip Straps', 'Badge Holders & Sleeves', 'Custom Retractable Reels']
  },
  {
    id: 'drinkware',
    name: 'Drinkware',
    slug: 'drinkware',
    description: 'Double-wall insulated tumblers, stainless steel water bottles, ceramic keynote mugs, and eco-friendly conference beverage cups.',
    shortDescription: 'Insulated tumblers, stainless bottles & ceramic mugs.',
    type: 'product',
    iconName: 'Coffee',
    itemCountLabel: '32 Sample Models',
    featuredBadge: 'Top Attendee Gift',
    subcategories: ['Vacuum Insulated Tumblers', 'Stainless Water Bottles', 'Ceramic Keynote Mugs', 'Eco Wheat-Straw Cups', 'Sport Bottles']
  },
  {
    id: 'pens',
    name: 'Pens',
    slug: 'pens',
    description: 'Executive metal ballpoints, soft-touch stylus pens, gel ink seminar pens, and sustainable bamboo writing instruments.',
    shortDescription: 'Executive metal pens, soft-touch stylus & eco writing tools.',
    type: 'product',
    iconName: 'PenTool',
    itemCountLabel: '40 Sample Items',
    featuredBadge: 'High Volume Value',
    subcategories: ['Soft-Touch Metal Stylus', 'Executive Gift Pens', 'Seminar Gel Pens', 'Eco Bamboo Pens', 'Value Ballpoint Packs']
  },
  {
    id: 'apparel',
    name: 'Apparel',
    slug: 'apparel',
    description: 'Staff polos, conference crewneck fleeces, branded moisture-wicking tees, and premium embroidered softshell jackets.',
    shortDescription: 'Staff polos, event tees, zip fleeces & embroidered jackets.',
    type: 'product',
    iconName: 'Shirt',
    itemCountLabel: '28 Sample Styles',
    subcategories: ['Event Staff Polos', 'Crewneck Cotton Tees', 'Performance Wicking Tees', 'Quarter-Zip Fleeces', 'Volunteer Vests']
  },
  {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    description: 'Power banks, multi-charging cables, MagSafe wireless pads, Bluetooth travel speakers, and custom USB flash drives for digital proceedings.',
    shortDescription: 'Power banks, charging cables, wireless pads & USB drives.',
    type: 'product',
    iconName: 'Cpu',
    itemCountLabel: '20 Sample Tech Gifts',
    featuredBadge: 'VIP Sponsor Favorite',
    subcategories: ['Slim Power Banks', '3-in-1 Charging Cables', 'Wireless Fast Chargers', 'USB Drive Proceedings', 'Bluetooth Travel Speakers']
  },
  {
    id: 'journals-and-notebooks',
    name: 'Journals and Notebooks',
    slug: 'journals-and-notebooks',
    description: 'Hardcover conference journals, softbound seminar jotters, eco-recycled spiral notebooks, and matching pen & pad sets.',
    shortDescription: 'Hardcover conference journals, seminar jotters & padfolios.',
    type: 'product',
    iconName: 'BookOpen',
    itemCountLabel: '22 Sample Formats',
    featuredBadge: 'Keynote Staple',
    subcategories: ['Hardcover Seminar Journals', 'Eco-Cork & Linen Notebooks', 'Spiral Wirebound Pads', 'Executive Padfolios', 'Pocket Jotters']
  },
  {
    id: 'printing',
    name: 'Printing',
    slug: 'printing',
    description: 'Complete commercial printing services from single flyer sheets to web-printed registration brochures, spiral-bound conference program books, and venue signage.',
    shortDescription: 'Brochures, registration books, program guides & flyers.',
    type: 'service',
    iconName: 'Printer',
    itemCountLabel: 'Full Service Press',
    featuredBadge: 'Service Capability',
    subcategories: ['Conference Program Books', 'Registration Brochures', 'Single & Multi-Fold Flyers', 'Large Format Signage & Banners', 'Badge & Agenda Printing']
  },
  {
    id: 'fulfillment-and-direct-mail',
    name: 'Fulfillment and Direct Mail Services',
    slug: 'fulfillment-and-direct-mail',
    description: 'Turnkey conference kit assembly, attendee swag box packing, direct mail campaigns, venue freight delivery, and multi-location logistics.',
    shortDescription: 'Swag box kitting, direct attendee mailing & venue delivery.',
    type: 'service',
    iconName: 'Truck',
    itemCountLabel: 'Logistics & Kitting',
    featuredBadge: 'Service Capability',
    subcategories: ['Custom Conference Swag Kitting', 'Pre-Conference Direct Mail', 'Venue Bulk Delivery & Storage', 'VIP Attendee Dropship', 'Badge Assembly & Matching']
  }
];

