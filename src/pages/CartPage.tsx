import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useDesignTheme } from '../context/DesignThemeContext';
import { CartLineItem } from '../components/cart/CartLineItem';
import { CartSummary } from '../components/cart/CartSummary';
import { ShoppingBag, ArrowLeft, Trash2, PlusCircle } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalItemsCount } = useCart();
  const { isOptionB } = useDesignTheme();

  return (
    <div className={`min-h-screen py-10 ${isOptionB ? 'bg-[#FBFBFA]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Cart Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-500 mb-1">
              <Link to="/" className="hover:underline">Home</Link> / <strong className="text-slate-800">Demo Cart</strong>
            </div>
            <h1 className={`text-2xl sm:text-3xl font-extrabold text-slate-900 ${isOptionB ? 'font-serif' : 'font-heading'}`}>
              Your Conference Order ({totalItemsCount} items)
            </h1>
          </div>

          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-slate-500 hover:text-red-600 font-medium flex items-center gap-1 self-start sm:self-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Demo Cart</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Your Demo Cart is Empty</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
              Explore our conference catalog or design a custom attendee tote bag to preview the demo shopping experience.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/customize/canvas-tote-pro"
                className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Launch Bag Designer
              </Link>
              <Link
                to="/products"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        ) : (
          /* Cart Content Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Line Items List (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => (
                <CartLineItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={(newQty) => updateQuantity(item.id, newQty)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}

              <div className="flex items-center justify-between pt-4">
                <Link
                  to="/products"
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Exploring Products</span>
                </Link>

                <Link
                  to="/customize/canvas-tote-pro"
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1.5"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Design Another Custom Bag</span>
                </Link>
              </div>
            </div>

            {/* Right: Cart Summary Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

