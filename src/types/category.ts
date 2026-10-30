export type CategoryType = 'product' | 'service';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  type: CategoryType;
  iconName: string;
  itemCountLabel: string;
  featuredBadge?: string;
  subcategories: string[];
}

