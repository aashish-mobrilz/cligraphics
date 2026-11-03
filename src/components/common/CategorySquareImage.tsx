import React from 'react';

interface CategorySquareImageProps {
  categoryId: string;
  className?: string;
}

export const CategorySquareImage: React.FC<CategorySquareImageProps> = ({
  categoryId,
  className = 'w-full h-full object-contain',
}) => {
  switch (categoryId) {
    // 1. BAGS
    case 'bags':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="toteFabric" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B3B60" />
                <stop offset="100%" stopColor="#072238" />
              </linearGradient>
              <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E2D9C8" />
                <stop offset="100%" stopColor="#C8BAA2" />
              </linearGradient>
              <filter id="softBagDrop" x="-10%" y="0%" width="120%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.12" />
              </filter>
            </defs>
            {/* Soft Shadow */}
            <ellipse cx="120" cy="216" rx="72" ry="10" fill="#000000" opacity="0.1" />
            {/* Straps */}
            <path
              d="M 85 85 C 85 28 100 18 120 18 C 140 18 155 28 155 85"
              stroke="url(#strapGrad)"
              strokeWidth="11"
              strokeLinecap="round"
              fill="none"
            />
            {/* Bag Body */}
            <g filter="url(#softBagDrop)">
              <path
                d="M 52 82 L 188 82 L 180 208 C 179 214 174 218 168 218 L 72 218 C 66 218 61 214 60 208 Z"
                fill="url(#toteFabric)"
              />
            </g>
            {/* Gusset Stitch line */}
            <path d="M 62 88 L 70 216" stroke="#1E5B8E" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 178 88 L 170 216" stroke="#1E5B8E" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Imprint Crest */}
            <rect x="84" y="118" width="72" height="54" rx="4" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="120" cy="138" r="10" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8" />
            <text x="120" y="160" fill="#ffffff" fontSize="7.5" fontWeight="800" textAnchor="middle" letterSpacing="1">CLIGRAPHICS</text>
            <text x="120" y="168" fill="#FDBA74" fontSize="5" fontWeight="700" textAnchor="middle" letterSpacing="0.5">EST. 1997</text>
          </svg>
        </div>
      );

    // 2. LANYARDS
    case 'lanyards':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lanyardBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
            </defs>
            {/* Lanyard Strap Loop */}
            <path
              d="M 68 25 C 68 115 110 148 118 155"
              stroke="url(#lanyardBlue)"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <path
              d="M 172 25 C 172 115 130 148 122 155"
              stroke="url(#lanyardBlue)"
              strokeWidth="15"
              strokeLinecap="round"
            />
            {/* Ribbon printed text pattern */}
            <path
              d="M 68 30 C 68 115 110 148 118 155"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeDasharray="10 8"
              opacity="0.8"
            />
            <path
              d="M 172 30 C 172 115 130 148 122 155"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeDasharray="10 8"
              opacity="0.8"
            />
            {/* Metal Crimp & Swivel Lobster Clasp */}
            <rect x="112" y="152" width="16" height="13" rx="2" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
            <path d="M 120 165 L 120 178" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
            <circle cx="120" cy="180" r="4.5" stroke="#475569" strokeWidth="2.5" fill="none" />
            {/* Badge Holder with Attendee Card */}
            <g>
              <rect x="80" y="184" width="80" height="48" rx="4" fill="#ffffff" stroke="#CBD5E1" strokeWidth="1.5" />
              {/* Badge Top Header */}
              <rect x="80" y="184" width="80" height="10" rx="2" fill="#E65100" />
              <circle cx="120" cy="188" r="2.5" fill="#ffffff" />
              {/* Attendee Photo & Info lines */}
              <rect x="87" y="198" width="18" height="22" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />
              <circle cx="96" cy="205" r="4" fill="#94A3B8" />
              <path d="M 89 218 C 89 213 93 211 96 211 C 99 211 103 213 103 218 Z" fill="#94A3B8" />
              <rect x="110" y="200" width="44" height="4" rx="1" fill="#0B3B60" />
              <rect x="110" y="207" width="32" height="3" rx="1" fill="#64748B" />
              <rect x="110" y="213" width="22" height="2.5" rx="1" fill="#94A3B8" />
            </g>
          </svg>
        </div>
      );

    // 3. DRINKWARE
    case 'drinkware':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tumblerBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0E3352" />
                <stop offset="35%" stopColor="#1E5B8E" />
                <stop offset="70%" stopColor="#0B3B60" />
                <stop offset="100%" stopColor="#072238" />
              </linearGradient>
              <linearGradient id="steelShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="50%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
            </defs>
            {/* Soft Shadow */}
            <ellipse cx="120" cy="216" rx="55" ry="8" fill="#000000" opacity="0.1" />
            {/* Stainless Steel Insulated Tumbler */}
            <path
              d="M 84 55 L 156 55 L 146 208 C 145 214 140 218 134 218 L 106 218 C 100 218 95 214 94 208 Z"
              fill="url(#tumblerBody)"
            />
            {/* Stainless Top Rim */}
            <ellipse cx="120" cy="55" rx="36" ry="6" fill="url(#steelShine)" stroke="#94A3B8" strokeWidth="1" />
            {/* Acrylic Lid */}
            <path d="M 88 55 C 88 46 102 40 120 40 C 138 40 152 46 152 55 Z" fill="#F1F5F9" fillOpacity="0.8" stroke="#CBD5E1" strokeWidth="1.2" />
            <rect x="110" y="37" width="20" height="6" rx="1.5" fill="#64748B" />
            {/* Laser Engraved Logo mark */}
            <circle cx="120" cy="120" r="14" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.75" />
            <path d="M 115 120 L 125 120 M 120 115 L 120 125" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            <text x="120" y="142" fill="#ffffff" fontSize="6" fontWeight="700" textAnchor="middle" opacity="0.8">CLIGRAPHICS</text>
          </svg>
        </div>
      );

    // 4. PENS
    case 'pens':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="penBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0B3B60" />
                <stop offset="50%" stopColor="#1E5B8E" />
                <stop offset="100%" stopColor="#072238" />
              </linearGradient>
              <linearGradient id="penOrange" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E65100" />
                <stop offset="50%" stopColor="#FB8C00" />
                <stop offset="100%" stopColor="#C64500" />
              </linearGradient>
            </defs>
            {/* Pen 1 (Navy Executive Stylus Pen) - Angled */}
            <g transform="translate(120, 120) rotate(-42) translate(-120, -120)">
              {/* Drop shadow */}
              <rect x="42" y="118" width="160" height="12" rx="3" fill="#000000" opacity="0.1" />
              {/* Plunger */}
              <rect x="36" y="112" width="10" height="8" rx="1.5" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="0.8" />
              {/* Barrel */}
              <rect x="46" y="110" width="140" height="12" rx="3" fill="url(#penBlue)" />
              {/* Clip */}
              <path d="M 46 116 L 90 116 Q 94 116 92 120" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
              {/* Chrome ring */}
              <line x1="130" y1="110" x2="130" y2="122" stroke="#E2E8F0" strokeWidth="2" />
              {/* Nose cone & Stylus */}
              <polygon points="186,110 204,116 186,122" fill="#64748B" />
              <ellipse cx="206" cy="116" rx="2.5" ry="4" fill="#0F172A" />
              {/* Engraved logo */}
              <text x="110" y="118" fill="#ffffff" fontSize="4.5" fontWeight="700" letterSpacing="0.8" opacity="0.8">CLIGRAPHICS</text>
            </g>
            {/* Pen 2 (Vibrant Orange Value Pen) - Counter angled */}
            <g transform="translate(120, 120) rotate(-16) translate(-120, -120)">
              <rect x="46" y="130" width="140" height="11" rx="2.5" fill="url(#penOrange)" />
              <polygon points="186,130 202,135.5 186,141" fill="#475569" />
              <rect x="38" y="132" width="8" height="7" rx="1" fill="#E2E8F0" />
              <path d="M 46 135 L 85 135" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      );

    // 5. APPAREL
    case 'apparel':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="poloFabric" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="50%" stopColor="#1E40AF" />
                <stop offset="100%" stopColor="#172554" />
              </linearGradient>
            </defs>
            {/* Soft Shadow */}
            <ellipse cx="120" cy="216" rx="65" ry="9" fill="#000000" opacity="0.08" />
            {/* Polo Body & Sleeves */}
            <path
              d="M 80 52 L 40 88 L 62 114 L 78 100 L 78 210 C 78 214 82 216 86 216 L 154 216 C 158 216 162 214 162 210 L 162 100 L 178 114 L 200 88 L 160 52 Z"
              fill="url(#poloFabric)"
            />
            {/* Collar */}
            <polygon points="80,52 120,74 160,52 135,46 120,54 105,46" fill="#0F172A" opacity="0.3" />
            {/* Placket */}
            <polygon points="102,54 120,95 138,54" fill="#ffffff" opacity="0.15" />
            <rect x="115" y="60" width="10" height="36" rx="1" fill="#172554" />
            <circle cx="120" cy="68" r="1.8" fill="#E2E8F0" />
            <circle cx="120" cy="78" r="1.8" fill="#E2E8F0" />
            <circle cx="120" cy="88" r="1.8" fill="#E2E8F0" />
            {/* Left Chest Embroidered Crest */}
            <circle cx="100" cy="100" r="5" stroke="#FDBA74" strokeWidth="1.2" fill="none" />
            <path d="M 98 100 L 102 100" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>
      );

    // 6. TECHNOLOGY
    case 'technology':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="powerbankCase" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>
            {/* Soft Shadow */}
            <ellipse cx="120" cy="214" rx="60" ry="8" fill="#000000" opacity="0.1" />
            {/* Power Bank Casing */}
            <rect x="65" y="50" width="110" height="154" rx="14" fill="url(#powerbankCase)" stroke="#475569" strokeWidth="1.5" />
            {/* Fast Charging Ring / Pad */}
            <circle cx="120" cy="120" r="32" stroke="#0284C7" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="120" cy="120" r="22" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5" />
            {/* Bolt Icon */}
            <path d="M 122 108 L 114 121 L 121 121 L 118 132 L 126 119 L 119 119 Z" fill="#38BDF8" />
            {/* LED Status Bar */}
            <circle cx="85" cy="68" r="2.2" fill="#38BDF8" />
            <circle cx="93" cy="68" r="2.2" fill="#38BDF8" />
            <circle cx="101" cy="68" r="2.2" fill="#38BDF8" />
            <circle cx="109" cy="68" r="2.2" fill="#64748B" />
            <text x="120" y="184" fill="#ffffff" fontSize="7" fontWeight="700" textAnchor="middle" letterSpacing="1" opacity="0.8">CLIGRAPHICS 10,000mAh</text>
            {/* Braided 3-in-1 Cable Connector */}
            <path d="M 148 40 L 148 50" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
            <rect x="142" y="32" width="12" height="10" rx="2" fill="#64748B" />
          </svg>
        </div>
      );

    // 7. JOURNALS AND NOTEBOOKS
    case 'journals-and-notebooks':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="journalCover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B3B60" />
                <stop offset="100%" stopColor="#072238" />
              </linearGradient>
            </defs>
            {/* Soft Shadow */}
            <ellipse cx="120" cy="216" rx="60" ry="8" fill="#000000" opacity="0.1" />
            {/* Hardcover Journal */}
            <rect x="62" y="36" width="116" height="172" rx="6" fill="url(#journalCover)" stroke="#1E40AF" strokeWidth="1" />
            {/* Spine Crease */}
            <line x1="74" y1="36" x2="74" y2="208" stroke="#000000" strokeWidth="2.5" opacity="0.35" />
            {/* Page Block Edge */}
            <path d="M 178 42 L 184 46 L 184 202 L 178 206 Z" fill="#F8FAFC" stroke="#E2E8F0" />
            {/* Elastic Band */}
            <rect x="160" y="36" width="8" height="172" fill="#0F172A" opacity="0.4" />
            {/* Ribbon Marker */}
            <path d="M 112 36 L 112 216 L 116 212 L 120 216 L 120 36 Z" fill="#E65100" />
            {/* Embossed Logo Badge */}
            <rect x="90" y="96" width="54" height="42" rx="3" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
            <circle cx="117" cy="114" r="9" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
            <text x="117" y="130" fill="#ffffff" fontSize="5" fontWeight="700" textAnchor="middle" opacity="0.8">CONFERENCE</text>
          </svg>
        </div>
      );

    // 8. PRINTING
    case 'printing':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="printBookCover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
            </defs>
            {/* Soft Shadow */}
            <ellipse cx="120" cy="216" rx="65" ry="8" fill="#000000" opacity="0.1" />
            {/* Bottom Brochure / Flyer Fan */}
            <g transform="translate(10, 10) rotate(-8 120 120)">
              <rect x="60" y="55" width="120" height="150" rx="4" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="66" y="65" width="40" height="8" rx="1" fill="#E65100" />
              <rect x="66" y="80" width="108" height="5" rx="1" fill="#94A3B8" />
              <rect x="66" y="90" width="90" height="4" rx="1" fill="#CBD5E1" />
            </g>
            {/* Main Conference Program Booklet */}
            <g>
              <rect x="70" y="42" width="115" height="162" rx="4" fill="url(#printBookCover)" stroke="#0284C7" strokeWidth="1.5" />
              {/* Spiral Coil Binding or Spine */}
              <g stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round">
                <line x1="70" y1="52" x2="65" y2="52" />
                <line x1="70" y1="66" x2="65" y2="66" />
                <line x1="70" y1="80" x2="65" y2="80" />
                <line x1="70" y1="94" x2="65" y2="94" />
                <line x1="70" y1="108" x2="65" y2="108" />
                <line x1="70" y1="122" x2="65" y2="122" />
                <line x1="70" y1="136" x2="65" y2="136" />
                <line x1="70" y1="150" x2="65" y2="150" />
                <line x1="70" y1="164" x2="65" y2="164" />
                <line x1="70" y1="178" x2="65" y2="178" />
                <line x1="70" y1="192" x2="65" y2="192" />
              </g>
              {/* Booklet Cover Artwork */}
              <rect x="82" y="56" width="92" height="60" rx="3" fill="#ffffff" fillOpacity="0.15" />
              <circle cx="128" cy="86" r="16" fill="#F59E0B" fillOpacity="0.8" />
              <text x="128" y="134" fill="#ffffff" fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="1">2027 PROGRAM GUIDE</text>
              <text x="128" y="145" fill="#93C5FD" fontSize="5.5" fontWeight="600" textAnchor="middle">ANNUAL CONVENTION PROCEEDINGS</text>
              <rect x="85" y="160" width="86" height="4" rx="1" fill="#ffffff" opacity="0.3" />
              <rect x="85" y="168" width="60" height="4" rx="1" fill="#ffffff" opacity="0.3" />
            </g>
          </svg>
        </div>
      );

    // 9. FULFILLMENT AND DIRECT MAIL
    case 'fulfillment-and-direct-mail':
      return (
        <div className={`relative flex items-center justify-center p-3 bg-white ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="boxFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2D0B6" />
                <stop offset="100%" stopColor="#C8B396" />
              </linearGradient>
              <linearGradient id="boxTop" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5E8D3" />
                <stop offset="100%" stopColor="#DEC7A7" />
              </linearGradient>
            </defs>
            {/* Soft Shadow */}
            <ellipse cx="120" cy="216" rx="65" ry="9" fill="#000000" opacity="0.1" />
            {/* 3D Kitted Attendee Swag Box */}
            {/* Box Top Flap */}
            <polygon points="120,62 188,96 120,130 52,96" fill="url(#boxTop)" stroke="#A99374" strokeWidth="1" />
            {/* Box Left Side */}
            <polygon points="52,96 120,130 120,204 52,170" fill="url(#boxFront)" stroke="#A99374" strokeWidth="1" />
            {/* Box Right Side */}
            <polygon points="120,130 188,96 188,170 120,204" fill="#BFA98A" stroke="#A99374" strokeWidth="1" />
            {/* Shipping Label on Front Left */}
            <g transform="translate(64, 126) rotate(-10)">
              <rect x="0" y="0" width="38" height="26" rx="2" fill="#ffffff" stroke="#CBD5E1" strokeWidth="0.8" />
              <rect x="4" y="4" width="30" height="3" rx="0.5" fill="#0B3B60" />
              <rect x="4" y="9" width="20" height="2" rx="0.5" fill="#64748B" />
              {/* Mini barcode */}
              <line x1="4" y1="14" x2="4" y2="22" stroke="#000000" strokeWidth="1.2" />
              <line x1="8" y1="14" x2="8" y2="22" stroke="#000000" strokeWidth="0.8" />
              <line x1="11" y1="14" x2="11" y2="22" stroke="#000000" strokeWidth="1.5" />
              <line x1="15" y1="14" x2="15" y2="22" stroke="#000000" strokeWidth="0.8" />
              <line x1="18" y1="14" x2="18" y2="22" stroke="#000000" strokeWidth="1.2" />
              <line x1="22" y1="14" x2="22" y2="22" stroke="#000000" strokeWidth="1.8" />
              <line x1="27" y1="14" x2="27" y2="22" stroke="#000000" strokeWidth="0.8" />
              <line x1="31" y1="14" x2="31" y2="22" stroke="#000000" strokeWidth="1.2" />
            </g>
            {/* Direct Convention Freight Delivery Stamp */}
            <circle cx="155" cy="150" r="14" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.8" />
            <text x="155" y="148" fill="#DC2626" fontSize="5" fontWeight="800" textAnchor="middle" opacity="0.85">DIRECT</text>
            <text x="155" y="155" fill="#DC2626" fontSize="4.5" fontWeight="800" textAnchor="middle" opacity="0.85">FREIGHT</text>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`flex items-center justify-center p-3 bg-white text-slate-400 ${className}`}>
          <span className="text-xs font-bold uppercase">{categoryId}</span>
        </div>
      );
  }
};

