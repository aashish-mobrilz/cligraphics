import { DesignerState } from './designer';

export interface CartItem {
  id: string; // unique item id
  productId: string;
  productSlug: string;
  productName: string;
  categoryName: string;
  unitPrice: number;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  isCustomized: boolean;
  designerSnapshot?: {
    thumbnailUrl: string;
    modelId: string;
    colorName: string;
    hasFrontCustomization: boolean;
    hasBackCustomization: boolean;
    artworkFileName?: string;
    customText?: string;
    state: DesignerState;
  };
}

export interface DemoOrderInfo {
  orderNumber: string;
  orderDate: string;
  customer: {
    fullName: string;
    email: string;
    company: string;
    phone: string;
  };
  shipping: {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    shippingMethod: string;
  };
  eventDetails?: {
    eventName?: string;
    eventDate?: string;
    inHandsDate?: string;
  };
  items: CartItem[];
  subtotal: number;
  estimatedShipping: number;
  estimatedTax: number;
  total: number;
}

