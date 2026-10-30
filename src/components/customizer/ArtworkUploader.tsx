import React, { useRef } from 'react';
import { Upload, Sparkles, AlertTriangle } from 'lucide-react';
import { ArtworkElement } from '../../types/designer';
import { useDesignTheme } from '../../context/DesignThemeContext';

interface ArtworkUploaderProps {
  onArtworkLoaded: (artwork: ArtworkElement) => void;
  currentArtwork?: ArtworkElement;
  onRemoveArtwork: () => void;
}

// Sample conference artwork options for immediate testing
const SAMPLE_CONFERENCE_LOGOS = [
  {
    name: 'Global Tech Summit 2027',
    svgDataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="120" viewBox="0 0 240 120"><rect width="240" height="120" rx="8" fill="%230F172A"/><circle cx="50" cy="60" r="28" fill="%2338BDF8" fill-opacity="0.2" stroke="%2338BDF8" stroke-width="3"/><path d="M38 60 L62 60 M50 48 L50 72" stroke="%2338BDF8" stroke-width="4" stroke-linecap="round"/><text x="90" y="52" fill="%23FFFFFF" font-family="sans-serif" font-size="14" font-weight="800">GLOBAL TECH</text><text x="90" y="70" fill="%2338BDF8" font-family="sans-serif" font-size="11" font-weight="700">SUMMIT 2027</text><text x="90" y="85" fill="%2394A3B8" font-family="sans-serif" font-size="9">KEYNOTE PROCEEDINGS</text></svg>`,
  },
  {
    name: 'BioHealth Annual Expo',
    svgDataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="220" height="110" viewBox="0 0 220 110"><rect width="220" height="110" rx="8" fill="%231E3A8A"/><circle cx="45" cy="55" r="24" fill="%2310B981" fill-opacity="0.25" stroke="%2310B981" stroke-width="3"/><circle cx="45" cy="55" r="12" fill="%2310B981"/><text x="82" y="50" fill="%23FFFFFF" font-family="sans-serif" font-size="15" font-weight="800">BIOHEALTH</text><text x="82" y="68" fill="%23A7F3D0" font-family="sans-serif" font-size="10" font-weight="600">ANNUAL EXPO 2027</text></svg>`,
  },
  {
    name: 'Acme Corporate Conference',
    svgDataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="220" height="110" viewBox="0 0 220 110"><rect width="220" height="110" rx="8" fill="%237C2D12"/><polygon points="45,30 65,75 25,75" fill="%23F97316"/><text x="80" y="52" fill="%23FFFFFF" font-family="sans-serif" font-size="15" font-weight="800">ACME CORP</text><text x="80" y="70" fill="%23FED7AA" font-family="sans-serif" font-size="10" font-weight="600">LEADERSHIP SUMMIT</text></svg>`,
  }
];

export const ArtworkUploader: React.FC<ArtworkUploaderProps> = ({
  onArtworkLoaded,
  currentArtwork,
  onRemoveArtwork,
}) => {
  const { isOptionB } = useDesignTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Demonstration size validation
    const fileSizeKB = Math.round(file.size / 1024);
    const sizeLabel = fileSizeKB > 1024 ? `${(fileSizeKB / 1024).toFixed(1)} MB` : `${fileSizeKB} KB`;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onArtworkLoaded({
          id: `art-${Date.now()}`,
          type: 'image',
          content: dataUrl,
          fileName: file.name,
          fileSizeLabel: sizeLabel,
          x: 50, // Center
          y: 50, // Center
          scale: 1.0,
          rotation: 0,
        });
      }
    };
    reader.readAsDataURL(file);

    // Reset input so same file can be selected again
    e.target.value = '';
  };

  const handleSelectSample = (sample: typeof SAMPLE_CONFERENCE_LOGOS[0]) => {
    onArtworkLoaded({
      id: `sample-${Date.now()}`,
      type: 'image',
      content: sample.svgDataUrl,
      fileName: `${sample.name}.svg`,
      fileSizeLabel: 'Vector SVG Sample',
      x: 50,
      y: 50,
      scale: 1.0,
      rotation: 0,
    });
  };

  return (
    <div className="space-y-4">
      {/* File Upload Box */}
      <div>
        <label className={`block text-xs uppercase tracking-wider mb-2 ${
          isOptionB ? 'font-serif font-bold text-amber-300' : 'font-semibold text-slate-700'
        }`}>
          Upload Artwork (Local Demo)
        </label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors group ${
            isOptionB
              ? 'border-stone-600 hover:border-amber-400 bg-stone-900/90 text-stone-100'
              : 'border-slate-300 hover:border-sky-500 hover:bg-sky-50/60 bg-white text-slate-800 shadow-xs'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml,image/webp"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${
            isOptionB ? 'bg-amber-500/20 text-amber-300' : 'bg-sky-100 text-sky-600'
          }`}>
            <Upload className="w-5 h-5" />
          </div>
          <p className={`text-xs font-bold ${isOptionB ? 'text-white font-serif tracking-wide' : 'text-slate-900'}`}>
            Click to upload your logo
          </p>
          <p className={`text-[11px] mt-1 font-medium ${isOptionB ? 'text-stone-300' : 'text-slate-600'}`}>
            PNG, JPG, SVG, WebP (Browser preview only)
          </p>
        </div>
      </div>

      {/* Current File Status */}
      {currentArtwork && (
        <div className={`border rounded-lg p-2.5 flex items-center justify-between ${
          isOptionB ? 'bg-stone-900/90 border-stone-700' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2 overflow-hidden">
            <div className={`w-8 h-8 rounded border flex-shrink-0 flex items-center justify-center overflow-hidden ${
              isOptionB ? 'bg-stone-950 border-stone-700' : 'bg-white border-slate-200'
            }`}>
              <img src={currentArtwork.content} alt="Preview" className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <p className={`text-xs font-medium truncate ${isOptionB ? 'text-white font-serif' : 'text-slate-800'}`}>
                {currentArtwork.fileName || 'Custom Artwork'}
              </p>
              <p className={`text-[10px] ${isOptionB ? 'text-amber-300' : 'text-slate-500'}`}>
                {currentArtwork.fileSizeLabel || 'Active'}
              </p>
            </div>
          </div>
          <button
            onClick={onRemoveArtwork}
            className="text-xs text-red-400 hover:text-red-300 font-medium px-2 py-1 rounded hover:bg-red-950/40 transition-colors"
          >
            Remove
          </button>
        </div>
      )}

      {/* Instant Sample Conference Logos */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs uppercase tracking-wider flex items-center gap-1 ${
            isOptionB ? 'font-serif font-bold text-amber-300' : 'font-semibold text-slate-700'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Quick Test Logos
          </span>
          <span className={`text-[10px] ${isOptionB ? 'text-stone-400 font-serif' : 'text-slate-400'}`}>
            Click to preview
          </span>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {SAMPLE_CONFERENCE_LOGOS.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectSample(sample)}
              className={`flex items-center gap-2.5 p-2 rounded-lg border text-left transition-all text-xs ${
                isOptionB
                  ? 'border-stone-700 bg-stone-900/90 hover:border-amber-400 hover:bg-stone-800 text-stone-100 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-sky-400 hover:bg-sky-50/60 text-slate-900 shadow-xs'
              }`}
            >
              <img src={sample.svgDataUrl} alt={sample.name} className="w-12 h-6 object-contain rounded bg-slate-950 flex-shrink-0 border border-stone-700" />
              <span className={`font-semibold truncate ${isOptionB ? 'text-stone-100 font-serif' : 'text-slate-900'}`}>
                {sample.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mandatory Demonstration Honesty Notice (Section 2.3 & 8.4) */}
      <div className={`border rounded-lg p-2.5 flex items-start gap-2 text-[11px] ${
        isOptionB
          ? 'bg-amber-950/40 border-amber-600/40 text-amber-200'
          : 'bg-amber-50/80 border-amber-200/80 text-amber-800'
      }`}>
        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-400 mt-0.5" />
        <div>
          <span className="font-semibold block">Browser Preview Notice</span>
          Artwork is previewed locally in your browser and not uploaded to a server. Print quality and dimensions will require confirmation against final production specifications.
        </div>
      </div>
    </div>
  );
};
