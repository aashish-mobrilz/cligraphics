import { DemoOrderInfo } from '../types/cart';

export const SAMPLE_CONFIRMATION: DemoOrderInfo = {
  orderNumber: 'DEMO-ORDER-2026-001',
  orderDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  customer: {
    fullName: 'Jordan Taylor',
    email: 'jtaylor@acmeconferences.demo',
    company: 'Acme Annual Summit 2027',
    phone: '(555) 382-9104'
  },
  shipping: {
    address1: '742 Convention Way, Hall B Receiving',
    address2: 'Dock 4 - Attn: Event Logistics',
    city: 'Orlando',
    state: 'FL',
    zip: '32819',
    country: 'United States',
    shippingMethod: 'Guaranteed Freight to Convention Center Dock (Sample Demo)'
  },
  eventDetails: {
    eventName: 'Global Leaders Tech Symposium 2027',
    eventDate: 'May 14-17, 2027',
    inHandsDate: 'May 10, 2027 (Pre-Event Staging)'
  },
  items: [],
  subtotal: 685.00,
  estimatedShipping: 45.00,
  estimatedTax: 0.00,
  total: 730.00
};

