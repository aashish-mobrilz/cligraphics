import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useDesignTheme } from '../context/DesignThemeContext';
import {
  AlertTriangle,
  Lock,
  ArrowRight,
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, subtotal, estimatedShipping, grandTotal, submitDemoOrder } = useCart();
  const { isOptionB } = useDesignTheme();

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Morgan Blake',
    email: 'mblake@leadersummit2027.demo',
    company: 'International Leadership Summit',
    phone: '(555) 492-8173',
    address1: 'Orange County Convention Center',
    address2: 'West Concourse, Receiving Dock 3',
    city: 'Orlando',
    state: 'FL',
    zip: '32819',
    country: 'United States',
    shippingMethod: 'Guaranteed Convention Center Direct Freight (Sample)',
    eventName: 'Annual Global Keynote 2027',
    eventDate: 'June 18-21, 2027',
    inHandsDate: 'June 15, 2027',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    submitDemoOrder(
      {
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
      },
      {
        address1: formData.address1,
        address2: formData.address2,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        country: formData.country,
        shippingMethod: formData.shippingMethod,
      },
      {
        eventName: formData.eventName,
        eventDate: formData.eventDate,
        inHandsDate: formData.inHandsDate,
      }
    );

    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-xl font-bold text-slate-800">Your Cart is Empty</h2>
        <p className="text-xs text-slate-500 mt-2">Add merchandise to your cart before proceeding to demo checkout.</p>
        <Link to="/products" className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg text-xs font-semibold">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-10 ${isOptionB ? 'bg-[#FBFBFA]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Checkout Header */}
        <div>
          <div className="text-xs text-slate-500 mb-1">
            <Link to="/cart" className="hover:underline">Cart</Link> / <strong className="text-slate-800">Demo Checkout</strong>
          </div>
          <h1 className={`text-2xl sm:text-3xl font-extrabold text-slate-900 ${isOptionB ? 'font-serif' : 'font-heading'}`}>
            Conference Order Checkout (Demonstration)
          </h1>
        </div>

        {/* Mandatory Prominent Demo Alert Banner (Section 2.3) */}
        <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sm block">Demonstration Prototype Only</span>
            <p>
              No real order will be processed and no payment gateway is connected. Submitting this form will generate a sample demonstration order confirmation. Do not enter confidential financial information.
            </p>
          </div>
        </div>

        {/* Checkout Two-Column Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Fields (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Contact Information */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center">1</span>
                <span>Contact & Conference Coordinator</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Organization / Event Host</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Event Venue Shipping & Freight Staging */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center">2</span>
                <span>Event Delivery Destination / Venue Dock</span>
              </h2>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Venue or Facility Name / Address Line 1</label>
                  <input
                    type="text"
                    name="address1"
                    required
                    value={formData.address1}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Dock, Hall, Booth, or Staging Room (Address 2)</label>
                  <input
                    type="text"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">State</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">ZIP / Postal</label>
                    <input
                      type="text"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Conference Dates</label>
                    <input
                      type="text"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Required In-Hands Date</label>
                    <input
                      type="text"
                      name="inHandsDate"
                      value={formData.inHandsDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Simulated Payment Section */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center">3</span>
                <span>Simulated Demo Payment</span>
              </h2>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-3">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>Simulated Payment Mode Active</span>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Per the implementation brief, no real payment gateway is integrated. Demonstrating corporate invoice PO option.
                </p>

                <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                    <input type="radio" checked readOnly className="text-sky-600" />
                    <span>Demo Purchase Order / Net-30 Corporate Terms (Simulated)</span>
                  </label>
                  <div className="text-[11px] text-slate-500 pl-6">
                    Simulates order placement under conference master billing account.
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className={`w-full py-4 px-6 rounded-xl text-center text-sm font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isOptionB
                    ? 'bg-amber-600 hover:bg-amber-700'
                    : 'bg-[#E65100] hover:bg-[#C64500]'
                }`}
              >
                <span>Submit Demo Order (${grandTotal.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Order Summary & Item Recap (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Order Review ({items.length} items)
              </h3>

              <div className="divide-y divide-slate-100 max-h-96 overflow-y-auto pr-1 space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3 text-xs">
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 truncate">{item.productName}</p>
                      <p className="text-[11px] text-slate-500">
                        Qty: <strong>{item.quantity}</strong> {item.selectedColor ? `&bull; ${item.selectedColor}` : ''}
                      </p>
                      {item.isCustomized && (
                        <span className="text-[10px] font-bold text-amber-700">Custom Bag Imprint</span>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <strong className="text-slate-900 font-bold">${(item.unitPrice * item.quantity).toFixed(2)}</strong>
                      <div className="text-[10px] text-slate-400">(${item.unitPrice.toFixed(2)} ea)</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Venue Dock Shipping</span>
                  <span className="font-bold text-slate-900">
                    {estimatedShipping === 0 ? 'Free' : `$${estimatedShipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Sample Sales Tax</span>
                  <span className="font-bold text-slate-900">$0.00</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-sm">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className={`text-xl font-black ${isOptionB ? 'text-slate-900 font-serif' : 'text-[#0B3B60]'}`}>
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
