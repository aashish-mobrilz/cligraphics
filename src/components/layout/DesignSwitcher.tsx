import React from 'react';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { Layers, LayoutGrid, Sparkles } from 'lucide-react';

export const DesignSwitcher: React.FC = () => {
  const { setDirection, isOptionA, isOptionB } = useDesignTheme();

  return (
    <aside
      aria-label="Design direction approval bar"
      className="bg-slate-900 text-white border-b border-slate-700 py-1.5 px-3 text-xs sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-3 text-center sm:text-left">
        {/* Left: Direction indicator & label */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-1.5 font-bold tracking-wide text-amber-400 uppercase text-[11px]">
            <Layers className="w-3.5 h-3.5" />
            <span>Design Direction:</span>
          </div>
          <span className="hidden md:inline text-slate-300 text-[11px]">
            {isOptionA
              ? 'Option A: Promotional Merchandise Storefront (4imprint UX Benchmark)'
              : 'Option B: Corporate & Editorial Conference-Supply Experience'}
          </span>
        </div>

        {/* Center / Right: Interactive Mode Buttons */}
        <div className="flex items-center justify-center gap-2">
          <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
            <button
              onClick={() => setDirection('option-a')}
              className={`px-2.5 sm:px-3 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                isOptionA
                  ? 'bg-sky-600 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Option A (Promotional)</span>
            </button>

            <button
              onClick={() => setDirection('option-b')}
              className={`px-2.5 sm:px-3 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                isOptionB
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Option B (Editorial)</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
