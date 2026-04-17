export type ComparisonMetric = {
  label: string;
  values: Record<string, string>; // providerId -> value
};

export type ComparisonProvider = {
  id: string;
  name: string;
  logo: string;
  highlight?: boolean;
};

export type ServiceComparisonData = {
  title: string;
  subtitle: string;
  providers: ComparisonProvider[];
  metrics: ComparisonMetric[];
};

export const serviceComparisonData: Record<string, ServiceComparisonData> = {
  'sim-cards': {
    title: "Network Comparison",
    subtitle: "Compare the leading UK spectrum holders based on student-critical metrics.",
    providers: [
      { id: 'ee', name: 'EE', logo: '/ee_logo.png', highlight: true },
      { id: 'o2', name: 'O2', logo: '/o2_logo.png' },
      { id: 'three', name: 'Three', logo: '/three_logo.png' },
      { id: 'vodafone', name: 'Vodafone', logo: '/vodafone_logo.png' }
    ],
    metrics: [
      {
        label: "5G Coverage",
        values: { ee: "99% Cities", o2: "92% Cities", three: "95% Cities", vodafone: "98% Cities" }
      },
      {
        label: "Student Perks",
        values: { ee: "Apple Music", o2: "Priority Tickets", three: "Roaming", vodafone: "VeryMe Rewards" }
      },
      {
        label: "Contract Terms",
        values: { ee: "12/24 Months", o2: "Rolling/12M", three: "No Contract", vodafone: "12/24 Months" }
      },
      {
        label: "Data Limits",
        values: { ee: "Unlimited (Fastest)", o2: "Unlimited", three: "Unlimited", vodafone: "Unlimited" }
      }
    ]
  },
  'banks': {
    title: "Banking Comparison",
    subtitle: "Find the financial institution that best supports your international student lifestyle.",
    providers: [
      { id: 'monzo', name: 'Monzo', logo: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=100&h=100&fit=crop', highlight: true },
      { id: 'revolut', name: 'Revolut', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop' },
      { id: 'hsbc', name: 'HSBC', logo: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=100&h=100&fit=crop' },
      { id: 'barclays', name: 'Barclays', logo: 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=100&h=100&fit=crop' }
    ],
    metrics: [
      {
        label: "Onboarding Time",
        values: { monzo: "Instant", revolut: "Instant", hsbc: "3-5 Days", barclays: "2-4 Days" }
      },
      {
        label: "Transfer Fees",
        values: { monzo: "High Speed/Low", revolut: "Zero (Limit)", hsbc: "Standard", barclays: "Standard" }
      },
      {
        label: "Student Account Perks",
        values: { monzo: "Savings Pots", revolut: "FX Control", hsbc: "£100 Bonus", barclays: "Perks Membership" }
      },
      {
        label: "Global Access",
        values: { monzo: "Worldwide", revolut: "Global", hsbc: "Network Cities", barclays: "UK Focus" }
      }
    ]
  },
  'insurance': {
    title: "Insurance Intelligence",
    subtitle: "Strategic coverage analysis for health, contents, and academic liability.",
    providers: [
      { id: 'endsleigh', name: 'Endsleigh', logo: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=100&h=100&fit=crop', highlight: true },
      { id: 'howden', name: 'Howden', logo: 'https://images.unsplash.com/photo-1589152121593-946726850010?w=100&h=100&fit=crop' },
      { id: 'cover4', name: 'Cover4Students', logo: 'https://images.unsplash.com/photo-1505751172107-4ED483aa7232?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Claims Response", values: { endsleigh: "Priority 24h", howden: "Fast-track", cover4: "Standard" } },
      { label: "Phone Coverage", values: { endsleigh: "Unlimited", howden: "Up to £1.5k", cover4: "Up to £1k" } },
      { label: "Annual Premium", values: { endsleigh: "Competitive", howden: "Mid-Range", cover4: "Budget Opt" } }
    ]
  },
  'food': {
    title: "Lifestyle Procurement",
    subtitle: "Comparing the logistical efficiency of top-tier student sustenance providers.",
    providers: [
      { id: 'deliveroo', name: 'Deliveroo', logo: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=100&h=100&fit=crop', highlight: true },
      { id: 'uber-eats', name: 'Uber Eats', logo: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=100&h=100&fit=crop' },
      { id: 'hello-fresh', name: 'Hello Fresh', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Delivery Velocity", values: { deliveroo: "< 25 Min", 'uber-eats': "< 30 Min", 'hello-fresh': "Scheduled" } },
      { label: "Student Discount", values: { deliveroo: "Plus Student", 'uber-eats': "Eats Pass", 'hello-fresh': "50% Off 1st" } },
      { label: "Curation Quality", values: { deliveroo: "High-End", 'uber-eats': "Broad", 'hello-fresh': "Premium Meal" } }
    ]
  },
  'housing': {
    title: "Residential Analysis",
    subtitle: "Comparing verified student housing networks for safety, comfort, and academic proximity.",
    providers: [
      { id: 'unite', name: 'Unite Students', logo: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=100&h=100&fit=crop', highlight: true },
      { id: 'iq', name: 'iQ Student', logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop' },
      { id: 'student-roost', name: 'Student Roost', logo: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Security Protocol", values: { unite: "24/7 On-site", iq: "Smart Access", 'student-roost': "Patrolled" } },
      { label: "Utility Synergy", values: { unite: "All-Inclusive", iq: "All-Inclusive", 'student-roost': "All-Inclusive" } },
      { label: "Social Spaces", values: { unite: "Sky Lounges", iq: "Gym/Cinema", 'student-roost': "Study Hubs" } }
    ]
  },
  'visas': {
    title: "Visa Intelligence",
    subtitle: "Navigating the legal frameworks for international academic residency.",
    providers: [
      { id: 'standard', name: 'Student Visa', logo: 'https://images.unsplash.com/photo-1592288151075-813f89e80205?w=100&h=100&fit=crop', highlight: true },
      { id: 'graduate', name: 'Graduate Route', logo: 'https://images.unsplash.com/photo-1523285367489-d39ae03f0b07?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Permitted Work", values: { standard: "20h/Week", graduate: "Full Time" } },
      { label: "Duration", values: { standard: "Course Length", graduate: "2 - 3 Years" } },
      { label: "Pathway", values: { standard: "Academic", graduate: "Professional" } }
    ]
  },
  'employment': {
    title: "Labor Market Matrix",
    subtitle: "Comparing high-efficiency student employment platforms and career hubs.",
    providers: [
      { id: 'handshake', name: 'Handshake', logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop', highlight: true },
      { id: 'linkedin', name: 'LinkedIn', logo: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=100&h=100&fit=crop' },
      { id: 'indeed', name: 'Indeed', logo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Student Focus", values: { handshake: "Exclusive", linkedin: "Broad", indeed: "General" } },
      { label: "Direct Hire Rate", values: { handshake: "Very High", linkedin: "High", indeed: "Moderate" } },
      { label: "Resource Sync", values: { handshake: "Uni Integrated", linkedin: "Network-based", indeed: "Job-only" } }
    ]
  },
  'taxes': {
    title: "Fiscal Compliance",
    subtitle: "Tools and platforms for managing your UK tax status and NI-related logistics.",
    providers: [
      { id: 'hmrc', name: 'HMRC Portal', logo: 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=100&h=100&fit=crop', highlight: true },
      { id: 'taxscouts', name: 'TaxScouts', logo: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Submission Ease", values: { hmrc: "Institutional", taxscouts: "Assisted" } },
      { label: "Cost", values: { hmrc: "Free", taxscouts: "£149/Ret" } },
      { label: "Security", values: { hmrc: "State-level", taxscouts: "Encryption" } }
    ]
  },
  'loans': {
    title: "Capital Infrastructure",
    subtitle: "Comparing student-specific lending to optimize your academic funding strategy.",
    providers: [
      { id: 'prodigy', name: 'Prodigy Finance', logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=100&h=100&fit=crop', highlight: true },
      { id: 'mpower', name: 'Mpower Financing', logo: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Cosigner Req.", values: { prodigy: "No Cosigner", mpower: "No Cosigner" } },
      { label: "Interest Est.", values: { prodigy: "Variable Libor", mpower: "Fixed" } },
      { label: "Post-Grad Grace", values: { prodigy: "6 Months", mpower: "6 Months" } }
    ]
  },
  'credit-builder': {
    title: "Credit Calibration",
    subtitle: "Strategies and platforms to build a powerful UK credit reputation from zero.",
    providers: [
      { id: 'loqbox', name: 'LOQBOX', logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop', highlight: true },
      { id: 'pave', name: 'Pave', logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop' },
      { id: 'boshhh', name: 'Boshhh', logo: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Credit Impact", values: { loqbox: "Guaranteed UP", pave: "Bills Sync", boshhh: "SIM Integrated" } },
      { label: "Monthly Fee", values: { loqbox: "Free Option", pave: "£9/Mo", boshhh: "SIM Fee" } },
      { label: "Reporting", values: { loqbox: "3 Agencies", pave: "3 Agencies", boshhh: "3 Agencies" } }
    ]
  },
  'courses': {
    title: "Academic Intelligence",
    subtitle: "Comparative analysis of UK higher education programs and module architectures.",
    providers: [
      { id: 'ucl', name: 'UCL', logo: 'https://images.unsplash.com/photo-1523050335102-c32509b40f26?w=100&h=100&fit=crop', highlight: true },
      { id: 'kcl', name: 'KCL', logo: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=100&h=100&fit=crop' },
      { id: 'lse', name: 'LSE', logo: 'https://images.unsplash.com/photo-1521791136064-7986c295944b?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Global Ranking", values: { ucl: "Top 10", kcl: "Top 40", lse: "Top 5 (Soc Sci)" } },
      { label: "Employability", values: { ucl: "92%", kcl: "90%", lse: "95%" } },
      { label: "Location", values: { ucl: "Bloomsbury", kcl: "Strand", lse: "Houghton St" } }
    ]
  },
  'forex': {
    title: "Liquidity Management",
    subtitle: "Comparing interbank liquidity providers for high-volume currency optimization.",
    providers: [
      { id: 'wise', name: 'Wise', logo: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop', highlight: true },
      { id: 'currencyfair', name: 'CurrencyFair', logo: 'https://images.unsplash.com/photo-1611974714025-f5a0367b6462?w=100&h=100&fit=crop' },
      { id: 'revolut-fx', name: 'Revolut FX', logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Real Rate Bias", values: { wise: "Mid-Market", currencyfair: "P2P Market", 'revolut-fx': "Intra-Day" } },
      { label: "Setup Ritual", values: { wise: "Bio-Sync", currencyfair: "Standard", 'revolut-fx': "App-only" } },
      { label: "Transfer Speed", values: { wise: "< 1 hour", currencyfair: "1-2 days", 'revolut-fx': "Instant" } }
    ]
  },
  'social-events': {
    title: "Engagement Curation",
    subtitle: "Comparing institutional and community-led social gravity centers for students.",
    providers: [
      { id: 'su', name: 'Student Union', logo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=100&h=100&fit=crop', highlight: true },
      { id: 'eventbrite', name: 'Eventbrite', logo: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=100&h=100&fit=crop' },
      { id: 'meetup', name: 'Meetup', logo: 'https://images.unsplash.com/photo-1528605248644-14dd04cb11ef?w=100&h=100&fit=crop' }
    ],
    metrics: [
      { label: "Community Density", values: { su: "100% Student", eventbrite: "Mixed", meetup: "Topic-based" } },
      { label: "Access Ritual", values: { su: "ID-Verified", eventbrite: "Paid/Free", meetup: "Join Group" } },
      { label: "Yield Benefit", values: { su: "Institutional Trust", eventbrite: "Volume", meetup: "Long-term" } }
    ]
  }
};
