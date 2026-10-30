import React from 'react';
import { Product } from '../../types/product';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { ProductImageMockup } from '../common/ProductImageMockup';
import { Palette, Sparkles, Check, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  variant?: 'standard' | 'featured';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isOptionB } = useDesignTheme();

  const lowestTierPrice = product.pricingTiers.length > 0
    ? product.pricingTiers[product.pricingTiers.length - 1].unitPrice
    : product.samplePrice;

  // ========================================================
  // OPTION B: EDITORIAL / CORPORATE CONFERENCE PRESENTATION
  // Static display card (non-clickable per requirement)
  // ========================================================
  if (isOptionB) {
    return (
      <div className="group bg-[#FAF9F6] rounded-2xl border border-[#E7E5E0] hover:border-[#B8860B]/60 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row select-none">
        {/* Left Side: Product Image & Subtle Frame (Static) */}
        <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-[#F2F0EB] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#E7E5E0] cursor-default">
          <ProductImageMockup
            imageKey={product.primaryImage}
            productSlug={product.slug}
            selectedColorHex={product.availableColors?.[0]?.hex}
            className="w-full h-full object-contain max-h-56 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Editorial Category Tag badge (Static) */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
            {product.customizable && (
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#1A2328] text-amber-300 border border-amber-500/30 shadow-xs">
                <Palette className="w-3 h-3" />
                Atelier Designer
              </span>
            )}
            {product.isBestseller && (
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-stone-200/90 text-stone-800">
                <Sparkles className="w-3 h-3 text-amber-600" />
                Keynote Curated
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Editorial Spec & Storytelling */}
        <div className="md:w-3/5 p-6 flex flex-col justify-between space-y-4">
          <div>
            {/* Category Breadcrumb (Static text) */}
            <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-stone-500 font-medium">
              <span>{product.categoryName} Edition</span>
              <span className="text-amber-700 font-semibold">Min: {product.minOrderQuantity} units</span>
            </div>

            {/* Title in Editorial Serif (Static) */}
            <h3 className="mt-2 font-serif text-xl font-bold text-stone-900 leading-snug">
              {product.name}
            </h3>

            {/* Editorial Description */}
            <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed font-serif">
              {product.shortDescription}
            </p>

            {/* Key Features highlights */}
            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-stone-500">
                {product.keyFeatures.slice(0, 2).map((feat, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1">
                    <Check className="w-3 h-3 text-amber-600" />
                    <span className="truncate max-w-[200px]">{feat}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Color Palette List */}
            {product.availableColors && product.availableColors.length > 0 && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">Palette:</span>
                <div className="flex items-center gap-1.5">
                  {product.availableColors.slice(0, 5).map((color, idx) => (
                    <span
                      key={idx}
                      style={{ backgroundColor: color.hex }}
                      className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs"
                      title={color.name}
                    />
                  ))}
                  {product.availableColors.length > 5 && (
                    <span className="text-[10px] text-stone-500 font-medium ml-1">
                      +{product.availableColors.length - 5}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Pricing & Editorial Action Bar (Static display) */}
          <div className="pt-4 border-t border-[#E7E5E0] flex items-end justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400 block">
                Volume Pricing From
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xl font-serif font-black text-stone-900">
                  ${lowestTierPrice.toFixed(2)}
                </span>
                <span className="text-xs text-stone-500 font-medium">/ unit</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-serif font-semibold text-stone-700 bg-stone-200/70 border border-stone-300/60 cursor-default flex items-center gap-1">
                <span>Sample Specification</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE PRODUCT-LED COMMERCIAL CARD
  // Static display card (non-clickable per requirement)
  // ========================================================
  return (
    <div className="group rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden bg-white select-none">
      {/* Product Image Frame (Static) */}
      <div className="relative aspect-square overflow-hidden bg-slate-50 block cursor-default">
        <ProductImageMockup
          imageKey={product.primaryImage}
          productSlug={product.slug}
          selectedColorHex={product.availableColors?.[0]?.hex}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Feature Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {product.customizable && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs bg-[#E65100] text-white">
              <Palette className="w-3 h-3" />
              Online Customizer
            </span>
          )}
          {product.isBestseller && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Bestseller
            </span>
          )}
        </div>
      </div>

      {/* Product Details Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Tag (Static) */}
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            {product.categoryName}
          </span>

          {/* Product Name (Static) */}
          <h3 className="mt-1 font-bold text-sm text-slate-900 line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Available Colors preview dots */}
          {product.availableColors && product.availableColors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-3">
              {product.availableColors.slice(0, 5).map((color, idx) => (
                <span
                  key={idx}
                  style={{ backgroundColor: color.hex }}
                  className="w-3 h-3 rounded-full border border-slate-300 shadow-xs"
                  title={color.name}
                />
              ))}
              {product.availableColors.length > 5 && (
                <span className="text-[10px] text-slate-400 font-medium">
                  +{product.availableColors.length - 5}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing & Specification Footer (Static) */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-medium">As low as</div>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-extrabold text-[#0B3B60]">
                ${lowestTierPrice.toFixed(2)}
              </span>
              <span className="text-[10px] text-slate-400">/ ea</span>
            </div>
            <div className="text-[10px] text-slate-500 font-medium">
              Min: {product.minOrderQuantity} pcs
            </div>
          </div>

          <div>
            <span className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 cursor-default">
              Catalog Spec
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
