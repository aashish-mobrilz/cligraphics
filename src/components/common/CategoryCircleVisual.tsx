import React from 'react';

interface CategoryCircleVisualProps {
  categoryId: string;
  variant?: 'promotional' | 'editorial';
  className?: string;
}

export const CategoryCircleVisual: React.FC<CategoryCircleVisualProps> = ({
  categoryId,
  variant = 'promotional',
  className = 'w-full h-full',
}) => {
  const isEditorial = variant === 'editorial';

  // Normalize ID so 'journals-and-notebooks', 'fulfillment-and-direct-mail', etc. always match
  const normalizedId = (() => {
    const id = (categoryId || '').toLowerCase().trim();
    if (id.includes('bag')) return 'bags';
    if (id.includes('lanyard')) return 'lanyards';
    if (id.includes('drink') || id.includes('mug') || id.includes('cup') || id.includes('tumbler')) return 'drinkware';
    if (id.includes('pen')) return 'pens';
    if (id.includes('apparel') || id.includes('shirt') || id.includes('polo')) return 'apparel';
    if (id.includes('tech')) return 'technology';
    if (id.includes('journal') || id.includes('notebook')) return 'journals';
    if (id.includes('print')) return 'printing';
    if (id.includes('fulfill') || id.includes('mail') || id.includes('direct')) return 'fulfillment';
    return id;
  })();

  // ===========================================================================
  // EDITORIAL ATELIER VARIANT (OPTION B):
  // Curated luxury conference materials: Cognac leather, brushed champagne brass,
  // gold foil stamping, matte obsidian, rich textiles, and architectural depth.
  // ===========================================================================
  if (isEditorial) {
    switch (normalizedId) {
      // -----------------------------------------------------------------------
      // 1. BAGS (№ 01): Executive Waxed Canvas & Bridle Leather Weekender Tote
      // -----------------------------------------------------------------------
      case 'bags':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="edBgRadial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                  <stop offset="85%" stopColor="#F5F2EB" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#E8E3D8" stopOpacity="1" />
                </radialGradient>
                <linearGradient id="edLeather" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B45309" />
                  <stop offset="40%" stopColor="#92400E" />
                  <stop offset="75%" stopColor="#78350F" />
                  <stop offset="100%" stopColor="#451A03" />
                </linearGradient>
                <linearGradient id="edGoldBrass" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="35%" stopColor="#F59E0B" />
                  <stop offset="70%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <linearGradient id="edCanvas" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#292524" />
                  <stop offset="50%" stopColor="#1C1917" />
                  <stop offset="100%" stopColor="#0C0A09" />
                </linearGradient>
                <filter id="edShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#451A03" floodOpacity="0.32" />
                </filter>
              </defs>

              {/* Outer Fine Champagne Bezel */}
              <circle cx="130" cy="130" r="126" stroke="url(#edGoldBrass)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              {/* Ambient Ground Pedestal Shadow */}
              <ellipse cx="130" cy="235" rx="85" ry="14" fill="#0C0A09" fillOpacity="0.2" />

              <g filter="url(#edShadow)">
                {/* Back Bridle Leather Handle */}
                <path d="M 96 90 C 96 15 116 8 130 8 C 144 8 164 15 164 90" stroke="url(#edLeather)" strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M 96 90 C 96 15 116 8 130 8 C 144 8 164 15 164 90" stroke="#FEF08A" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" fill="none" />

                {/* Waxed Canvas Tote Body with Structured Gusset */}
                <path d="M 46 88 L 214 88 L 202 232 C 200 238 193 243 184 243 L 76 243 C 67 243 60 238 58 232 Z" fill="url(#edCanvas)" />
                {/* Side Gusset Shading */}
                <path d="M 46 88 L 74 88 L 66 243 L 58 232 Z" fill="#000000" fillOpacity="0.4" />

                {/* Leather Top Rim Trim */}
                <rect x="44" y="86" width="172" height="18" rx="3" fill="url(#edLeather)" />
                <line x1="45" y1="104" x2="215" y2="104" stroke="#FEF08A" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 2" />

                {/* Front Leather Handles */}
                <path d="M 84 94 C 84 22 106 14 130 14 C 154 14 176 22 176 94" stroke="url(#edLeather)" strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M 84 94 C 84 22 106 14 130 14 C 154 14 176 22 176 94" stroke="#FEF08A" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" fill="none" />

                {/* Solid Brass Buckle Reinforcement Mounts */}
                <rect x="76" y="94" width="16" height="24" rx="2" fill="url(#edGoldBrass)" stroke="#78350F" strokeWidth="0.8" />
                <circle cx="84" cy="106" r="3" fill="#451A03" />
                <rect x="168" y="94" width="16" height="24" rx="2" fill="url(#edGoldBrass)" stroke="#78350F" strokeWidth="0.8" />
                <circle cx="176" cy="106" r="3" fill="#451A03" />

                {/* Luxury Debossed Leather Monogram Emblem */}
                <rect x="100" y="145" width="60" height="48" rx="6" fill="#1C1917" stroke="url(#edGoldBrass)" strokeWidth="1" />
                <rect x="103" y="148" width="54" height="42" rx="4" fill="none" stroke="url(#edGoldBrass)" strokeWidth="0.5" strokeDasharray="2 2" strokeOpacity="0.7" />
                <circle cx="130" cy="164" r="8" stroke="url(#edGoldBrass)" strokeWidth="1.2" fill="none" />
                <text x="130" y="167" fill="url(#edGoldBrass)" fontSize="7" fontWeight="bold" fontFamily="serif" textAnchor="middle">CG</text>
                <text x="130" y="182" fill="url(#edGoldBrass)" fontSize="5.5" fontWeight="bold" fontFamily="serif" letterSpacing="0.1em" textAnchor="middle">ATELIER</text>

                {/* Handcrafted Leather Hangtag */}
                <line x1="168" y1="118" x2="182" y2="148" stroke="url(#edGoldBrass)" strokeWidth="1.2" />
                <g transform="rotate(8 182 148)">
                  <rect x="174" y="146" width="22" height="34" rx="3" fill="url(#edLeather)" stroke="url(#edGoldBrass)" strokeWidth="0.8" />
                  <circle cx="185" cy="152" r="2" fill="#FEF08A" />
                  <text x="185" y="168" fill="#FEF08A" fontSize="5" fontWeight="bold" fontFamily="serif" textAnchor="middle">№ 01</text>
                </g>
              </g>

              {/* Archival Discipline Code in Top Bezel */}
              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 01</text>
            </svg>
          </div>
        );

      // -----------------------------------------------------------------------
      // 2. LANYARDS (№ 02): Grosgrain Silk Ribbon & Brushed Gold VIP Badge
      // -----------------------------------------------------------------------
      case 'lanyards':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7F1D1D" />
                  <stop offset="35%" stopColor="#991B1B" />
                  <stop offset="70%" stopColor="#B91C1C" />
                  <stop offset="100%" stopColor="#450A0A" />
                </linearGradient>
                <linearGradient id="edBadgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="30%" stopColor="#F59E0B" />
                  <stop offset="70%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <filter id="edLanyardShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#450A0A" floodOpacity="0.25" />
                </filter>
              </defs>

              <circle cx="130" cy="130" r="126" stroke="url(#edBadgeGold)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              <ellipse cx="130" cy="242" rx="65" ry="10" fill="#0C0A09" fillOpacity="0.18" />

              <g filter="url(#edLanyardShadow)">
                {/* Flowing Grosgrain Silk Ribbon */}
                <path d="M 68 8 C 68 85 96 112 122 120 L 138 120 C 164 112 192 85 192 8" stroke="url(#edRibbon)" strokeWidth="22" strokeLinecap="round" fill="none" />
                {/* Gold Stitched Borders on Ribbon */}
                <path d="M 60 8 C 60 85 90 114 120 121" stroke="url(#edBadgeGold)" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
                <path d="M 200 8 C 200 85 170 114 140 121" stroke="url(#edBadgeGold)" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />

                {/* Brushed Brass Lanyard Clasp & Swivel Trigger Hook */}
                <rect x="120" y="118" width="20" height="12" rx="3" fill="url(#edBadgeGold)" stroke="#78350F" strokeWidth="0.8" />
                <ellipse cx="130" cy="134" rx="6" ry="6" stroke="url(#edBadgeGold)" strokeWidth="3" fill="none" />
                <rect x="127" y="138" width="6" height="16" rx="2" fill="url(#edBadgeGold)" />

                {/* Heavyweight Executive VIP Accreditation Credential */}
                <rect x="74" y="152" width="112" height="84" rx="8" fill="#FAF8F5" stroke="url(#edBadgeGold)" strokeWidth="1.5" />
                {/* Gold Top Header Band */}
                <rect x="74" y="152" width="112" height="24" rx="8" fill="url(#edRibbon)" />
                <text x="130" y="168" fill="#FEF08A" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.18em" textAnchor="middle">EXECUTIVE DELEGATE</text>

                {/* Gold Crest & Delegate Metadata */}
                <circle cx="100" cy="200" r="14" fill="#E7E5E4" stroke="url(#edBadgeGold)" strokeWidth="1" />
                <circle cx="100" cy="196" r="5" fill="#78350F" />
                <path d="M 92 208 C 92 203 96 201 100 201 C 104 201 108 203 108 208 Z" fill="#78350F" />

                <line x1="122" y1="192" x2="172" y2="192" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="122" y1="202" x2="162" y2="202" stroke="#78716C" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="122" y1="210" x2="152" y2="210" stroke="#A8A29E" strokeWidth="1" strokeLinecap="round" />

                {/* Holographic Security Foil Seal */}
                <circle cx="170" cy="222" r="6" fill="url(#edBadgeGold)" opacity="0.9" />
              </g>

              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 02</text>
            </svg>
          </div>
        );

      // -----------------------------------------------------------------------
      // 3. DRINKWARE (№ 03): Matte Obsidian Tumbler & Raw Terracotta Ceramic Mug
      // -----------------------------------------------------------------------
      case 'drinkware':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edTumblerBody" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1C1917" />
                  <stop offset="35%" stopColor="#292524" />
                  <stop offset="70%" stopColor="#44403C" />
                  <stop offset="100%" stopColor="#0C0A09" />
                </linearGradient>
                <linearGradient id="edBrassBand" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="40%" stopColor="#F59E0B" />
                  <stop offset="80%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <linearGradient id="edCeramic" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#451A03" />
                  <stop offset="40%" stopColor="#78350F" />
                  <stop offset="80%" stopColor="#92400E" />
                  <stop offset="100%" stopColor="#292524" />
                </linearGradient>
                <filter id="edDrinkShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="0" dy="12" stdDeviation="9" floodColor="#1C1917" floodOpacity="0.35" />
                </filter>
              </defs>

              <circle cx="130" cy="130" r="126" stroke="url(#edBrassBand)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              <ellipse cx="115" cy="235" rx="40" ry="10" fill="#0C0A09" fillOpacity="0.25" />
              <ellipse cx="178" cy="232" rx="35" ry="8" fill="#0C0A09" fillOpacity="0.22" />

              <g filter="url(#edDrinkShadow)">
                {/* Artisanal Ceramic Mug (Right Background) */}
                <g>
                  {/* Handle */}
                  <path d="M 195 145 C 225 145 225 195 195 195" stroke="url(#edCeramic)" strokeWidth="10" fill="none" strokeLinecap="round" />
                  {/* Mug Body */}
                  <rect x="145" y="132" width="60" height="74" rx="8" fill="url(#edCeramic)" />
                  {/* Exposed Raw Terracotta Base */}
                  <rect x="145" y="196" width="60" height="10" rx="3" fill="#D97706" />
                  {/* Mug Rim */}
                  <ellipse cx="175" cy="132" rx="30" ry="6" fill="#292524" stroke="url(#edBrassBand)" strokeWidth="1" />
                </g>

                {/* Matte Obsidian Vacuum Executive Tumbler (Foreground) */}
                <g>
                  {/* Tumbler Body with subtle taper */}
                  <path d="M 86 64 L 144 64 L 138 232 C 137 236 133 239 128 239 L 102 239 C 97 239 93 236 92 232 Z" fill="url(#edTumblerBody)" />
                  {/* Brushed Champagne Brass Mid-Band */}
                  <rect x="88" y="135" width="54" height="14" fill="url(#edBrassBand)" />
                  <text x="115" y="145" fill="#451A03" fontSize="5.5" fontWeight="bold" fontFamily="serif" letterSpacing="0.12em" textAnchor="middle">CLIGRAPHICS</text>

                  {/* Brushed Steel & Silicone Lid */}
                  <path d="M 84 56 L 146 56 L 144 64 L 86 64 Z" fill="url(#edBrassBand)" />
                  <rect x="98" y="48" width="34" height="8" rx="2" fill="#292524" stroke="url(#edBrassBand)" strokeWidth="0.8" />

                  {/* Specular Edge Highlight */}
                  <line x1="94" y1="68" x2="98" y2="230" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.25" strokeLinecap="round" />
                </g>
              </g>

              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 03</text>
            </svg>
          </div>
        );

      // -----------------------------------------------------------------------
      // 4. PENS (№ 04): 24k Gold Nib Fountain Pen & Executive Brass Rollerball
      // -----------------------------------------------------------------------
      case 'pens':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edGoldNib" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="35%" stopColor="#F59E0B" />
                  <stop offset="70%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <linearGradient id="edPenBarrel1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#292524" />
                  <stop offset="40%" stopColor="#1C1917" />
                  <stop offset="100%" stopColor="#0C0A09" />
                </linearGradient>
                <filter id="edPenShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="4" dy="12" stdDeviation="8" floodColor="#1C1917" floodOpacity="0.35" />
                </filter>
              </defs>

              <circle cx="130" cy="130" r="126" stroke="url(#edGoldNib)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              <ellipse cx="130" cy="215" rx="75" ry="12" fill="#0C0A09" fillOpacity="0.2" />

              <g filter="url(#edPenShadow)">
                {/* Pen 1: Brushed Brass Executive Twist Rollerball (Crossed Behind) */}
                <g transform="rotate(-34 130 130)">
                  <rect x="40" y="124" width="180" height="12" rx="4" fill="url(#edGoldNib)" />
                  <rect x="180" y="123" width="30" height="14" rx="2" fill="#1C1917" />
                  {/* Clip */}
                  <rect x="160" y="121" width="40" height="3" rx="1" fill="#FEF08A" />
                  <polygon points="40,130 25,130 35,127 35,133" fill="#1C1917" />
                </g>

                {/* Pen 2: Matte Obsidian Fountain Pen with 24k Gold Nib (Foreground) */}
                <g transform="rotate(38 130 130)">
                  {/* Barrel */}
                  <rect x="50" y="123" width="160" height="14" rx="4" fill="url(#edPenBarrel1)" />
                  {/* Gold Center Ring */}
                  <rect x="120" y="122" width="6" height="16" fill="url(#edGoldNib)" />
                  {/* Cap Band */}
                  <rect x="155" y="122" width="4" height="16" fill="url(#edGoldNib)" />
                  {/* Gold Clip */}
                  <rect x="135" y="120" width="45" height="3" rx="1.5" fill="url(#edGoldNib)" />

                  {/* 24k Gold Engraved Fountain Pen Nib */}
                  <polygon points="50,125 24,130 50,135" fill="url(#edGoldNib)" stroke="#78350F" strokeWidth="0.5" />
                  <line x1="50" y1="130" x2="32" y2="130" stroke="#451A03" strokeWidth="0.8" />
                  <circle cx="42" cy="130" r="1.2" fill="#451A03" />
                </g>
              </g>

              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 04</text>
            </svg>
          </div>
        );

      // -----------------------------------------------------------------------
      // 5. APPAREL (№ 05): Tailored Charcoal Merino Knit & Woven Gold Collar
      // -----------------------------------------------------------------------
      case 'apparel':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edWoolFabric" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="50%" stopColor="#1F2937" />
                  <stop offset="100%" stopColor="#111827" />
                </linearGradient>
                <linearGradient id="edApparelGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="50%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <filter id="edApparelShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#111827" floodOpacity="0.3" />
                </filter>
              </defs>

              <circle cx="130" cy="130" r="126" stroke="url(#edApparelGold)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              <ellipse cx="130" cy="235" rx="75" ry="12" fill="#111827" fillOpacity="0.22" />

              <g filter="url(#edApparelShadow)">
                {/* Tailored Garment Body */}
                <path d="M 88 56 L 46 94 L 72 136 L 86 122 L 86 226 C 86 230 90 234 94 234 L 166 234 C 170 234 174 230 174 226 L 174 122 L 188 136 L 214 94 L 172 56 Z" fill="url(#edWoolFabric)" />

                {/* Left & Right Collar Leaves in Rich Charcoal Oxford */}
                <polygon points="130,94 100,56 126,52" fill="#111827" stroke="url(#edApparelGold)" strokeWidth="0.8" />
                <polygon points="130,94 160,56 134,52" fill="#1F2937" stroke="url(#edApparelGold)" strokeWidth="0.8" />

                {/* Placket with Mother-of-Pearl & Brass Rim Buttons */}
                <rect x="125" y="94" width="10" height="48" fill="#111827" />
                <circle cx="130" cy="106" r="3" fill="#F5F5F4" stroke="url(#edApparelGold)" strokeWidth="0.8" />
                <circle cx="130" cy="124" r="3" fill="#F5F5F4" stroke="url(#edApparelGold)" strokeWidth="0.8" />
                <circle cx="130" cy="138" r="3" fill="#F5F5F4" stroke="url(#edApparelGold)" strokeWidth="0.8" />

                {/* Embroidered Gold Crest on Chest */}
                <circle cx="152" cy="116" r="6" stroke="url(#edApparelGold)" strokeWidth="1" fill="none" />
                <circle cx="152" cy="116" r="2.5" fill="url(#edApparelGold)" />

                {/* Tailored Hem Stitching */}
                <line x1="86" y1="228" x2="174" y2="228" stroke="url(#edApparelGold)" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.5" />
              </g>

              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 05</text>
            </svg>
          </div>
        );

      // -----------------------------------------------------------------------
      // 6. TECHNOLOGY (№ 06): Obsidian Qi Fast Charger & Chamfered Aluminum Hub
      // -----------------------------------------------------------------------
      case 'technology':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edTechGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <radialGradient id="edQiGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="#D97706" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
                </radialGradient>
                <filter id="edTechShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0C0A09" floodOpacity="0.35" />
                </filter>
              </defs>

              <circle cx="130" cy="130" r="126" stroke="url(#edTechGold)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              <ellipse cx="130" cy="235" rx="75" ry="12" fill="#0C0A09" fillOpacity="0.25" />

              <g filter="url(#edTechShadow)">
                {/* Aircraft-Grade Aluminum Power Hub (Angled Base) */}
                <rect x="76" y="80" width="108" height="152" rx="18" fill="#1C1917" stroke="url(#edTechGold)" strokeWidth="1.2" />
                <rect x="80" y="84" width="100" height="144" rx="14" fill="#111827" />

                {/* Concentric Wireless Charging Ring with Warm Gold Glow */}
                <circle cx="130" cy="145" r="44" fill="url(#edQiGlow)" />
                <circle cx="130" cy="145" r="34" stroke="url(#edTechGold)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
                <circle cx="130" cy="145" r="22" stroke="url(#edTechGold)" strokeWidth="1" fill="none" />

                {/* Gold Lightning Bolt Fast Charge Glyphs */}
                <path d="M 132 133 L 124 145 L 131 145 L 128 157 L 137 143 L 130 143 Z" fill="url(#edTechGold)" />

                {/* 4 Discrete LED Fuel Gauge Indicators */}
                <circle cx="112" cy="104" r="2" fill="#FEF08A" />
                <circle cx="124" cy="104" r="2" fill="#FEF08A" />
                <circle cx="136" cy="104" r="2" fill="#FEF08A" />
                <circle cx="148" cy="104" r="2" fill="#78350F" />

                {/* Laser-Engraved Minimal Wordmark */}
                <text x="130" y="210" fill="url(#edTechGold)" fontSize="7" fontWeight="bold" fontFamily="serif" letterSpacing="0.18em" textAnchor="middle">CLIGRAPHICS 10K</text>
              </g>

              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 06</text>
            </svg>
          </div>
        );

      // -----------------------------------------------------------------------
      // 7. JOURNALS (№ 07): Cognac Leather Hardcover & Gilt Page Edges
      // -----------------------------------------------------------------------
      case 'journals':
      case 'journals-and-notebooks':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edCognacLeather" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B45309" />
                  <stop offset="40%" stopColor="#92400E" />
                  <stop offset="80%" stopColor="#78350F" />
                  <stop offset="100%" stopColor="#451A03" />
                </linearGradient>
                <linearGradient id="edGiltGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
                <filter id="edJournalShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#451A03" floodOpacity="0.32" />
                </filter>
              </defs>

              <circle cx="130" cy="130" r="126" stroke="url(#edGiltGold)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              <ellipse cx="134" cy="235" rx="65" ry="10" fill="#0C0A09" fillOpacity="0.22" />

              <g filter="url(#edJournalShadow)">
                {/* Gilt Gold Page Block Edge (Right side) */}
                <path d="M 172 70 L 186 74 L 186 218 L 172 216 Z" fill="url(#edGiltGold)" />
                <line x1="186" y1="74" x2="186" y2="218" stroke="#78350F" strokeWidth="0.5" />

                {/* Bound Cognac Leather Cover */}
                <rect x="74" y="62" width="102" height="158" rx="6" fill="url(#edCognacLeather)" />
                {/* Saddle Stitched Perimeter */}
                <rect x="78" y="66" width="94" height="150" rx="4" fill="none" stroke="#FEF08A" strokeWidth="0.8" strokeDasharray="3 2" strokeOpacity="0.6" />

                {/* Leather Spine Reinforcement */}
                <rect x="74" y="62" width="14" height="158" rx="2" fill="#451A03" />
                <line x1="88" y1="62" x2="88" y2="220" stroke="url(#edGiltGold)" strokeWidth="0.8" />

                {/* Hot-Stamped Gold Crest & Title */}
                <rect x="104" y="116" width="48" height="38" rx="4" fill="#451A03" stroke="url(#edGiltGold)" strokeWidth="0.8" />
                <circle cx="128" cy="130" r="6" stroke="url(#edGiltGold)" strokeWidth="1" fill="none" />
                <text x="128" y="133" fill="url(#edGiltGold)" fontSize="5.5" fontWeight="bold" fontFamily="serif" textAnchor="middle">KEYNOTE</text>
                <text x="128" y="146" fill="url(#edGiltGold)" fontSize="4.5" fontWeight="bold" fontFamily="serif" letterSpacing="0.1em" textAnchor="middle">2027</text>

                {/* Grosgrain Ribbon Bookmark Draped Across Pages */}
                <path d="M 124 58 L 124 232 L 128 226 L 132 232 L 132 58 Z" fill="#991B1B" />
                <line x1="124" y1="58" x2="132" y2="58" stroke="url(#edGiltGold)" strokeWidth="1" />
              </g>

              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 07</text>
            </svg>
          </div>
        );

      // -----------------------------------------------------------------------
      // 8. PRINTING (№ 08): Gold-Foil Embossed Monograph & Translucent Vellum
      // -----------------------------------------------------------------------
      case 'printing':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edFoilGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="35%" stopColor="#F59E0B" />
                  <stop offset="70%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <filter id="edPrintShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="2" dy="12" stdDeviation="10" floodColor="#0C0A09" floodOpacity="0.28" />
                </filter>
              </defs>

              <circle cx="130" cy="130" r="126" stroke="url(#edFoilGold)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              <ellipse cx="130" cy="235" rx="70" ry="10" fill="#0C0A09" fillOpacity="0.2" />

              <g filter="url(#edPrintShadow)">
                {/* Layer 1: Translucent Vellum / Agenda Insert Sheets (Angled Left) */}
                <g transform="rotate(-7 110 140)">
                  <rect x="70" y="68" width="96" height="148" rx="4" fill="#FAF8F5" stroke="#D6D3D1" strokeWidth="1" />
                  <line x1="82" y1="84" x2="135" y2="84" stroke="#D97706" strokeWidth="2.5" />
                  <line x1="82" y1="96" x2="152" y2="96" stroke="#A8A29E" strokeWidth="1.2" />
                  <line x1="82" y1="104" x2="148" y2="104" stroke="#A8A29E" strokeWidth="1.2" />
                  <line x1="82" y1="112" x2="138" y2="112" stroke="#A8A29E" strokeWidth="1.2" />
                </g>

                {/* Layer 2: Main Heavyweight Monograph Program Book (Deep Navy/Charcoal with Gold Foil) */}
                <g transform="rotate(3 140 140)">
                  <rect x="92" y="60" width="102" height="156" rx="5" fill="#1C1917" stroke="url(#edFoilGold)" strokeWidth="1.5" />

                  {/* Saddle-Stitch Wire Staples */}
                  <line x1="92" y1="85" x2="92" y2="105" stroke="url(#edFoilGold)" strokeWidth="3" strokeLinecap="round" />
                  <line x1="92" y1="170" x2="92" y2="190" stroke="url(#edFoilGold)" strokeWidth="3" strokeLinecap="round" />

                  {/* Genuine Gold Hot-Stamping Centerpiece */}
                  <circle cx="143" cy="116" r="18" fill="url(#edFoilGold)" />
                  <circle cx="143" cy="116" r="14" fill="#1C1917" />
                  <polygon points="143,106 146,113 153,114 148,119 149,126 143,122 137,126 138,119 133,114 140,113" fill="url(#edFoilGold)" />

                  <text x="143" y="152" fill="url(#edFoilGold)" fontSize="7" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">PROGRAM GUIDE</text>
                  <text x="143" y="162" fill="#A8A29E" fontSize="5" fontWeight="bold" fontFamily="serif" letterSpacing="0.1em" textAnchor="middle">ANNUAL PROCEEDINGS</text>
                  <line x1="118" y1="170" x2="168" y2="170" stroke="url(#edFoilGold)" strokeWidth="0.8" />
                </g>
              </g>

              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 08</text>
            </svg>
          </div>
        );

      // -----------------------------------------------------------------------
      // 9. FULFILLMENT (№ 09): Luxury Presentation Gift Box with Satin Gold Ribbon
      // -----------------------------------------------------------------------
      case 'fulfillment':
      case 'fulfillment-and-direct-mail':
        return (
          <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edBoxFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#292524" />
                  <stop offset="50%" stopColor="#1C1917" />
                  <stop offset="100%" stopColor="#0C0A09" />
                </linearGradient>
                <linearGradient id="edSatinGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="35%" stopColor="#F59E0B" />
                  <stop offset="70%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <filter id="edBoxShadow" x="-20%" y="-15%" width="140%" height="145%">
                  <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#0C0A09" floodOpacity="0.32" />
                </filter>
              </defs>

              <circle cx="130" cy="130" r="126" stroke="url(#edSatinGold)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="130" cy="130" r="122" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" fill="none" />

              <ellipse cx="130" cy="235" rx="80" ry="14" fill="#0C0A09" fillOpacity="0.25" />

              <g filter="url(#edBoxShadow)">
                {/* 3D Isometric Luxury Rigid Gift Unboxing Suite */}
                {/* Box Top Lid */}
                <polygon points="130,72 208,114 130,154 52,114" fill="#44403C" stroke="url(#edSatinGold)" strokeWidth="1.2" />

                {/* Box Left Face */}
                <polygon points="52,114 130,154 130,224 52,182" fill="#1C1917" stroke="url(#edSatinGold)" strokeWidth="1.2" />

                {/* Box Right Face */}
                <polygon points="130,154 208,114 208,182 130,224" fill="#0C0A09" stroke="url(#edSatinGold)" strokeWidth="1.2" />

                {/* Wrapped Satin Champagne Ribbon (Vertical) */}
                <polygon points="122,76 138,85 138,224 122,219" fill="url(#edSatinGold)" />
                {/* Wrapped Ribbon (Horizontal Left) */}
                <polygon points="52,144 130,184 130,198 52,158" fill="url(#edSatinGold)" />
                {/* Wrapped Ribbon (Horizontal Right) */}
                <polygon points="130,184 208,144 208,158 130,198" fill="url(#edSatinGold)" />

                {/* Handcrafted Wax / Gold Foil Seal */}
                <circle cx="130" cy="114" r="14" fill="url(#edSatinGold)" />
                <circle cx="130" cy="114" r="11" fill="#451A03" stroke="#FEF08A" strokeWidth="0.8" />
                <text x="130" y="117" fill="#FEF08A" fontSize="6" fontWeight="bold" fontFamily="serif" textAnchor="middle">DIRECT</text>

                {/* Turnkey Dockside Dispatch Tag */}
                <rect x="68" y="132" width="28" height="18" rx="2" fill="#FAF8F5" stroke="#A8A29E" strokeWidth="0.8" />
                <line x1="72" y1="138" x2="90" y2="138" stroke="#000000" strokeWidth="1.5" strokeDasharray="1 1" />
                <line x1="72" y1="144" x2="86" y2="144" stroke="#78716C" strokeWidth="1" />
              </g>

              <text x="130" y="24" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="serif" letterSpacing="0.15em" textAnchor="middle">№ 09</text>
            </svg>
          </div>
        );

      default:
        break;
    }
  }

  // ===========================================================================
  // PROMOTIONAL STOREFRONT VARIANT (OPTION A):
  // Clean, bright commercial promotional merchandise (4imprint UX style)
  // ===========================================================================
  switch (normalizedId) {
    // ------------------------------------------------------------------------
    // 1. BAGS: 3D Photorealistic Canvas Conference Tote with Leather Handles
    // ------------------------------------------------------------------------
    case 'bags':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bag3DFabric" x1="15%" y1="10%" x2="85%" y2="90%">
                <stop offset="0%" stopColor="#1E4976" />
                <stop offset="35%" stopColor="#0B3B60" />
                <stop offset="75%" stopColor="#06233B" />
                <stop offset="100%" stopColor="#041624" />
              </linearGradient>
              <linearGradient id="leatherStrap" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2D4BC" />
                <stop offset="45%" stopColor="#C9B496" />
                <stop offset="80%" stopColor="#A89070" />
                <stop offset="100%" stopColor="#7F6547" />
              </linearGradient>
              <linearGradient id="brassRivet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <linearGradient id="fabricSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
                <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
              </linearGradient>
              <radialGradient id="totePedestalGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0B3B60" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#0B3B60" stopOpacity="0.0" />
              </radialGradient>
              <filter id="photorealisticBagShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.28" />
              </filter>
            </defs>

            {/* Ambient Ground Pedestal Shadow */}
            <ellipse cx="130" cy="235" rx="90" ry="16" fill="url(#totePedestalGlow)" />

            {/* Main Bag Group with Depth Shadow */}
            <g filter="url(#photorealisticBagShadow)">
              {/* Back Strap */}
              <path
                d="M 98 90 C 98 15 118 6 130 6 C 142 6 162 15 162 90"
                stroke="url(#leatherStrap)"
                strokeWidth="15"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 98 90 C 98 15 118 6 130 6 C 142 6 162 15 162 90"
                stroke="#5A432A"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
                opacity="0.6"
              />

              {/* 3D Bag Body with subtle perspective */}
              <path
                d="M 45 88 L 215 88 L 202 230 C 200 238 193 244 184 244 L 76 244 C 67 244 60 238 58 230 Z"
                fill="url(#bag3DFabric)"
              />
              {/* Fabric Specular Sheen Overlay */}
              <path
                d="M 45 88 L 215 88 L 202 230 C 200 238 193 244 184 244 L 76 244 C 67 244 60 238 58 230 Z"
                fill="url(#fabricSheen)"
              />

              {/* Top Hem Reinforcement Band */}
              <rect x="44" y="88" width="172" height="18" rx="3" fill="#082842" />
              <line x1="45" y1="106" x2="215" y2="106" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />

              {/* Front Strap Handles */}
              <path
                d="M 85 92 C 85 24 108 12 130 12 C 152 12 175 24 175 92"
                stroke="url(#leatherStrap)"
                strokeWidth="15"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 85 92 C 85 24 108 12 130 12 C 152 12 175 24 175 92"
                stroke="#5A432A"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
                opacity="0.7"
              />

              {/* Metallic Brass Rivets at Anchor Points */}
              <circle cx="85" cy="100" r="4.5" fill="url(#brassRivet)" stroke="#78350F" strokeWidth="0.8" />
              <circle cx="85" cy="100" r="1.5" fill="#451A03" />
              <circle cx="175" cy="100" r="4.5" fill="url(#brassRivet)" stroke="#78350F" strokeWidth="0.8" />
              <circle cx="175" cy="100" r="1.5" fill="#451A03" />

              {/* Imprinted Conference Logo Badge on Canvas */}
              <rect x="94" y="145" width="72" height="52" rx="6" fill="#061D30" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.25" />
              <rect x="98" y="149" width="64" height="44" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="0.6" strokeDasharray="2 2" strokeOpacity="0.4" />
              <circle cx="130" cy="165" r="9" stroke="#FDE68A" strokeWidth="1.5" fill="none" />
              <line x1="125" y1="165" x2="135" y2="165" stroke="#FDE68A" strokeWidth="1.2" />
              <line x1="130" y1="160" x2="130" y2="170" stroke="#FDE68A" strokeWidth="1.2" />
              <text x="130" y="184" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.08em" textAnchor="middle">CLIGRAPHICS</text>
              <text x="130" y="191" fill="#93C5FD" fontSize="4.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.05em" textAnchor="middle">CONFERENCE 2027</text>

              {/* Physical Hangtag Draping Over Front */}
              <line x1="172" y1="102" x2="186" y2="140" stroke="#D1D5DB" strokeWidth="1.5" />
              <g transform="rotate(6 186 140)">
                <rect x="178" y="136" width="24" height="36" rx="3" fill="#F97316" stroke="#C2410C" strokeWidth="0.8" />
                <circle cx="190" cy="142" r="2" fill="#FFFFFF" />
                <text x="190" y="156" fill="#FFFFFF" fontSize="5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">ECO</text>
                <text x="190" y="163" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">COTTON</text>
              </g>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 2. LANYARDS: Royal Blue Conference Lanyard with Plastic Badge & Pass
    // ------------------------------------------------------------------------
    case 'lanyards':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lanyardStrapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="50%" stopColor="#0B3B60" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
              <linearGradient id="chromeMetalClip" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="35%" stopColor="#CBD5E1" />
                <stop offset="70%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <filter id="lanyardShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.25" />
              </filter>
            </defs>

            <ellipse cx="130" cy="242" rx="70" ry="12" fill="#0B3B60" fillOpacity="0.14" />

            <g filter="url(#lanyardShadow)">
              {/* Lanyard Fabric Loop */}
              <path
                d="M 65 10 C 65 85 95 110 120 118 L 140 118 C 165 110 195 85 195 10"
                stroke="url(#lanyardStrapGrad)"
                strokeWidth="20"
                strokeLinecap="round"
                fill="none"
              />
              {/* Text / Dash print along lanyard strap */}
              <path
                d="M 65 10 C 65 85 95 110 120 118"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeOpacity="0.75"
                fill="none"
              />
              <path
                d="M 195 10 C 195 85 165 110 140 118"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeOpacity="0.75"
                fill="none"
              />

              {/* Metallic Crimping Cinch */}
              <rect x="118" y="116" width="24" height="12" rx="2" fill="url(#chromeMetalClip)" stroke="#475569" strokeWidth="0.8" />

              {/* Swivel Lobster Claw Clip */}
              <ellipse cx="130" cy="134" rx="6" ry="6" stroke="url(#chromeMetalClip)" strokeWidth="3.5" fill="none" />
              <rect x="127" y="137" width="6" height="18" rx="2" fill="url(#chromeMetalClip)" />

              {/* Clear Vinyl Badge Holder with Inset Attendee Pass */}
              <rect x="68" y="152" width="124" height="88" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
              {/* Orange Access Banner */}
              <rect x="68" y="152" width="124" height="24" rx="7" fill="#E65100" />
              <text x="130" y="168" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.12em" textAnchor="middle">ALL ACCESS PASS</text>

              {/* Mock Attendee Photo & Lines */}
              <rect x="80" y="186" width="28" height="34" rx="3" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
              <circle cx="94" cy="198" r="7" fill="#94A3B8" />
              <path d="M 84 216 C 84 208 88 206 94 206 C 100 206 104 208 104 216 Z" fill="#94A3B8" />

              <line x1="116" y1="192" x2="178" y2="192" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
              <line x1="116" y1="202" x2="168" y2="202" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
              <line x1="116" y1="211" x2="152" y2="211" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

              {/* Barcode Strip */}
              <rect x="80" y="226" width="98" height="8" fill="#0F172A" />
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 3. DRINKWARE: Vacuum Insulated Tumbler & Ceramic Mug
    // ------------------------------------------------------------------------
    case 'drinkware':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tumblerBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="35%" stopColor="#0B3B60" />
                <stop offset="70%" stopColor="#0369A1" />
                <stop offset="100%" stopColor="#082842" />
              </linearGradient>
              <linearGradient id="ceramicMugGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="40%" stopColor="#334155" />
                <stop offset="85%" stopColor="#0F172A" />
              </linearGradient>
              <filter id="drinkwareShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.25" />
              </filter>
            </defs>

            <ellipse cx="120" cy="235" rx="42" ry="12" fill="#0B3B60" fillOpacity="0.16" />
            <ellipse cx="180" cy="230" rx="36" ry="10" fill="#0B3B60" fillOpacity="0.14" />

            <g filter="url(#drinkwareShadow)">
              {/* Ceramic Mug in Background */}
              <g>
                <path d="M 195 145 C 224 145 224 195 195 195" stroke="url(#ceramicMugGrad)" strokeWidth="11" fill="none" strokeLinecap="round" />
                <rect x="145" y="132" width="62" height="74" rx="8" fill="url(#ceramicMugGrad)" />
                <ellipse cx="176" cy="132" rx="31" ry="7" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
                <circle cx="176" cy="170" r="10" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.35" fill="none" />
              </g>

              {/* Vacuum Insulated Travel Tumbler */}
              <g>
                <path d="M 85 64 L 145 64 L 138 232 C 137 236 133 240 128 240 L 102 240 C 97 240 93 236 92 232 Z" fill="url(#tumblerBodyGrad)" />
                <path d="M 83 56 L 147 56 L 145 64 L 85 64 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />
                <rect x="96" y="48" width="38" height="8" rx="3" fill="#64748B" />
                <circle cx="115" cy="148" r="16" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" fill="none" />
                <text x="115" y="151" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">CLIGRAPHICS</text>
                <line x1="93" y1="68" x2="98" y2="232" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.25" strokeLinecap="round" />
              </g>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 4. PENS: Metallic Conference Stylus Pens
    // ------------------------------------------------------------------------
    case 'pens':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="penNavy" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0B3B60" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#041E34" />
              </linearGradient>
              <linearGradient id="penOrange" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="50%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#9A3412" />
              </linearGradient>
              <linearGradient id="penChrome" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="50%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>
              <filter id="pensShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="2" dy="10" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.25" />
              </filter>
            </defs>

            <ellipse cx="130" cy="210" rx="75" ry="12" fill="#0B3B60" fillOpacity="0.14" />

            <g filter="url(#pensShadow)">
              {/* Pen 1 (Navy Metallic) */}
              <g transform="rotate(-36 130 130)">
                <rect x="42" y="123" width="176" height="14" rx="5" fill="url(#penNavy)" />
                <rect x="184" y="122" width="28" height="16" rx="2" fill="url(#penChrome)" />
                <rect x="156" y="120" width="46" height="4" rx="2" fill="url(#penChrome)" />
                <polygon points="42,130 25,130 36,126 36,134" fill="url(#penChrome)" />
                <text x="110" y="132" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.1em">CLIGRAPHICS</text>
              </g>

              {/* Pen 2 (Vibrant Orange Accent) */}
              <g transform="rotate(38 130 130)">
                <rect x="46" y="123" width="168" height="14" rx="5" fill="url(#penOrange)" />
                <rect x="180" y="122" width="28" height="16" rx="2" fill="url(#penChrome)" />
                <rect x="152" y="120" width="46" height="4" rx="2" fill="url(#penChrome)" />
                <polygon points="46,130 28,130 40,126 40,134" fill="url(#penChrome)" />
              </g>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 5. APPAREL: Embroidered Performance Event Polo
    // ------------------------------------------------------------------------
    case 'apparel':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="poloFabricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E40AF" />
                <stop offset="50%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <filter id="apparelShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.25" />
              </filter>
            </defs>

            <ellipse cx="130" cy="235" rx="80" ry="14" fill="#1E3A8A" fillOpacity="0.16" />

            <g filter="url(#apparelShadow)">
              {/* Polo Shirt Body & Sleeves */}
              <path d="M 88 56 L 46 94 L 72 136 L 86 122 L 86 226 C 86 230 90 234 94 234 L 166 234 C 170 234 174 230 174 226 L 174 122 L 188 136 L 214 94 L 172 56 Z" fill="url(#poloFabricGrad)" />
              {/* Collar Ribbing */}
              <polygon points="130,94 100,56 126,52" fill="#0F172A" />
              <polygon points="130,94 160,56 134,52" fill="#1E293B" />
              {/* Button Placket */}
              <rect x="125" y="94" width="10" height="48" fill="#0F172A" />
              <circle cx="130" cy="106" r="2.5" fill="#FFFFFF" />
              <circle cx="130" cy="122" r="2.5" fill="#FFFFFF" />
              <circle cx="130" cy="136" r="2.5" fill="#FFFFFF" />
              {/* Left Chest Conference Staff Embroidery */}
              <circle cx="152" cy="116" r="5" fill="#F59E0B" />
              <text x="152" y="125" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">STAFF</text>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 6. TECHNOLOGY: Fast-Charge Power Bank
    // ------------------------------------------------------------------------
    case 'technology':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="techBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="45%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <filter id="techShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.28" />
              </filter>
            </defs>

            <ellipse cx="130" cy="235" rx="75" ry="12" fill="#0284C7" fillOpacity="0.16" />

            <g filter="url(#techShadow)">
              {/* Power Bank Enclosure */}
              <rect x="74" y="80" width="112" height="150" rx="16" fill="url(#techBodyGrad)" stroke="#38BDF8" strokeWidth="1.5" />
              {/* Wireless Charging Surface Ring */}
              <circle cx="130" cy="144" r="34" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 3" fill="none" />
              <path d="M 132 132 L 123 144 L 131 144 L 128 156 L 138 142 L 129 142 Z" fill="#38BDF8" />
              {/* 4 LED Battery Indicators */}
              <circle cx="112" cy="102" r="2.5" fill="#38BDF8" />
              <circle cx="124" cy="102" r="2.5" fill="#38BDF8" />
              <circle cx="136" cy="102" r="2.5" fill="#38BDF8" />
              <circle cx="148" cy="102" r="2.5" fill="#475569" />
              {/* Branding Text */}
              <text x="130" y="210" fill="#94A3B8" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.1em" textAnchor="middle">CLIGRAPHICS 10K</text>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 7. JOURNALS: Hardcover Executive Conference Journal
    // ------------------------------------------------------------------------
    case 'journals':
    case 'journals-and-notebooks':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="journalCover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="50%" stopColor="#0B3B60" />
                <stop offset="100%" stopColor="#082842" />
              </linearGradient>
              <filter id="journalShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.25" />
              </filter>
            </defs>

            <ellipse cx="134" cy="235" rx="65" ry="10" fill="#0B3B60" fillOpacity="0.16" />

            <g filter="url(#journalShadow)">
              {/* Page Edge (Gold Ribbon bookmark) */}
              <path d="M 172 70 L 186 74 L 186 218 L 172 216 Z" fill="#F59E0B" />
              {/* Hardcover Body */}
              <rect x="74" y="62" width="102" height="158" rx="6" fill="url(#journalCover)" />
              {/* Orange Elastic Band */}
              <rect x="122" y="62" width="12" height="158" fill="#EA580C" />
              {/* Gold Embossed Badge */}
              <rect x="96" y="122" width="68" height="34" rx="4" fill="#082842" stroke="#FDE68A" strokeWidth="0.8" />
              <text x="130" y="142" fill="#FDE68A" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.08em" textAnchor="middle">KEYNOTE 2027</text>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 8. PRINTING: Multi-Fold Conference Program Book
    // ------------------------------------------------------------------------
    case 'printing':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="printGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="60%" stopColor="#0369A1" />
                <stop offset="100%" stopColor="#075985" />
              </linearGradient>
              <filter id="printShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="2" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.25" />
              </filter>
            </defs>

            <ellipse cx="130" cy="235" rx="70" ry="10" fill="#0B3B60" fillOpacity="0.16" />

            <g filter="url(#printShadow)">
              {/* Under-Sheet Registration Brochure */}
              <g transform="rotate(-6 110 140)">
                <rect x="70" y="68" width="96" height="148" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                <rect x="80" y="80" width="30" height="8" rx="2" fill="#EA580C" />
                <line x1="80" y1="98" x2="150" y2="98" stroke="#94A3B8" strokeWidth="2" />
                <line x1="80" y1="108" x2="140" y2="108" stroke="#CBD5E1" strokeWidth="2" />
              </g>

              {/* Top Conference Program Guide Book */}
              <g transform="rotate(3 140 140)">
                <rect x="92" y="60" width="102" height="156" rx="5" fill="url(#printGrad)" stroke="#38BDF8" strokeWidth="1" />
                <circle cx="143" cy="116" r="16" fill="#F59E0B" />
                <text x="143" y="154" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.1em" textAnchor="middle">PROGRAM GUIDE</text>
                <text x="143" y="164" fill="#E0F2FE" fontSize="5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">ANNUAL PROCEEDINGS</text>
              </g>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 9. FULFILLMENT: Direct Venue Logistics Freight Box
    // ------------------------------------------------------------------------
    case 'fulfillment':
    case 'fulfillment-and-direct-mail':
      return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="boxCardboard" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D0A9" />
                <stop offset="50%" stopColor="#DDB382" />
                <stop offset="100%" stopColor="#C6925B" />
              </linearGradient>
              <filter id="boxShadow" x="-20%" y="-10%" width="140%" height="135%">
                <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.22" />
              </filter>
            </defs>

            <ellipse cx="130" cy="235" rx="80" ry="14" fill="#0B3B60" fillOpacity="0.14" />

            <g filter="url(#boxShadow)">
              {/* 3D Isometric Package Box */}
              <polygon points="130,76 206,116 130,154 54,116" fill="#E8C396" stroke="#9A6B3D" strokeWidth="1" />
              <polygon points="54,116 130,154 130,222 54,180" fill="#DDB382" stroke="#9A6B3D" strokeWidth="1" />
              <polygon points="130,154 206,116 206,180 130,222" fill="#C6925B" stroke="#9A6B3D" strokeWidth="1" />

              {/* Cyan Security Packing Tape */}
              <polygon points="123,80 137,87 137,222 123,218" fill="#0284C7" />

              {/* Barcode Shipping Label */}
              <rect x="70" y="136" width="32" height="20" rx="2" fill="#FFFFFF" />
              <line x1="74" y1="142" x2="98" y2="142" stroke="#000000" strokeWidth="2" strokeDasharray="1 1" />
              <line x1="74" y1="148" x2="94" y2="148" stroke="#64748B" strokeWidth="1" />

              {/* Red Direct Dock Check-in Stamp */}
              <circle cx="168" cy="156" r="14" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1" />
              <text x="168" y="155" fill="#FFFFFF" fontSize="5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">DIRECT</text>
              <text x="168" y="161" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">DOCKSIDE</text>
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
