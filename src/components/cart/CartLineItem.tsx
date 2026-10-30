import React from 'react';
import { CartItem } from '../../types/cart';
import { ProductImageMockup } from '../common/ProductImageMockup';
import { BagMockupSvg } from '../common/BagMockupSvg';
import { Trash2, Palette, ShieldCheck } from 'lucide-react';

interface CartLineItemProps {
  item: CartItem;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export const CartLineItem: React.FC<CartLineItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  const lineTotal = item.unitPrice * item.quantity;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
      {/* Product Image / Customizer Preview Snapshot */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center relative">
          {item.isCustomized && item.designerSnapshot ? (
            <div className="relative w-full h-full p-1">
              <BagMockupSvg
                modelType={`tote-${item.designerSnapshot.state.activeView}`}
                bagColor={item.designerSnapshot.state.selectedColor.hex}
                className="w-full h-full"
              />
              {/* Overlay active artwork thumbnail */}
              {item.designerSnapshot.state.views.front.artwork && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: `${item.designerSnapshot.state.views.front.artwork.x}%`,
                    top: `${item.designerSnapshot.state.views.front.artwork.y}%`,
                    transform: `translate(-50%, -50%) rotate(${item.designerSnapshot.state.views.front.artwork.rotation}deg) scale(${item.designerSnapshot.state.views.front.artwork.scale * 0.4})`,
                  }}
                >
                  <img
                    src={item.designerSnapshot.state.views.front.artwork.content}
                    alt="Custom artwork thumbnail"
                    className="max-w-[36px] max-h-[36px] object-contain"
                  />
                </div>
              )}
            </div>
          ) : (
            <ProductImageMockup
              imageKey="bag-tote-front"
              productSlug={item.productSlug}
              selectedColorHex="#0B3B60"
            />
          )}

          {item.isCustomized && (
            <span className="absolute bottom-1 right-1 bg-amber-500 text-white rounded-full p-0.5" title="Customized Design">
              <Palette className="w-2.5 h-2.5" />
            </span>
          )}
        </div>

        {/* Details */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              {item.categoryName}
            </span>
            {item.isCustomized && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                Custom Bag Design
              </span>
            )}
          </div>

          <h3 className="font-bold text-sm text-slate-900 truncate mt-0.5">
            {item.productName}
          </h3>

          <div className="text-xs text-slate-500 flex flex-wrap gap-x-3 gap-y-1 mt-1">
            {item.selectedColor && (
              <span>Color: <strong className="text-slate-700 font-semibold">{item.selectedColor}</strong></span>
            )}
            {item.selectedSize && (
              <span>Size: <strong className="text-slate-700 font-semibold">{item.selectedSize}</strong></span>
            )}
            {item.isCustomized && item.designerSnapshot && (
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Custom Artwork Configured
              </span>
            )}
          </div>

          <div className="text-xs text-slate-500 mt-1 sm:hidden">
            Unit Price: <span className="font-semibold text-slate-800">${item.unitPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Quantity & Total Price Actions */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        {/* Quantity Controls */}
        <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-slate-50">
          <button
            onClick={() => onUpdateQuantity(Math.max(0, item.quantity - 25))}
            className="px-2.5 py-1.5 text-slate-600 hover:bg-slate-200 text-xs font-bold"
            title="Decrease quantity by 25"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(parseInt(e.target.value) || 0)}
            className="w-16 text-center text-xs font-bold bg-white py-1.5 border-x border-slate-200 focus:outline-none"
          />
          <button
            onClick={() => onUpdateQuantity(item.quantity + 25)}
            className="px-2.5 py-1.5 text-slate-600 hover:bg-slate-200 text-xs font-bold"
            title="Increase quantity by 25"
          >
            +
          </button>
        </div>

        {/* Line Total */}
        <div className="text-right min-w-[90px]">
          <div className="text-base font-black text-slate-900">
            ${lineTotal.toFixed(2)}
          </div>
          <div className="text-[10px] text-slate-400">
            (${item.unitPrice.toFixed(2)} ea)
          </div>
        </div>

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="text-slate-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
          title="Remove Item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

