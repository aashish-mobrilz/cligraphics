import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useDesignTheme } from '../context/DesignThemeContext';
import {
  CheckCircle2,
  Building,
  Truck,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';

export const OrderConfirmationPage: React.FC = () => {
  const { lastOrder } = useCart();
  const { isOptionB } = useDesignTheme();

  return (
    <div className={`min-h-screen py-12 ${isOptionB ? 'bg-[#FBFBFA]' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Success Announcement Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Demo Order Complete
            </span>
            <h1 className={`text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 ${isOptionB ? 'font-serif' : 'font-heading'}`}>
              Sample Order Confirmation
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Thank you for testing the CLI Graphics prototype customer shopping journey.
            </p>
          </div>

          {/* Prominent Demo Disclaimer Banner (Section 2.3 & 9.3) */}
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-left max-w-xl mx-auto text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
            <div>
              <strong className="block font-bold">Sample Order Confirmation — No Real Order Has Been Placed</strong>
              <p className="mt-0.5 text-[11px] leading-relaxed">
                This screen represents the customer confirmation state. No real payment was collected, no production tickets were created, and no inventory was reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Order Details & Summary Cards */}
        {lastOrder && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
            {/* Header Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Demo Order #</span>
                <strong className="text-slate-900 text-sm font-mono font-bold">{lastOrder.orderNumber}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Date Generated</span>
                <strong className="text-slate-900 text-xs">{lastOrder.orderDate}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Conference Event</span>
                <strong className="text-slate-900 text-xs">{lastOrder.eventDetails?.eventName || 'Annual Summit 2027'}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">In-Hands Target</span>
                <strong className="text-slate-900 text-xs">{lastOrder.eventDetails?.inHandsDate || 'Pre-Event Staging'}</strong>
              </div>
            </div>

            {/* Two-Column Shipping and Customer Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-slate-700">
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-2 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-sky-600" />
                  <span>Event Coordinator</span>
                </h3>
                <p><strong>{lastOrder.customer.fullName}</strong></p>
                <p>{lastOrder.customer.company}</p>
                <p>{lastOrder.customer.email}</p>
                <p>{lastOrder.customer.phone}</p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-2 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Venue Dock Destination</span>
                </h3>
                <p>{lastOrder.shipping.address1}</p>
                {lastOrder.shipping.address2 && <p>{lastOrder.shipping.address2}</p>}
                <p>{lastOrder.shipping.city}, {lastOrder.shipping.state} {lastOrder.shipping.zip}</p>
                <p className="text-[11px] text-slate-500 font-medium pt-1">
                  Method: {lastOrder.shipping.shippingMethod}
                </p>
              </div>
            </div>

            {/* Line Items List */}
            <div>
              <h3 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-3">
                Configured Line Items
              </h3>

              <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-xs">
                {lastOrder.items.length === 0 ? (
                  <div className="p-4 text-center text-slate-400">Sample Line Items</div>
                ) : (
                  lastOrder.items.map((item, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <strong className="text-slate-900 font-bold">{item.productName}</strong>
                          {item.isCustomized && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                              Custom Artwork Applied
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          Qty: <strong>{item.quantity}</strong> {item.selectedColor ? `&bull; Color: ${item.selectedColor}` : ''}
                        </div>
                      </div>

                      <div className="text-right">
                        <strong className="text-sm font-bold text-slate-900">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </strong>
                        <div className="text-[10px] text-slate-400">(${item.unitPrice.toFixed(2)} ea)</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Order Financials Recap */}
            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <div className="w-full sm:w-72 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${lastOrder.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-slate-900">${lastOrder.estimatedShipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Sales Tax</span>
                  <span className="font-semibold text-slate-900">$0.00</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-sm">
                  <span className="font-bold text-slate-900">Total Demonstration Value</span>
                  <span className="text-xl font-black text-[#0B3B60]">
                    ${lastOrder.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Return / Navigation CTAs */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4">
              <Link
                to="/products"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Explore More Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
