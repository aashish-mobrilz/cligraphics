import React from 'react';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { CATEGORIES } from '../../data/categories';
import { ShieldCheck, Calendar, MapPin, Mail, Info, Sparkles } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const { isOptionB } = useDesignTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // ========================================================
  // OPTION B: EDITORIAL CONCIERGE & ARCHITECTURAL FOOTER
  // Warm obsidian & gallery cream aesthetic with serif branding
  // ========================================================
  if (isOptionB) {
    return (
      <footer className="bg-[#11181D] text-stone-300 border-t border-stone-800 text-xs">
        {/* Upper Editorial Brand & Heritage Banner */}
        <div className="border-b border-stone-800/80 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  CliGraphics
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Established 1997
                </span>
              </div>
              <p className="mt-1 text-xs text-stone-400 font-serif italic max-w-xl">
                "One source for all your conference needs" &bull; Dedicated family-owned production atelier delivering event merchandise and high-speed web press printing.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-700 text-amber-300 font-medium cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Family Owned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-700 text-stone-300 font-medium cursor-default">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                Celebrating 30 Years
              </span>
            </div>
          </div>
        </div>

        {/* Multi-Column Nav Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Merchandise Collections (Static Display per requirement 1) */}
            <div>
              <h4 className="font-serif font-bold text-amber-300 uppercase tracking-widest text-[11px] mb-4">
                Conference Merchandise
              </h4>
              <ul className="space-y-2.5 text-xs text-stone-400">
                {CATEGORIES.filter((c) => c.type === 'product').map((cat) => (
                  <li key={cat.id}>
                    <span className="cursor-default select-none text-stone-400">
                      {cat.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Services & Resources */}
            <div>
              <h4 className="font-serif font-bold text-amber-300 uppercase tracking-widest text-[11px] mb-4">
                Commercial Services & Help
              </h4>
              <ul className="space-y-2.5 text-xs text-stone-400">
                <li>
                  <span className="cursor-default select-none text-stone-400">
                    Commercial Web Printing
                  </span>
                </li>
                <li>
                  <span className="cursor-default select-none text-stone-400">
                    Dock Fulfillment & Direct Mail
                  </span>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('services-section')}
                    className="hover:text-amber-200 transition-colors text-left"
                  >
                    Complete Event Solutions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('faq')}
                    className="hover:text-amber-200 transition-colors text-left"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Heritage & Philosophy */}
            <div>
              <h4 className="font-serif font-bold text-amber-300 uppercase tracking-widest text-[11px] mb-4">
                Company Heritage
              </h4>
              <ul className="space-y-2.5 text-xs text-stone-400">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('about')}
                    className="hover:text-amber-200 transition-colors text-left"
                  >
                    30-Year Craft Story
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-amber-200 transition-colors text-left"
                  >
                    Concierge Inquiry
                  </button>
                </li>
                <li className="pt-2 text-stone-500 text-[11px] leading-relaxed cursor-default">
                  Proudly family-owned and operated since January 1997, supporting national keynote events and trade conventions.
                </li>
              </ul>
            </div>

            {/* Col 4: Concierge Inquiries */}
            <div>
              <h4 className="font-serif font-bold text-amber-300 uppercase tracking-widest text-[11px] mb-4">
                Client Concierge
              </h4>
              <div className="space-y-2.5 text-xs text-stone-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-500" />
                  <span>Production Facility (Client Address Pending)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 text-amber-500" />
                  <span>concierge@cligraphics.demo</span>
                </div>
                <div className="pt-3">
                  <span className="text-[10px] text-stone-500 block uppercase tracking-wider">Toll-Free Assistance</span>
                  <span className="text-sm font-serif font-bold text-white">1-800-CLI-CONF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers */}
        <div className="border-t border-stone-800 bg-black/60 py-4 px-4 text-center">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-500">
            <div className="flex items-center gap-1.5 text-amber-400/80">
              <Info className="w-3.5 h-3.5 text-amber-500" />
              <span>Simulated Prototype: Local React state only &bull; No live order or payment execution.</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE PROMOTIONAL STOREFRONT FOOTER
  // ========================================================
  return (
    <footer className="border-t text-xs transition-colors bg-slate-900 text-slate-300 border-slate-800">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Story & Client Statements */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                CG
              </div>
              <span className="text-xl font-black text-white tracking-tight">CliGraphics</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <span className="font-semibold text-white">One source for all your conference needs.</span> Delivering premium promotional merchandise, custom bags, conference lanyards, printing, and direct fulfillment since 1997.
            </p>

            {/* Client Provided Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-amber-300 font-semibold text-[11px] border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                Family Owned
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-sky-300 font-semibold text-[11px] border border-slate-700">
                <Calendar className="w-3.5 h-3.5" />
                Est. January, 1997
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-emerald-300 font-semibold text-[11px] border border-slate-700">
                Celebrating 30 Years
              </span>
            </div>
          </div>

          {/* Col 2: Merchandise Categories (Static Display per requirement 1) */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Merchandise
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter((c) => c.type === 'product').map((cat) => (
                <li key={cat.id}>
                  <span className="text-slate-400 cursor-default">
                    {cat.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Tools */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Services & Help
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400 cursor-default">
                  Commercial Printing
                </span>
              </li>
              <li>
                <span className="text-slate-400 cursor-default">
                  Swag Box Fulfillment
                </span>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('services-section')}
                  className="hover:text-white transition-colors text-left"
                >
                  All Conference Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Demonstration Placeholders */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About CliGraphics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li className="pt-2 text-slate-400">
                <div className="flex items-start gap-1.5 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-slate-500" />
                  <span>Facility Location Placeholder (Client Contact Info Pending)</span>
                </div>
              </li>
              <li className="text-slate-400">
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 text-slate-500" />
                  <span>info@cligraphics.demo</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demonstration Banner & Legal Notice */}
      <div className="border-t border-slate-800 bg-black/40 py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} CliGraphics.com &bull;
            All rights reserved. 
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <Info className="w-3.5 h-3.5 text-amber-500" />
            <span>Demonstration only: No payment processing, backend, or real order creation.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
