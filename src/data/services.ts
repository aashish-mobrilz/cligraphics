export interface ServiceOffering {
  id: string;
  slug: string;
  title: string;
  category: 'printing' | 'fulfillment';
  shortSummary: string;
  fullOverview: string;
  deliverables: string[];
  equipmentAndCapabilities: string[];
  sampleLeadTimes: string;
  pricingModel: string;
  ctaText: string;
}

export const SERVICES: ServiceOffering[] = [
  {
    id: 'srv-print-01',
    slug: 'conference-program-books-and-guides',
    title: 'Conference Program Books & Proceedings',
    category: 'printing',
    shortSummary: 'High-speed web offset and digital production of saddle-stitched and perfect-bound event programs.',
    fullOverview: 'From compact schedule-at-a-glance booklets to 300-page academic proceedings, CliGraphics provides comprehensive press production tailored to event deadlines. We accommodate last-minute speaker bio revisions and room changes with digital press runs.',
    deliverables: [
      'Saddle-stitched daily agenda booklets (8 to 64 pages)',
      'Perfect-bound thick annual meeting proceedings',
      'Soft-touch matte or UV gloss protective cover coatings',
      'Tabbed track dividers and color-coded session schedules'
    ],
    equipmentAndCapabilities: [
      'High-speed digital press for short-run rapid turnarounds (24-48 hrs)',
      'Web-offset presses for large multi-thousand convention runs',
      'In-house automated saddle-stitching and perfect binding lines',
      'FSC-certified sustainable papers with recycled content options'
    ],
    sampleLeadTimes: 'Standard: 5-7 business days; Rush available (2-3 days)',
    pricingModel: 'Custom quotation based on page count, binding, and quantity',
    ctaText: 'Request Program Book Quote'
  },
  {
    id: 'srv-print-02',
    slug: 'registration-brochures-and-flyers',
    title: 'Registration Brochures & Single-Sheet Flyers',
    category: 'printing',
    shortSummary: 'Commercial sheetfed printing from single promotional flyer sheets to multi-fold direct mail brochures.',
    fullOverview: 'Spark attendance and arm event booths with crisp, vibrant collateral. Whether you need 500 sponsor flyer inserts or 50,000 trifold registration brochures mailed to industry members, CliGraphics delivers flawless color fidelity.',
    deliverables: [
      'Single flyer sheets (8.5" x 11", 5.5" x 8.5", custom cuts)',
      'Trifold, z-fold, gatefold, and accordion registration brochures',
      'Heavyweight 80# and 100# gloss and matte text/cover stocks',
      'Spot aqueous and spot varnish visual accents'
    ],
    equipmentAndCapabilities: [
      'Automated high-speed precision folding and perforation',
      'G7 Master printer color calibration standards',
      'Variable-data digital personalization for targeted attendee segments'
    ],
    sampleLeadTimes: 'Standard: 3-5 business days',
    pricingModel: 'Tiered volume estimates available by paper stock and fold format',
    ctaText: 'Request Brochure Quote'
  },
  {
    id: 'srv-ful-01',
    slug: 'conference-swag-kitting-and-fulfillment',
    title: 'Attendee Swag Box Assembly & Custom Kitting',
    category: 'fulfillment',
    shortSummary: 'Turnkey kit assembly combining tote bags, lanyards, journals, tech gifts, and printed schedules into cohesive registration packages.',
    fullOverview: 'Eliminate chaotic on-site volunteer stuffing parties. Our fulfillment facility packs, checks, and seals every attendee kit with meticulous precision, labeling boxes by attendee tier (VIP, Speaker, General Attendee, Exhibitor) for instant registration desk deployment.',
    deliverables: [
      'Tote bag pre-packing with all conference merchandise & sponsor literature',
      'Custom branded unboxing packaging for virtual & hybrid attendee swag boxes',
      'Accurate barcoded inventory tracking and tamper-evident sealing',
      'VIP speaker gift packaging with personalized ribbon and handwritten cards'
    ],
    equipmentAndCapabilities: [
      'Dedicated clean assembly lines with multi-point QA verification',
      'Custom corrugated box sizing and branded tissue paper insertion',
      'Temperature-controlled staging warehouse for multi-day events'
    ],
    sampleLeadTimes: 'Assembly schedules coordinated with conference freight arrival dates',
    pricingModel: 'Per-kit assembly rate + packaging materials',
    ctaText: 'Consult on Swag Kitting'
  },
  {
    id: 'srv-ful-02',
    slug: 'direct-mail-and-venue-freight-logistics',
    title: 'Direct Mail Campaigns & Venue Freight Logistics',
    category: 'fulfillment',
    shortSummary: 'End-to-end postal sorting, EDDM campaigns, and guaranteed direct-to-dock convention center freight shipping.',
    fullOverview: 'We navigate complex convention center marshalling yards and advance warehouse deadlines so your team never arrives at empty registration counters. CliGraphics manages freight bills of lading, booth delivery labels, and post-conference return logistics.',
    deliverables: [
      'Direct mail postcard & brochure postal sorting with NCOA address hygiene',
      'Every Door Direct Mail (EDDM) local convention market blitzes',
      'Advance warehouse and direct-to-show-site freight orchestration',
      'Palletizing, shrink-wrapping, and convention center dock check-in documentation'
    ],
    equipmentAndCapabilities: [
      'USPS certified high-speed inkjet addressing and presort barcode verification',
      'Dedicated logistics tracking team monitoring hotel and convention center docks',
      'On-call emergency dispatch for supplemental collateral runs'
    ],
    sampleLeadTimes: 'Mailing schedules planned 3-6 weeks prior to event opening',
    pricingModel: 'Postage at lowest automated commercial rates + handling',
    ctaText: 'Plan Event Logistics'
  }
];

