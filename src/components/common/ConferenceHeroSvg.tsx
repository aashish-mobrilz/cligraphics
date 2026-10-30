import React from 'react';

export const ConferenceHeroSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Graphic representing a modern convention hall registration and staging hall */}
      <svg
        viewBox="0 0 1200 640"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroSky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B2338" />
            <stop offset="50%" stopColor="#0E3352" />
            <stop offset="100%" stopColor="#13476E" />
          </linearGradient>
          <linearGradient id="tableTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="bannerGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E65100" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="stageSpotlight" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0B2338" stopOpacity="0.0" />
          </radialGradient>
        </defs>

        {/* Hall Architecture Background */}
        <rect width="1200" height="640" fill="url(#heroSky)" />
        <rect width="1200" height="640" fill="url(#stageSpotlight)" />

        {/* Conference Stage Truss & Architectural Ceiling Columns */}
        <g opacity="0.18" stroke="#ffffff" strokeWidth="2">
          <line x1="100" y1="0" x2="100" y2="400" />
          <line x1="300" y1="0" x2="300" y2="380" />
          <line x1="900" y1="0" x2="900" y2="380" />
          <line x1="1100" y1="0" x2="1100" y2="400" />
          <line x1="0" y1="80" x2="1200" y2="80" />
          <line x1="0" y1="120" x2="1200" y2="120" />
          {/* Cross braces */}
          <line x1="100" y1="80" x2="300" y2="120" />
          <line x1="300" y1="80" x2="100" y2="120" />
          <line x1="900" y1="80" x2="1100" y2="120" />
          <line x1="1100" y1="80" x2="900" y2="120" />
        </g>

        {/* Main Keynote Presentation Backwall Screen */}
        <rect x="250" y="70" width="700" height="260" rx="12" fill="#0B1D2D" stroke="#1E40AF" strokeWidth="3" />
        <rect x="260" y="80" width="680" height="240" rx="8" fill="#0F172A" />

        {/* Dynamic Presentation Graphics on screen */}
        <g>
          <circle cx="600" cy="180" r="45" fill="none" stroke="url(#bannerGlow)" strokeWidth="6" strokeDasharray="18 10" />
          <text x="600" y="175" fill="#ffffff" fontSize="24" fontWeight="800" textAnchor="middle" letterSpacing="3">CLIGRAPHICS</text>
          <text x="600" y="200" fill="#93C5FD" fontSize="13" fontWeight="600" textAnchor="middle" letterSpacing="2">ONE SOURCE FOR ALL YOUR CONFERENCE NEEDS</text>
          <line x1="420" y1="230" x2="780" y2="230" stroke="#334155" strokeWidth="1.5" />
          <text x="600" y="250" fill="#FDBA74" fontSize="12" fontWeight="700" textAnchor="middle">ESTABLISHED JANUARY, 1997 &bull; CELEBRATING 30 YEARS</text>
        </g>

        {/* Registration & Welcome Desk Table Surface */}
        <path d="M 0 420 L 1200 420 L 1200 640 L 0 640 Z" fill="url(#tableTop)" />
        <line x1="0" y1="420" x2="1200" y2="420" stroke="#334155" strokeWidth="4" />

        {/* Blue Table Skirt Drape */}
        <path d="M 0 435 L 1200 435 L 1200 640 L 0 640 Z" fill="#0A2237" opacity="0.9" />
        {/* Table Skirt Folds */}
        <g stroke="#061624" strokeWidth="4" opacity="0.6">
          <line x1="150" y1="435" x2="150" y2="640" />
          <line x1="300" y1="435" x2="300" y2="640" />
          <line x1="450" y1="435" x2="450" y2="640" />
          <line x1="600" y1="435" x2="600" y2="640" />
          <line x1="750" y1="435" x2="750" y2="640" />
          <line x1="900" y1="435" x2="900" y2="640" />
          <line x1="1050" y1="435" x2="1050" y2="640" />
        </g>

        {/* FOREGROUND CONVENTION MERCHANDISE ARRAY */}

        {/* Item 1: Executive Conference Tote (Left) */}
        <g transform="translate(180, 290)">
          {/* Drop shadow */}
          <ellipse cx="90" cy="220" rx="80" ry="14" fill="#000000" opacity="0.4" />
          {/* Straps */}
          <path d="M 50 70 C 50 10 70 -20 95 -20 C 120 -20 140 10 140 70" stroke="#D2B48C" strokeWidth="14" strokeLinecap="round" fill="none" />
          {/* Body */}
          <path d="M 25 70 L 165 70 L 160 215 L 30 215 Z" fill="#0B3B60" stroke="#1E40AF" strokeWidth="1.5" />
          {/* Imprint crest */}
          <rect x="55" y="105" width="80" height="55" rx="4" fill="#ffffff" fillOpacity="0.12" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="95" cy="125" r="12" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.7" />
          <text x="95" y="150" fill="#ffffff" fontSize="9" fontWeight="700" textAnchor="middle" opacity="0.85">CONFERENCE 2027</text>
        </g>

        {/* Item 2: Conference Lanyards Stack & Badge Sleeves (Center Left) */}
        <g transform="translate(420, 380)">
          <ellipse cx="60" cy="110" rx="55" ry="10" fill="#000000" opacity="0.3" />
          {/* Ribbon folds */}
          <path d="M 20 100 C 50 60 80 120 110 80" stroke="#E65100" strokeWidth="16" strokeLinecap="round" fill="none" />
          <path d="M 10 90 C 40 50 70 110 100 70" stroke="#0284C7" strokeWidth="16" strokeLinecap="round" fill="none" />
          {/* Badge holder */}
          <rect x="40" y="85" width="70" height="42" rx="3" fill="#ffffff" stroke="#94A3B8" strokeWidth="1" />
          <rect x="45" y="92" width="60" height="6" fill="#0B3B60" />
          <rect x="45" y="102" width="40" height="4" fill="#64748B" />
          <rect x="45" y="110" width="50" height="8" fill="#E2E8F0" />
        </g>

        {/* Item 3: Stack of Hardcover Program Books and Journals (Center) */}
        <g transform="translate(560, 360)">
          <ellipse cx="70" cy="130" rx="65" ry="10" fill="#000000" opacity="0.35" />
          {/* Book 1 (bottom) */}
          <polygon points="15,115 125,100 145,115 35,130" fill="#0F172A" stroke="#334155" />
          {/* Book 2 (middle) */}
          <polygon points="18,102 128,87 148,102 38,117" fill="#78350F" stroke="#92400E" />
          {/* Book 3 (top) */}
          <polygon points="20,89 130,74 150,89 40,104" fill="#0B3B60" stroke="#1E40AF" />
          {/* Gold Deboss Title */}
          <line x1="55" y1="89" x2="115" y2="82" stroke="#F59E0B" strokeWidth="2" opacity="0.8" />
        </g>

        {/* Item 4: Stainless Summit Tumbler & Pen (Center Right) */}
        <g transform="translate(740, 330)">
          <ellipse cx="40" cy="155" rx="30" ry="8" fill="#000000" opacity="0.3" />
          {/* Tumbler */}
          <path d="M 20 50 L 60 50 L 54 150 L 26 150 Z" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1" />
          <ellipse cx="40" cy="50" rx="20" ry="4" fill="#CBD5E1" />
          <rect x="30" y="44" width="20" height="5" rx="2" fill="#64748B" />
          {/* Pen lying down */}
          <line x1="65" y1="145" x2="115" y2="155" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* Item 5: High Volume Registration Collateral & Swag Boxes (Right) */}
        <g transform="translate(870, 300)">
          <ellipse cx="80" cy="190" rx="75" ry="12" fill="#000000" opacity="0.3" />
          {/* Swag Box */}
          <polygon points="20,130 90,100 160,130 90,160" fill="#D4A373" stroke="#8A5A36" />
          <polygon points="20,130 90,160 90,195 20,165" fill="#BC6C25" stroke="#8A5A36" />
          <polygon points="90,160 160,130 160,165 90,195" fill="#A45A1A" stroke="#8A5A36" />
          {/* White Label on Box */}
          <polygon points="40,148 70,135 70,160 40,173" fill="#ffffff" opacity="0.8" />
          {/* Brochures beside box */}
          <polygon points="135,160 175,145 190,160 150,175" fill="#E2E8F0" />
        </g>
      </svg>

      {/* Mandatory Labelled Placeholder Notice (Section 1.3 & Hallucination Prevention) */}
      <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-[11px] px-3 py-1.5 rounded border border-slate-700 flex items-center gap-1.5 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>Conference Setting Hero Visual &bull; Placeholder pending client-approved stock photograph</span>
      </div>
    </div>
  );
};

