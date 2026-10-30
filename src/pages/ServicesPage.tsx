import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { useDesignTheme } from '../context/DesignThemeContext';
import { Printer, Truck, CheckCircle2, ArrowRight, FileCheck } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { isOptionB } = useDesignTheme();

  return (
    <div className={`min-h-screen py-12 ${isOptionB ? 'bg-[#FBFBFA]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs text-slate-500">
            <Link to="/" className="hover:underline">Home</Link> / <strong className="text-slate-800">Conference Services</strong>
          </div>
          <h1 className={`text-3xl sm:text-5xl font-black text-slate-900 tracking-tight ${isOptionB ? 'font-serif' : 'font-heading'}`}>
            Comprehensive Conference Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In addition to custom promotional merchandise, CliGraphics delivers complete commercial printing, program book publishing, attendee swag kitting, and convention freight logistics.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
                  {service.category === 'printing' ? <Printer className="w-6 h-6" /> : <Truck className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-700 tracking-wider">
                    {service.category === 'printing' ? 'Press Production' : 'Logistics & Assembly'}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-0.5">{service.title}</h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.fullOverview}
                </p>
                <div className="pt-2 text-xs">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Turnaround Time</span>
                  <strong className="text-slate-800">{service.sampleLeadTimes}</strong>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-3">
                    Deliverables & Products
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    {service.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-3">
                    Equipment & Production
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    {service.equipmentAndCapabilities.map((eq, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FileCheck className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation CTA */}
        <div className="bg-[#0B3B60] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl font-bold">Have an Upcoming Event with Specific Collateral Requirements?</h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Our team coordinates custom program book specifications, binding formats, and delivery windows with your venue freight deadlines.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl text-xs font-bold hover:bg-sky-50 transition-colors shadow-sm"
            >
              <span>Contact Our Conference Specialists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
