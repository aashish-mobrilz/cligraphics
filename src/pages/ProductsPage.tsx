import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductGrid } from '../components/product/ProductGrid';
import { ProductFilters } from '../components/product/ProductFilters';
import { useDesignTheme } from '../context/DesignThemeContext';
import { Search, Palette, Sparkles } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isOptionB } = useDesignTheme();

  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(initialCategory);
  const [customizableOnly, setCustomizableOnly] = useState(false);
  const [conferenceOnly, setConferenceOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategorySlug !== 'all' && p.categorySlug !== selectedCategorySlug) {
        return false;
      }
      // Customizable only
      if (customizableOnly && !p.customizable) {
        return false;
      }
      // Conference essential only
      if (conferenceOnly && !p.isConferenceEssential) {
        return false;
      }
      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(query);
        const matchDesc = p.shortDescription.toLowerCase().includes(query);
        const matchCat = p.categoryName.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.samplePrice - b.samplePrice;
      }
      if (sortBy === 'price-high') {
        return b.samplePrice - a.samplePrice;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [selectedCategorySlug, customizableOnly, conferenceOnly, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategorySlug('all');
    setCustomizableOnly(false);
    setConferenceOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  // ========================================================
  // OPTION B: EDITORIAL LOOKBOOK CATALOG BROWSER
  // Horizontal top filter bar, centered serif typography,
  // 1-column magazine product flow without a clunky sidebar
  // ========================================================
  if (isOptionB) {
    return (
      <div className="min-h-screen py-12 bg-[#FAF9F6] text-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Centered Editorial Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-serif font-bold text-amber-800">
              Curated Conference Catalog &bull; Edition 2027
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
              Conference Merchandise & Supplies
            </h1>
            <p className="text-sm text-stone-600 font-serif italic max-w-xl mx-auto leading-relaxed">
              Explore our full portfolio of keynote attendee bags, woven lanyards, executive drinkware, conference notebooks, and turnkey event collateral.
            </p>
          </div>

          {/* Horizontal Editorial Filter & Sort Suite */}
          <div className="bg-white rounded-2xl border border-[#E7E5E0] p-5 shadow-xs space-y-4">
            {/* Category horizontal scrolling tabs */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategorySlug('all');
                  setSearchParams({});
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif font-medium whitespace-nowrap transition-all ${
                  selectedCategorySlug === 'all'
                    ? 'bg-[#1A2328] text-amber-300 shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                All Editions ({PRODUCTS.length})
              </button>

              {CATEGORIES.filter((c) => c.type === 'product').map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategorySlug(cat.slug);
                    setSearchParams({ category: cat.slug });
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-serif font-medium whitespace-nowrap transition-all ${
                    selectedCategorySlug === cat.slug
                      ? 'bg-[#1A2328] text-amber-300 shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Quick toggles, Sort, & Results count */}
            <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Atelier Customizer Toggle */}
                <button
                  type="button"
                  onClick={() => setCustomizableOnly(!customizableOnly)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                    customizableOnly
                      ? 'bg-amber-500/20 text-amber-900 border-amber-600 font-bold'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5 text-amber-700" />
                  <span>Atelier Customizer Bags Only</span>
                </button>

                {/* Keynote Essential Toggle */}
                <button
                  type="button"
                  onClick={() => setConferenceOnly(!conferenceOnly)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                    conferenceOnly
                      ? 'bg-stone-900 text-amber-300 border-stone-900 font-bold'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Keynote Essentials</span>
                </button>

                {(customizableOnly || conferenceOnly || selectedCategorySlug !== 'all' || searchQuery) && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-stone-500 hover:text-stone-900 font-serif underline ml-1"
                  >
                    Reset all filters
                  </button>
                )}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2">
                <span className="text-stone-400 uppercase text-[10px] tracking-wider font-semibold">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1 text-xs text-stone-800 font-medium focus:outline-none"
                >
                  <option value="featured">Editorial Highlights</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>

          {/* Search Result notice */}
          {searchQuery && (
            <div className="flex items-center justify-between bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-xl text-xs text-amber-900 font-serif">
              <span>Showing search results matching: <strong>"{searchQuery}"</strong></span>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-amber-800 hover:text-amber-950 font-bold"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Product Items (Option B Horizontal Editorial Cards) */}
          <ProductGrid
            products={filteredProducts}
            onResetFilters={handleResetFilters}
          />
        </div>
      </div>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE DENSE COMMERCE CATALOG WITH SIDEBAR
  // ========================================================
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <div className="text-xs text-slate-500 mb-2">
            <span>Home</span> / <strong className="text-slate-800">All Products</strong>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Conference Merchandise & Supplies
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Browse our complete catalog of conference totes, custom lanyards, stainless tumblers, executive pens, apparel, tech giveaways, and notebooks.
          </p>
        </div>

        {/* Layout Grid: Sidebar Filters + Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters
              selectedCategorySlug={selectedCategorySlug}
              onSelectCategory={(slug) => {
                setSelectedCategorySlug(slug);
                setSearchParams(slug === 'all' ? {} : { category: slug });
              }}
              customizableOnly={customizableOnly}
              onToggleCustomizable={() => setCustomizableOnly(!customizableOnly)}
              conferenceOnly={conferenceOnly}
              onToggleConference={() => setConferenceOnly(!conferenceOnly)}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onReset={handleResetFilters}
            />
          </div>

          {/* Products Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Active Filters Bar / Results Count */}
            <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-slate-700">
                Showing <strong className="text-slate-900">{filteredProducts.length}</strong> items
              </span>

              {searchQuery && (
                <div className="flex items-center gap-1.5 bg-sky-50 text-sky-800 px-2.5 py-1 rounded-full text-xs font-medium">
                  <Search className="w-3 h-3" />
                  <span>Search: "{searchQuery}"</span>
                  <button onClick={() => setSearchQuery('')} className="ml-1 text-sky-600 hover:text-sky-900 font-bold">&times;</button>
                </div>
              )}
            </div>

            {/* Product Cards Grid */}
            <ProductGrid
              products={filteredProducts}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
