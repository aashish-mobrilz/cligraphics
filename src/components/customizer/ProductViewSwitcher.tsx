import React from 'react';
import { DesignerViewConfig, DesignerViewId } from '../../types/designer';
import { useDesignTheme } from '../../context/DesignThemeContext';

interface ProductViewSwitcherProps {
  views: DesignerViewConfig[];
  activeViewId: DesignerViewId;
  onSelectView: (viewId: DesignerViewId) => void;
  hasFrontCustomization: boolean;
  hasBackCustomization: boolean;
}

export const ProductViewSwitcher: React.FC<ProductViewSwitcherProps> = ({
  views,
  activeViewId,
  onSelectView,
  hasFrontCustomization,
  hasBackCustomization,
}) => {
  const { isOptionB } = useDesignTheme();

  return (
    <div className={`flex items-center gap-2 p-1 rounded-xl border ${
      isOptionB ? 'bg-stone-900 border-stone-700' : 'bg-slate-100 border-slate-200'
    }`}>
      {views.map((v) => {
        const isActive = v.id === activeViewId;
        const hasCustom = v.id === 'front' ? hasFrontCustomization : hasBackCustomization;

        return (
          <button
            key={v.id}
            type="button"
            onClick={() => onSelectView(v.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
              isActive
                ? isOptionB
                  ? 'bg-amber-600 text-white shadow-sm font-bold'
                  : 'bg-white text-slate-900 shadow-sm'
                : isOptionB
                ? 'text-stone-300 hover:text-white hover:bg-stone-800'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <span>{v.label}</span>
            {hasCustom && (
              <span className={`w-2 h-2 rounded-full ${isOptionB ? 'bg-amber-400' : 'bg-emerald-500'}`} title="Customized" />
            )}
          </button>
        );
      })}
    </div>
  );
};
