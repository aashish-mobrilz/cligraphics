export type DesignerViewId = 'front' | 'back';

export interface PrintAreaBoundingBox {
  x: number; // percentage or normalized coordinate (0-100)
  y: number; // percentage (0-100)
  width: number; // percentage (0-100)
  height: number; // percentage (0-100)
}

export interface DesignerViewConfig {
  id: DesignerViewId;
  label: string;
  mockupBaseSvg: string; // SVG renderer or image key
  printArea: PrintAreaBoundingBox;
  hasStrapOverlay?: boolean;
}

export interface DesignerBagColor {
  name: string;
  hex: string;
  code: string;
}

export interface DesignerModelConfig {
  id: string;
  productId: string;
  productSlug: string;
  productName: string;
  basePrice: number;
  minOrderQuantity: number;
  availableColors: DesignerBagColor[];
  views: DesignerViewConfig[];
  defaultColor: DesignerBagColor;
  printableDimensionsLabel: string; // e.g. "9\" W x 10\" H" (clearly marked as sample)
}

export interface ArtworkElement {
  id: string;
  type: 'image' | 'text';
  content: string; // Image data URL or text string
  fileName?: string;
  fileSizeLabel?: string;
  x: number; // Center percentage within printable area (0-100)
  y: number; // Center percentage within printable area (0-100)
  scale: number; // 0.2 to 2.5 (1.0 = fit comfortably)
  rotation: number; // 0 to 360 degrees
  // Text specific
  fontSize?: number;
  fontColor?: string;
  fontFamily?: string;
  fontWeight?: string;
}

export interface ViewCustomizationState {
  artwork?: ArtworkElement;
  textElement?: ArtworkElement;
}

export interface DesignerState {
  modelId: string;
  selectedColor: DesignerBagColor;
  activeView: DesignerViewId;
  views: {
    front: ViewCustomizationState;
    back: ViewCustomizationState;
  };
  isConfirmed: boolean;
  previewThumbnailUrl?: string;
}

