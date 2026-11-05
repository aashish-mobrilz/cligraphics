import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { DESIGNER_MODELS } from '../data/designerModels';
import {
  DesignerModelConfig,
  DesignerViewId,
  DesignerBagColor,
  ViewCustomizationState,
  ArtworkElement,
} from '../types/designer';
import { useCart } from '../context/CartContext';
import { useDesignTheme } from '../context/DesignThemeContext';
import { DesignCanvas } from '../components/customizer/DesignCanvas';
import { ArtworkUploader } from '../components/customizer/ArtworkUploader';
import { DesignPropertiesPanel } from '../components/customizer/DesignPropertiesPanel';
import { ProductViewSwitcher } from '../components/customizer/ProductViewSwitcher';
import {
  ArrowLeft,
  ShoppingCart,
  CheckCircle2,
  Info,
  Sparkles,
  Layers,
  Palette,
} from 'lucide-react';

export const CustomizerPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isOptionB } = useDesignTheme();

  // Find model or default to canvas-tote-pro
  const model: DesignerModelConfig =
    DESIGNER_MODELS.find((m) => m.id === productId || m.productSlug === productId) ||
    DESIGNER_MODELS[0];

  const [selectedColor, setSelectedColor] = useState<DesignerBagColor>(model.defaultColor);
  const [activeViewId, setActiveViewId] = useState<DesignerViewId>('front');
  const [quantity, setQuantity] = useState(model.minOrderQuantity || 50);

  // Separate customization state for Front and Back
  const [viewStates, setViewStates] = useState<{
    front: ViewCustomizationState;
    back: ViewCustomizationState;
  }>({
    front: {
      artwork: undefined,
      textElement: undefined,
    },
    back: {
      artwork: undefined,
      textElement: undefined,
    },
  });

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // When model changes, reset color
  useEffect(() => {
    setSelectedColor(model.defaultColor);
  }, [model]);

  const activeViewConfig =
    model.views.find((v) => v.id === activeViewId) || model.views[0];

  const currentViewState = viewStates[activeViewId];

  // ARTWORK UPDATERS
  const handleUpdateArtwork = (updater: Partial<ArtworkElement>) => {
    setIsConfirmed(false);
    setViewStates((prev) => ({
      ...prev,
      [activeViewId]: {
        ...prev[activeViewId],
        artwork: prev[activeViewId].artwork
          ? { ...prev[activeViewId].artwork!, ...updater }
          : undefined,
      },
    }));
  };

  const handleSetArtwork = (artwork: ArtworkElement) => {
    setIsConfirmed(false);
    setViewStates((prev) => ({
      ...prev,
      [activeViewId]: {
        ...prev[activeViewId],
        artwork,
      },
    }));
  };

  const handleRemoveArtwork = () => {
    setIsConfirmed(false);
    setViewStates((prev) => ({
      ...prev,
      [activeViewId]: {
        ...prev[activeViewId],
        artwork: undefined,
      },
    }));
  };

  // TEXT UPDATERS
  const handleAddText = () => {
    setIsConfirmed(false);
    const newText: ArtworkElement = {
      id: `text-${Date.now()}`,
      type: 'text',
      content: 'ANNUAL CONFERENCE 2027',
      x: 50,
      y: 75,
      scale: 1.0,
      rotation: 0,
      fontSize: 18,
      fontColor: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '700',
    };

    setViewStates((prev) => ({
      ...prev,
      [activeViewId]: {
        ...prev[activeViewId],
        textElement: newText,
      },
    }));
  };

  const handleUpdateText = (updater: Partial<ArtworkElement>) => {
    setIsConfirmed(false);
    setViewStates((prev) => ({
      ...prev,
      [activeViewId]: {
        ...prev[activeViewId],
        textElement: prev[activeViewId].textElement
          ? { ...prev[activeViewId].textElement!, ...updater }
          : undefined,
      },
    }));
  };

  const handleRemoveText = () => {
    setIsConfirmed(false);
    setViewStates((prev) => ({
      ...prev,
      [activeViewId]: {
        ...prev[activeViewId],
        textElement: undefined,
      },
    }));
  };

  // ADD TO DEMO CART
  const handleAddToCart = () => {
    addToCart({
      productId: model.productId,
      productSlug: model.productSlug,
      productName: model.productName,
      categoryName: 'Bags',
      unitPrice: model.basePrice,
      quantity,
      selectedColor: selectedColor.name,
      isCustomized: true,
      designerSnapshot: {
        thumbnailUrl: currentViewState.artwork?.content || '',
        modelId: model.id,
        colorName: selectedColor.name,
        hasFrontCustomization: !!viewStates.front.artwork || !!viewStates.front.textElement,
        hasBackCustomization: !!viewStates.back.artwork || !!viewStates.back.textElement,
        artworkFileName: currentViewState.artwork?.fileName,
        customText: currentViewState.textElement?.content,
        state: {
          modelId: model.id,
          selectedColor,
          activeView: activeViewId,
          views: viewStates,
          isConfirmed: true,
        },
      },
    });

    setAddedSuccess(true);
    setTimeout(() => {
      navigate('/cart');
    }, 1200);
  };

  const hasFrontCustom = !!viewStates.front.artwork || !!viewStates.front.textElement;
  const hasBackCustom = !!viewStates.back.artwork || !!viewStates.back.textElement;

  // ========================================================
  // OPTION B: STUDIO ATELIER DARK CANVAS EXPERIENCE
  // 2-column layout: expansive stage on left (col 7/8),
  // unified dark studio panel on right (col 5/4), serif branding
  // ========================================================
  if (isOptionB) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0F1419] text-stone-100">
        {/* Atelier Top Workbar */}
        <div className="border-b border-stone-800 bg-[#151D22] px-4 sm:px-8 py-3 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            {/* Model Title & Back Button */}
            <div className="flex items-center gap-4">
              <Link
                to={`/product/${model.productSlug}`}
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                title="Return to product specification"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-serif">
                    CLI Graphics Bag Atelier
                  </span>
                  <span className="text-stone-600">&bull;</span>
                  <span className="text-xs text-stone-400 font-serif">
                    {model.printableDimensionsLabel}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <h1 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">
                    {model.productName}
                  </h1>

                  {/* Model Switcher Dropdown */}
                  <select
                    value={model.id}
                    onChange={(e) => navigate(`/customize/${e.target.value}`)}
                    className="text-xs font-serif font-medium px-2 py-1 bg-stone-900 border border-stone-700 text-amber-200 rounded-lg focus:outline-none"
                  >
                    {DESIGNER_MODELS.map((m) => (
                      <option key={m.id} value={m.id}>
                        Switch: {m.productName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Color Swatch Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-serif text-stone-400 hidden sm:inline">
                Atelier Palette: <strong className="text-amber-200">{selectedColor.name}</strong>
              </span>
              <div className="flex items-center gap-2">
                {model.availableColors.map((color) => (
                  <button
                    key={color.code}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-6 h-6 rounded-full border border-stone-600 shadow-sm transition-all ${
                      selectedColor.code === color.code ? 'ring-2 ring-amber-500 scale-110' : 'hover:scale-105'
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Atelier 2-Column Studio Body */}
        <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Expansive Studio Canvas Stage (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-center space-y-4">
            {/* View Switcher Bar directly above Canvas */}
            <div className="w-full flex items-center justify-between bg-[#151D22] border border-stone-800 rounded-2xl px-5 py-2.5 shadow-sm">
              <span className="text-xs font-serif font-semibold text-stone-400 uppercase tracking-widest">
                Active Imprint Perspective
              </span>
              <ProductViewSwitcher
                views={model.views}
                activeViewId={activeViewId}
                onSelectView={setActiveViewId}
                hasFrontCustomization={hasFrontCustom}
                hasBackCustomization={hasBackCustom}
              />
            </div>

            {/* Immersive Dark Studio Canvas */}
            <div className="w-full rounded-3xl border border-stone-800 bg-[#161F26] p-6 sm:p-10 relative flex items-center justify-center shadow-2xl overflow-hidden">
              <DesignCanvas
                model={model}
                selectedColor={selectedColor}
                activeView={activeViewConfig}
                viewState={currentViewState}
                onUpdateArtwork={handleUpdateArtwork}
                onUpdateText={handleUpdateText}
                isConfirmed={isConfirmed}
                onConfirmToggle={() => setIsConfirmed(!isConfirmed)}
              />
            </div>

            {/* Interactive hint in warm amber */}
            <div className="text-xs text-amber-200/80 font-serif flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Interactive preview: Reposition, scale, and rotate your high-resolution vector or raster logo inside printable limits.</span>
            </div>
          </div>

          {/* RIGHT: Unified Atelier Control Drawer (Col 5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Artwork Upload & Assets Panel */}
            <div className="bg-[#151D22] rounded-3xl border border-stone-800 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-800 text-amber-400">
                <Palette className="w-4 h-4" />
                <h3 className="font-serif font-bold text-xs uppercase tracking-widest text-white">
                  1. Imprint Asset Upload
                </h3>
              </div>
              <ArtworkUploader
                onArtworkLoaded={handleSetArtwork}
                currentArtwork={currentViewState.artwork}
                onRemoveArtwork={handleRemoveArtwork}
              />
            </div>

            {/* Fine Property Adjustments */}
            <div className="bg-[#151D22] rounded-3xl border border-stone-800 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-800 text-amber-400">
                <Layers className="w-4 h-4" />
                <h3 className="font-serif font-bold text-xs uppercase tracking-widest text-white">
                  2. Artwork Scale & Rotation
                </h3>
              </div>
              <DesignPropertiesPanel
                viewState={currentViewState}
                onUpdateArtwork={handleUpdateArtwork}
                onUpdateText={handleUpdateText}
                onRemoveArtwork={handleRemoveArtwork}
                onRemoveText={handleRemoveText}
                onAddText={handleAddText}
              />
            </div>

            {/* Atelier Order Configuration & Confirmation */}
            <div className="bg-[#151D22] rounded-3xl border border-stone-800 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-800 text-amber-400">
                <Sparkles className="w-4 h-4" />
                <h3 className="font-serif font-bold text-xs uppercase tracking-widest text-white">
                  3. Production Confirmation
                </h3>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between text-xs font-serif">
                <span className="text-stone-300">Run Quantity (Min {model.minOrderQuantity}):</span>
                <div className="flex items-center border border-stone-700 rounded-xl overflow-hidden bg-stone-900">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(model.minOrderQuantity, quantity - 25))}
                    className="px-3 py-1 text-stone-300 hover:bg-stone-800 font-bold"
                  >
                    -25
                  </button>
                  <input
                    type="number"
                    min={model.minOrderQuantity}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(model.minOrderQuantity, parseInt(e.target.value) || model.minOrderQuantity))}
                    className="w-16 text-center text-xs font-serif font-bold bg-stone-950 py-1 text-amber-200 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 25)}
                    className="px-3 py-1 text-stone-300 hover:bg-stone-800 font-bold"
                  >
                    +25
                  </button>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="pt-2 border-t border-stone-800 flex justify-between items-baseline font-serif">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Unit Price</span>
                  <span className="text-sm font-bold text-stone-200">${model.basePrice.toFixed(2)} ea</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Estimated Total</span>
                  <span className="text-xl font-bold text-amber-400">
                    ${(model.basePrice * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Step 1: Confirm Design */}
              {!isConfirmed ? (
                <button
                  type="button"
                  onClick={() => setIsConfirmed(true)}
                  className="w-full py-3 px-4 rounded-xl text-xs uppercase font-bold tracking-wider bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Lock & Confirm Atelier Layout</span>
                </button>
              ) : (
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5 text-center text-amber-300 text-xs font-serif font-semibold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Atelier Layout Confirmed</span>
                </div>
              )}

              {/* Step 2: Add to Demo Portfolio Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-3.5 px-4 rounded-xl text-xs uppercase font-bold tracking-wider text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                  addedSuccess
                    ? 'bg-emerald-600'
                    : 'bg-amber-600 hover:bg-amber-700'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{addedSuccess ? 'Added to Portfolio Cart!' : 'Add Configured Tote to Demo Cart'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // OPTION A: 4IMPRINT-STYLE 3-PANEL WORKSTATION
  // Left toolbar (upload/views), center canvas, right properties
  // ========================================================
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900">
      {/* 1. TOP DESIGNER WORKBAR */}
      <div className="border-b px-4 sm:px-6 py-3 sticky top-10 z-40 bg-white border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Back button & Model Title */}
          <div className="flex items-center gap-3">
            <Link
              to={`/product/${model.productSlug}`}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              title="Return to product page"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-sky-600 tracking-wider">
                  Bag Customizer
                </span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-xs font-semibold text-slate-500">
                  {model.printableDimensionsLabel}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-extrabold text-slate-900">
                  {model.productName}
                </h1>

                {/* Model switcher dropdown */}
                <select
                  value={model.id}
                  onChange={(e) => navigate(`/customize/${e.target.value}`)}
                  className="text-xs font-semibold px-2 py-1 bg-slate-100 border border-slate-300 rounded-lg"
                >
                  {DESIGNER_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      Switch Model: {m.productName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Color Swatch Picker */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500 hidden sm:inline">
              Bag Color: <strong className="text-slate-800">{selectedColor.name}</strong>
            </span>
            <div className="flex items-center gap-1.5">
              {model.availableColors.map((color) => (
                <button
                  key={color.code}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color.hex }}
                  className={`w-6 h-6 rounded-full border border-slate-300 shadow-sm transition-transform ${
                    selectedColor.code === color.code ? 'ring-2 ring-sky-600 scale-110' : 'hover:scale-105'
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. THREE-PANEL CUSTOMIZER WORKSPACE */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT TOOLBAR: Upload & View Switcher (Col Span 3) */}
        <div className="lg:col-span-3 space-y-4">
          {/* Front / Back Switcher */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Select Imprint View
            </label>
            <ProductViewSwitcher
              views={model.views}
              activeViewId={activeViewId}
              onSelectView={setActiveViewId}
              hasFrontCustomization={hasFrontCustom}
              hasBackCustomization={hasBackCustom}
            />
          </div>

          {/* Local Artwork Uploader & Sample Logos */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <ArtworkUploader
              onArtworkLoaded={handleSetArtwork}
              currentArtwork={currentViewState.artwork}
              onRemoveArtwork={handleRemoveArtwork}
            />
          </div>
        </div>

        {/* CENTER STAGE: Interactive Bag Canvas (Col Span 6) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 relative flex items-center justify-center shadow-md">
            <DesignCanvas
              model={model}
              selectedColor={selectedColor}
              activeView={activeViewConfig}
              viewState={currentViewState}
              onUpdateArtwork={handleUpdateArtwork}
              onUpdateText={handleUpdateText}
              isConfirmed={isConfirmed}
              onConfirmToggle={() => setIsConfirmed(!isConfirmed)}
            />
          </div>

          {/* Interactive Hint strip below canvas */}
          <div className="mt-3 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <Info className="w-3.5 h-3.5 text-sky-600" />
            <span>Click & drag logo to reposition. Use handles or the right panel for fine adjustments.</span>
          </div>
        </div>

        {/* RIGHT PANEL: Controls, Quality & Cart Action (Col Span 3) */}
        <div className="lg:col-span-3 space-y-4">
          {/* Artwork & Text Adjustment Sliders */}
          <DesignPropertiesPanel
            viewState={currentViewState}
            onUpdateArtwork={handleUpdateArtwork}
            onUpdateText={handleUpdateText}
            onRemoveArtwork={handleRemoveArtwork}
            onRemoveText={handleRemoveText}
            onAddText={handleAddText}
          />

          {/* Design Summary & Confirmation Action */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 pb-2 border-b border-slate-100">
              Order Configuration
            </h3>

            {/* Quantity Selector */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Quantity</span>
                <span className="text-slate-500 font-normal">Min. {model.minOrderQuantity}</span>
              </div>
              <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(model.minOrderQuantity, quantity - 25))}
                  className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                >
                  -25
                </button>
                <input
                  type="number"
                  min={model.minOrderQuantity}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(model.minOrderQuantity, parseInt(e.target.value) || model.minOrderQuantity))}
                  className="w-full text-center text-xs font-bold bg-white py-1.5 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 25)}
                  className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                >
                  +25
                </button>
              </div>
            </div>

            {/* Summary Price */}
            <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Unit Price</span>
                <strong className="text-sm font-bold text-slate-800">${model.basePrice.toFixed(2)} ea</strong>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Total Estimated</span>
                <strong className="text-base font-black text-[#0B3B60]">
                  ${(model.basePrice * quantity).toFixed(2)}
                </strong>
              </div>
            </div>

            {/* Step 1: Confirm Design Button */}
            {!isConfirmed ? (
              <button
                type="button"
                onClick={() => setIsConfirmed(true)}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Confirm Current Design</span>
              </button>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-center text-emerald-800 text-xs font-semibold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Design Confirmed</span>
              </div>
            )}

            {/* Step 2: Add to Demo Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                addedSuccess
                  ? 'bg-emerald-600'
                  : 'bg-[#E65100] hover:bg-[#C64500]'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{addedSuccess ? 'Added! Opening Cart...' : 'Add Configured Bag to Demo Cart'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
