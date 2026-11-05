import React from 'react';
import { Link } from 'react-router-dom';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { CATEGORIES } from '../../data/categories';
import { ShieldCheck, Calendar, Info, Sparkles } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const { isOptionB } = useDesignTheme();

  // ========================================================
  // OPTION B: EDITORIAL CONCIERGE & ARCHITECTURAL FOOTER
  // ========================================================
  if (isOptionB) {
    return (
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs">
        {/* Upper Editorial Brand & Heritage Banner */}
        <div className="border-b border-stone-800 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  CliGraphics
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Established 1997
                </span>
              </div>
              <p className="mt-1 text-xs text-stone-400 font-serif italic max-w-xl">
                "One source for all your conference needs" &bull; Dedicated family-owned production atelier delivering event merchandise and high-speed web press printing.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-amber-300 font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Family Owned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-white font-bold">
                <Calendar className="w-4 h-4 text-amber-500" />
                Celebrating 30 Years (1997 - 2027)
              </span>
            </div>
          </div>
        </div>

        {/* Multi-Column Nav Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Product Categories */}
            <div>
              <h4 className="font-serif font-bold text-amber-300 uppercase tracking-widest text-[11px] mb-4">
                Product Categories
              </h4>
              <ul className="space-y-2 text-xs text-stone-400 font-serif">
                {CATEGORIES.filter((c) => c.type === 'product').map((cat) => (
                  <li key={cat.id}>
                    <Link to={`/category/${cat.slug}`} className="hover:text-amber-200 transition-colors">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Services & Resources */}
            <div>
              <h4 className="font-serif font-bold text-amber-300 uppercase tracking-widest text-[11px] mb-4">
                Commercial Services & Help
              </h4>
              <ul className="space-y-2 text-xs text-stone-400 font-serif">
                <li>
                  <Link to="/services/printing" className="hover:text-amber-200 transition-colors">
                    Commercial Web Printing
                  </Link>
                </li>
                <li>
                  <Link to="/services/fulfillment" className="hover:text-amber-200 transition-colors">
                    Dock Fulfillment & Direct Mail
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-amber-200 transition-colors">
                    Complete Event Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-amber-200 transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Heritage & Philosophy */}
            <div>
              <h4 className="font-serif font-bold text-amber-300 uppercase tracking-widest text-[11px] mb-4">
                Company Heritage
              </h4>
              <ul className="space-y-2 text-xs text-stone-400 font-serif">
                <li>
                  <Link to="/about" className="hover:text-amber-200 transition-colors">
                    Established January, 1997
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-amber-200 transition-colors">
                    Celebrating 30 Years
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-200 transition-colors">
                    Concierge Sample Assistance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Corporate Concierge & Prototype Disclaimer */}
            <div className="space-y-3 font-serif">
              <h4 className="font-serif font-bold text-amber-300 uppercase tracking-widest text-[11px] mb-4">
                Concierge Production
              </h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                Dedicated production liaisons assigned to corporate event planners, national associations, and summit committees.
              </p>
              <div className="pt-2 text-stone-400 text-xs">
                <span>Direct Toll-Free: </span>
                <span className="text-white font-bold">1-800-CLI-CONF (Demo)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Prototype Notice */}
        <div className="border-t border-stone-800 py-6 px-4 sm:px-6 lg:px-8 bg-stone-950">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-serif">
            <div>
              &copy; 1997 &ndash; 2027 CliGraphics.com. Family Owned & Operated. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-amber-500/80">
              <Info className="w-3.5 h-3.5" />
              <span>Static UI Prototype &bull; No live orders or transactions</span>
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
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                CG
              </div>
              <span className="text-xl font-black text-white tracking-tight">CLI Graphics</span>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <span className="font-semibold text-white">One source for all your conference and printing needs.</span> Delivering premium promotional merchandise, custom attendee bags, commercial printing, and dockside fulfillment since 1997.
            </p>

            {/* Client Heritage Statement */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-sky-300 font-bold text-xs border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Family Owned Since 1997
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-white font-bold text-xs border border-slate-700">
                <Calendar className="w-4 h-4 text-amber-400" />
                Over 30 Years of Conference Experience
              </span>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter((c) => c.type === 'product').map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="text-slate-400 hover:text-white transition-colors">
                    {cat.name}
                  </Link>
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
                <Link to="/services/printing" className="text-slate-400 hover:text-white transition-colors">
                  Commercial Printing
                </Link>
              </li>
              <li>
                <Link to="/services/fulfillment" className="text-slate-400 hover:text-white transition-colors">
                  Swag Box Fulfillment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  All Conference Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Assurance */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Why CLI Graphics
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-400 flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Family Owned Since 1997</span>
              </li>
              <li className="text-slate-400 flex items-start gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Over 30 Years of Conference Experience</span>
              </li>
              <li className="text-slate-400 flex items-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Single Source: Swag, Press & Kitting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Prototype Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 1997 &ndash; 2027 CLIGraphics.com. Family Owned & Operated. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <Info className="w-3.5 h-3.5" />
            <span>Interactive Frontend Prototype &bull; No live transactions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
