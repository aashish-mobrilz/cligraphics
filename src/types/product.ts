export interface PricingTier {
  minQty: number;
  unitPrice: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  images: string[];
  primaryImage: string;
  samplePrice: number;
  priceLabel: string;
  pricingTiers: PricingTier[];
  minOrderQuantity: number;
  availableColors: {
    name: string;
    hex: string;
    image?: string;
  }[];
  sizes?: string[];
  materials?: string;
  dimensions?: string;
  customizable: boolean;
  customizationType?: 'bag' | 'print' | 'standard';
  designerModelId?: string;
  leadTimeDays: string;
  isBestseller?: boolean;
  isConferenceEssential?: boolean;
}

