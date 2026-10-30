import React, { useState } from 'react';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Orders & Production',
    question: 'What is the typical production lead time for conference merchandise?',
    answer: 'Standard conference merchandise typically takes 5 to 10 business days from artwork approval, depending on the product category. Custom-manufactured totes and complex full-color imprints usually require 8 to 12 business days. Rush production options are available for urgent convention deadlines.',
  },
  {
    category: 'Orders & Production',
    question: 'What are the minimum order quantities (MOQ)?',
    answer: 'Minimum order quantities vary by item. Most conference tote bags start at 50 units, while pens and lanyards generally start at 100 units. Executive drinkware and journals are available in runs starting at 25 to 50 units.',
  },
  {
    category: 'Artwork & Imprinting',
    question: 'What artwork formats do you accept for custom printing?',
    answer: 'We accept vector formats (AI, EPS, SVG, and high-resolution PDF with outlined fonts) for optimal reproduction. High-resolution raster files (PNG, TIFF, JPG) at 300 DPI at actual print dimensions are also accepted. Free digital proofs are generated prior to production.',
  },
  {
    category: 'Artwork & Imprinting',
    question: 'Can we imprint artwork on both sides of conference bags?',
    answer: 'Yes! Our custom bag program features independent front and back imprint zones. You can feature the main conference title on the front and sponsor logos or session themes on the reverse panel.',
  },
  {
    category: 'Printing & Direct Mail',
    question: 'What commercial printing services does CliGraphics offer?',
    answer: 'We provide comprehensive print solutions from single flyer sheets to high-speed web-offset and digital printing for saddle-stitched and perfect-bound conference program books, daily agendas, and multifold registration brochures.',
  },
  {
    category: 'Fulfillment & Logistics',
    question: 'Do you deliver directly to convention center loading docks?',
    answer: 'Yes. We specialize in convention freight logistics, including scheduled delivery appointments to convention center marshalling yards and loading docks. We also handle turnkey attendee swag kitting and pre-conference promotional direct mailings.',
  },
  {
    category: 'Company & Heritage',
    question: 'How long has CliGraphics been in business?',
    answer: 'CliGraphics is family-owned and was established in January, 1997. We are proudly celebrating 30 years of dedicated service to conference organizers and trade associations across North America.',
  },
  {
    category: 'Prototype Information',
    question: 'Is this an actual eCommerce store where I can place live orders?',
    answer: 'This website is an interactive React + TypeScript demonstration prototype for CliGraphics.com. All ordering, customization, and checkout flows run locally in your browser for demonstration and approval purposes. No live transactions or payments are processed.',
  },
];

export const HomeFAQSection: React.FC = () => {
  const { isOptionB } = useDesignTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (isOptionB) {
    return (
      <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-300 text-xs font-serif font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Editorial Advisory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-serif italic leading-relaxed">
            Essential guidelines for event coordinators planning convention merchandise, publication printing, and dockside freight delivery.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7E5E0] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-serif">
                      {item.category}
                    </span>
                    <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                      {item.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-stone-600 font-serif leading-relaxed border-t border-stone-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // Option A: Commercial Promotional Layout
  return (
    <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-800 flex items-center justify-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-sky-700" />
          Conference Planning FAQ
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
          Answers to Common Convention Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Lead times, custom imprint specifications, program book press runs, and venue logistics.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {item.category}
                  </span>
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {item.question}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-sky-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
