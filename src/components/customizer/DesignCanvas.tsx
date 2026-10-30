import React, { useRef, useState } from 'react';
import { DesignerModelConfig, DesignerViewConfig, DesignerBagColor, ViewCustomizationState } from '../../types/designer';
import { BagMockupSvg } from '../common/BagMockupSvg';
import { AlertCircle, Move, Check } from 'lucide-react';

interface DesignCanvasProps {
  model: DesignerModelConfig;
  selectedColor: DesignerBagColor;
  activeView: DesignerViewConfig;
  viewState: ViewCustomizationState;
  onUpdateArtwork: (updater: Partial<NonNullable<ViewCustomizationState['artwork']>>) => void;
  onUpdateText: (updater: Partial<NonNullable<ViewCustomizationState['textElement']>>) => void;
  isConfirmed: boolean;
  onConfirmToggle?: () => void;
}

export const DesignCanvas: React.FC<DesignCanvasProps> = ({
  model,
  selectedColor,
  activeView,
  viewState,
  onUpdateArtwork,
  onUpdateText,
  isConfirmed,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const printAreaRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeTarget, setActiveTarget] = useState<'artwork' | 'text' | null>('artwork');

  const artwork = viewState.artwork;
  const textElement = viewState.textElement;
  const printArea = activeView.printArea;

  // Check if artwork is overflowing the printable boundary
  // Normalized 0-100 coordinates
  const isOutOfBounds = artwork
    ? artwork.x < 15 || artwork.x > 85 || artwork.y < 15 || artwork.y > 85 || artwork.scale > 1.8
    : false;

  // Handle direct canvas mouse dragging for artwork / text
  const handlePointerDown = (e: React.PointerEvent, target: 'artwork' | 'text') => {
    e.stopPropagation();
    setIsDragging(true);
    setActiveTarget(target);
    setDragStart({ x: e.clientX, y: e.clientY });
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !printAreaRef.current) return;

    const rect = printAreaRef.current.getBoundingClientRect();
    const deltaXPercent = ((e.clientX - dragStart.x) / rect.width) * 100;
    const deltaYPercent = ((e.clientY - dragStart.y) / rect.height) * 100;

    if (activeTarget === 'artwork' && artwork) {
      const nextX = Math.max(5, Math.min(95, artwork.x + deltaXPercent));
      const nextY = Math.max(5, Math.min(95, artwork.y + deltaYPercent));
      onUpdateArtwork({ x: nextX, y: nextY });
    } else if (activeTarget === 'text' && textElement) {
      const nextX = Math.max(5, Math.min(95, textElement.x + deltaXPercent));
      const nextY = Math.max(5, Math.min(95, textElement.y + deltaYPercent));
      onUpdateText({ x: nextX, y: nextY });
    }

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
      } catch {
        // Safe fallback
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto aspect-[600/650] flex items-center justify-center select-none"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* 1. BASE BAG MOCKUP LAYER */}
      <div className="absolute inset-0 pointer-events-none">
        <BagMockupSvg
          modelType={`${model.id.includes('messenger') ? 'messenger' : model.id.includes('shopper') ? 'shopper' : 'tote'}-${activeView.id}`}
          bagColor={selectedColor.hex}
          className="w-full h-full"
        />
      </div>

      {/* 2. PRINTABLE BOUNDARY AREA */}
      <div
        ref={printAreaRef}
        style={{
          left: `${printArea.x}%`,
          top: `${printArea.y}%`,
          width: `${printArea.width}%`,
          height: `${printArea.height}%`,
        }}
        className={`absolute rounded-sm transition-all duration-200 ${
          isConfirmed
            ? 'border border-transparent'
            : isOutOfBounds
            ? 'border-2 border-dashed border-red-500 bg-red-500/5'
            : 'border-2 border-dashed border-sky-400/80 bg-sky-400/5'
        }`}
      >
        {/* Printable Area Badge & Warning */}
        {!isConfirmed && (
          <div className="absolute -top-6 left-0 right-0 flex items-center justify-between pointer-events-none px-1">
            <span className="text-[10px] font-semibold text-sky-800 bg-sky-100/90 px-2 py-0.5 rounded shadow-sm">
              Print Zone: {model.printableDimensionsLabel}
            </span>
            {isOutOfBounds && (
              <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded flex items-center gap-1 shadow-sm animate-pulse">
                <AlertCircle className="w-3 h-3" /> Near boundary
              </span>
            )}
          </div>
        )}

        {/* 3. ARTWORK PREVIEW ELEMENT */}
        {artwork && (
          <div
            style={{
              left: `${artwork.x}%`,
              top: `${artwork.y}%`,
              transform: `translate(-50%, -50%) rotate(${artwork.rotation}deg) scale(${artwork.scale})`,
              transformOrigin: 'center center',
            }}
            onPointerDown={(e) => handlePointerDown(e, 'artwork')}
            className={`absolute cursor-move transition-shadow ${
              activeTarget === 'artwork' && !isConfirmed
                ? 'ring-2 ring-sky-500 ring-offset-2 ring-offset-transparent'
                : ''
            }`}
          >
            <div className="relative group">
              <img
                src={artwork.content}
                alt="Custom uploaded artwork"
                className="max-w-[140px] max-h-[140px] object-contain pointer-events-none drop-shadow-sm"
                draggable={false}
              />

              {/* Interactive Bounding box controls when selected */}
              {!isConfirmed && (
                <>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-md text-xs cursor-pointer hover:bg-sky-700">
                    <Move className="w-3.5 h-3.5" />
                  </div>
                  {/* Subtle dimension outline */}
                  <div className="absolute inset-0 border border-sky-400/60 pointer-events-none" />
                </>
              )}
            </div>
          </div>
        )}

        {/* 4. OPTIONAL CUSTOM TEXT ELEMENT */}
        {textElement && textElement.content && (
          <div
            style={{
              left: `${textElement.x}%`,
              top: `${textElement.y}%`,
              transform: `translate(-50%, -50%) rotate(${textElement.rotation}deg) scale(${textElement.scale})`,
              transformOrigin: 'center center',
            }}
            onPointerDown={(e) => handlePointerDown(e, 'text')}
            className={`absolute cursor-move px-2 py-1 transition-shadow whitespace-nowrap ${
              activeTarget === 'text' && !isConfirmed
                ? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-transparent'
                : ''
            }`}
          >
            <span
              style={{
                fontSize: `${textElement.fontSize || 18}px`,
                color: textElement.fontColor || '#ffffff',
                fontFamily: textElement.fontFamily || 'Inter, sans-serif',
                fontWeight: textElement.fontWeight || '700',
                textShadow: '0 1px 2px rgba(0,0,0,0.4)',
              }}
              className="select-none pointer-events-none"
            >
              {textElement.content}
            </span>
          </div>
        )}

        {/* Empty state hint */}
        {!artwork && !textElement && !isConfirmed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
            <span className="text-xs font-semibold text-slate-800 bg-white/95 px-3 py-1.5 rounded-full shadow-sm">
              Artwork Placement Zone
            </span>
            <span className="text-[11px] text-white font-medium bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full mt-1.5 shadow-xs">
              Upload a logo or choose sample artwork
            </span>
          </div>
        )}
      </div>

      {/* 5. STRAP / MASK OVERLAY LAYER (Realistic handle rendering over artwork) */}
      {activeView.hasStrapOverlay && (
        <div className="absolute inset-0 pointer-events-none">
          <BagMockupSvg
            modelType={`${model.id.includes('messenger') ? 'messenger' : model.id.includes('shopper') ? 'shopper' : 'tote'}-${activeView.id}`}
            bagColor={selectedColor.hex}
            className="w-full h-full"
            isOverlay={true}
          />
        </div>
      )}

      {/* 6. DESIGN CONFIRMATION WATERMARK */}
      {isConfirmed && (
        <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5 backdrop-blur-sm">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Design Confirmed</span>
        </div>
      )}
    </div>
  );
};
