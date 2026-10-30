import React, { useState } from 'react';
import { ViewCustomizationState, ArtworkElement } from '../../types/designer';
import { useDesignTheme } from '../../context/DesignThemeContext';
import { ZoomIn, RotateCw, Type, Image as ImageIcon, Trash2, RefreshCw, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface DesignPropertiesPanelProps {
  viewState: ViewCustomizationState;
  onUpdateArtwork: (updater: Partial<ArtworkElement>) => void;
  onUpdateText: (updater: Partial<ArtworkElement>) => void;
  onRemoveArtwork: () => void;
  onRemoveText: () => void;
  onAddText: () => void;
}

export const DesignPropertiesPanel: React.FC<DesignPropertiesPanelProps> = ({
  viewState,
  onUpdateArtwork,
  onUpdateText,
  onRemoveArtwork,
  onRemoveText,
  onAddText,
}) => {
  const { isOptionB } = useDesignTheme();
  const [activeTab, setActiveTab] = useState<'artwork' | 'text'>('artwork');

  const artwork = viewState.artwork;
  const textElement = viewState.textElement;

  const handleNudgeArtwork = (dx: number, dy: number) => {
    if (!artwork) return;
    onUpdateArtwork({
      x: Math.max(10, Math.min(90, artwork.x + dx)),
      y: Math.max(10, Math.min(90, artwork.y + dy)),
    });
  };

  const handleNudgeText = (dx: number, dy: number) => {
    if (!textElement) return;
    onUpdateText({
      x: Math.max(10, Math.min(90, textElement.x + dx)),
      y: Math.max(10, Math.min(90, textElement.y + dy)),
    });
  };

  return (
    <div className={
      isOptionB ? 'space-y-4' : 'bg-white border-slate-200 p-4 rounded-xl border shadow-sm space-y-4'
    }>
      {/* Tab Switcher: Artwork vs Text */}
      <div className={`flex border-b ${isOptionB ? 'border-stone-800' : 'border-slate-200'}`}>
        <button
          onClick={() => setActiveTab('artwork')}
          className={`flex-1 pb-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
            activeTab === 'artwork'
              ? isOptionB ? 'border-amber-500 text-amber-300' : 'border-sky-600 text-sky-600'
              : isOptionB ? 'border-transparent text-stone-400 hover:text-white' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          Logo / Artwork
        </button>
        <button
          onClick={() => {
            setActiveTab('text');
            if (!textElement) onAddText();
          }}
          className={`flex-1 pb-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
            activeTab === 'text'
              ? isOptionB ? 'border-amber-500 text-amber-300' : 'border-sky-600 text-sky-600'
              : isOptionB ? 'border-transparent text-stone-400 hover:text-white' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          Custom Text
        </button>
      </div>

      {/* ARTWORK PROPERTIES */}
      {activeTab === 'artwork' && (
        <div className="space-y-4">
          {!artwork ? (
            <div className={`text-center py-6 text-xs ${isOptionB ? 'text-stone-400 font-serif' : 'text-slate-400'}`}>
              <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p>No artwork uploaded yet</p>
              <p className={`text-[11px] mt-1 ${isOptionB ? 'text-stone-500' : 'text-slate-400'}`}>
                Use the upload box above to add your design
              </p>
            </div>
          ) : (
            <>
              {/* Scale / Size Control */}
              <div>
                <div className={`flex items-center justify-between text-xs font-medium mb-1.5 ${
                  isOptionB ? 'text-stone-200 font-serif' : 'text-slate-700'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <ZoomIn className={`w-3.5 h-3.5 ${isOptionB ? 'text-amber-400' : 'text-slate-500'}`} /> Size / Scale
                  </span>
                  <span className={`font-mono text-[11px] ${isOptionB ? 'text-amber-300' : 'text-slate-500'}`}>
                    {Math.round(artwork.scale * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="2.0"
                  step="0.05"
                  value={artwork.scale}
                  onChange={(e) => onUpdateArtwork({ scale: parseFloat(e.target.value) })}
                  className={`w-full cursor-pointer ${isOptionB ? 'accent-amber-500' : 'accent-sky-600'}`}
                />
              </div>

              {/* Rotation Control */}
              <div>
                <div className={`flex items-center justify-between text-xs font-medium mb-1.5 ${
                  isOptionB ? 'text-stone-200 font-serif' : 'text-slate-700'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <RotateCw className={`w-3.5 h-3.5 ${isOptionB ? 'text-amber-400' : 'text-slate-500'}`} /> Rotation
                  </span>
                  <span className={`font-mono text-[11px] ${isOptionB ? 'text-amber-300' : 'text-slate-500'}`}>{artwork.rotation}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="5"
                  value={artwork.rotation}
                  onChange={(e) => onUpdateArtwork({ rotation: parseInt(e.target.value) })}
                  className={`w-full cursor-pointer ${isOptionB ? 'accent-amber-500' : 'accent-sky-600'}`}
                />
                <div className="flex gap-1.5 mt-2">
                  {[0, 90, 180, 270].map((deg) => (
                    <button
                      key={deg}
                      type="button"
                      onClick={() => onUpdateArtwork({ rotation: deg })}
                      className={`flex-1 py-1 text-[11px] rounded border transition-colors ${
                        artwork.rotation === deg
                          ? isOptionB ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' : 'bg-sky-50 border-sky-400 text-sky-700 font-semibold'
                          : isOptionB ? 'border-stone-700 bg-stone-900 text-stone-300 hover:bg-stone-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {deg}°
                    </button>
                  ))}
                </div>
              </div>

              {/* Directional Pad / Fine Positioning */}
              <div>
                <span className={`text-xs font-medium block mb-2 ${
                  isOptionB ? 'text-stone-200 font-serif' : 'text-slate-700'
                }`}>
                  Fine Position Adjustment
                </span>
                <div className="flex items-center justify-center gap-2">
                  <div className="grid grid-cols-3 gap-1 w-28">
                    <div></div>
                    <button
                      onClick={() => handleNudgeArtwork(0, -3)}
                      className={`p-1.5 rounded flex items-center justify-center transition-colors ${
                        isOptionB ? 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      title="Move Up"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <div></div>
                    <button
                      onClick={() => handleNudgeArtwork(-3, 0)}
                      className={`p-1.5 rounded flex items-center justify-center transition-colors ${
                        isOptionB ? 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      title="Move Left"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onUpdateArtwork({ x: 50, y: 50 })}
                      className={`p-1.5 rounded text-[10px] font-bold flex items-center justify-center transition-colors ${
                        isOptionB ? 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 border border-amber-500/40' : 'bg-sky-100 hover:bg-sky-200 text-sky-700'
                      }`}
                      title="Center Artwork"
                    >
                      Center
                    </button>
                    <button
                      onClick={() => handleNudgeArtwork(3, 0)}
                      className={`p-1.5 rounded flex items-center justify-center transition-colors ${
                        isOptionB ? 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      title="Move Right"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div></div>
                    <button
                      onClick={() => handleNudgeArtwork(0, 3)}
                      className={`p-1.5 rounded flex items-center justify-center transition-colors ${
                        isOptionB ? 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      title="Move Down"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div></div>
                  </div>
                  <div className={`text-[11px] space-y-1 ${isOptionB ? 'text-stone-400 font-serif' : 'text-slate-500'}`}>
                    <p>Tip: You can also click and drag the artwork directly on the bag mockup.</p>
                  </div>
                </div>
              </div>

              {/* Reset / Delete Actions */}
              <div className={`pt-2 border-t flex items-center justify-between ${
                isOptionB ? 'border-stone-800' : 'border-slate-100'
              }`}>
                <button
                  type="button"
                  onClick={() => onUpdateArtwork({ x: 50, y: 50, scale: 1.0, rotation: 0 })}
                  className={`text-xs flex items-center gap-1 font-medium transition-colors ${
                    isOptionB ? 'text-stone-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <RefreshCw className="w-3 h-3" /> Reset Position
                </button>
                <button
                  type="button"
                  onClick={onRemoveArtwork}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-medium transition-colors"
                >
                  <Trash2 className="w-3 h-3" /> Remove Artwork
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* TEXT PROPERTIES */}
      {activeTab === 'text' && (
        <div className="space-y-4">
          {!textElement ? (
            <div className="text-center py-6">
              <button
                type="button"
                onClick={onAddText}
                className={`px-4 py-2 text-white rounded-lg text-xs font-semibold transition-colors ${
                  isOptionB ? 'bg-amber-600 hover:bg-amber-700' : 'bg-sky-600 hover:bg-sky-700'
                }`}
              >
                + Add Text Line
              </button>
            </div>
          ) : (
            <>
              {/* Text Input */}
              <div>
                <label className={`block text-xs font-medium mb-1 ${
                  isOptionB ? 'text-stone-200 font-serif' : 'text-slate-700'
                }`}>
                  Text Line
                </label>
                <input
                  type="text"
                  value={textElement.content}
                  onChange={(e) => onUpdateText({ content: e.target.value })}
                  placeholder="e.g. ANNUAL CONFERENCE 2027"
                  className={`w-full text-xs px-3 py-2 rounded-lg focus:outline-none ${
                    isOptionB
                      ? 'bg-stone-900 border border-stone-700 text-white focus:border-amber-500'
                      : 'border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500'
                  }`}
                />
              </div>

              {/* Font Size & Family */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className={`block text-xs font-medium mb-1 ${
                    isOptionB ? 'text-stone-200 font-serif' : 'text-slate-700'
                  }`}>
                    Font Size
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="36"
                    value={textElement.fontSize || 18}
                    onChange={(e) => onUpdateText({ fontSize: parseInt(e.target.value) })}
                    className={`w-full cursor-pointer ${isOptionB ? 'accent-amber-500' : 'accent-sky-600'}`}
                  />
                  <div className={`text-right text-[10px] font-mono mt-0.5 ${
                    isOptionB ? 'text-amber-300' : 'text-slate-500'
                  }`}>
                    {textElement.fontSize || 18}px
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1 ${
                    isOptionB ? 'text-stone-200 font-serif' : 'text-slate-700'
                  }`}>
                    Font Style
                  </label>
                  <select
                    value={textElement.fontFamily || 'Inter, sans-serif'}
                    onChange={(e) => onUpdateText({ fontFamily: e.target.value })}
                    className={`w-full text-xs px-2 py-1.5 rounded-lg ${
                      isOptionB
                        ? 'bg-stone-900 border border-stone-700 text-white'
                        : 'border border-slate-300 bg-white'
                    }`}
                  >
                    <option value="Inter, sans-serif">Modern Sans</option>
                    <option value="Montserrat, sans-serif">Bold Impact</option>
                    <option value="Merriweather, serif">Editorial Serif</option>
                    <option value="monospace">Technical Mono</option>
                  </select>
                </div>
              </div>

              {/* Color Swatches */}
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${
                  isOptionB ? 'text-stone-200 font-serif' : 'text-slate-700'
                }`}>
                  Text Color
                </label>
                <div className="flex gap-2">
                  {[
                    { name: 'White', hex: '#FFFFFF' },
                    { name: 'Black', hex: '#000000' },
                    { name: 'Gold', hex: '#D4AF37' },
                    { name: 'Navy', hex: '#0B3B60' },
                    { name: 'Amber', hex: '#E65100' },
                    { name: 'Sky', hex: '#0284C7' },
                  ].map((color) => (
                    <button
                      key={color.hex}
                      type="button"
                      onClick={() => onUpdateText({ fontColor: color.hex })}
                      style={{ backgroundColor: color.hex }}
                      className={`w-6 h-6 rounded-full border border-stone-600 shadow-sm transition-transform ${
                        textElement.fontColor === color.hex ? 'ring-2 ring-amber-500 scale-110' : 'hover:scale-105'
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Text Positioning */}
              <div>
                <span className={`text-xs font-medium block mb-1 ${
                  isOptionB ? 'text-stone-200 font-serif' : 'text-slate-700'
                }`}>
                  Text Position
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleNudgeText(0, -3)}
                    className={`flex-1 py-1 text-xs rounded font-medium transition-colors ${
                      isOptionB
                        ? 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Up &uarr;
                  </button>
                  <button
                    onClick={() => onUpdateText({ x: 50, y: 75 })}
                    className={`flex-1 py-1 text-xs rounded font-medium transition-colors ${
                      isOptionB
                        ? 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Lower Center
                  </button>
                  <button
                    onClick={() => handleNudgeText(0, 3)}
                    className={`flex-1 py-1 text-xs rounded font-medium transition-colors ${
                      isOptionB
                        ? 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Down &darr;
                  </button>
                </div>
              </div>

              {/* Remove Text */}
              <div className={`pt-2 border-t text-right ${
                isOptionB ? 'border-stone-800' : 'border-slate-100'
              }`}>
                <button
                  type="button"
                  onClick={onRemoveText}
                  className="text-xs text-red-400 hover:text-red-300 font-medium"
                >
                  Remove Text Line
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
