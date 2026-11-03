import React from 'react';

export const ConferenceHeroSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Clean, Daylight Promotional & Conference Products Showcase Graphic (NO background text collisions) */}
      <svg
        viewBox="0 0 600 480"
        className="w-full h-full max-h-[460px] drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft daylight floor shadow */}
          <radialGradient id="floorRadialGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B3B60" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0B3B60" stopOpacity="0.0" />
          </radialGradient>

          {/* Tote Fabric Gradient */}
          <linearGradient id="heroToteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F4C7E" />
            <stop offset="50%" stopColor="#0B3B60" />
            <stop offset="100%" stopColor="#072238" />
          </linearGradient>

          {/* Tan Strap Gradient */}
          <linearGradient id="heroStrapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EAE1D1" />
            <stop offset="100%" stopColor="#C4B49C" />
          </linearGradient>

          {/* Stainless Tumbler Gradient */}
          <linearGradient id="heroSteelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="40%" stopColor="#38BDF8" />
            <stop offset="70%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          {/* Journal Cover Gradient */}
          <linearGradient id="heroJournalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <filter id="heroItemShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Ambient Display Pedestal / Table Surface */}
        <ellipse cx="300" cy="385" rx="270" ry="55" fill="url(#floorRadialGlow)" />
        <ellipse cx="300" cy="375" rx="240" ry="40" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <ellipse cx="300" cy="375" rx="230" ry="36" fill="#F8FAFC" />

        {/* 1. PRODUCT: Executive Conference Tote Bag (Center-Left) */}
        <g transform="translate(110, 130)" filter="url(#heroItemShadow)">
          {/* Straps */}
          <path
            d="M 68 85 C 68 18 90 -5 115 -5 C 140 -5 162 18 162 85"
            stroke="url(#heroStrapGrad)"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tote Bag Body */}
          <path
            d="M 30 82 L 200 82 L 190 248 C 189 256 183 262 175 262 L 55 262 C 47 262 41 256 40 248 Z"
            fill="url(#heroToteGrad)"
          />
          {/* Side Stitch Accents */}
          <path d="M 44 88 L 54 256" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
          <path d="M 186 88 L 176 256" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
          {/* Front Imprint Area */}
          <rect x="70" y="125" width="90" height="70" rx="5" fill="#ffffff" fillOpacity="0.12" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.35" />
          <circle cx="115" cy="150" r="14" stroke="#ffffff" strokeWidth="1.8" fill="none" opacity="0.8" />
          <path d="M 108 150 L 122 150 M 115 143 L 115 157" stroke="#ffffff" strokeWidth="1.8" opacity="0.8" />
          <rect x="85" y="172" width="60" height="6" rx="1.5" fill="#ffffff" opacity="0.75" />
          <rect x="95" y="181" width="40" height="4" rx="1" fill="#FDBA74" opacity="0.9" />
        </g>

        {/* 2. PRODUCT: Full-Color Conference Lanyard & Attendee Badge (Center-Front) */}
        <g transform="translate(230, 210)" filter="url(#heroItemShadow)">
          {/* Woven Blue Lanyard Ribbons */}
          <path d="M 25 10 C 25 80 58 115 65 125" stroke="#0284C7" strokeWidth="15" strokeLinecap="round" />
          <path d="M 105 10 C 105 80 72 115 65 125" stroke="#0284C7" strokeWidth="15" strokeLinecap="round" />
          {/* Ribbon White Stitching */}
          <path d="M 25 15 C 25 80 58 115 65 125" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.8" />
          <path d="M 105 15 C 105 80 72 115 65 125" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.8" />
          {/* Metal Swivel Clasp */}
          <rect x="58" y="122" width="14" height="12" rx="2" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
          <path d="M 65 134 L 65 145" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
          {/* Clear Vinyl Badge Sleeve */}
          <rect x="25" y="145" width="80" height="54" rx="4" fill="#ffffff" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="25" y="145" width="80" height="12" rx="2" fill="#E65100" />
          <circle cx="65" cy="151" r="3" fill="#ffffff" />
          {/* Badge Attendee Photo & Info */}
          <rect x="33" y="163" width="20" height="26" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />
          <circle cx="43" cy="171" r="4.5" fill="#94A3B8" />
          <path d="M 35 187 C 35 180 40 178 43 178 C 46 178 51 180 51 187 Z" fill="#94A3B8" />
          <rect x="58" y="165" width="40" height="5" rx="1" fill="#0B3B60" />
          <rect x="58" y="173" width="28" height="4" rx="1" fill="#64748B" />
          <rect x="58" y="180" width="20" height="3" rx="1" fill="#94A3B8" />
        </g>

        {/* 3. PRODUCT: Double-Wall Stainless Tumbler (Right) */}
        <g transform="translate(360, 200)" filter="url(#heroItemShadow)">
          {/* Tumbler Body */}
          <path d="M 15 40 L 75 40 L 66 180 C 65 186 60 190 54 190 L 36 190 C 30 190 25 186 24 180 Z" fill="url(#heroSteelGrad)" />
          {/* Stainless Top Rim */}
          <ellipse cx="45" cy="40" rx="30" ry="5.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
          {/* Acrylic Sip Lid */}
          <path d="M 18 40 C 18 31 30 25 45 25 C 60 25 72 31 72 40 Z" fill="#F1F5F9" fillOpacity="0.85" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="36" y="22" width="18" height="6" rx="1.5" fill="#64748B" />
          {/* Engraved Circular Emblem */}
          <circle cx="45" cy="100" r="14" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.75" />
          <circle cx="45" cy="100" r="8" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
        </g>

        {/* 4. PRODUCT: Hardcover Keynote Journal & Stylus Pen (Far Right) */}
        <g transform="translate(435, 230)" filter="url(#heroItemShadow)">
          {/* Hardcover Notebook */}
          <rect x="25" y="30" width="80" height="120" rx="5" fill="url(#heroJournalGrad)" stroke="#334155" strokeWidth="1" />
          <line x1="34" y1="30" x2="34" y2="150" stroke="#000000" strokeWidth="2.5" opacity="0.4" />
          <rect x="88" y="30" width="7" height="120" fill="#0284C7" opacity="0.5" />
          {/* Orange Bookmark Ribbon */}
          <path d="M 55 30 L 55 158 L 59 154 L 63 158 L 63 30 Z" fill="#E65100" />
          {/* Embossed Crest */}
          <rect x="44" y="70" width="38" height="30" rx="2" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          {/* Executive Metal Stylus Pen resting in front */}
          <g transform="translate(-10, 125) rotate(-18)">
            <rect x="0" y="0" width="95" height="8" rx="2" fill="#E65100" />
            <polygon points="95,0 106,4 95,8" fill="#475569" />
            <ellipse cx="107" cy="4" rx="1.5" ry="2.5" fill="#0F172A" />
            <rect x="-6" y="1" width="7" height="6" rx="1" fill="#E2E8F0" />
            <path d="M 0 3 L 26 3" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
};
