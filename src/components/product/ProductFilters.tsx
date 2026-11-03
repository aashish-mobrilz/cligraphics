import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { Filter, RotateCcw, Check } from 'lucide-react';

interface ProductFiltersProps {
  selectedCategorySlug: string;
  onSelectCategory: (slug: string) => void;
  customizableOnly: boolean;
  onToggleCustomizable: () => void;
  conferenceOnly: boolean;
  onToggleConference: () => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onReset: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategorySlug,
  onSelectCategory,
  customizableOnly,
  onToggleCustomizable,
  conferenceOnly,
  onToggleConference,
  sortBy,
  onSortChange,
  onReset,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-5 text-xs shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <span className="font-bold text-slate-800 flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
          <Filter className="w-3.5 h-3.5 text-sky-600" />
          Filter Products
        </span>
        <button
          onClick={onReset}
          className="text-slate-500 hover:text-slate-800 flex items-center gap-1 text-[11px] font-medium"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Sort By Dropdown */}
      <div>
        <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Sort Results
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:bg-white focus:ring-2 focus:ring-sky-500"
        >
          <option value="featured">Featured Products Supplies</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Product Name (A-Z)</option>
        </select>
      </div>

      {/* Category List */}
      <div>
        <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Category
        </label>
        <div className="space-y-1">
          <button
            onClick={() => onSelectCategory('all')}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors flex items-center justify-between ${
              selectedCategorySlug === 'all'
                ? 'bg-sky-50 text-sky-700 font-bold'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span>All Categories</span>
            {selectedCategorySlug === 'all' && <Check className="w-3.5 h-3.5 text-sky-600" />}
          </button>

          {CATEGORIES.filter((c) => c.type === 'product').map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors flex items-center justify-between ${
                selectedCategorySlug === cat.slug
                  ? 'bg-sky-50 text-sky-700 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{cat.name}</span>
              {selectedCategorySlug === cat.slug && <Check className="w-3.5 h-3.5 text-sky-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* Feature Checkboxes */}
      <div className="pt-2 border-t border-slate-100 space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={customizableOnly}
            onChange={onToggleCustomizable}
            className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
          />
          <span className="text-slate-700 font-medium">Customizer Eligible Bags</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={conferenceOnly}
            onChange={onToggleConference}
            className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
          />
          <span className="text-slate-700 font-medium">Conference Essentials</span>
        </label>
      </div>
    </div>
  );
};

