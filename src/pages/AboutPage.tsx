import React from 'react';
import { useDesignTheme } from '../context/DesignThemeContext';
import { ShieldCheck, Calendar, AlertCircle, Award, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { isOptionB } = useDesignTheme();

  return (
    <div className={`min-h-screen py-12 ${isOptionB ? 'bg-[#FBFBFA]' : 'bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bright About Hero */}
        <div className="bg-gradient-to-br from-sky-50 via-white to-amber-50/50 border-2 border-slate-200 rounded-3xl p-8 sm:p-14 shadow-sm space-y-4">
          <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-slate-900 text-xs sm:text-sm font-bold shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-amber-800">Family Owned</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-800 font-extrabold">Established January, 1997</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-orange-600 font-extrabold">Celebrating 30 Years (1997-2027)</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-black tracking-tight text-slate-900 ${isOptionB ? 'font-serif' : 'font-heading'}`}>
            One Source for All Your Conference Needs
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            For three decades, CliGraphics has partnered with conference organizers, corporate event planners, associations, and summit hosts to deliver reliable promotional products, custom bags, printing, and direct logistics.
          </p>
        </div>

        {/* Client Provided Statements Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Family Owned</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Founded on personalized service, direct accountability, and lasting relationships with event organizers and trade associations.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Established January, 1997</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Three decades of proven industry longevity, surviving changing print technologies and evolving digital attendee requirements.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Celebrating 30 Years</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consolidate your merchandise, custom bags, program guide printing, and freight fulfillment under a single coordinated partner.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-6">
          <h2 className={`text-2xl font-bold text-slate-900 ${isOptionB ? 'font-serif' : 'font-heading'}`}>
            Conference-Specialized Execution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <p>
                Unlike generic novelty distributors, CliGraphics specializes in the stringent timelines of conference production. We know that late shipments to a closed trade show floor are worthless, which is why every event order is tracked against strict staging dates.
              </p>
              <p>
                From attendee badge lanyards and custom keynote notebooks to high-volume convention tote bags, our merchandise is vetted for durability, comfort, and photorealistic brand fidelity.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                Our commercial printing facility provides comprehensive collateral support: single-sheet promotional flyers, multi-fold registration mailers, daily agenda guides, and perfect-bound conference proceedings.
              </p>
              <p>
                With turnkey fulfillment and direct mail capabilities, our facility handles pre-conference direct mail blitzes, swag bag stuffing, and freight pallet delivery directly to convention center receiving docks.
              </p>
            </div>
          </div>
        </div>

        {/* Fact-checking & Client Dependencies Note (Hallucination Prevention) */}
        <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-slate-800 block">Content Verification Note (Per Specification Section 1.2)</strong>
            <p className="text-[11px] leading-relaxed">
              Client-provided statements: <em>"Family Owned"</em>, <em>"Celebrating 30 Years"</em>, <em>"Established January, 1997"</em>, and <em>"One source for all your conference needs"</em>. Additional company history, leadership team bios, facility square footage, and client testimonials are intentionally withheld pending formal client asset provision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
