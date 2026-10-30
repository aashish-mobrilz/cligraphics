import React, { useState } from 'react';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { Phone, Mail, CheckCircle2, Building } from 'lucide-react';

export const HomeContactSection: React.FC = () => {
  const { isOptionB } = useDesignTheme();
  const [submitted, setSubmitted] = useState(false);

  if (isOptionB) {
    return (
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#151D22] text-white rounded-3xl p-8 sm:p-14 shadow-xl border border-stone-800">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-serif">
              Event Concierge Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Initiate Your Conference Project
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-serif italic leading-relaxed">
              Family-owned since 1997. Reach our coordination team for custom bag material samples, press specifications, or multi-venue distribution plans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Points */}
            <div className="lg:col-span-5 space-y-4 text-xs font-serif">
              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Phone className="w-4 h-4" />
                  <span>Direct Event Desk</span>
                </div>
                <p className="text-white font-mono text-sm">1-800-CLI-CONF</p>
                <p className="text-stone-400 text-[11px]">Mon &ndash; Fri &bull; 8:00 AM &ndash; 6:00 PM EST</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Mail className="w-4 h-4" />
                  <span>Concierge Email</span>
                </div>
                <p className="text-white font-mono text-sm">concierge@cligraphics.demo</p>
                <p className="text-stone-400 text-[11px]">Guaranteed response within one business day</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Building className="w-4 h-4" />
                  <span>Press & Logistics Plant</span>
                </div>
                <p className="text-white text-xs">Production Facility Placeholder</p>
                <p className="text-stone-400 text-[11px]">Client verified address pending final onboarding</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-stone-900 rounded-2xl border border-stone-800 p-6 sm:p-8">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
                  <h3 className="font-serif text-lg font-bold text-white">Inquiry Received</h3>
                  <p className="text-xs text-stone-300 font-serif leading-relaxed max-w-sm mx-auto">
                    Thank you for submitting your event inquiry. This demonstration simulates direct communication with our dedicated event coordinators.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-amber-400 underline font-serif"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4 text-xs font-serif"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-300 font-medium mb-1">Coordinator Name</label>
                      <input
                        type="text"
                        required
                        defaultValue="Elena Rostova"
                        className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-white outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 font-medium mb-1">Organization / Event</label>
                      <input
                        type="text"
                        required
                        defaultValue="National Healthcare Summit 2027"
                        className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-white outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-300 font-medium mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        defaultValue="elena@healthcaresummit2027.demo"
                        className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-white outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 font-medium mb-1">Target Event Date</label>
                      <input
                        type="text"
                        defaultValue="October 15, 2027"
                        className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-white outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Inquiry Details</label>
                    <textarea
                      rows={3}
                      defaultValue="Requesting material swatches and preliminary estimates for 2,500 heavyweight cotton conference totes with front and back imprints, plus matching lanyards."
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-white outline-none focus:border-amber-500 text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold tracking-wider uppercase text-xs transition-colors shadow-md"
                  >
                    Submit Conference Inquiry (Demo)
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Option A: Commercial Promotional Layout
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
            Let's Plan Your Next Event
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Contact CliGraphics Conference Specialists
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            One source for all your conference needs. Connect with our dedicated family-owned team for sample kits, rush order feasibility, and custom print estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-sky-800 font-bold">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Conference Hotline</span>
              </div>
              <p className="text-slate-900 font-bold text-sm">1-800-CLI-CONF</p>
              <p className="text-slate-500 text-[11px]">Toll-Free &bull; Monday &ndash; Friday 8am &ndash; 6pm EST</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-sky-800 font-bold">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>Orders & Estimating</span>
              </div>
              <p className="text-slate-900 font-bold text-sm">orders@cligraphics.demo</p>
              <p className="text-slate-500 text-[11px]">Quick response within 1 business day</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-sky-800 font-bold">
                <Building className="w-4 h-4 text-sky-600" />
                <span>Facility Headquarters</span>
              </div>
              <p className="text-slate-900 font-bold text-xs">Client Facility Placeholder</p>
              <p className="text-slate-500 text-[11px]">Official address details pending client confirmation</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg text-slate-900">Message Dispatched!</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you for testing the contact inquiry. In the live implementation, your project specifications route directly to an account representative.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-sky-700 underline font-semibold"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      defaultValue="Marcus Vance"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Organization / Event</label>
                    <input
                      type="text"
                      required
                      defaultValue="Global FinTech Convention 2027"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      defaultValue="mvance@fintech2027.demo"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Estimated Quantity</label>
                    <input
                      type="text"
                      defaultValue="1,200 Attendees"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Project Details</label>
                  <textarea
                    rows={3}
                    defaultValue="Inquiring about custom tote bags, registration badges with double-ended clips, and 64-page full-color event programs with direct delivery to the convention center."
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0B3B60] hover:bg-[#072842] text-white font-bold tracking-wider uppercase text-xs transition-colors shadow-md"
                >
                  Send Conference Request (Demo)
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
