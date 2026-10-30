import React from 'react';
import { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { PackageX } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'No conference products found matching your current filter criteria.',
  onResetFilters,
}) => {
  const { isOptionB } = useDesignTheme();

  if (products.length === 0) {
    return (
      <div className={`rounded-2xl border p-12 text-center max-w-md mx-auto my-8 ${
        isOptionB
          ? 'bg-[#FAF9F6] border-[#E7E5E0]'
          : 'bg-white border-slate-200'
      }`}>
        <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
          <PackageX className="w-6 h-6" />
        </div>
        <h3 className={`text-sm font-bold ${isOptionB ? 'font-serif text-stone-900 text-base' : 'text-slate-800'}`}>
          No Products Found
        </h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{emptyMessage}</p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className={`mt-4 px-4 py-2 text-white text-xs font-semibold rounded-lg transition-colors ${
              isOptionB
                ? 'bg-[#1A2328] hover:bg-stone-800 text-amber-300'
                : 'bg-sky-600 hover:bg-sky-700'
            }`}
          >
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  // ========================================================
  // OPTION B: EDITORIAL MAGAZINE / LOOKBOOK LIST LAYOUT
  // 1-column list of horizontal editorial cards with generous spacing
  // ========================================================
  if (isOptionB) {
    return (
      <div className="space-y-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE 4-COLUMN COMMERCIAL GRID
  // ========================================================
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
