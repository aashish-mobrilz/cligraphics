import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDesignTheme } from '../context/DesignThemeContext';
import { DESIGN_DIRECTIONS } from '../types/theme';
import {
  Layers,
  CheckCircle2,
  Check,
  ExternalLink,
} from 'lucide-react';

export const DesignComparisonPage: React.FC = () => {
  const { direction, setDirection } = useDesignTheme();
  const [activePreviewTab, setActivePreviewTab] = useState<'home' | 'category' | 'detail' | 'customizer'>('home');

  const optionA = DESIGN_DIRECTIONS['option-a'];
  const optionB = DESIGN_DIRECTIONS['option-b'];

  return (
    <div className="min-h-screen py-12 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
            <Layers className="w-4 h-4" />
            <span>Client Design Approval Milestone</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            Visual Design Direction Comparison
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Per the CliGraphics specification (Section 4), we have created two genuinely distinct visual directions sharing identical mock content, nine categories, and browser-side customizer functionality.
          </p>
        </div>

        {/* Top 2 Option Cards with 1-Click Direction Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* OPTION A CARD */}
          <div
            className={`rounded-3xl p-8 border-2 transition-all flex flex-col justify-between ${
              direction === 'option-a'
                ? 'bg-slate-800/90 border-sky-400 shadow-2xl ring-4 ring-sky-500/20'
                : 'bg-slate-800/40 border-slate-700 hover:border-slate-500'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  Option A
                </span>
                {direction === 'option-a' && (
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Currently Active
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white font-heading">
                {optionA.name}
              </h2>

              <p className="text-xs text-sky-200 font-medium">
                {optionA.tagline}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed">
                {optionA.description}
              </p>

              {/* Color Swatch Preview */}
              <div className="pt-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                  Color Philosophy
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 text-[11px]">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#0B3B60] border border-white/20"></span>
                    <span className="text-slate-300">Commercial Navy</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 text-[11px]">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#E65100]"></span>
                    <span className="text-slate-300">Action Amber</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 text-[11px]">
                    <span className="w-3.5 h-3.5 rounded-full bg-white"></span>
                    <span className="text-slate-300">Crisp White</span>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="pt-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">
                  Key Design Traits
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {optionA.keyDifferentiators.map((diff, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-700/60">
              <button
                onClick={() => setDirection('option-a')}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                  direction === 'option-a'
                    ? 'bg-sky-600 text-white cursor-default'
                    : 'bg-slate-700 hover:bg-sky-600 text-white'
                }`}
              >
                {direction === 'option-a' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Option A Selected & Active</span>
                  </>
                ) : (
                  <span>Select Option A for Entire Site</span>
                )}
              </button>
            </div>
          </div>

          {/* OPTION B CARD */}
          <div
            className={`rounded-3xl p-8 border-2 transition-all flex flex-col justify-between ${
              direction === 'option-b'
                ? 'bg-[#1A2328] border-amber-500 shadow-2xl ring-4 ring-amber-500/20'
                : 'bg-slate-800/40 border-slate-700 hover:border-slate-500'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Option B
                </span>
                {direction === 'option-b' && (
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Currently Active
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white font-serif">
                {optionB.name}
              </h2>

              <p className="text-xs text-amber-200 font-medium">
                {optionB.tagline}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed">
                {optionB.description}
              </p>

              {/* Color Swatch Preview */}
              <div className="pt-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                  Color Philosophy
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 text-[11px]">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#1A2328] border border-white/20"></span>
                    <span className="text-slate-300">Obsidian Slate</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 text-[11px]">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#B8860B]"></span>
                    <span className="text-slate-300">Antique Bronze</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 text-[11px]">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FBFBFA]"></span>
                    <span className="text-slate-300">Gallery Cream</span>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="pt-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">
                  Key Design Traits
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {optionB.keyDifferentiators.map((diff, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-700/60">
              <button
                onClick={() => setDirection('option-b')}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                  direction === 'option-b'
                    ? 'bg-amber-600 text-white cursor-default'
                    : 'bg-slate-700 hover:bg-amber-600 text-white'
                }`}
              >
                {direction === 'option-b' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Option B Selected & Active</span>
                  </>
                ) : (
                  <span>Select Option B for Entire Site</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* COMPARABLE PREVIEWS (Section 4.3 Requirements) */}
        {/* ======================================================== */}
        <div className="bg-slate-800/60 rounded-3xl border border-slate-700 p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Comparable Previews (Section 4.3)
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Side-by-Side Screen Layout Comparisons
              </h3>
            </div>

            {/* Preview Screen Selector Tabs */}
            <div className="flex gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700 text-xs">
              {[
                { id: 'home', label: '1. Homepage' },
                { id: 'category', label: '2. Listing' },
                { id: 'detail', label: '3. Detail' },
                { id: 'customizer', label: '4. Customizer' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePreviewTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    activePreviewTab === tab.id
                      ? 'bg-amber-500 text-slate-900 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB CONTENT BREAKDOWNS */}
          {activePreviewTab === 'home' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
              <div className="bg-slate-900 rounded-2xl p-6 border border-sky-500/30 space-y-3">
                <span className="text-[11px] font-bold text-sky-400 uppercase">Option A Homepage Treatment</span>
                <h4 className="text-base font-bold text-white">Product-Led Promotional Storefront</h4>
                <p className="text-slate-300">
                  Inspired by 4imprint's high-conversion UX: Features a full promotional header, immediate product search, an 8-icon category discovery grid, volume bestseller product cards, and a direct 5-step customizer feature block.
                </p>
                <div className="pt-2">
                  <Link
                    to="/"
                    onClick={() => setDirection('option-a')}
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold"
                  >
                    <span>View Live in Option A</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-amber-500/30 space-y-3">
                <span className="text-[11px] font-bold text-amber-400 uppercase">Option B Homepage Treatment</span>
                <h4 className="text-base font-bold text-white font-serif">Corporate & Editorial Conference Showcase</h4>
                <p className="text-slate-300">
                  Emphasizes conference solutions and executive keynote authority: Features full-bleed architectural framing, warm gallery cream surfaces, editorial serif headlines, and curated event package recommendations.
                </p>
                <div className="pt-2">
                  <Link
                    to="/"
                    onClick={() => setDirection('option-b')}
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                  >
                    <span>View Live in Option B</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activePreviewTab === 'category' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
              <div className="bg-slate-900 rounded-2xl p-6 border border-sky-500/30 space-y-3">
                <span className="text-[11px] font-bold text-sky-400 uppercase">Option A Category Treatment</span>
                <h4 className="text-base font-bold text-white">Commercial Category & Filter Grid</h4>
                <p className="text-slate-300">
                  Dense, high-utility browsing with visible quantity tier pricing ("As low as $X.XX"), minimum quantity requirements, instant color swatch pills, and left-side faceted filtering.
                </p>
                <div className="pt-2">
                  <Link
                    to="/category/bags"
                    onClick={() => setDirection('option-a')}
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold"
                  >
                    <span>View Bags Category in Option A</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-amber-500/30 space-y-3">
                <span className="text-[11px] font-bold text-amber-400 uppercase">Option B Category Treatment</span>
                <h4 className="text-base font-bold text-white font-serif">Curated Event Collection Showcase</h4>
                <p className="text-slate-300">
                  Spacious product cards with generous padding, subtle borders, high-contrast monochrome badges, and contextual event recommendations ("Keynote Essential").
                </p>
                <div className="pt-2">
                  <Link
                    to="/category/bags"
                    onClick={() => setDirection('option-b')}
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                  >
                    <span>View Bags Category in Option B</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activePreviewTab === 'detail' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
              <div className="bg-slate-900 rounded-2xl p-6 border border-sky-500/30 space-y-3">
                <span className="text-[11px] font-bold text-sky-400 uppercase">Option A Detail Treatment</span>
                <h4 className="text-base font-bold text-white">Fast Commercial Order Matrix</h4>
                <p className="text-slate-300">
                  Clear volume pricing tier cards, highlighted minimum orders, immediate "Customize Online" CTA, and quick sample request trust guarantees.
                </p>
                <div className="pt-2">
                  <Link
                    to="/product/executive-conference-canvas-tote"
                    onClick={() => setDirection('option-a')}
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold"
                  >
                    <span>View Product Detail in Option A</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-amber-500/30 space-y-3">
                <span className="text-[11px] font-bold text-amber-400 uppercase">Option B Detail Treatment</span>
                <h4 className="text-base font-bold text-white font-serif">Executive Presentation & Spec Sheet</h4>
                <p className="text-slate-300">
                  Refined gallery presentation, premium materials breakdown, corporate lead time verification, and seamless entry into the customizer.
                </p>
                <div className="pt-2">
                  <Link
                    to="/product/executive-conference-canvas-tote"
                    onClick={() => setDirection('option-b')}
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                  >
                    <span>View Product Detail in Option B</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activePreviewTab === 'customizer' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
              <div className="bg-slate-900 rounded-2xl p-6 border border-sky-500/30 space-y-3">
                <span className="text-[11px] font-bold text-sky-400 uppercase">Option A Customizer Experience</span>
                <h4 className="text-base font-bold text-white">Utility-First 3-Step Workstation</h4>
                <p className="text-slate-300">
                  High-contrast canvas workspace with dashed boundary zone, step-by-step guidance tabs, fine directional adjustment pad, and instant demo cart addition.
                </p>
                <div className="pt-2">
                  <Link
                    to="/customize/canvas-tote-pro"
                    onClick={() => setDirection('option-a')}
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold"
                  >
                    <span>Open Customizer in Option A</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-amber-500/30 space-y-3">
                <span className="text-[11px] font-bold text-amber-400 uppercase">Option B Customizer Experience</span>
                <h4 className="text-base font-bold text-white font-serif">Studio Atelier Presentation</h4>
                <p className="text-slate-300">
                  Immersive dark studio canvas with subtle lighting highlights, elegant typography controls, and refined design confirmation workflow.
                </p>
                <div className="pt-2">
                  <Link
                    to="/customize/canvas-tote-pro"
                    onClick={() => setDirection('option-b')}
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                  >
                    <span>Open Customizer in Option B</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
