import React, { useState } from 'react';
import { useDesignTheme } from '../context/DesignThemeContext';
import { HelpCircle, ChevronDown, ChevronUp, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    question: 'What commercial printing services does CLI Graphics offer?',
    answer: 'We provide comprehensive print solutions from single flyer sheets to high-speed web-offset and digital printing for saddle-stitched and perfect-bound conference program books, daily agendas, and multifold registration brochures.',
  },
  {
    category: 'Fulfillment & Logistics',
    question: 'Do you deliver directly to convention center loading docks?',
    answer: 'Yes. We specialize in convention freight logistics, including scheduled delivery appointments to convention center marshalling yards and loading docks. We also handle turnkey attendee swag kitting and pre-conference promotional direct mailings.',
  },
  {
    category: 'Company & Heritage',
    question: 'How long has CLI Graphics been in business?',
    answer: 'CLI Graphics is family-owned and was established in January, 1997. We bring over 30 years of dedicated service to conference organizers and trade associations across North America.',
  },
  {
    category: 'Prototype Information',
    question: 'Is this an actual eCommerce store where I can place live orders?',
    answer: 'This website is an interactive React + TypeScript demonstration prototype for CLI Graphics. All ordering, customization, and checkout flows run locally in your browser for demonstration and approval purposes. No live transactions or payments are processed.',
  },
];

export const FAQPage: React.FC = () => {
  const { isOptionB } = useDesignTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Orders & Production', 'Artwork & Imprinting', 'Printing & Direct Mail', 'Fulfillment & Logistics', 'Company & Heritage'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className={`min-h-screen py-12 ${isOptionB ? 'bg-[#FAF9F6] text-stone-900' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* FAQ Header Hero */}
        <div className={`rounded-3xl p-8 sm:p-14 shadow-lg text-white space-y-4 ${
          isOptionB ? 'bg-[#151D22]' : 'bg-[#0B3B60]'
        }`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-serif font-bold border border-white/20">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-bold tracking-tight ${isOptionB ? 'font-serif' : 'font-heading font-black'}`}>
            Conference Planning & Inquiries FAQ
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-serif italic">
            Answers to common questions regarding our custom bag program, lead times, commercial printing, convention center dock deliveries, and 30-year family-owned heritage.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? isOptionB
                    ? 'bg-[#1A2328] text-amber-300 shadow-sm font-serif font-bold'
                    : 'bg-[#0B3B60] text-white shadow-sm font-bold'
                  : isOptionB
                  ? 'bg-stone-100 text-stone-700 hover:bg-stone-200 font-serif'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOptionB
                    ? 'bg-white border-[#E7E5E0] shadow-xs'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <span className={`text-sm sm:text-base font-bold ${
                    isOptionB ? 'font-serif text-stone-900' : 'text-slate-900 font-heading'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full ${
                    isOptionB ? 'text-amber-700' : 'text-sky-700'
                  }`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                    isOptionB
                      ? 'border-stone-100 text-stone-600 font-serif'
                      : 'border-slate-100 text-slate-600'
                  }`}>
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className={`rounded-3xl p-8 text-center space-y-4 border ${
          isOptionB
            ? 'bg-[#F2F0EB]/70 border-[#E7E5E0]'
            : 'bg-sky-50/70 border-sky-100'
        }`}>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-amber-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Conference Specialists</span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-bold ${isOptionB ? 'font-serif text-stone-900' : 'text-slate-900 font-heading'}`}>
            Have a Specific Event Timeline or Spec Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Our family-owned team has 30 years of experience managing complex convention center deliveries, custom swag kitting, and high-volume program book print runs.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider text-white shadow-sm transition-all ${
                isOptionB ? 'bg-[#1A2328] hover:bg-stone-800' : 'bg-[#0B3B60] hover:bg-[#072842]'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Conference Concierge</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
