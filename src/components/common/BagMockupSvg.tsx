import React from 'react';

interface BagMockupSvgProps {
  modelType: string; // 'tote-front' | 'tote-back' | 'messenger-front' | 'messenger-back' | 'shopper-front' | 'shopper-back'
  bagColor: string; // Hex color code
  className?: string;
  isOverlay?: boolean; // When true, renders ONLY the straps/handles layer on top of artwork
}

export const BagMockupSvg: React.FC<BagMockupSvgProps> = ({
  modelType,
  bagColor,
  className = 'w-full h-full',
  isOverlay = false,
}) => {
  // If overlay is requested, only render the strap elements that cross over the canvas
  if (isOverlay) {
    if (modelType.startsWith('tote')) {
      return (
        <svg viewBox="0 0 600 650" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Straps overlay with realistic drop shadow and stitches */}
          <g filter="url(#strapShadow)">
            {/* Left Strap loop coming down over bag rim */}
            <path
              d="M205 210 C205 130 230 60 300 60 C370 60 395 130 395 210"
              stroke="#D2B48C"
              strokeWidth="28"
              strokeLinecap="round"
              className="opacity-95"
            />
            {/* Darker inner strap crease */}
            <path
              d="M205 210 C205 130 230 60 300 60 C370 60 395 130 395 210"
              stroke="#8B7355"
              strokeWidth="24"
              strokeLinecap="round"
              className="opacity-30"
            />
            {/* Left Handle Anchor Patch & X-Stitch */}
            <rect x="190" y="200" width="30" height="42" rx="4" fill="#C1A178" stroke="#8B7355" strokeWidth="1.5" />
            <line x1="195" y1="205" x2="215" y2="237" stroke="#68543E" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="215" y1="205" x2="195" y2="237" stroke="#68543E" strokeWidth="1.5" strokeDasharray="3 2" />

            {/* Right Handle Anchor Patch & X-Stitch */}
            <rect x="380" y="200" width="30" height="42" rx="4" fill="#C1A178" stroke="#8B7355" strokeWidth="1.5" />
            <line x1="385" y1="205" x2="405" y2="237" stroke="#68543E" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="405" y1="205" x2="385" y2="237" stroke="#68543E" strokeWidth="1.5" strokeDasharray="3 2" />
          </g>
          <defs>
            <filter id="strapShadow" x="180" y="40" width="240" height="220" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.25" />
            </filter>
          </defs>
        </svg>
      );
    }

    if (modelType.startsWith('shopper')) {
      return (
        <svg viewBox="0 0 600 650" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shopper Handles Overlay */}
          <path
            d="M210 190 C210 100 240 50 300 50 C360 50 390 100 390 190"
            stroke={bagColor}
            strokeWidth="22"
            strokeLinecap="round"
            className="filter drop-shadow-md brightness-90"
          />
          {/* Subtle stitch detail */}
          <path
            d="M210 190 C210 100 240 50 300 50 C360 50 390 100 390 190"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-40"
          />
        </svg>
      );
    }

    return null;
  }

  // BASE MOCKUP RENDERING
  if (modelType.startsWith('tote')) {
    const isBack = modelType.includes('back');
    return (
      <svg viewBox="0 0 600 650" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Bag Body 3D Gradient */}
          <linearGradient id="toteBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.0" />
            <stop offset="85%" stopColor="#000000" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.30" />
          </linearGradient>
          {/* Bottom Gusset Crease Shadow */}
          <linearGradient id="toteGussetGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
          </linearGradient>
          <filter id="bagDropShadow" x="80" y="40" width="440" height="600" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#0F172A" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer Soft Shadow */}
        <ellipse cx="300" cy="600" rx="190" ry="24" fill="#000000" opacity="0.14" />

        {/* Back Strap (shows behind bag rim) */}
        <path
          d="M215 200 C215 110 240 40 300 40 C360 40 385 110 385 200"
          stroke="#C1A178"
          strokeWidth="26"
          strokeLinecap="round"
          filter="brightness(0.85)"
        />

        {/* MAIN BAG BODY */}
        <g filter="url(#bagDropShadow)">
          {/* Bag Body Base Fill */}
          <path
            d="M 140 210
               Q 138 215 142 560
               Q 145 585 170 585
               L 430 585
               Q 455 585 458 560
               Q 462 215 460 210
               Z"
            fill={bagColor}
          />
          {/* Fabric Shading Overlay */}
          <path
            d="M 140 210
               Q 138 215 142 560
               Q 145 585 170 585
               L 430 585
               Q 455 585 458 560
               Q 462 215 460 210
               Z"
            fill="url(#toteBodyGrad)"
          />
        </g>

        {/* Bag Top Hem / Fold Lip */}
        <path
          d="M 140 210 L 460 210 L 458 226 L 142 226 Z"
          fill="#000000"
          opacity="0.12"
        />
        {/* Double Top Stitch Line */}
        <line x1="145" y1="216" x2="455" y2="216" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.45" />
        <line x1="145" y1="222" x2="455" y2="222" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.45" />

        {/* Side Seams */}
        <line x1="152" y1="228" x2="152" y2="570" stroke="#000000" strokeWidth="1.5" opacity="0.15" />
        <line x1="448" y1="228" x2="448" y2="570" stroke="#000000" strokeWidth="1.5" opacity="0.15" />

        {/* Bottom Gusset Triangular Fold Accents */}
        <polygon points="144,570 180,585 146,585" fill="#000000" opacity="0.25" />
        <polygon points="456,570 420,585 454,585" fill="#000000" opacity="0.25" />
        <line x1="170" y1="584" x2="430" y2="584" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />

        {/* Front Strap Base Rendering (Anchors) */}
        <g>
          {/* Left Handle Loop */}
          <path
            d="M205 210 C205 130 230 60 300 60 C370 60 395 130 395 210"
            stroke="#D2B48C"
            strokeWidth="28"
            strokeLinecap="round"
          />
          {/* Left Handle Anchor */}
          <rect x="190" y="200" width="30" height="42" rx="4" fill="#C1A178" stroke="#8B7355" strokeWidth="1.5" />
          <line x1="195" y1="205" x2="215" y2="237" stroke="#68543E" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="215" y1="205" x2="195" y2="237" stroke="#68543E" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Right Handle Anchor */}
          <rect x="380" y="200" width="30" height="42" rx="4" fill="#C1A178" stroke="#8B7355" strokeWidth="1.5" />
          <line x1="385" y1="205" x2="405" y2="237" stroke="#68543E" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="405" y1="205" x2="385" y2="237" stroke="#68543E" strokeWidth="1.5" strokeDasharray="3 2" />
        </g>

        {/* Subtle view identifier pill inside mockup */}
        <g transform="translate(470, 220)">
          <rect width="60" height="22" rx="11" fill="#0F172A" opacity="0.6" />
          <text x="30" y="15" fill="#ffffff" fontSize="10" fontWeight="600" textAnchor="middle">
            {isBack ? 'BACK' : 'FRONT'}
          </text>
        </g>
      </svg>
    );
  }

  if (modelType.startsWith('messenger')) {
    const isBack = modelType.includes('back');
    return (
      <svg viewBox="0 0 600 650" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="msgBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.30" />
          </linearGradient>
          <filter id="msgDropShadow" x="70" y="90" width="460" height="520" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#0F172A" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Table Shadow */}
        <ellipse cx="300" cy="580" rx="200" ry="22" fill="#000000" opacity="0.16" />

        {/* Diagonal Shoulder Webbing Strap */}
        <path
          d="M 100 240 C 90 120 220 50 300 50 C 380 50 510 120 500 240"
          stroke="#1F2937"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M 100 240 C 90 120 220 50 300 50 C 380 50 510 120 500 240"
          stroke="#4B5563"
          strokeWidth="6"
          strokeDasharray="6 6"
        />

        {/* Main Messenger Body */}
        <g filter="url(#msgDropShadow)">
          <rect x="110" y="220" width="380" height="330" rx="18" fill={bagColor} />
          <rect x="110" y="220" width="380" height="330" rx="18" fill="url(#msgBodyGrad)" />
        </g>

        {!isBack ? (
          // FRONT FLAP
          <g>
            <path
              d="M 110 220
                 L 490 220
                 Q 490 410 480 430
                 Q 470 445 440 445
                 L 160 445
                 Q 130 445 120 430
                 Q 110 410 110 220 Z"
              fill={bagColor}
              stroke="#000000"
              strokeWidth="1.5"
              strokeOpacity="0.15"
            />
            {/* Flap edge shadow */}
            <path
              d="M 120 445 L 480 445 L 476 454 L 124 454 Z"
              fill="#000000"
              opacity="0.25"
            />
            {/* Left Quick-Release Buckle */}
            <rect x="180" y="420" width="24" height="42" rx="4" fill="#1E293B" />
            <rect x="185" y="432" width="14" height="4" rx="1" fill="#94A3B8" />
            <path d="M 192 462 L 192 510" stroke="#0F172A" strokeWidth="12" strokeLinecap="square" />

            {/* Right Quick-Release Buckle */}
            <rect x="396" y="420" width="24" height="42" rx="4" fill="#1E293B" />
            <rect x="401" y="432" width="14" height="4" rx="1" fill="#94A3B8" />
            <path d="M 408 462 L 408 510" stroke="#0F172A" strokeWidth="12" strokeLinecap="square" />

            {/* White Decorative Flap Stitching */}
            <line x1="130" y1="230" x2="470" y2="230" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />
            <line x1="130" y1="435" x2="470" y2="435" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />
          </g>
        ) : (
          // BACK PANEL WITH LUGGAGE TROLLEY SLEEVE
          <g>
            {/* Trolley Sleeve Band */}
            <rect x="110" y="320" width="380" height="90" fill="#000000" opacity="0.18" />
            <line x1="110" y1="320" x2="490" y2="320" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
            <line x1="110" y1="410" x2="490" y2="410" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
            {/* Rear Zipper Pocket */}
            <rect x="150" y="250" width="300" height="12" rx="3" fill="#1E293B" opacity="0.8" />
            <circle cx="160" cy="256" r="4" fill="#94A3B8" />
          </g>
        )}

        <g transform="translate(470, 230)">
          <rect width="60" height="22" rx="11" fill="#0F172A" opacity="0.6" />
          <text x="30" y="15" fill="#ffffff" fontSize="10" fontWeight="600" textAnchor="middle">
            {isBack ? 'BACK' : 'FRONT'}
          </text>
        </g>
      </svg>
    );
  }

  // DEFAULT / RECYCLED COTTON SHOPPER
  const isBack = modelType.includes('back');
  return (
    <svg viewBox="0 0 600 650" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shopperBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.20" />
        </linearGradient>
        <filter id="shopperDropShadow" x="90" y="70" width="420" height="560" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.12" />
        </filter>
      </defs>

      <ellipse cx="300" cy="590" rx="170" ry="20" fill="#000000" opacity="0.12" />

      {/* Shopper Back Strap */}
      <path
        d="M210 190 C210 90 240 40 300 40 C360 40 390 90 390 190"
        stroke={bagColor}
        strokeWidth="24"
        strokeLinecap="round"
        className="filter brightness-75"
      />

      {/* Main Bag Body */}
      <g filter="url(#shopperDropShadow)">
        <path
          d="M 150 190
             Q 148 200 152 560
             Q 155 580 180 580
             L 420 580
             Q 445 580 448 560
             Q 452 200 450 190
             Z"
          fill={bagColor}
        />
        <path
          d="M 150 190
             Q 148 200 152 560
             Q 155 580 180 580
             L 420 580
             Q 445 580 448 560
             Q 452 200 450 190
             Z"
          fill="url(#shopperBodyGrad)"
        />
      </g>

      {/* Front Strap */}
      <path
        d="M210 190 C210 100 240 50 300 50 C360 50 390 100 390 190"
        stroke={bagColor}
        strokeWidth="24"
        strokeLinecap="round"
        className="filter brightness-90"
      />
      {/* Contrast Stitch Details */}
      <path
        d="M210 190 C210 100 240 50 300 50 C360 50 390 100 390 190"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      />

      <line x1="155" y1="200" x2="445" y2="200" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />

      <g transform="translate(460, 200)">
        <rect width="60" height="22" rx="11" fill="#0F172A" opacity="0.6" />
        <text x="30" y="15" fill="#ffffff" fontSize="10" fontWeight="600" textAnchor="middle">
          {isBack ? 'BACK' : 'FRONT'}
        </text>
      </g>
    </svg>
  );
};

