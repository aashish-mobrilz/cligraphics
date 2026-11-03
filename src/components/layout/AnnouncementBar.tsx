import React from 'react';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { ShieldCheck, Calendar, PhoneCall, Sparkles } from 'lucide-react';

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
  // OPTION A: 4IMPRINT-STYLE PROMOTIONAL UTILITY BAR (Clean, Bright White/Sky)
  // ========================================================
  return (
    <div className="bg-white text-xs sm:text-sm py-2 px-3 sm:px-4 border-b text-slate-800 border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left: Client Provided Mandatory Statements - ENLARGED per Nov 3, 2026 Feedback */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold tracking-wide uppercase text-xs sm:text-sm bg-blue-50 text-sky-800 px-2.5 py-0.5 rounded-md border border-sky-200 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            Family Owned
          </span>
          <span className="hidden sm:inline-block text-slate-300">&bull;</span>
          <span className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-800">
            <Calendar className="w-4 h-4 text-sky-700" />
            Established January, 1997
          </span>
          <span className="hidden md:inline-block text-slate-300">&bull;</span>
          <span className="inline-block font-bold text-xs sm:text-sm text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
            Celebrating 30 Years
          </span>
        </div>

        {/* Center / Right: Conference Proposition & Assistance */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <span className="hidden lg:inline text-slate-600 font-semibold italic">
            "One source for all your conference needs"
          </span>
          <a
            href="tel:18002542663"
            className="font-bold text-sky-800 hover:text-orange-600 flex items-center gap-1 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-orange-600" /> 1-800-CLI-CONF (Demo)
          </a>
        </div>
      </div>
    </div>
  );
};
