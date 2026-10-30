import React from 'react';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { ShieldCheck, Calendar, PhoneCall, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { isOptionB } = useDesignTheme();

  // ========================================================
  // OPTION B: EDITORIAL MINIMALIST STRIP
  // Quiet, elegant gallery cream styling, centered typography
  // ========================================================
  if (isOptionB) {
    return (
      <div className="bg-[#151D22] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
          {/* Left / Center: Client Heritage Statements */}
          <div className="flex items-center gap-3 font-serif tracking-wider text-amber-200/90">
            <span className="flex items-center gap-1 font-bold text-amber-400">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Family Owned
            </span>
            <span className="text-stone-600">&bull;</span>
            <span>Established January, 1997</span>
            <span className="text-stone-600">&bull;</span>
            <span className="text-stone-100 font-semibold">Celebrating 30 Years</span>
          </div>

          {/* Right: Proposition */}
          <div className="flex items-center gap-4 text-stone-400">
            <span className="italic hidden md:inline font-serif text-amber-100/70">
              "One source for all your conference needs"
            </span>
            <span className="text-stone-500 hidden sm:inline">|</span>
            <span className="text-amber-300/80 font-medium">Concierge: 1-800-CLI-CONF (Demo)</span>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE PROMOTIONAL UTILITY BAR
  // High-contrast corporate navy with bold badges
  // ========================================================
  return (
    <div className="text-xs py-2 px-4 border-b bg-[#0B3B60] text-sky-100 border-sky-900">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Client Provided Mandatory Statements */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 font-bold tracking-wide uppercase text-[11px] bg-white/10 px-2 py-0.5 rounded">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            Family Owned
          </span>
          <span className="hidden sm:inline-block text-white/40">&bull;</span>
          <span className="hidden sm:flex items-center gap-1 font-medium text-[11px]">
            <Calendar className="w-3 h-3 text-sky-300" />
            Established January, 1997
          </span>
          <span className="hidden md:inline-block text-white/40">&bull;</span>
          <span className="hidden md:inline-block font-semibold text-amber-300 text-[11px]">
            Celebrating 30 Years
          </span>
        </div>

        {/* Center / Right: Conference Proposition & Assistance */}
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden lg:inline text-white/90 italic">
            "One source for all your conference needs"
          </span>
          <div className="flex items-center gap-2">
            <span className="text-white/70">Sample Assistance:</span>
            <span className="font-semibold text-white flex items-center gap-1 hover:text-amber-200 cursor-pointer">
              <PhoneCall className="w-3 h-3" /> 1-800-CLI-CONF (Demo)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
