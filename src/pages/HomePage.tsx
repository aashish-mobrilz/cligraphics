import React from 'react';
import { useDesignTheme } from '../context/DesignThemeContext';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ConferenceHeroSvg } from '../components/common/ConferenceHeroSvg';
import { CategoryCircleVisual } from '../components/common/CategoryCircleVisual';
import { ProductCard } from '../components/product/ProductCard';
import { ProductImageMockup } from '../components/common/ProductImageMockup';
import { HomeFAQSection } from '../components/home/HomeFAQSection';
import { HomeContactSection } from '../components/home/HomeContactSection';
import {
  ShieldCheck,
  Palette,
  Printer,
  Truck,
  CheckCircle2,
  FileCheck,
  Sparkles,
  Calendar,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { isOptionB } = useDesignTheme();

  const featuredProducts = PRODUCTS.slice(0, 4);
  const customizableBags = PRODUCTS.filter((p) => p.customizable);
  const [optionBFilter, setOptionBFilter] = React.useState<'all' | 'products' | 'services'>('all');

  const getRomanIndex = (id: string) => {
    switch (id) {
      case 'bags': return '№ 01';
      case 'lanyards': return '№ 02';
      case 'drinkware': return '№ 03';
      case 'pens': return '№ 04';
      case 'apparel': return '№ 05';
      case 'technology': return '№ 06';
      case 'journals-and-notebooks': return '№ 07';
      case 'printing': return '№ 08';
      case 'fulfillment-and-direct-mail': return '№ 09';
      default: return '№ 00';
    }
  };

  const merchandiseCategories = CATEGORIES.filter((c) => c.type === 'product');
  const serviceCategories = CATEGORIES.filter((c) => c.type === 'service');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ========================================================
  // OPTION B: EDITORIAL & CORPORATE EXPERIENCE (Bright Cream / White Aesthetic)
  // ========================================================
  if (isOptionB) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] text-stone-900">
        {/* ======================================================== */}
        {/* 1. EDITORIAL HERO (2-Column Daylight Architectural Composition) */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F2EB] via-[#FAF9F6] to-white border-b border-[#E7E5E0] py-14 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headline, Brand Heritage & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Heritage Badge - ENLARGED */}
                <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-amber-300 shadow-xs text-sm sm:text-base font-serif font-bold text-amber-950">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="tracking-wide uppercase font-extrabold text-xs sm:text-sm text-amber-900">
                    Established January, 1997
                  </span>
                  <span className="text-amber-400 font-black">&bull;</span>
                  <span className="bg-amber-100/90 text-amber-950 px-2.5 py-0.5 rounded font-extrabold text-xs sm:text-sm">
                    Celebrating 30 Years
                  </span>
                </div>

                {/* Primary Tagline */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-tight">
                  One source for all your conference needs.
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-serif italic leading-relaxed max-w-xl">
                  Equipping national summits, annual associations, and trade exhibitions with bespoke attendee bags, curated registration merchandise, high-speed offset printing, and dockside convention fulfillment.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection('product-categories')}
                    className="px-6 py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider bg-amber-700 hover:bg-amber-800 text-white shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Palette className="w-4 h-4" />
                    <span>Explore Product Categories</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('products-section')}
                    className="px-6 py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <span>View Curated Catalog</span>
                  </button>
                </div>

                {/* Trust Pillars */}
                <div className="pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-700 font-serif">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0" />
                    <span className="font-semibold">Family Owned</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-amber-700 flex-shrink-0" />
                    <span className="font-semibold">Commercial Press</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-amber-700 flex-shrink-0" />
                    <span className="font-semibold">Direct Freight</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Merchandise Staging (NO text collisions) */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full max-w-md bg-white border border-[#E7E5E0] rounded-3xl p-6 shadow-md relative overflow-hidden">
                  <ConferenceHeroSvg className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. PRODUCT CATEGORIES (Distinct Curated Architectural Salon Layout) */}
        {/* ======================================================== */}
        <section id="product-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
          {/* Header & Curatorial Discipline Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E7E2D6]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-bold text-amber-800 font-serif">
                  Curated Catalog &bull; 9 Core Conference Disciplines
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
                Product Categories
              </h2>
              <p className="text-sm font-serif text-stone-600 italic mt-2 max-w-xl">
                Nine specialized ateliers engineered for annual summits, executive conferences, and corporate exhibitions.
              </p>
            </div>

            {/* Curatorial View Filter Tabs */}
            <div className="flex items-center gap-2 self-start lg:self-end bg-stone-100/90 p-1.5 rounded-2xl border border-stone-200/80 shadow-2xs">
              <button
                type="button"
                onClick={() => setOptionBFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-serif font-bold transition-all ${
                  optionBFilter === 'all'
                    ? 'bg-amber-800 text-amber-50 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                All Disciplines (9)
              </button>
              <button
                type="button"
                onClick={() => setOptionBFilter('products')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-serif font-bold transition-all ${
                  optionBFilter === 'products'
                    ? 'bg-amber-800 text-amber-50 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                Merchandise Ateliers (7)
              </button>
              <button
                type="button"
                onClick={() => setOptionBFilter('services')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-serif font-bold transition-all ${
                  optionBFilter === 'services'
                    ? 'bg-amber-800 text-amber-50 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                Institutional Services (2)
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TIER 1: EVENT MERCHANDISE ATELIERS (Architectural Salon Plinth Cards) */}
          {/* ------------------------------------------------------------- */}
          {(optionBFilter === 'all' || optionBFilter === 'products') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-500 font-serif">
                  Merchandise & Attendee Supply Ateliers
                </span>
                <span className="text-xs font-serif italic text-amber-800">
                  Click any discipline card for specifications &darr;
                </span>
              </div>

              {/* 3-Column Architectural Exhibition Grid (Distinct from Option A's 5-column simple circle grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {merchandiseCategories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => scrollToSection('products-section')}
                    className="group relative bg-gradient-to-b from-[#FAF8F5] via-white to-[#F5F1E8] border border-[#E4DFD5] hover:border-amber-600/70 rounded-2xl p-6 shadow-[0_4px_20px_rgba(120,53,15,0.04)] hover:shadow-[0_16px_36px_rgba(180,83,9,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ring-1 ring-amber-900/5"
                  >
                    {/* Top Plinth Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#EFECE6]">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-[11px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300 px-2.5 py-0.5 rounded-full shadow-2xs">
                          {getRomanIndex(cat.id)}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-serif font-bold text-stone-400">
                          Atelier Discipline
                        </span>
                      </div>
                      <span className="text-[11px] font-serif font-semibold text-amber-800 bg-white/90 border border-amber-200/80 px-2 py-0.5 rounded shadow-2xs">
                        {cat.itemCountLabel}
                      </span>
                    </div>

                    {/* Center Spotlight: The Luminous Gold-Bezel Circular Medallion */}
                    <div className="my-5 flex items-center justify-center relative">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-[#FAF8F5] via-white to-[#F2EFE9] border-2 border-[#D4AF37]/80 shadow-[0_8px_30px_rgba(120,53,15,0.1)] group-hover:shadow-[0_16px_40px_rgba(217,119,6,0.28)] transition-all duration-500 flex items-center justify-center p-3 relative group-hover:scale-105 ring-4 ring-[#FAF8F5]">
                        <div className="absolute inset-1.5 rounded-full border border-amber-300/40 group-hover:border-amber-500/80 transition-colors pointer-events-none" />
                        <CategoryCircleVisual categoryId={cat.id} variant="editorial" className="w-full h-full" />
                      </div>
                    </div>

                    {/* Bottom Metadata & Curatorial Notes */}
                    <div className="pt-2 text-left space-y-2.5">
                      <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-amber-800 transition-colors">
                        {cat.name}
                      </h3>

                      <p className="text-xs font-serif text-stone-600 italic line-clamp-2 leading-relaxed min-h-[32px]">
                        {cat.shortDescription}
                      </p>

                      {/* Subcategory Discipline Tags */}
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {cat.subcategories.slice(0, 3).map((sub, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-serif bg-stone-100 group-hover:bg-amber-50/80 text-stone-600 group-hover:text-amber-900 px-2 py-0.5 rounded border border-stone-200/80 transition-colors"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      {/* Card Action Footnote */}
                      <div className="pt-3 border-t border-[#EFECE6] flex items-center justify-between text-xs font-serif font-bold text-amber-800 group-hover:text-amber-950">
                        <span className="uppercase tracking-wider text-[10px]">Explore Catalog Specimens</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* TIER 2: INSTITUTIONAL SERVICES SUITE (Dedicated Wide Pavilion Layout) */}
          {/* ------------------------------------------------------------- */}
          {(optionBFilter === 'all' || optionBFilter === 'services') && (
            <div className={`${optionBFilter === 'all' ? 'mt-16' : 'mt-2'} bg-gradient-to-br from-[#1C1917] via-[#24201E] to-[#1C1917] rounded-3xl p-6 sm:p-10 text-white border border-stone-800 shadow-xl relative overflow-hidden`}>
              {/* Warm Ambient Radial Glow */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-stone-800 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-amber-400 font-serif">
                    Institutional Press & Venue Freight Logistics
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
                    Specialized Production & Direct Dock Services
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-stone-400 font-serif">
                  Disciplines № 08 & № 09
                </span>
              </div>

              {/* 2-Column Wide Service Pavilion Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {serviceCategories.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => scrollToSection('contact')}
                    className="group bg-stone-900/80 hover:bg-stone-800/90 border border-stone-700/80 hover:border-amber-500/80 rounded-2xl p-6 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 cursor-pointer select-none"
                  >
                    {/* Left: Circular Service Medallion */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#FAF8F5] via-white to-[#F2EFE9] border-2 border-amber-400 shadow-lg flex-shrink-0 flex items-center justify-center p-3 relative group-hover:scale-105 transition-transform ring-4 ring-stone-800">
                      <CategoryCircleVisual categoryId={service.id} variant="editorial" className="w-full h-full" />
                    </div>

                    {/* Right: Service Details */}
                    <div className="flex-1 text-center sm:text-left space-y-2.5">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <span className="font-serif text-[11px] font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded">
                          {getRomanIndex(service.id)}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-serif font-bold text-amber-200/80">
                          {service.type === 'service' ? 'Institutional Service' : 'Merchandise Atelier'}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-xl text-stone-100 group-hover:text-amber-300 transition-colors">
                        {service.name}
                      </h4>

                      <p className="text-xs font-serif text-stone-300 italic leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1 justify-center sm:justify-start">
                        {service.subcategories.slice(0, 3).map((sub, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-serif bg-stone-800 text-stone-300 px-2 py-0.5 rounded border border-stone-700"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center justify-center sm:justify-start gap-1.5 text-xs font-serif font-bold text-amber-400 group-hover:text-amber-300">
                        <span>Consult Service Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ======================================================== */}
        {/* 3. CURATED EVENT MERCHANDISE */}
        {/* ======================================================== */}
        <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-3xl border border-[#E7E5E0] my-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-800 font-serif">
                Editorial Selection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Featured Keynote Supplies
              </h2>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="text-xs uppercase tracking-wider font-bold text-amber-800 hover:text-amber-950 font-serif flex items-center gap-1 cursor-pointer"
            >
              Browse Complete Catalog <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. HERITAGE & 30-YEAR ANNIVERSARY */}
        {/* ======================================================== */}
        <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6 scroll-mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-sm font-serif font-bold">
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>1997 &ndash; 2027 &bull; Thirty Years of Service</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Family Owned Dedication to Every Conference Deadline
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-serif italic max-w-2xl mx-auto leading-relaxed">
            Founded in January, 1997, CliGraphics has spent three decades refining the craft of promotional event supplies, full-service commercial press printing, and convention center logistics.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-xl text-xs sm:text-sm uppercase font-bold tracking-wider bg-stone-900 text-amber-300 border border-stone-700 cursor-default">
              Family Owned & Operated Since 1997
            </span>
            <span className="px-6 py-3 rounded-xl text-xs sm:text-sm uppercase font-bold tracking-wider bg-white text-stone-800 border border-[#E7E5E0] cursor-default shadow-xs">
              One Source for All Your Conference Needs
            </span>
          </div>
        </section>

        {/* 5. EDITORIAL FAQ SECTION */}
        <HomeFAQSection />

        {/* 6. CONCIERGE CONTACT SECTION */}
        <HomeContactSection />
      </div>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE PRODUCT-LED COMMERCIAL HOMEPAGE
  // Bright, clean 2-column layout & Circular Categories
  // ========================================================
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (2-Column Daylight Layout, NO background text overlap) */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-slate-200 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Heritage Badge - ENLARGED */}
              <div className="inline-flex flex-wrap items-center gap-2.5 px-2 py-1 rounded-full bg-white border-2 border-amber-200 shadow-xs text-sm sm:text-base font-bold text-slate-900">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-amber-800 font-bold tracking-wide text-xs sm:text-sm md:text-base">
                  Established January, 1997
                </span>
                <span className="text-slate-300 font-black">&bull;</span>
                <span className="text-orange-600 font-bold tracking-wide text-xs sm:text-sm md:text-base">
                  Celebrating 30 Years
                </span>
              </div>

              {/* Primary Tagline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-heading text-slate-900">
                One source for all your conference needs.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                From conference tote bags with live online preview to attendee lanyards, journals, high-speed program book printing, and turnkey venue direct fulfillment.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('product-categories')}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all flex items-center gap-2 bg-[#E65100] hover:bg-[#C64500] text-white cursor-pointer"
                >
                  <Palette className="w-4 h-4" />
                  <span>Explore Product Categories</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('featured-products')}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold bg-white hover:bg-slate-50 text-[#0B3B60] border border-slate-300 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Browse Supplies</span>
                </button>
              </div>

              {/* Trust Highlights */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-700 flex-shrink-0" />
                  <span>Family Owned Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-sky-700 flex-shrink-0" />
                  <span>Full Commercial Printing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct Venue Logistics</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Staging Card (Dedicated graphic, no text collisions) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
                <ConferenceHeroSvg className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PRODUCT CATEGORIES (Circular Shape Similar to 4imprint) */}
      {/* ======================================================== */}
      <section id="product-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Promotional Merchandise & Event Printing
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
              Product Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Quickly identify conference essentials. Click any category circle for a direct link to full catalog selections.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection('featured-products')}
            className="text-xs font-bold text-sky-800 hover:text-orange-600 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            All 9 Categories Index <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 9 Category Circular Grid Similar to 4imprint */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6 sm:gap-x-8 justify-items-center">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => scrollToSection('featured-products')}
              className="group flex flex-col items-center text-center cursor-pointer select-none"
            >
              {/* Luminous, High-End Circular Frame with Ambient Soft Shadow */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-white border-2 border-slate-200/90 group-hover:border-[#E65100] shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_45px_rgba(230,81,0,0.22)] transition-all duration-500 p-2 sm:p-3 flex items-center justify-center relative group-hover:-translate-y-2 group-hover:scale-105">
                <div className="absolute inset-1.5 rounded-full border border-slate-100 group-hover:border-orange-100 pointer-events-none transition-colors" />
                <CategoryCircleVisual categoryId={cat.id} variant="promotional" className="w-full h-full" />
              </div>

              {/* Category Title & Count */}
              <h3 className="mt-3.5 font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#E65100] transition-colors leading-snug">
                {cat.name}
              </h3>
              <span className="text-[11px] text-slate-500 mt-0.5">
                {cat.type === 'service' ? 'Service Press' : cat.itemCountLabel}
              </span>
              <span className="text-[10px] font-bold text-[#E65100] opacity-0 group-hover:opacity-100 transition-opacity pt-0.5">
                Product Details &darr;
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CORE INTERACTIVE CUSTOMIZER FEATURE SPOTLIGHT */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-blue-50/70 via-white to-amber-50/40 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold border border-orange-300">
                <Palette className="w-3.5 h-3.5 text-orange-600" />
                <span>Signature Online Feature</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
                Custom Conference Bag Program
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Design attendee convention bags directly in your web browser. Upload your logo, scale and rotate your artwork, check printable boundaries, and preview your design on realistic tote and messenger bag models.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { step: '1', title: 'Choose Bag & Color', desc: 'Select canvas tote, messenger, or eco shopper' },
                  { step: '2', title: 'Select Front or Back', desc: 'Independent imprint zones on both sides' },
                  { step: '3', title: 'Upload Your Artwork', desc: 'Drag, scale, and rotate your high-res logo' },
                  { step: '4', title: 'Verify Printable Area', desc: 'Real-time boundary bounds checking' },
                  { step: '5', title: 'Confirm & Demo Cart', desc: 'Add customized line items with design snapshot' },
                ].map((item) => (
                  <div key={item.step} className="bg-white border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                      {item.step}
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">{item.title}</strong>
                      <span className="text-slate-500 text-[11px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E65100] hover:bg-[#C64500] text-white rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <Palette className="w-4 h-4" />
                  <span>Launch Interactive Bag Designer &rarr;</span>
                </button>
              </div>
            </div>

            {/* Sample Bag Showcase Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="text-center mb-4">
                <span className="text-[11px] uppercase tracking-wider text-orange-600 font-bold">
                  Conference Supplies Prototype
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Executive Conference Canvas Tote
                </h3>
              </div>

              <div className="relative aspect-square max-w-sm mx-auto flex items-center justify-center rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-inner p-4">
                <ProductImageMockup
                  imageKey={customizableBags[0]?.primaryImage || 'bag-tote-front'}
                  productSlug={customizableBags[0]?.slug}
                  selectedColorHex={customizableBags[0]?.availableColors?.[0]?.hex || '#0B3B60'}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="text-xs font-bold text-[#0B3B60] hover:text-[#E65100] flex items-center justify-center gap-1 mx-auto cursor-pointer"
                >
                  Customize This Tote Live <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FEATURED BESTSELLERS */}
      {/* ======================================================== */}
      <section id="featured-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Popular Attendee Favorites
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Featured Products Supplies
            </h2>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection('product-categories')}
            className="text-xs font-bold text-sky-800 hover:text-orange-600 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            All Categories <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. PRINTING & FULFILLMENT SERVICES */}
      {/* ======================================================== */}
      <section id="services-section" className="bg-slate-100 border-y border-slate-200 py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Beyond Merchandise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Comprehensive Products Services
            </h2>
            <p className="text-xs text-slate-600 mt-2">
              From web-offset printed program guides to turnkey registration kit fulfillment delivered right to your convention center dock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Printing */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Full Commercial Printing
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  High-speed digital and web-offset printing for all event collateral. We handle single-sheet sponsor flyers, multifold registration brochures, daily agenda guides, and perfect-bound conference proceedings.
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Conference Program Books (saddle-stitched & perfect-bound)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Registration Brochures & Direct Mail Folders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Single Flyer Sheets, Session Agendas & Inserts</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="text-xs font-bold text-sky-800 hover:text-orange-600 flex items-center gap-1 cursor-pointer"
                >
                  Explore Commercial Press Capabilities &rarr;
                </button>
              </div>
            </div>

            {/* Service 2: Fulfillment & Direct Mail */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Fulfillment & Direct Mail Services
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Turnkey attendee swag kitting, custom box packing, pre-event promotional direct mail campaigns, and guaranteed direct-to-dock convention center freight logistics.
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Attendee Swag Bag & VIP Speaker Box Assembly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Convention Center Freight Delivery & Dock Check-in</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Pre-Conference Direct Mail & Postcard Blitzes</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="text-xs font-bold text-amber-800 hover:text-orange-600 flex items-center gap-1 cursor-pointer"
                >
                  Explore Dockside Logistics Capabilities &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. TRUST & BRAND HERITAGE SECTION */}
      {/* ======================================================== */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="bg-gradient-to-br from-white via-sky-50/40 to-amber-50/30 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs sm:text-sm font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Family Owned &bull; Celebrating 30 Years (1997 &ndash; 2027)</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              One Partner for Every Conference Deadline
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Established in January, 1997, CliGraphics brings 30 years of family-owned dedication to conferences, annual general meetings, and trade show events across North America.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-5 py-2.5 rounded-xl bg-[#0B3B60] text-white text-xs sm:text-sm font-bold shadow-xs">
                Family Owned & Operated Since 1997
              </span>
              <span className="px-5 py-2.5 rounded-xl bg-white text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 shadow-xs">
                One Source for All Your Conference Needs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONFERENCE PLANNING FAQ SECTION */}
      <HomeFAQSection />

      {/* 8. CONTACT & SAMPLE REQUEST SECTION */}
      <HomeContactSection />
    </div>
  );
};
