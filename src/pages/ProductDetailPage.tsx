import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useDesignTheme } from '../context/DesignThemeContext';
import { ProductImageMockup } from '../components/common/ProductImageMockup';
import {
  Palette,
  ShoppingCart,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Sparkles,
  FileText,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const { isOptionB } = useDesignTheme();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedColor, setSelectedColor] = useState(
    product.availableColors?.[0]?.name || 'Standard'
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || ''
  );
  const [selectedImage, setSelectedImage] = useState(product.primaryImage);
  const [quantity, setQuantity] = useState(product.minOrderQuantity || 50);
  const [addedNotice, setAddedNotice] = useState(false);

  // Dynamic tier price calculation based on quantity
  const activeUnitPrice = React.useMemo(() => {
    if (!product.pricingTiers || product.pricingTiers.length === 0) {
      return product.samplePrice;
    }
    const matchingTier = [...product.pricingTiers]
      .reverse()
      .find((tier) => quantity >= tier.minQty);
    return matchingTier ? matchingTier.unitPrice : product.pricingTiers[0].unitPrice;
  }, [product, quantity]);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      productSlug: product.slug,
      productName: product.name,
      categoryName: product.categoryName,
      unitPrice: activeUnitPrice,
      quantity,
      selectedColor,
      selectedSize: selectedSize || undefined,
      isCustomized: false,
    });

    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  const selectedColorHex = product.availableColors?.find(
    (c) => c.name === selectedColor
  )?.hex;

  // ========================================================
  // OPTION B: EXECUTIVE SPECIFICATION SHEET & GALLERY
  // High-end presentation, serif typography, structured spec
  // table, volume pricing matrix, and atelier link
  // ========================================================
  if (isOptionB) {
    return (
      <div className="min-h-screen py-12 bg-[#FAF9F6] text-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb Navigation */}
          <div className="text-xs text-stone-400 font-serif">
            <Link to="/" className="hover:underline">Home</Link> /{' '}
            <Link to="/products" className="hover:underline">Merchandise</Link> /{' '}
            <span className="text-stone-600 cursor-default">{product.categoryName}</span> /{' '}
            <strong className="text-stone-800">{product.name}</strong>
          </div>

          {/* Product Overview Layout: Gallery Left, Executive Brief Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Gallery Left (Col 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-square rounded-3xl bg-[#F2F0EB] border border-[#E7E5E0] overflow-hidden flex items-center justify-center relative p-8 shadow-xs">
                <ProductImageMockup
                  imageKey={selectedImage}
                  productSlug={product.slug}
                  selectedColorHex={selectedColorHex}
                  className="max-h-96 w-full h-full object-contain"
                />

                {product.customizable && (
                  <div className="absolute top-4 left-4 bg-[#1A2328] text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/30 shadow flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Atelier Imprint Eligible</span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-2xl border-2 p-1.5 transition-all overflow-hidden flex items-center justify-center bg-[#F2F0EB] ${
                        selectedImage === img
                          ? 'border-amber-700 ring-2 ring-amber-100'
                          : 'border-[#E7E5E0] hover:border-stone-400'
                      }`}
                    >
                      <ProductImageMockup
                        imageKey={img}
                        productSlug={product.slug}
                        selectedColorHex={selectedColorHex}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Executive Brief Right (Col 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E7E5E0] p-8 sm:p-10 shadow-xs space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-serif text-stone-500">
                  <span className="uppercase tracking-widest text-amber-800 font-bold">
                    {product.categoryName} &bull; Executive Spec
                  </span>
                  <span>Minimum Run: {product.minOrderQuantity} units</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 mt-2 leading-tight">
                  {product.name}
                </h1>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 font-serif italic leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Volume Pricing Matrix Table */}
              <div className="bg-[#FAF9F6] rounded-2xl border border-[#E7E5E0] p-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 block mb-3 font-serif">
                  Volume Pricing Matrix (Sample Quotation)
                </span>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-400 uppercase text-[10px]">
                        <th className="pb-1.5 font-semibold">Tier Bracket</th>
                        <th className="pb-1.5 font-semibold text-center">Unit Price</th>
                        <th className="pb-1.5 font-semibold text-right">Estimated Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {product.pricingTiers.map((tier, idx) => {
                        const isCurrent = quantity >= tier.minQty &&
                          (!product.pricingTiers[idx + 1] || quantity < product.pricingTiers[idx + 1].minQty);
                        return (
                          <tr key={idx} className={isCurrent ? 'bg-amber-100/60 font-bold text-amber-950' : 'text-stone-700'}>
                            <td className="py-2">{tier.minQty}+ units</td>
                            <td className="py-2 text-center font-serif">${tier.unitPrice.toFixed(2)}</td>
                            <td className="py-2 text-right">
                              {isCurrent ? (
                                <span className="inline-flex items-center gap-1 text-[10px] text-amber-800 uppercase font-bold">
                                  <Sparkles className="w-3 h-3" /> Active Bracket
                                </span>
                              ) : (
                                <span className="text-stone-400 text-[11px]">Eligible</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Color Selection */}
              {product.availableColors && product.availableColors.length > 0 && (
                <div>
                  <div className="flex justify-between text-xs font-serif text-stone-700 mb-2">
                    <span>Selected Imprint Palette: <strong className="text-stone-900">{selectedColor}</strong></span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.availableColors.map((color, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-serif transition-all ${
                          selectedColor === color.name
                            ? 'border-amber-700 bg-amber-50/70 text-amber-950 font-bold ring-1 ring-amber-600'
                            : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                        }`}
                      >
                        <span
                          style={{ backgroundColor: color.hex }}
                          className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs"
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-stone-100">
                <div>
                  <label className="block text-[11px] font-serif font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Select Run Quantity
                  </label>
                  <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(product.minOrderQuantity, quantity - 25))}
                      className="px-3 py-1.5 text-stone-700 hover:bg-stone-200 text-xs font-bold font-serif"
                    >
                      -25
                    </button>
                    <input
                      type="number"
                      min={product.minOrderQuantity}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(product.minOrderQuantity, parseInt(e.target.value) || product.minOrderQuantity))}
                      className="w-20 text-center text-xs font-bold font-serif bg-white py-1.5 border-x border-stone-200 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 25)}
                      className="px-3 py-1.5 text-stone-700 hover:bg-stone-200 text-xs font-bold font-serif"
                    >
                      +25
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-stone-400 uppercase font-serif tracking-wider block">Estimated Total</span>
                  <div className="text-2xl font-serif font-black text-stone-900">
                    ${(activeUnitPrice * quantity).toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                {product.customizable ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      to={`/customize/${product.designerModelId || 'canvas-tote-pro'}`}
                      className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold bg-[#1A2328] hover:bg-stone-800 text-amber-300 border border-amber-500/30 shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Palette className="w-4 h-4" />
                      <span>Configure in Bag Atelier</span>
                    </Link>

                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add Blank Sample Order</span>
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold bg-[#1A2328] hover:bg-stone-800 text-amber-300 border border-amber-500/30 shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add {quantity} Units to Portfolio Cart</span>
                  </button>
                )}

                {addedNotice && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-serif flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-amber-700" />
                      Added to Demo Portfolio Cart!
                    </span>
                    <Link to="/cart" className="text-xs font-bold underline text-amber-900">
                      Open Cart &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Technical Spec Sheet Section */}
          <div className="bg-white rounded-3xl border border-[#E7E5E0] p-8 sm:p-10 shadow-xs space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
              <FileText className="w-5 h-5 text-amber-700" />
              <h3 className="font-serif text-lg font-bold text-stone-900 uppercase tracking-wider">
                Conference Technical Specifications & Material Sheet
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-stone-700">
              {/* Left: Materials Table */}
              <div className="space-y-3 font-serif">
                <h4 className="font-bold text-stone-900 text-sm">Material & Construction</h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-stone-500">Fabric Composition:</span>
                    <strong className="text-stone-900">{product.materials || '100% Heavyweight Cotton / Alloy'}</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-stone-500">Dimensions:</span>
                    <strong className="text-stone-900">{product.dimensions || 'Standard Keynote Dimensions'}</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-stone-500">Imprint Technology:</span>
                    <strong className="text-stone-900">{product.customizable ? 'Full Color Front & Back Imprint' : 'High-Precision Pad / Screen Print'}</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-stone-500">Production Lead Time:</span>
                    <strong className="text-stone-900">{product.leadTimeDays}</strong>
                  </div>
                </div>
              </div>

              {/* Right: Key Features */}
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-sm mb-3">Key Event Features</h4>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE COMMERCIAL ORDER MATRIX
  // ========================================================
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <div className="text-xs text-slate-500">
          <Link to="/" className="hover:underline">Home</Link> /{' '}
          <Link to="/products" className="hover:underline">Products</Link> /{' '}
          <span className="text-slate-700 cursor-default">{product.categoryName}</span> /{' '}
          <strong className="text-slate-800">{product.name}</strong>
        </div>

        {/* Product Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Gallery & Image Showcase */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center relative p-6">
              <ProductImageMockup
                imageKey={selectedImage}
                productSlug={product.slug}
                selectedColorHex={selectedColorHex}
                className="max-h-96 w-full h-full object-contain"
              />

              {product.customizable && (
                <div className="absolute top-4 left-4 bg-[#E65100] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Customizer Ready</span>
                </div>
              )}
            </div>

            {/* Thumbnail Selectors */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl border-2 p-1.5 transition-all overflow-hidden flex items-center justify-center bg-slate-50 ${
                      selectedImage === img
                        ? 'border-sky-600 ring-2 ring-sky-100'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <ProductImageMockup
                      imageKey={img}
                      productSlug={product.slug}
                      selectedColorHex={selectedColorHex}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Configurations & Order Actions */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-sky-700 tracking-wider">
                {product.categoryName} &bull; Sample Catalog Item
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Volume Pricing Tiers Table */}
              <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-4">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Volume Pricing Tiers (Illustrative Sample)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                  {product.pricingTiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-xl border transition-colors ${
                        quantity >= tier.minQty &&
                        (!product.pricingTiers[idx + 1] || quantity < product.pricingTiers[idx + 1].minQty)
                          ? 'bg-sky-100/70 border-sky-400 font-bold text-sky-900'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      <div className="text-[10px] text-slate-400">Qty {tier.minQty}+</div>
                      <div className="text-sm font-black mt-0.5">${tier.unitPrice.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              {product.availableColors && product.availableColors.length > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Selected Color: <strong className="text-slate-900">{selectedColor}</strong></span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {product.availableColors.map((color, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`group relative flex items-center gap-2 p-1.5 rounded-xl border transition-all ${
                          selectedColor === color.name
                            ? 'border-sky-600 bg-sky-50/50 ring-2 ring-sky-100'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <span
                          style={{ backgroundColor: color.hex }}
                          className="w-5 h-5 rounded-lg border border-slate-300 shadow-xs block"
                        />
                        <span className="text-xs font-medium text-slate-700 pr-1">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection (if applicable) */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Selected Size: <strong className="text-slate-900">{selectedSize}</strong></span>
                  </div>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-xl text-xs font-bold border transition-colors ${
                          selectedSize === size
                            ? 'bg-sky-600 text-white border-sky-600'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mt-6">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Order Quantity (Min. {product.minOrderQuantity} units)
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(product.minOrderQuantity, quantity - 25))}
                      className="px-3 py-2 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                    >
                      -25
                    </button>
                    <input
                      type="number"
                      min={product.minOrderQuantity}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(product.minOrderQuantity, parseInt(e.target.value) || product.minOrderQuantity))}
                      className="w-20 text-center text-xs font-bold bg-white py-2 border-x border-slate-200 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 25)}
                      className="px-3 py-2 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                    >
                      +25
                    </button>
                  </div>

                  <div className="text-xs text-slate-600">
                    Total Estimated: <strong className="text-base text-slate-900 font-black ml-1">${(activeUnitPrice * quantity).toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Add to Cart vs Customize Bag */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              {product.customizable ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    to={`/customize/${product.designerModelId || 'canvas-tote-pro'}`}
                    className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold bg-[#E65100] hover:bg-[#C64500] text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Palette className="w-4 h-4" />
                    <span>Customize Online in Designer</span>
                  </Link>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold bg-[#0B3B60] hover:bg-[#072842] text-white shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add Blank Demo Order</span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold bg-[#0B3B60] hover:bg-[#072842] text-white shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add {quantity} Units to Demo Cart</span>
                </button>
              )}

              {/* Added to cart toast message */}
              {addedNotice && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Added to Demo Cart!
                  </span>
                  <Link to="/cart" className="text-xs font-bold underline text-emerald-700">
                    View Cart &rarr;
                  </Link>
                </div>
              )}

              {/* Trust & Delivery notes */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Lead Time: {product.leadTimeDays}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Free Samples on Qualified Inquiries</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Key Specifications */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4">
            Conference Product Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Key Features</h4>
              <ul className="space-y-1.5">
                {product.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 mb-2">Technical Details</h4>
              {product.materials && (
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Materials:</span>
                  <strong className="text-slate-900">{product.materials}</strong>
                </div>
              )}
              {product.dimensions && (
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Dimensions:</span>
                  <strong className="text-slate-900">{product.dimensions}</strong>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Production Type:</span>
                <strong className="text-slate-900">{product.customizable ? 'Full Custom Imprint' : 'Screen / Pad Printed'}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
