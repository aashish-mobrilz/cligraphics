import React from 'react';
import { useDesignTheme } from '../context/DesignThemeContext';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ConferenceHeroSvg } from '../components/common/ConferenceHeroSvg';
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
  ShoppingBag,
  Tag,
  Coffee,
  PenTool,
  Shirt,
  Cpu,
  BookOpen,
  Sparkles,
  Calendar,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { isOptionB } = useDesignTheme();

  const featuredProducts = PRODUCTS.slice(0, 4);
  const customizableBags = PRODUCTS.filter((p) => p.customizable);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Tag': return <Tag className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Shirt': return <Shirt className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Printer': return <Printer className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      default: return <ShoppingBag className="w-5 h-5" />;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ========================================================
  // OPTION B: CORPORATE / EDITORIAL CONFERENCE PRESENTATION
  // Categories and items are static content (non-clickable)
  // ========================================================
  if (isOptionB) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] text-stone-900">
        {/* ======================================================== */}
        {/* 1. EDITORIAL HERO (Centred Architectural Composition) */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden bg-[#151D22] text-white py-20 sm:py-28 lg:py-32">
          {/* Subtle Ambient Conference Venue Background */}
          <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
            <ConferenceHeroSvg className="w-full h-full" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-800/80 border border-amber-500/30 text-xs font-serif tracking-widest text-amber-300 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ESTABLISHED JANUARY, 1997</span>
              <span className="text-stone-500">&bull;</span>
              <span className="text-white font-semibold">CELEBRATING 30 YEARS</span>
            </div>

            {/* Primary Tagline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              One source for all your conference needs.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-stone-300 max-w-2xl mx-auto font-serif italic leading-relaxed">
              Equipping national summits, annual associations, and trade exhibitions with bespoke attendee bags, curated registration merchandise, high-speed offset printing, and dockside convention fulfillment.
            </p>

            {/* Editorial Action Buttons (Smooth scroll on home) */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('categories-section')}
                className="px-7 py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider bg-amber-600 hover:bg-amber-700 text-white shadow-lg transition-all flex items-center gap-2"
              >
                <Palette className="w-4 h-4" />
                <span>Explore Conference Solutions</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('products-section')}
                className="px-7 py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider bg-stone-800/80 hover:bg-stone-700/80 text-amber-100 border border-stone-600 transition-all flex items-center gap-2"
              >
                <span>View Curated Catalog</span>
              </button>
            </div>

            {/* Trust Pillars */}
            <div className="pt-10 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-xs text-stone-300 font-serif">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Family Owned & Operated</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Commercial Web & Digital Press</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Direct Convention Freight Kitting</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. CONFERENCE SOLUTIONS (Static Category Content) */}
        {/* ======================================================== */}
        <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E7E5E0]">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-800">
                Conference Solutions &bull; 9 Core Categories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                Event Merchandise & Press Categories
              </h2>
            </div>
            <span className="text-xs uppercase tracking-wider font-bold text-stone-400">
              Overview Index
            </span>
          </div>

          {/* Asymmetric Editorial Grid - Completely Non-Clickable Static Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Featured Big Card: Custom Bag Atelier (Static) */}
            <div className="lg:col-span-5 bg-[#1A2328] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-md select-none">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] uppercase font-bold tracking-wider border border-amber-500/30">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Signature Experience</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  Custom Bag Atelier
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-serif">
                  High-durability natural cotton and canvas totes with independent front and back imprint zones, engineered for heavy conference literature.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 rounded-lg text-xs font-bold bg-stone-800 text-amber-300 border border-stone-700 cursor-default">
                    Atelier Custom Imprint Ready
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-700/60 relative z-10 flex items-center justify-between text-xs text-amber-200">
                <span>Front & Back Imprint Zones</span>
                <span className="font-semibold text-white">Tier Pricing From $4.25</span>
              </div>
            </div>

            {/* Right: 4 Curated Category Pillars (Static Content - Non-Clickable) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Solution 1: Lanyards & Badging */}
              <div className="bg-white p-6 rounded-2xl border border-[#E7E5E0] cursor-default flex flex-col justify-between select-none">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center mb-3">
                    <Tag className="w-5 h-5 text-amber-700" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Lanyards & Badging
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed font-serif">
                    Custom woven, dye-sublimated, and eco-friendly lanyards with attendee pass attachments.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-400">
                  <span>Category Portfolio</span>
                  <span>100+ Min</span>
                </div>
              </div>

              {/* Solution 2: Drinkware & Tumblers */}
              <div className="bg-white p-6 rounded-2xl border border-[#E7E5E0] cursor-default flex flex-col justify-between select-none">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center mb-3">
                    <Coffee className="w-5 h-5 text-amber-700" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Drinkware & Tumblers
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed font-serif">
                    Vacuum-insulated stainless tumblers and ceramic mugs engraved with your event branding.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-400">
                  <span>Category Portfolio</span>
                  <span>50+ Min</span>
                </div>
              </div>

              {/* Solution 3: Commercial Web Printing */}
              <div id="services-section" className="bg-[#F4F1EA] p-6 rounded-2xl border border-[#E2DDD3] cursor-default flex flex-col justify-between select-none scroll-mt-24">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Printer className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                      Press Service
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Commercial Printing
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed font-serif">
                    High-speed web offset and digital presses for program books, registration brochures, and flyers.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-300/60 flex items-center justify-between text-xs font-semibold text-amber-900">
                  <span>Commercial Press</span>
                  <span>Turnkey Service</span>
                </div>
              </div>

              {/* Solution 4: Direct Mail & Venue Fulfillment */}
              <div className="bg-[#F4F1EA] p-6 rounded-2xl border border-[#E2DDD3] cursor-default flex flex-col justify-between select-none">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                      Logistics Service
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Fulfillment & Direct Mail
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed font-serif">
                    Attendee swag kit assembly, pre-event promotional mailings, and convention dockside freight delivery.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-300/60 flex items-center justify-between text-xs font-semibold text-amber-900">
                  <span>Logistics Pipeline</span>
                  <span>Dock Direct</span>
                </div>
              </div>
            </div>
          </div>

          {/* All 9 categories as static badges (Non-Clickable per requirement 1) */}
          <div className="mt-8 pt-6 border-t border-[#E7E5E0] flex flex-wrap items-center justify-center gap-3 text-xs text-stone-600 font-serif">
            <span className="font-bold text-stone-800 uppercase text-[11px] tracking-wider">Complete Categories Index:</span>
            {CATEGORIES.map((cat) => (
              <span
                key={cat.id}
                className="px-3.5 py-1 rounded-full bg-white border border-[#E7E5E0] text-stone-700 text-xs cursor-default select-none shadow-2xs"
              >
                {cat.name}
              </span>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. CURATED EVENT MERCHANDISE (Static Product Cards) */}
        {/* ======================================================== */}
        <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F2F0EB]/60 rounded-3xl border border-[#E7E5E0] my-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-800">
                Editorial Selection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Featured Keynote Supplies
              </h2>
            </div>
            <span className="text-xs uppercase tracking-wider font-bold text-stone-400">
              Sample Showcase
            </span>
          </div>

          {/* Render horizontal editorial cards (non-clickable) */}
          <div className="space-y-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. HERITAGE & 30-YEAR ANNIVERSARY */}
        {/* ======================================================== */}
        <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-serif font-bold">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>1997 &ndash; 2027 &bull; Thirty Years of Service</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Family Owned Dedication to Every Conference Deadline
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-serif italic max-w-2xl mx-auto leading-relaxed">
            Founded in January, 1997, CliGraphics has spent three decades refining the craft of promotional event supplies, full-service commercial press printing, and convention center logistics.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider bg-[#1A2328] text-amber-300 border border-stone-700 cursor-default">
              Family Owned & Operated Since 1997
            </span>
            <span className="px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider bg-white text-stone-800 border border-[#E7E5E0] cursor-default">
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
  // Categories and cards rendered as static non-clickable content
  // ========================================================
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (With Client-Approved Copy & Stock Visual) */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
          <ConferenceHeroSvg className="w-full h-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-amber-300">Established January, 1997</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-white">Celebrating 30 Years</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-heading text-white">
              One source for all your conference needs.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From conference tote bags with live online preview to attendee lanyards, journals, high-speed program book printing, and turnkey venue direct fulfillment.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('categories-grid')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-all flex items-center gap-2 bg-[#E65100] hover:bg-[#C64500] text-white"
              >
                <Palette className="w-4 h-4" />
                <span>Explore Conference Categories</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('featured-products')}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Browse Supplies</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Family Owned Business</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Full Commercial Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct Venue Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. CATEGORY DISCOVERY (Completely Non-Clickable Static Content) */}
      {/* ======================================================== */}
      <section id="categories-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Complete Event Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Conference Categories
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            9 Core Categories
          </span>
        </div>

        {/* 9 Category Grid - Static Non-Clickable Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
        xl:grid-cols-3  gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between bg-white border-slate-200 cursor-default select-none"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    cat.type === 'service'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-sky-50 text-sky-700'
                  }`}>
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  {cat.featuredBadge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {cat.featuredBadge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-base text-slate-900">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>{cat.itemCountLabel}</span>
                <span className="text-[10px] uppercase font-bold text-sky-700">Category</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CORE INTERACTIVE CUSTOMIZER FEATURE SPOTLIGHT */}
      {/* ======================================================== */}
      <section className="bg-gradient-to-br from-slate-900 via-[#0B253A] to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-500/40">
                <Palette className="w-3.5 h-3.5" />
                <span>Signature Online Feature</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
                Custom Conference Bag Program
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
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
                  <div key={item.step} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-900 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                      {item.step}
                    </span>
                    <div>
                      <strong className="text-white block font-semibold">{item.title}</strong>
                      <span className="text-slate-400 text-[11px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-amber-300 rounded-xl text-xs font-bold cursor-default">
                  <Palette className="w-4 h-4" />
                  <span>Interactive Customizer Feature</span>
                </span>
              </div>
            </div>

            {/* Sample Bag Showcase Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="text-center mb-4">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                  Conference Supplies Prototype
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Executive Conference Canvas Tote
                </h3>
              </div>

              <div className="relative aspect-square max-w-sm mx-auto flex items-center justify-center rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 shadow-xl p-4">
                <ProductImageMockup
                  imageKey={customizableBags[0]?.primaryImage || 'bag-tote-front'}
                  productSlug={customizableBags[0]?.slug}
                  selectedColorHex={customizableBags[0]?.availableColors?.[0]?.hex || '#0B3B60'}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FEATURED BESTSELLERS (Static Product Cards) */}
      {/* ======================================================== */}
      <section id="featured-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Popular Attendee Favorites
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Featured Conference Supplies
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Sample Catalog
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. PRINTING & FULFILLMENT SERVICES (Static Content) */}
      {/* ======================================================== */}
      <section id="services-section" className="bg-slate-100 border-y border-slate-200 py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Beyond Merchandise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Comprehensive Conference Services
            </h2>
            <p className="text-xs text-slate-600 mt-2">
              From web-offset printed program guides to turnkey registration kit fulfillment delivered right to your convention center dock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Printing */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between select-none">
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

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 cursor-default">
                  Commercial Web & Digital Press Capabilities
                </span>
              </div>
            </div>

            {/* Service 2: Fulfillment & Direct Mail */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between select-none">
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

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 cursor-default">
                  Dockside Logistics & Kitting Capabilities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. TRUST & BRAND HERITAGE SECTION */}
      {/* ======================================================== */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="bg-[#0B3B60] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Family Owned &bull; Celebrating 30 Years
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              One Partner for Every Conference Deadline
            </h2>

            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Established in January, 1997, CliGraphics brings 30 years of family-owned dedication to conferences, annual general meetings, and trade show events across North America.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-5 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold cursor-default">
                Family Owned & Operated Since 1997
              </span>
              <span className="px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold border border-white/20 cursor-default">
                One Source for All Your Conference Needs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONFERENCE PLANNING FAQ SECTION */}
      <HomeFAQSection />

      {/* 8. CONTACT & SAMPLE REQUEST SECTION */}
      {/* <HomeContactSection /> */}
    </div>
  );
};
