import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { ArrowRight, Truck, AlertCircle } from 'lucide-react';

export const CartSummary: React.FC = () => {
  const { subtotal, estimatedShipping, estimatedTax, grandTotal, totalItemsCount } = useCart();
  const { isOptionB } = useDesignTheme();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
      <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
        Order Summary (Demo)
      </h3>

      <div className="space-y-3 text-xs">
        <div className="flex justify-between text-slate-600">
          <span>Items Subtotal ({totalItemsCount} units)</span>
          <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-slate-400" />
            Estimated Venue Shipping
          </span>
          <span className="font-semibold text-slate-900">
            {estimatedShipping === 0 ? (
              <span className="text-emerald-700 font-bold">Free (Order over $300)</span>
            ) : (
              `$${estimatedShipping.toFixed(2)}`
            )}
          </span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>Sample State Sales Tax</span>
          <span className="font-semibold text-slate-900">
            {estimatedTax === 0 ? '$0.00 (Exempt / Sample)' : `$${estimatedTax.toFixed(2)}`}
          </span>
        </div>

        <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
          <span className="text-sm font-bold text-slate-900">Estimated Total</span>
          <span className={`text-xl font-black ${isOptionB ? 'text-slate-900 font-serif' : 'text-[#0B3B60]'}`}>
            ${grandTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Checkout CTA */}
      <Link
        to="/checkout"
        className={`w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
          isOptionB
            ? 'bg-amber-600 hover:bg-amber-700 text-white'
            : 'bg-[#E65100] hover:bg-[#C64500] text-white'
        }`}
      >
        <span>Continue to Demo Checkout</span>
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Mandatory Demo Labeling (Section 2.3) */}
      <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-600 mt-0.5" />
        <div>
          <span className="font-bold block">Prototype Demonstration</span>
          Prices, taxes, and shipping are illustrative mock figures. No payment or production transaction will occur.
        </div>
      </div>
    </div>
  );
};
