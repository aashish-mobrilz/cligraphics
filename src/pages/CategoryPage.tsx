import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { SERVICES } from '../data/services';
import { ProductGrid } from '../components/product/ProductGrid';
import { useDesignTheme } from '../context/DesignThemeContext';
import {
  Printer,
  Truck,
  CheckCircle2,
  FileCheck,
  Palette,
  ArrowRight,
} from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isOptionB } = useDesignTheme();

  const category = CATEGORIES.find((c) => c.slug === slug);
  const isService = category?.type === 'service';

  // State for sample service quote modal/form
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-xl font-bold text-slate-800">Category Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">The requested category slug "{slug}" does not exist.</p>
        <Link to="/products" className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg text-xs font-semibold">
          Return to All Products
        </Link>
      </div>
    );
  }

  // ========================================================
  // OPTION B: EDITORIAL / CORPORATE CATEGORY EXPERIENCE
  // ========================================================
  if (isOptionB) {
    if (isService) {
      const serviceItems = SERVICES.filter((s) => s.category === (category.slug === 'printing' ? 'printing' : 'fulfillment'));

      return (
        <div className="min-h-screen py-12 bg-[#FAF9F6] text-stone-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Service Editorial Hero */}
            <div className="bg-[#1A2328] text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden">
              <div className="max-w-3xl relative z-10 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-serif font-bold tracking-wider border border-amber-500/30">
                  {category.slug === 'printing' ? <Printer className="w-3.5 h-3.5" /> : <Truck className="w-3.5 h-3.5" />}
                  <span>Commercial Press & Logistics Service</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  {category.name}
                </h1>

                <p className="text-stone-300 text-sm sm:text-base font-serif italic leading-relaxed">
                  {category.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  {category.subcategories.map((sub, idx) => (
                    <span key={idx} className="bg-stone-800/80 px-3.5 py-1.5 rounded-full text-amber-200 border border-stone-700 font-serif">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceItems.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl border border-[#E7E5E0] p-8 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-6 font-serif">
                      {service.fullOverview}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-2 font-serif">
                          Deliverables & Formats
                        </h4>
                        <ul className="space-y-2 text-xs text-stone-700">
                          {service.deliverables.map((d, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <h4 className="text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-2 font-serif">
                          Equipment & Specifications
                        </h4>
                        <ul className="space-y-2 text-xs text-stone-700">
                          {service.equipmentAndCapabilities.map((eq, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <FileCheck className="w-3.5 h-3.5 text-stone-500 flex-shrink-0 mt-0.5" />
                              <span>{eq}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase font-serif tracking-wider block">Estimated Turnaround</span>
                      <strong className="text-stone-900 font-serif text-sm">{service.sampleLeadTimes}</strong>
                    </div>
                    <button
                      onClick={() => setQuoteSubmitted(true)}
                      className="px-4 py-2 bg-[#1A2328] hover:bg-stone-800 text-amber-300 font-bold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Concierge Quote Consultation Form */}
            <div className="bg-white rounded-3xl border border-[#E7E5E0] p-8 sm:p-12 shadow-xs max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest font-serif font-bold text-amber-800">
                  Concierge Service Inquiry
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  Request a Dedicated {category.name} Proposal
                </h3>
                <p className="text-xs text-stone-500 mt-1 font-serif">
                  Submit conference specs, delivery dates, and required quantities for a customized estimate.
                </p>
              </div>

              {quoteSubmitted ? (
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 text-center text-stone-800 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-amber-600 mx-auto" />
                  <h4 className="font-serif font-bold text-base">Consultation Request Recorded</h4>
                  <p className="text-xs text-stone-600 max-w-md mx-auto">
                    This is an interactive static prototype demonstration. In a production deployment, a CLI Graphics account specialist would review your conference timetable.
                  </p>
                  <button
                    onClick={() => setQuoteSubmitted(false)}
                    className="mt-3 text-xs font-serif font-bold text-amber-800 underline block mx-auto"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteSubmitted(true);
                  }}
                  className="space-y-4 text-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-serif font-semibold text-stone-800 mb-1">Contact Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jordan Vance"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50 text-slate-900 placeholder:text-stone-400"
                      />
                    </div>
                    <div>
                      <label className="block font-serif font-semibold text-stone-800 mb-1">Conference Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. National Leadership Summit 2027"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50 text-slate-900 placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-serif font-semibold text-stone-800 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jvance@conference.org"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50 text-slate-900 placeholder:text-stone-400"
                      />
                    </div>
                    <div>
                      <label className="block font-serif font-semibold text-stone-800 mb-1">Estimated Attendee Count</label>
                      <input
                        type="text"
                        placeholder="e.g. 2,500 Attendees"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50 text-slate-900 placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif font-semibold text-stone-800 mb-1">Project Details & Dock Deadlines</label>
                    <textarea
                      rows={3}
                      placeholder="Need 2,500 perfect-bound daily program guides and attendee tote assemblies delivered to Chicago McCormick Place Dock by June 15."
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50 text-slate-900 placeholder:text-stone-400"
                    />
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="px-7 py-3 bg-[#1A2328] hover:bg-stone-800 text-amber-300 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Submit Concierge Inquiry
                    </button>
                    <span className="block text-[11px] text-stone-400 mt-2 font-serif italic">
                      Demo only — no live transmission or backend storage.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Product Category Option B
    const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

    return (
      <div className="min-h-screen py-12 bg-[#FAF9F6] text-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Editorial Category Header */}
          <div className="bg-white rounded-3xl border border-[#E7E5E0] p-8 sm:p-12 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs text-stone-400 font-serif">
                  <Link to="/" className="hover:underline">Home</Link> / <Link to="/products" className="hover:underline">Products</Link> / <strong className="text-stone-800">{category.name}</strong>
                </div>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                  {category.name} Edition
                </h1>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-serif italic">
                  {category.description}
                </p>
              </div>

              {/* If Category is Bags, Show Elegant Atelier Banner */}
              {category.slug === 'bags' && (
                <div className="bg-[#1A2328] text-white border border-amber-500/30 rounded-2xl p-5 flex flex-col items-center text-center max-w-xs shadow-md">
                  <Palette className="w-6 h-6 text-amber-400 mb-2" />
                  <h4 className="font-serif font-bold text-sm text-white">Interactive Bag Atelier</h4>
                  <p className="text-[11px] text-stone-300 mt-1 mb-4 leading-relaxed font-serif">
                    Live positioning, scaling, and rotation of your logo on conference canvas totes.
                  </p>
                  <Link
                    to="/customize/canvas-tote-pro"
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs uppercase font-bold tracking-wider shadow-xs transition-colors"
                  >
                    Open Bag Designer
                  </Link>
                </div>
              )}
            </div>

            {/* Subcategories Horizontal Tabs */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-serif font-bold text-stone-400 uppercase tracking-widest mr-2">
                Sub-Collections:
              </span>
              <button
                onClick={() => setSelectedSubcategory('all')}
                className={`px-3.5 py-1 rounded-full text-xs font-serif font-medium transition-colors ${
                  selectedSubcategory === 'all'
                    ? 'bg-[#1A2328] text-amber-300'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                All {category.name}
              </button>
              {category.subcategories.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`px-3.5 py-1 rounded-full text-xs font-serif font-medium transition-colors ${
                    selectedSubcategory === sub
                      ? 'bg-[#1A2328] text-amber-300'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Product Items (Option B Horizontal Editorial Cards) */}
          <ProductGrid
            products={categoryProducts}
            emptyMessage={`No products found in ${category.name}. Check back soon or view all products.`}
          />
        </div>
      </div>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE COMMERCIAL CATEGORY LISTING
  // ========================================================
  if (isService) {
    const serviceItems = SERVICES.filter((s) => s.category === (category.slug === 'printing' ? 'printing' : 'fulfillment'));

    return (
      <div className="min-h-screen py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Service Landing Hero */}
          <div className="bg-gradient-to-br from-[#0B2A42] to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <div className="max-w-3xl relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                {category.slug === 'printing' ? <Printer className="w-3.5 h-3.5" /> : <Truck className="w-3.5 h-3.5" />}
                <span>Commercial Service Offering</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-heading">
                {category.name}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {category.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                {category.subcategories.map((sub, idx) => (
                  <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-slate-200 border border-white/10">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Service Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceItems.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.fullOverview}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Deliverables & Formats
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {service.deliverables.map((d, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Equipment & Press Capabilities
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {service.equipmentAndCapabilities.map((eq, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <FileCheck className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                            <span>{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Turnaround</span>
                    <strong className="text-slate-800">{service.sampleLeadTimes}</strong>
                  </div>
                  <button
                    onClick={() => setQuoteSubmitted(true)}
                    className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Service Quote Consultation Form */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Conference Logistics Consultation
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Request a Custom {category.name} Proposal
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Submit your conference dates, quantities, and collateral specifications for a detailed estimate.
              </p>
            </div>

            {quoteSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-sm">Demo Consultation Request Received!</h4>
                <p className="text-xs">
                  This is a static prototype demonstration. In a production system, a CLI Graphics account specialist would review your event timeline.
                </p>
                <button
                  onClick={() => setQuoteSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-700 underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Contact Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Conference Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Annual Healthcare Summit 2027"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. amorgan@organization.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Estimated Attendee Count</label>
                    <input
                      type="text"
                      placeholder="e.g. 1,200 Attendees"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Project Details & Deadlines</label>
                  <textarea
                    rows={3}
                    placeholder="Need 1,200 saddle-stitched program guides and pre-packed attendee bags delivered to Orlando Convention Center Dock by May 10."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0B3B60] hover:bg-[#072842] text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Submit Demo Service Inquiry
                  </button>
                  <span className="block text-[11px] text-slate-400 mt-2">
                    Demo only — no transmission or backend storage.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Option A Product Category Listing
  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Header */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs text-slate-500">
                <Link to="/" className="hover:underline">Home</Link> / <Link to="/products" className="hover:underline">Products</Link> / <strong className="text-slate-800">{category.name}</strong>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* If Category is Bags, Show Prominent Customizer Banner */}
            {category.slug === 'bags' && (
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex flex-col items-center text-center max-w-xs shadow-xs">
                <Palette className="w-6 h-6 text-orange-600 mb-1" />
                <h4 className="font-bold text-xs text-slate-900">Custom Bag Designer</h4>
                <p className="text-[11px] text-slate-600 mt-1 mb-3">
                  Upload your artwork and preview on our canvas totes & messengers.
                </p>
                <Link
                  to="/customize/canvas-tote-pro"
                  className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
                >
                  Launch Designer
                </Link>
              </div>
            )}
          </div>

          {/* Subcategories Pills */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              Subcategories:
            </span>
            <button
              onClick={() => setSelectedSubcategory('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                selectedSubcategory === 'all'
                  ? 'bg-sky-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All {category.name}
            </button>
            {category.subcategories.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  selectedSubcategory === sub
                    ? 'bg-sky-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={categoryProducts}
          emptyMessage={`No products found in ${category.name}. Check back soon or view all products.`}
        />
      </div>
    </div>
  );
};
