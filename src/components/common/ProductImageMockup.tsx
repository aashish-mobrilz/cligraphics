import React from 'react';
import { BagMockupSvg } from './BagMockupSvg';

interface ProductImageMockupProps {
  imageKey: string;
  productSlug?: string;
  selectedColorHex?: string;
  className?: string;
  alt?: string;
}

export const ProductImageMockup: React.FC<ProductImageMockupProps> = ({
  imageKey,
  productSlug = '',
  selectedColorHex = '#0B3B60',
  className = 'w-full h-full object-contain',
}) => {
  // BAGS
  if (imageKey.startsWith('bag-tote')) {
    const isBack = imageKey.includes('back');
    return (
      <div className={`relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-50 to-gray-100 ${className}`}>
        <BagMockupSvg
          modelType={isBack ? 'tote-back' : 'tote-front'}
          bagColor={selectedColorHex || '#0B3B60'}
          className="w-full h-full max-h-72 drop-shadow-md"
        />
      </div>
    );
  }

  if (imageKey.startsWith('bag-messenger')) {
    const isBack = imageKey.includes('back');
    return (
      <div className={`relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-50 to-gray-100 ${className}`}>
        <BagMockupSvg
          modelType={isBack ? 'messenger-back' : 'messenger-front'}
          bagColor={selectedColorHex || '#374151'}
          className="w-full h-full max-h-72 drop-shadow-md"
        />
      </div>
    );
  }

  if (imageKey.startsWith('bag-shopper')) {
    const isBack = imageKey.includes('back');
    return (
      <div className={`relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-50 to-gray-100 ${className}`}>
        <BagMockupSvg
          modelType={isBack ? 'shopper-back' : 'shopper-front'}
          bagColor={selectedColorHex || '#F3EDE2'}
          className="w-full h-full max-h-72 drop-shadow-md"
        />
      </div>
    );
  }

  // LANYARDS
  if (imageKey.startsWith('lan-')) {
    return (
      <div className={`relative flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
        <svg viewBox="0 0 400 350" className="w-full h-full max-h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lanyard neck loop */}
          <path
            d="M 120 40 C 120 180 180 230 195 240 L 195 250"
            stroke={selectedColorHex || '#0B3B60'}
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M 280 40 C 280 180 220 230 205 240 L 205 250"
            stroke={selectedColorHex || '#0B3B60'}
            strokeWidth="22"
            strokeLinecap="round"
          />
          {/* Pattern / Logo imprint on ribbon */}
          <path
            d="M 120 40 C 120 180 180 230 195 240"
            stroke="#ffffff"
            strokeWidth="3"
            strokeDasharray="16 14"
            className="opacity-70"
          />
          <path
            d="M 280 40 C 280 180 220 230 205 240"
            stroke="#ffffff"
            strokeWidth="3"
            strokeDasharray="16 14"
            className="opacity-70"
          />
          {/* Metal Crimp & J-Hook */}
          <rect x="188" y="244" width="24" height="18" rx="2" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
          <path d="M 200 262 L 200 280 Q 200 295 188 295 Q 176 295 178 280" stroke="#64748B" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Hanging Clear Badge Pouch */}
          <g filter="url(#badgeShadow)">
            <rect x="135" y="280" width="130" height="60" rx="4" fill="#ffffff" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="145" y="290" width="110" height="6" rx="2" fill="#0B3B60" />
            <rect x="145" y="302" width="70" height="5" rx="1.5" fill="#94A3B8" />
            <rect x="145" y="312" width="90" height="4" rx="1" fill="#CBD5E1" />
            <rect x="145" y="320" width="50" height="12" rx="2" fill="#E2E8F0" />
            <circle cx="200" cy="286" r="3" fill="#64748B" />
          </g>
          <defs>
            <filter id="badgeShadow" x="125" y="275" width="150" height="75" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }

  // DRINKWARE - TUMBLER
  if (imageKey.startsWith('drk-tumbler')) {
    return (
      <div className={`relative flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
        <svg viewBox="0 0 300 400" className="w-full h-full max-h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tumbler Body */}
          <path
            d="M 90 70 L 210 70 L 195 330 Q 194 345 180 345 L 120 345 Q 106 345 105 330 Z"
            fill={selectedColorHex || '#1E3A8A'}
          />
          {/* 3D Highlight & Shadow */}
          <path
            d="M 90 70 L 210 70 L 195 330 Q 194 345 180 345 L 120 345 Q 106 345 105 330 Z"
            fill="url(#tumblerGrad)"
          />
          {/* Stainless Steel Rim */}
          <ellipse cx="150" cy="70" rx="60" ry="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Acrylic Clear Lid */}
          <path d="M 96 70 C 96 58 118 50 150 50 C 182 50 204 58 204 70 Z" fill="#F1F5F9" fillOpacity="0.7" stroke="#CBD5E1" />
          <rect x="135" y="46" width="30" height="8" rx="2" fill="#64748B" />
          {/* Sample Laser Engraved Crest */}
          <circle cx="150" cy="180" r="22" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
          <path d="M 142 180 L 158 180 M 150 172 L 150 188" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
          <defs>
            <linearGradient id="tumblerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#000000" stopOpacity="0.0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // DRINKWARE - MUG
  if (imageKey.startsWith('drk-mug')) {
    return (
      <div className={`relative flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
        <svg viewBox="0 0 350 350" className="w-full h-full max-h-60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mug Handle */}
          <path
            d="M 220 130 C 270 130 270 230 220 230"
            stroke={selectedColorHex || '#27272A'}
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Mug Body */}
          <rect x="90" y="100" width="140" height="160" rx="8" fill={selectedColorHex || '#27272A'} />
          {/* Bamboo Coaster Lid */}
          <rect x="82" y="88" width="156" height="14" rx="3" fill="#D2B48C" stroke="#A88B60" strokeWidth="1" />
          <line x1="88" y1="95" x2="232" y2="95" stroke="#8B7355" strokeWidth="1" strokeDasharray="12 4" />
          {/* Laser Logo */}
          <circle cx="160" cy="180" r="18" stroke="#ffffff" strokeWidth="1.2" opacity="0.6" />
          <rect x="150" y="176" width="20" height="8" rx="1" fill="#ffffff" opacity="0.6" />
        </svg>
      </div>
    );
  }

  // PENS
  if (imageKey.startsWith('pen-')) {
    const isBamboo = imageKey.includes('bamboo');
    return (
      <div className={`relative flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
        <svg viewBox="0 0 380 200" className="w-full h-full max-h-52 transform -rotate-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pen Barrel */}
          <rect
            x="40"
            y="90"
            width="280"
            height="18"
            rx="4"
            fill={isBamboo ? '#D2B48C' : (selectedColorHex || '#0B3B60')}
          />
          {/* Stylus Tip / Front Cone */}
          <polygon points="320,90 350,99 320,108" fill="#475569" />
          <ellipse cx="352" cy="99" rx="3" ry="5" fill="#1E293B" />
          {/* Metal Click Plunger */}
          <rect x="25" y="93" width="15" height="12" rx="2" fill="#CBD5E1" stroke="#94A3B8" />
          {/* Pocket Clip */}
          <path d="M 40 99 L 110 99 Q 115 99 112 105" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
          {/* Engraved Logo */}
          <line x1="140" y1="99" x2="220" y2="99" stroke="#ffffff" strokeWidth="2" strokeDasharray="8 4" opacity="0.6" />
        </svg>
      </div>
    );
  }

  // APPAREL
  if (imageKey.startsWith('app-')) {
    const isPolo = imageKey.includes('polo');
    return (
      <div className={`relative flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
        <svg viewBox="0 0 350 350" className="w-full h-full max-h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shirt Silhouette */}
          <path
            d="M 120 70 L 60 120 L 90 160 L 115 140 L 115 310 L 235 310 L 235 140 L 260 160 L 290 120 L 230 70 Z"
            fill={selectedColorHex || '#1E3A8A'}
          />
          {/* Collar */}
          <polygon points="120,70 175,100 230,70 195,65 175,75 155,65" fill="#0F172A" opacity="0.25" />
          <polygon points="150,75 175,130 200,75" fill="#ffffff" opacity="0.2" />
          {/* Buttons or Zipper */}
          {isPolo ? (
            <g fill="#CBD5E1">
              <circle cx="175" cy="90" r="2.5" />
              <circle cx="175" cy="105" r="2.5" />
              <circle cx="175" cy="120" r="2.5" />
            </g>
          ) : (
            <line x1="175" y1="75" x2="175" y2="135" stroke="#CBD5E1" strokeWidth="3" />
          )}
          {/* Left Chest Embroidery Mark */}
          <circle cx="145" cy="135" r="6" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
        </svg>
      </div>
    );
  }

  // TECHNOLOGY
  if (imageKey.startsWith('tech-')) {
    const isPowerbank = imageKey.includes('powerbank');
    return (
      <div className={`relative flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
        <svg viewBox="0 0 350 320" className="w-full h-full max-h-60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isPowerbank ? (
            <>
              {/* Power Bank Casing */}
              <rect x="90" y="70" width="170" height="200" rx="16" fill={selectedColorHex || '#4B5563'} />
              <rect x="90" y="70" width="170" height="200" rx="16" fill="url(#metalShine)" />
              {/* LED Power Indicators */}
              <circle cx="120" cy="95" r="3" fill="#38BDF8" />
              <circle cx="132" cy="95" r="3" fill="#38BDF8" />
              <circle cx="144" cy="95" r="3" fill="#38BDF8" />
              <circle cx="156" cy="95" r="3" fill="#64748B" />
              {/* Centered Logo Imprint */}
              <rect x="130" y="150" width="90" height="36" rx="4" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
              <text x="175" y="173" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle" opacity="0.8">CLIGRAPHICS</text>
            </>
          ) : (
            <>
              {/* 3-in-1 Charging Hub */}
              <circle cx="175" cy="150" r="45" fill="#1E293B" stroke="#475569" strokeWidth="2" />
              <circle cx="175" cy="150" r="32" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 3" />
              {/* Cables radiating */}
              <path d="M 140 130 C 90 90 60 120 40 110" stroke="#64748B" strokeWidth="6" strokeLinecap="round" />
              <path d="M 210 130 C 260 90 290 120 310 110" stroke="#64748B" strokeWidth="6" strokeLinecap="round" />
              <path d="M 175 195 L 175 270" stroke="#64748B" strokeWidth="6" strokeLinecap="round" />
            </>
          )}
          <defs>
            <linearGradient id="metalShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // JOURNALS & NOTEBOOKS
  if (imageKey.startsWith('jrn-')) {
    return (
      <div className={`relative flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
        <svg viewBox="0 0 350 350" className="w-full h-full max-h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Journal Cover */}
          <rect x="80" y="50" width="180" height="250" rx="8" fill={selectedColorHex || '#0B3B60'} />
          {/* Spine fold */}
          <line x1="95" y1="50" x2="95" y2="300" stroke="#000000" strokeWidth="3" opacity="0.3" />
          {/* Page block edge */}
          <path d="M 260 58 L 268 62 L 268 292 L 260 296 Z" fill="#F8FAFC" stroke="#E2E8F0" />
          {/* Elastic Bookmark Band */}
          <rect x="235" y="50" width="12" height="250" fill="#0F172A" opacity="0.4" />
          {/* Satin Ribbon Marker */}
          <path d="M 160 50 L 160 315 L 165 310 L 170 315 L 170 50 Z" fill="#E65100" />
          {/* Debossed Front Crest */}
          <rect x="125" y="130" width="75" height="55" rx="3" stroke="#000000" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          <circle cx="162" cy="157" r="14" stroke="#ffffff" strokeWidth="1.2" opacity="0.5" />
        </svg>
      </div>
    );
  }

  // DEFAULT FALLBACK
  return (
    <div className={`flex flex-col items-center justify-center p-6 bg-slate-100 text-slate-500 rounded-lg ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider mb-1">CliGraphics Sample</span>
      <span className="text-sm font-medium">{productSlug || 'Product Preview'}</span>
    </div>
  );
};

