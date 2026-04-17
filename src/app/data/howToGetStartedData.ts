export type GetStartedStep = {
  title: string;
  description: string;
  image: string;
};

export type GetStartedData = {
  title: string;
  steps: GetStartedStep[];
};

export const howToGetStartedSectionData: Record<string, GetStartedData> = {
  'sim-cards': {
    title: "How to get started",
    steps: [
      {
        title: "Network Calibration",
        description: "Verify institutional 5G throughput in your primary academic and residential zones to ensure zero-latency digital immersion.",
        image: "/world_network_map.png"
      },
      {
        title: "Portfolio Optimization",
        description: "Select from curated spectrum holders. Evaluate biometric activation protocols and unlimited student-tier data hierarchies.",
        image: "/data_needs_checklists.png"
      },
      {
        title: "Contractual Strategy",
        description: "Engage with high-value annual contracts. Lock in student-exclusive fiscal benefits and ensure long-term connectivity stability.",
        image: "/planning_calendar_student.png"
      }
    ]
  },
  'banks': {
    title: "How to get started",
    steps: [
      {
        title: "Institutional Selection",
        description: "Identify banking partners with frictionless student onboarding and advanced mobile-first asset management capabilities.",
        image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200&q=80"
      },
      {
        title: "Credential Validation",
        description: "Synchronize your sovereign identity documents—Biometric Residence Permits and academic endorsements—for instant verification.",
        image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1200&q=80"
      },
      {
        title: "Vault Initialization",
        description: "Activate your secure financial hub. Enable global transfers and immediate spending power the moment you touch down.",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80"
      }
    ]
  },
  'insurance': {
    title: "How to get started",
    steps: [
      {
        title: "NHS Sync",
        description: "Verify your eligibility for the National Health Service framework based on your specific visa and course duration metrics.",
        image: "https://images.unsplash.com/photo-1505751172107-4ED483aa7232?w=1200&q=80"
      },
      {
        title: "Surcharge Execution",
        description: "Complete the Immigration Health Surcharge requirements to unlock comprehensive medical coverage across the UK.",
        image: "https://images.unsplash.com/photo-1589152121593-946726850010?w=1200&q=80"
      },
      {
        title: "Private Safeguard",
        description: "Augment your primary coverage with customized dental, optical, and contents insurance for total peace of mind.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
      }
    ]
  },
  'food': {
    title: "How to get started",
    steps: [
      {
        title: "Regional Sourcing",
        description: "Map your local ecosystem for premium grocers and budget-efficient suppliers using university-adjacent logistics maps.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80"
      },
      {
        title: "Capital Efficiency",
        description: "Adopt bulk-acquisition and meal-architecture strategies to maximize your student budget while maintaining peak performance nutrition.",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80"
      },
      {
        title: "Benefit Integration",
        description: "Leverage digital discount platforms and zero-waste initiatives to reduce your overhead and explore local gastronomy.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
      }
    ]
  },
  'visas': {
    title: "How to get started",
    steps: [
      {
        title: "Document Synthesis",
        description: "Amalgamate your academic CAS statement, financial solvency evidence, and biometric identification into a unified application dossier.",
        image: "https://images.unsplash.com/photo-1592288151075-813f89e80205?w=1200&q=80"
      },
      {
        title: "Application Protocol",
        description: "Initialize your digital submission through the official institutional gateway. Schedule your biometric ritual at a certified collection center.",
        image: "https://images.unsplash.com/photo-1554224155-01306385d836?w=1200&q=80"
      },
      {
        title: "Clearance & Landing",
        description: "Obtain your temporary entry clearance. Synchronize your arrival with your University's international onboarding schedule for a flawless transition.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f?w=1200&q=80"
      }
    ]
  },
  'social-events': {
    title: "How to get started",
    steps: [
      {
        title: "Network Mapping",
        description: "Explore the vast ecosystem of university societies and external interest groups to identify your primary social gravity centers.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80"
      },
      {
        title: "Access Acquisition",
        description: "Secure memberships and early-access passes for key calendar events. Initialize your presence in verified student-exclusive networks.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80"
      },
      {
        title: "Civic Integration",
        description: "Participate in institutional welcome rituals and community-building forums to solidify your presence in the student collective.",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04cb11ef?w=1200&q=80"
      }
    ]
  },
  'employment': {
    title: "How to get started",
    steps: [
      {
        title: "Protocol Compliance",
        description: "Verify your legal work rights under your specific visa architecture to ensure total alignment with university and state regulations.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80"
      },
      {
        title: "Asset Presentation",
        description: "Refactor your professional dossier to align with UK market-specific aesthetics and employer-driven demand hierarchies.",
        image: "https://images.unsplash.com/photo-1512418490979-92798ccc1380?w=1200&q=80"
      },
      {
        title: "Market Integration",
        description: "Leverage university career-labs and professional networks to identify high-value opportunities within the student labor ecosystem.",
        image: "https://images.unsplash.com/photo-1454165833222-3860b947bfef?w=1200&q=80"
      }
    ]
  },
  'taxes': {
    title: "How to get started",
    steps: [
      {
        title: "Status Calibration",
        description: "Determine your fiscal residency and tax obligation profile based on your global income and UK-based employment activity.",
        image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&q=80"
      },
      {
        title: "National Alignment",
        description: "Obtain your National Insurance Number (NI Number)—the essential key for lawful fiscal integration and social welfare access.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
      },
      {
        title: "Reporting Protocol",
        description: "Initialize your digital tax portal for real-time monitoring. Ensure annual compliance with HMRC protocols via curated student guides.",
        image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1200&q=80"
      }
    ]
  },
  'loans': {
    title: "How to get started",
    steps: [
      {
        title: "Fiscal Eligibility",
        description: "Benchmark your student profile against global lending architectures to identify the most efficient capital injection strategies.",
        image: "https://images.unsplash.com/photo-1579621970795-87faff2f9050?w=1200&q=80"
      },
      {
        title: "Strategy Formulation",
        description: "Select from curated institutional lenders specializing in student-tier amortization and low-impact interest structures.",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80"
      },
      {
        title: "Capital Release",
        description: "Initialize the verification仪式 and obtain fiscal clearance. Direct your assets toward your primary academic and residential hubs.",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80"
      }
    ]
  },
  'credit-builder': {
    title: "How to get started",
    steps: [
      {
        title: "Profile Genesis",
        description: "Initialize your presence within the UK's major credit-reporting frameworks. Establish the starting baseline for your fiscal reputation.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
      },
      {
        title: "Behavioral Logic",
        description: "Implement strategic spending protocols—using credit-builder accounts or cards—to demonstrate consistent repayment reliability.",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80"
      },
      {
        title: "Reputation Expansion",
        description: "Monitor your incremental growth via digital dashboards. Unlock premium high-limit assets as your credit score reaches institutional scale.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
      }
    ]
  },
  'housing': {
    title: "How to get started",
    steps: [
      {
        title: "Locational Mapping",
        description: "Analyze the proximity of residential zones to your daily academic transit nodes to find the optimal balance of life and study.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80"
      },
      {
        title: "Inventory Selection",
        description: "Browse verified student corridors and independent apartments. Evaluate security protocols and utility-inclusive lease models.",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80"
      },
      {
        title: "Lease Execution",
        description: "Complete the inventory check and digital contractual ritual. Secure your physical base with long-term residential stability.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
      }
    ]
  },
  'courses': {
    title: "How to get started",
    steps: [
      {
        title: "Academic Profiling",
        description: "Identify programs that resonate with your long-term career gravity. Compare modules, research throughput, and industry links.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
      },
      {
        title: "Offer Acquisition",
        description: "Amalgamate your academic credentials and personal narratives into a compelling dossier. Secure your unconditional place.",
        image: "https://images.unsplash.com/photo-1523050335102-c32509b40f26?w=1200&q=80"
      },
      {
        title: "Enrollment Mastery",
        description: "Initialize your university digital access identity. Register for modules and unlock your institutional resource ecosystem.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c295944b?w=1200&q=80"
      }
    ]
  },
  'forex': {
    title: "How to get started",
    steps: [
      {
        title: "Market Analysis",
        description: "Track global currency volatility via real-time logic engines to identify the most opportune moment for high-volume exchange.",
        image: "https://images.unsplash.com/photo-1611974714025-a8a2ad53b836?w=1200&q=80"
      },
      {
        title: "Platform Selection",
        description: "Establish accounts with interbank-rate liquidity providers to ensure zero-mark-up transfers across global borders.",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80"
      },
      {
        title: "Asset Liquidation",
        description: "Execute your digital transfer ritual. Direct your domestic wealth into the UK ecosystem with minimal commission overhead.",
        image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1200&q=80"
      }
    ]
  }
};
