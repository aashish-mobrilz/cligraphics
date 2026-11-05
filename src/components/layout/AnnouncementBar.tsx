import React from 'react';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { isOptionB } = useDesignTheme();

  // ========================================================
  // OPTION B: EDITORIAL MINIMALIST STRIP (Clean Gallery Cream, No Black)
  // ========================================================
  if (isOptionB) {
    return (
      <div className="bg-[#FAF9F6] text-stone-800 text-xs sm:text-sm py-2 px-3 sm:px-4 border-b border-[#E7E5E0] shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          {/* Left: Client Heritage Statements - ENLARGED per Nov 3, 2026 Feedback */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 font-serif">
            <span className="inline-flex items-center gap-1.5 font-bold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-md border border-amber-300 text-xs sm:text-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Family Owned
            </span>
            <span className="text-stone-300 hidden sm:inline">&bull;</span>
            <span className="font-semibold text-stone-800 text-xs sm:text-sm tracking-wide">
              Established January, 1997
            </span>
            <span className="text-stone-300 hidden sm:inline">&bull;</span>
            <span className="font-bold text-amber-800 text-xs sm:text-sm tracking-wide px-2 py-0.5 rounded border border-amber-200">
              Celebrating 30 Years
            </span>
          </div>

          {/* Right: Proposition & Contact */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-stone-600">
            <span className="italic hidden lg:inline font-serif text-stone-700 font-medium">
              "One source for all your conference needs"
            </span>
            <span className="text-stone-300 hidden sm:inline">|</span>
            <a
              href="tel:18002542663"
              className="font-bold text-amber-900 hover:text-amber-700 flex items-center gap-1 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-700" /> 1-800-CLI-CONF (Demo)
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // OPTION A: PROMOTIONAL UTILITY BAR (Clean, Streamlined Top Bar)
  // ========================================================
  return (
    <div className="bg-white text-xs sm:text-sm py-2 px-3 sm:px-4 border-b text-slate-800 border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left: Simplified Heritage Statement */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold tracking-wide uppercase text-xs bg-sky-50 text-sky-900 px-2.5 py-0.5 rounded-md border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
            Family Owned Since 1997
          </span>
          <span className="hidden sm:inline-block text-slate-300">&bull;</span>
          <span className="font-semibold text-xs text-slate-700 hidden md:inline">
            Over 30 Years of Conference & Printing Expertise
          </span>
        </div>

        {/* Right: Proposition & Toll-Free Phone Link */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs">
          <span className="hidden lg:inline text-slate-600 font-medium italic">
            One source for all your conference and printing needs
          </span>
          <span className="hidden lg:inline text-slate-300">|</span>
          <a
            href="tel:18002542663"
            className="font-bold text-sky-900 hover:text-[#E65100] flex items-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sky-700" />
            <span>1-800-CLI-CONF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
