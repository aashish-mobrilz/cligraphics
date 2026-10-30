import React, { useState, useRef, useEffect } from 'react';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { useCart } from '../../context/CartContext';
import { CATEGORIES } from '../../data/categories';
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  LayoutGrid,
  ShoppingBag,
  Tag,
  Coffee,
  PenTool,
  Shirt,
  Cpu,
  BookOpen,
  Printer,
  Truck,
  Sparkles,
} from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const { isOptionB } = useDesignTheme();
  const { totalItemsCount } = useCart();

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Dropdown states
  const [categoriesOpenA, setCategoriesOpenA] = useState(false);
  const [categoriesOpenB, setCategoriesOpenB] = useState(false);

  // Mobile menu states
  const [mobileMenuOpenA, setMobileMenuOpenA] = useState(false);
  const [mobileMenuOpenB, setMobileMenuOpenB] = useState(false);
  const [mobileCategoriesExpandedA, setMobileCategoriesExpandedA] = useState(false);
  const [mobileCategoriesExpandedB, setMobileCategoriesExpandedB] = useState(false);

  // Click-outside refs
  const dropdownRefA = useRef<HTMLDivElement>(null);
  const dropdownRefB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRefA.current && !dropdownRefA.current.contains(event.target as Node)) {
        setCategoriesOpenA(false);
      }
      if (dropdownRefB.current && !dropdownRefB.current.contains(event.target as Node)) {
        setCategoriesOpenB(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMobileSearchOpen(false);
    const el = document.getElementById(isOptionB ? 'products-section' : 'featured-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpenA(false);
    setMobileMenuOpenB(false);
    setCategoriesOpenA(false);
    setCategoriesOpenB(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4" />;
      case 'Tag': return <Tag className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'PenTool': return <PenTool className="w-4 h-4" />;
      case 'Shirt': return <Shirt className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4" />;
      case 'Printer': return <Printer className="w-4 h-4" />;
      case 'Truck': return <Truck className="w-4 h-4" />;
      default: return <ShoppingBag className="w-4 h-4" />;
    }
  };

  // Helper to render category tiles in a modern multi-column grid approach
  const renderCategoryGridTile = (cat: typeof CATEGORIES[0], isThemeB: boolean) => (
    <div
      key={cat.id}
      className={`group/tile flex items-start gap-3 p-3 rounded-xl cursor-default select-none transition-all ${
        isThemeB
          ? 'bg-stone-900/60 border border-stone-800/80 hover:border-amber-500/40 hover:bg-stone-800/80'
          : 'bg-slate-50/70 border border-slate-200/70 hover:border-sky-300 hover:bg-sky-50/60 hover:shadow-2xs'
      }`}
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover/tile:scale-105 ${
        isThemeB
          ? 'bg-amber-500/15 text-amber-300 border border-amber-500/20'
          : 'bg-white text-[#0B3B60] border border-slate-200 shadow-2xs'
      }`}>
        {getCategoryIcon(cat.iconName)}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1.5">
          <span className={`text-xs font-bold truncate block ${
            isThemeB ? 'text-stone-100 font-serif' : 'text-slate-900'
          }`}>
            {cat.name}
          </span>
          {cat.type === 'service' && (
            <span className={`text-[8px] uppercase tracking-wider px-1.5 py-0.2 rounded font-bold flex-shrink-0 ${
              isThemeB
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-amber-100 text-amber-900 border border-amber-200'
            }`}>
              Service
            </span>
          )}
        </div>
        <p className={`text-[10px] mt-0.5 truncate leading-tight ${
          isThemeB ? 'text-stone-400 font-serif' : 'text-slate-500'
        }`}>
          {cat.type === 'service' ? (cat.id === 'printing' ? 'Web & Digital Press' : 'Dock Logistics') : cat.itemCountLabel}
        </p>
      </div>
    </div>
  );

  // =========================================================================
  // OPTION B: ALTERNATIVE HEADER LAYOUT (Two-Tier Architectural & Editorial Masthead)
  // Distinct hierarchy:
  // Tier 1 (Top): Search Bar (Left) -> Centered Editorial Logo -> Cart & Concierge (Right)
  // Tier 2 (Bottom): Standalone "All Categories" Pill (Left) -> Main Navigation (Center) -> Slogan (Right)
  // =========================================================================
  if (isOptionB) {
    return (
      <header className="bg-[#FAF9F6] text-stone-900 border-b border-[#E7E5E0] sticky top-0 z-40 transition-colors shadow-2xs">
        {/* Tier 1: Main Brand & Utility Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Search Functionality (Desktop) & Mobile Toggle */}
            <div className="flex items-center gap-3 md:w-1/4">
              <button
                type="button"
                onClick={() => setMobileMenuOpenB(!mobileMenuOpenB)}
                className="md:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/50"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpenB ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Search conference supplies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-full text-xs bg-stone-100 border border-stone-200 text-stone-900 placeholder-stone-400 focus:bg-white focus:border-amber-600 transition-all outline-none font-serif"
                />
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </form>
            </div>

            {/* Center: Prestigious Architectural Wordmark / Logo */}
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="text-center group flex flex-col items-center cursor-pointer flex-shrink-0"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 group-hover:text-amber-800 transition-colors">
                  CliGraphics
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  Est. 1997
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium hidden sm:block mt-0.5 font-serif">
                Conference Supplies &bull; Atelier &bull; Commercial Press
              </span>
            </button>

            {/* Right: Portfolio Cart & Quick Phone Link */}
            <div className="flex items-center justify-end gap-3 md:w-1/4">
              <div className="hidden lg:flex flex-col text-right text-[11px] text-stone-500 font-serif">
                <span className="text-[9px] uppercase tracking-widest text-amber-700 font-bold">Event Concierge</span>
                <span className="font-semibold text-stone-800">1-800-CLI-CONF</span>
              </div>

              {/* Demo Cart Display */}
              <div
                className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-serif font-semibold bg-stone-100 border border-stone-200 text-stone-800 cursor-default select-none"
                title="Demo Portfolio Cart"
              >
                <ShoppingCart className="w-4 h-4 text-stone-700" />
                <span className="hidden sm:inline">Portfolio Cart</span>
                {totalItemsCount > 0 && (
                  <span className="bg-amber-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center -ml-1">
                    {totalItemsCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Lower Navigation & Catalog Deck */}
        <div className="border-t border-[#E7E5E0] bg-[#F2F0EB]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            {/* Left: Standalone "All Categories" Dropdown Trigger */}
            <div className="relative" ref={dropdownRefB}>
              <button
                type="button"
                onClick={() => setCategoriesOpenB(!categoriesOpenB)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-serif font-bold tracking-wider transition-all shadow-xs ${
                  categoriesOpenB
                    ? 'bg-[#1A2328] text-amber-300 ring-2 ring-amber-500/50'
                    : 'bg-[#1A2328] text-amber-300 hover:bg-stone-800'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-amber-400" />
                <span>All Categories (9)</span>
                <ChevronDown className={`w-3.5 h-3.5 text-amber-300 transition-transform ${categoriesOpenB ? 'rotate-180' : ''}`} />
              </button>

              {/* Standalone Dropdown Panel (Grid Approach) */}
              {categoriesOpenB && (
                <div className="absolute left-0 top-full mt-2 w-[580px] sm:w-[650px] max-w-[calc(100vw-2rem)] bg-[#1A2328] border border-stone-800 rounded-2xl shadow-2xl p-4 z-50 text-left font-sans animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-500/30">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <span className="font-serif text-xs font-bold text-white block leading-tight">
                          Conference Supply Atelier
                        </span>
                        <span className="text-[10px] text-stone-400 font-serif">
                          9 Curated Event Disciplines &bull; 7 Merchandise &bull; 2 Services
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-serif uppercase tracking-widest px-2 py-0.5 rounded bg-stone-800 text-amber-300 border border-stone-700">
                      Catalog Grid
                    </span>
                  </div>

                  {/* 3-Column Responsive Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {CATEGORIES.map((cat) => renderCategoryGridTile(cat, true))}
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400 font-serif px-1 italic">
                    <span>Family-owned conference production since 1997</span>
                    <span className="text-amber-400 not-italic font-bold">9 Disciplines</span>
                  </div>
                </div>
              )}
            </div>

            {/* Center / Right: Main Navigation Menu (Separated from Categories) */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center justify-center gap-8">
              <button
                type="button"
                onClick={() => scrollToSection('top')}
                className="text-xs font-serif font-bold tracking-widest uppercase py-1 text-amber-800 border-b-2 border-amber-700 transition-colors"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="text-xs font-serif font-bold tracking-widest uppercase py-1 text-stone-700 hover:text-stone-950 transition-colors"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="text-xs font-serif font-bold tracking-widest uppercase py-1 text-stone-700 hover:text-stone-950 transition-colors"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('faq')}
                className="text-xs font-serif font-bold tracking-widest uppercase py-1 text-stone-700 hover:text-stone-950 transition-colors"
              >
                FAQ
              </button>
            </nav>

            {/* Far Right: Proposition Statement */}
            <div className="hidden lg:block text-[11px] font-serif italic text-stone-500">
              One source for all your conference needs
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer (Option B) */}
        {mobileMenuOpenB && (
          <div className="md:hidden border-t border-stone-200 bg-[#FAF9F6] px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-150">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search conference supplies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-stone-100 border border-stone-200 text-stone-900 outline-none font-serif"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>

            {/* Standalone All Categories Accordion */}
            <div className="border border-stone-200 rounded-xl bg-white overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => setMobileCategoriesExpandedB(!mobileCategoriesExpandedB)}
                className="w-full px-4 py-3 flex items-center justify-between text-xs font-serif font-bold text-stone-900 bg-stone-100/70"
              >
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-amber-700" />
                  <span>All Categories ({CATEGORIES.length})</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform ${mobileCategoriesExpandedB ? 'rotate-180' : ''}`} />
              </button>
              {mobileCategoriesExpandedB && (
                <div className="p-3 bg-[#1A2328] text-stone-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => renderCategoryGridTile(cat, true))}
                </div>
              )}
            </div>

            {/* Main Navigation Links */}
            <div className="space-y-1 font-serif text-sm">
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400 block px-2 mb-1">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => scrollToSection('top')}
                className="w-full text-left px-3 py-2 rounded-lg font-bold text-amber-900 bg-amber-50"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-3 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-3 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('faq')}
                className="w-full text-left px-3 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </header>
    );
  }

  // =========================================================================
  // OPTION A: INTEGRATED HEADER LAYOUT
  // Reorganized order strictly following:
  // Logo ──> All Categories ──> Main Navigation ──> Search Bar / Search Icon ──> Cart Icon
  // =========================================================================
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 transition-colors shadow-2xs">
      {/* Primary Header Row containing ALL elements integrated horizontally */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3 lg:gap-5">
          {/* 1. LOGO */}
          <button
            type="button"
            onClick={() => scrollToSection('top')}
            className="flex items-center gap-2.5 flex-shrink-0 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg shadow-sm transition-transform group-hover:scale-105 bg-gradient-to-br from-[#0B3B60] to-[#0284C7] text-white">
              CG
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight font-heading text-[#0B3B60]">
                  CliGraphics
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-300 hidden xl:inline-block">
                  30 Yrs
                </span>
              </div>
              <p className="text-[10px] leading-none hidden 2xl:block text-slate-500">
                Promotional Products & Conference Supplies
              </p>
            </div>
          </button>

          {/* 2. ALL CATEGORIES (Standalone Dropdown Element) */}
          <div className="relative hidden md:block" ref={dropdownRefA}>
            <button
              type="button"
              onClick={() => setCategoriesOpenA(!categoriesOpenA)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border shadow-xs ${
                categoriesOpenA
                  ? 'bg-[#0B3B60] text-white border-[#0B3B60] ring-2 ring-sky-200'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 border-slate-300'
              }`}
            >
              <LayoutGrid className={`w-4 h-4 ${categoriesOpenA ? 'text-amber-300' : 'text-[#0B3B60]'}`} />
              <span>All Categories</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${categoriesOpenA ? 'rotate-180 text-white' : 'text-slate-500'}`} />
            </button>

            {/* Standalone Dropdown Panel (Grid Approach) */}
            {categoriesOpenA && (
              <div className="absolute left-0 top-full mt-2 w-[580px] sm:w-[640px] max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50 text-left animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#0B3B60] text-white flex items-center justify-center shadow-xs">
                      <LayoutGrid className="w-4 h-4 text-amber-300" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">
                        Product & Service Categories
                      </span>
                      <span className="text-[10px] text-slate-500">
                        9 Specialized Event Disciplines (7 Merchandise &bull; 2 Services)
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Category Grid
                  </span>
                </div>

                {/* 3-Column Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {CATEGORIES.map((cat) => renderCategoryGridTile(cat, false))}
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-1">
                  <span>Static promotional catalog overview &bull; Browser preview</span>
                  <span className="font-bold text-[#0B3B60]">9 Disciplines Total</span>
                </div>
              </div>
            )}
          </div>

          {/* 3. MAIN NAVIGATION MENU (Integrated in Primary Header) */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="text-xs font-bold px-3 py-1.5 rounded-lg text-[#0B3B60] bg-sky-50 transition-colors"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('faq')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* 4. SEARCH BAR (Desktop) / SEARCH ICON (Tablet/Mobile) */}
          <div className="flex-1 max-w-xs xl:max-w-sm hidden sm:block">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search bags, lanyards, drinkware..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-20 py-2 rounded-full text-xs transition-all outline-none bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#0B3B60] focus:ring-2 focus:ring-sky-100"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white bg-[#0B3B60] hover:bg-[#072842] transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* 5. CART ICON & MOBILE CONTROLS */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Mobile search toggle button */}
            <button
              type="button"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="sm:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle mobile search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon Display */}
            <div
              className="relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 cursor-default select-none"
              title="Demo Cart"
            >
              <ShoppingCart className="w-4 h-4 text-[#0B3B60]" />
              <span className="hidden sm:inline">Demo Cart</span>
              {totalItemsCount > 0 && (
                <span className="bg-[#E65100] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center -ml-1">
                  {totalItemsCount}
                </span>
              )}
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpenA(!mobileMenuOpenA)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpenA ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Expandable Search Bar */}
        {mobileSearchOpen && (
          <div className="sm:hidden pt-2 pb-1">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search bags, lanyards, tumblers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-16 py-2 rounded-xl text-xs bg-slate-100 border border-slate-300 text-slate-900 outline-none"
                autoFocus
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-[#0B3B60]"
              >
                Go
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer (Option A) */}
      {mobileMenuOpenA && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 animate-in slide-in-from-top-2 duration-150">
          {/* Standalone All Categories Accordion */}
          <div className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileCategoriesExpandedA(!mobileCategoriesExpandedA)}
              className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-900 bg-slate-100"
            >
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-[#0B3B60]" />
                <span>All Categories ({CATEGORIES.length})</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileCategoriesExpandedA ? 'rotate-180' : ''}`} />
            </button>
            {mobileCategoriesExpandedA && (
              <div className="p-3 bg-white grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CATEGORIES.map((cat) => renderCategoryGridTile(cat, false))}
              </div>
            )}
          </div>

          {/* Main Navigation Links */}
          <div className="space-y-1 text-sm">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block px-2 mb-1">
              Main Menu
            </span>
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="w-full text-left px-3 py-2 rounded-lg font-bold text-[#0B3B60] bg-sky-50"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-100"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="w-full text-left px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-100"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('faq')}
              className="w-full text-left px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-100"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
