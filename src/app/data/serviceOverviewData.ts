export type ServiceMetric = {
  label: string;
  value: string;
};

export type ServiceOverview = {
  id: string;
  name: string;
  initial: string;
  tagline: string;
  metrics: ServiceMetric[];
  benefits: string[];
  ctaLink: string;
  image: string;
};

export const serviceOverviewData: ServiceOverview[] = [
  {
    id: 'banks',
    name: 'Digital Banking',
    initial: 'B',
    tagline: 'Fiscal Command Center',
    ctaLink: '/services/banks',
    image: 'https://images.unsplash.com/photo-1550565118-3d1428df732f?w=1000&q=80',
    metrics: [
      { label: 'Setup Time', value: 'Inst-5 Min' },
      { label: 'Yield Benefit', value: '£350/yr' },
      { label: 'Verification', value: 'Bio/Digital' }
    ],
    benefits: ['Zero FX Fees', 'Instant Transfers', 'UK Bank Code'],
  },
  {
    id: 'sim-cards',
    name: 'Connectivity',
    initial: 'S',
    tagline: 'Global Data Ritual',
    ctaLink: '/services/sim-cards',
    image: 'https://images.unsplash.com/photo-1512428559083-a40113dbb92c?w=1000&q=80',
    metrics: [
      { label: 'Activation', value: 'Plug & Play' },
      { label: 'Yield Benefit', value: '£420/yr' },
      { label: 'Network', value: '5G Spectrum' }
    ],
    benefits: ['Unlimited Data', 'Intl Roaming', 'Free UK Delivery'],
  },
  {
    id: 'housing',
    name: 'University Housing',
    initial: 'H',
    tagline: 'Residential Logistics',
    ctaLink: '/services/housing',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&q=80',
    metrics: [
      { label: 'Lease Lock', value: 'Immediate' },
      { label: 'Yield Benefit', value: '£1200/yr' },
      { label: 'Location', value: 'City Core' }
    ],
    benefits: ['All Bills Inc.', '24/7 Security', 'Student Only'],
  },
  {
    id: 'insurance',
    name: 'Safe Passage',
    initial: 'I',
    tagline: 'Institutional Safeguard',
    ctaLink: '/services/insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80',
    metrics: [
      { label: 'Approval', value: 'Guaranteed' },
      { label: 'Yield Benefit', value: 'Infinite' },
      { label: 'Framework', value: 'NHS Sync' }
    ],
    benefits: ['Full Coverage', 'Visa Compliant', 'NHS Integrated'],
  }
];
