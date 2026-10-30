import { DesignerModelConfig } from '../types/designer';

export const DESIGNER_MODELS: DesignerModelConfig[] = [
  {
    id: 'canvas-tote-pro',
    productId: 'prod-bag-01',
    productSlug: 'executive-conference-canvas-tote',
    productName: 'Executive Conference Canvas Tote',
    basePrice: 6.85,
    minOrderQuantity: 50,
    printableDimensionsLabel: '9.0" W x 10.5" H (Illustrative Sample Area)',
    defaultColor: {
      name: 'Commercial Navy',
      hex: '#0B3B60',
      code: 'NAVY'
    },
    availableColors: [
      { name: 'Commercial Navy', hex: '#0B3B60', code: 'NAVY' },
      { name: 'Classic Black', hex: '#1E1E1E', code: 'BLK' },
      { name: 'Natural Ecru', hex: '#EAE1CE', code: 'ECRU' },
      { name: 'Forest Green', hex: '#1C3E2A', code: 'GRN' },
      { name: 'Burgundy Wine', hex: '#581825', code: 'WINE' },
    ],
    views: [
      {
        id: 'front',
        label: 'Front View',
        mockupBaseSvg: 'tote-front',
        printArea: {
          x: 23,
          y: 35,
          width: 54,
          height: 48,
        },
        hasStrapOverlay: true,
      },
      {
        id: 'back',
        label: 'Back View',
        mockupBaseSvg: 'tote-back',
        printArea: {
          x: 23,
          y: 35,
          width: 54,
          height: 48,
        },
        hasStrapOverlay: true,
      }
    ]
  },
  {
    id: 'metro-messenger',
    productId: 'prod-bag-02',
    productSlug: 'metro-convention-messenger-bag',
    productName: 'Metro Convention Messenger Bag',
    basePrice: 14.50,
    minOrderQuantity: 25,
    printableDimensionsLabel: '8.0" W x 6.5" H (Front Flap Sample Area)',
    defaultColor: {
      name: 'Heather Charcoal',
      hex: '#374151',
      code: 'CHRC'
    },
    availableColors: [
      { name: 'Heather Charcoal', hex: '#374151', code: 'CHRC' },
      { name: 'Midnight Navy', hex: '#1E293B', code: 'NAVY' },
      { name: 'Executive Black', hex: '#18181B', code: 'BLK' },
    ],
    views: [
      {
        id: 'front',
        label: 'Front Flap View',
        mockupBaseSvg: 'messenger-front',
        printArea: {
          x: 26,
          y: 38,
          width: 48,
          height: 38,
        },
        hasStrapOverlay: true,
      },
      {
        id: 'back',
        label: 'Back Panel View',
        mockupBaseSvg: 'messenger-back',
        printArea: {
          x: 24,
          y: 32,
          width: 52,
          height: 45,
        },
        hasStrapOverlay: false,
      }
    ]
  },
  {
    id: 'eco-shopper',
    productId: 'prod-bag-03',
    productSlug: 'eco-friendly-recycled-cotton-shopper',
    productName: 'Eco-Friendly Recycled Cotton Shopper',
    basePrice: 4.25,
    minOrderQuantity: 100,
    printableDimensionsLabel: '10.0" W x 11.0" H (Generous Center Area)',
    defaultColor: {
      name: 'Natural Cotton',
      hex: '#F3EDE2',
      code: 'NAT'
    },
    availableColors: [
      { name: 'Natural Cotton', hex: '#F3EDE2', code: 'NAT' },
      { name: 'Sage Green', hex: '#637A65', code: 'SAGE' },
      { name: 'Terracotta', hex: '#9E4738', code: 'TERRA' },
      { name: 'Ocean Slate', hex: '#3E5C76', code: 'SLATE' },
    ],
    views: [
      {
        id: 'front',
        label: 'Front Side',
        mockupBaseSvg: 'shopper-front',
        printArea: {
          x: 21,
          y: 30,
          width: 58,
          height: 52,
        },
        hasStrapOverlay: true,
      },
      {
        id: 'back',
        label: 'Back Side',
        mockupBaseSvg: 'shopper-back',
        printArea: {
          x: 21,
          y: 30,
          width: 58,
          height: 52,
        },
        hasStrapOverlay: true,
      }
    ]
  }
];

