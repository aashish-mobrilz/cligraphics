import React, { useState } from 'react';
import { useDesignTheme } from '../context/DesignThemeContext';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { isOptionB } = useDesignTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={`min-h-screen py-12 ${isOptionB ? 'bg-[#FBFBFA]' : 'bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold text-sky-700 tracking-wider">
            We Are Here to Assist Your Event Team
          </span>
          <h1 className={`text-3xl sm:text-5xl font-black text-slate-900 tracking-tight ${isOptionB ? 'font-serif' : 'font-heading'}`}>
            Contact CLI Graphics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            One source for all your conference and printing needs. Reach out for merchandise samples, bag customizer assistance, or custom commercial printing quotes.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="tel:18002542663"
            className="bg-white hover:bg-sky-50/50 rounded-2xl border border-slate-200 hover:border-sky-300 transition-colors p-6 shadow-xs space-y-2 block"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Phone Support</h3>
            <p className="text-xs text-sky-800 font-bold">1-800-CLI-CONF</p>
            <p className="text-[11px] text-slate-400">Monday - Friday: 8am - 6pm EST</p>
          </a>

          <a
            href="mailto:orders@cligraphics.demo"
            className="bg-white hover:bg-sky-50/50 rounded-2xl border border-slate-200 hover:border-sky-300 transition-colors p-6 shadow-xs space-y-2 block"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Email Inquiries</h3>
            <p className="text-xs text-sky-800 font-bold">orders@cligraphics.demo</p>
            <p className="text-[11px] text-slate-400">Response within 1 business day</p>
          </a>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Headquarters / Plant</h3>
            <p className="text-xs text-slate-600 font-medium">Facility Address Placeholder</p>
            <p className="text-[11px] text-slate-400">Client verified address pending</p>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs max-w-3xl mx-auto">
          <h2 className={`text-xl font-bold text-slate-900 mb-6 text-center ${isOptionB ? 'font-serif' : 'font-heading'}`}>
            Send a Conference Inquiry
          </h2>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center text-emerald-800 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold">Demo Message Received!</h3>
              <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                Thank you for testing the contact form. In the live website, this connects directly to CLI Graphics' event coordination team.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-bold text-emerald-800 underline"
              >
                Send another message
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
                  <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sam Taylor"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. staylor@conference2027.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Conference / Event Name</label>
                  <input
                    type="text"
                    placeholder="e.g. International BioScience Summit"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Estimated Event Date</label>
                  <input
                    type="text"
                    placeholder="e.g. October 2027"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Inquiry Topic</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900">
                  <option>Custom Bag Designer & Production Question</option>
                  <option>Commercial Program Book Printing Quote</option>
                  <option>Swag Bag Kitting & Direct Venue Delivery</option>
                  <option>Product Swatches & Spec Sheets</option>
                  <option>General Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello, we are planning our upcoming symposium with 800 attendees and would like to review custom product styles and program book timelines."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#E65100] hover:bg-[#C64500] text-white font-bold rounded-xl text-xs shadow-md transition-colors cursor-pointer"
                >
                  Submit Conference Inquiry
                </button>
                <span className="block text-[11px] text-slate-400 mt-2">
                  Demo prototype mode: No emails are transmitted.
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Client Dependencies Disclaimer */}
        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Client Dependency Record</strong>
            <p className="text-[11px] leading-relaxed">
              Official company phone numbers, physical facility locations, support hours, and leadership emails will replace these placeholders upon client asset provision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
