export type SavingsDetail = {
  label: string;
  amount: string;
  description: string;
};

export type TotalSavingsData = {
  serviceName: string;
  totalAnnualSavings: string;
  breakdown: SavingsDetail[];
  ctaText: string;
};

export const totalSavingsSectionData: Record<string, TotalSavingsData> = {
  'sim-cards': {
    serviceName: "Mobile Connectivity",
    totalAnnualSavings: "£420",
    ctaText: "Unlock Connectivity Savings",
    breakdown: [
      { label: "Student Discount", amount: "£180/yr", description: "Exclusive 25%-30% reductions on monthly plan fees for students." },
      { label: "Data Optimization", amount: "£120/yr", description: "Zero-cost data rollover and unlimited social app usage." },
      { label: "Roaming Benefits", amount: "£120/yr", description: "Free international roaming in key student territories." }
    ]
  },
  'banks': {
    serviceName: "Financial Management",
    totalAnnualSavings: "£350",
    ctaText: "Optimize Financial Assets",
    breakdown: [
      { label: "FX Fee Waiver", amount: "£150/yr", description: "Zero-commission international spending at interbank rates." },
      { label: "Account Rewards", amount: "£100/yr", description: "Direct cash bonuses curated for student expenses." },
      { label: "Overdraft Savings", amount: "£100/yr", description: "Interest-free overdraft buffers for short-term liquidity." }
    ]
  },
  'food': {
    serviceName: "Lifestyle Logistics",
    totalAnnualSavings: "£850",
    ctaText: "Maximize Nutritional Budget",
    breakdown: [
      { label: "Bulk Acquisition", amount: "£400/yr", description: "Optimized procurement via partner wholesale networks." },
      { label: "Digital Vouchers", amount: "£250/yr", description: "Automated student coupons and zero-waste apps." },
      { label: "Campus Meal Credits", amount: "£200/yr", description: "Pre-paid university meal plan optimization." }
    ]
  },
  'housing': {
    serviceName: "Residential Economics",
    totalAnnualSavings: "£1,200",
    ctaText: "Secure Housing Benefit",
    breakdown: [
      { label: "Utility Inclusion", amount: "£600/yr", description: "All-inclusive utility packages prevent variable billing stress." },
      { label: "Early-Bird Lock", amount: "£400/yr", description: "Preferential rates for early institutional bookings." },
      { label: "Deposit Guard", amount: "£200/yr", description: "Zero-admin fee protocols and legal yield protections." }
    ]
  },
  'visas': {
    serviceName: "Legal Compliance",
    totalAnnualSavings: "£250",
    ctaText: "Optimize Visa Costs",
    breakdown: [
      { label: "Admin Fee Waiver", amount: "£150/yr", description: "Corporate-tier application support reduces processing errors." },
      { label: "IHS Optimization", amount: "£100/yr", description: "Strategic payment timing and duration calibration." }
    ]
  },
  'employment': {
    serviceName: "Career Yields",
    totalAnnualSavings: "£2,400",
    ctaText: "Boost Career Earnings",
    breakdown: [
      { label: "Wage Optimization", amount: "£1,800/yr", description: "Access to higher-tier university roles and exclusive internships." },
      { label: "Tax Rebates", amount: "£600/yr", description: "Automated NI optimization and student tax threshold monitoring." }
    ]
  },
  'taxes': {
    serviceName: "Fiscal Hygiene",
    totalAnnualSavings: "£450",
    ctaText: "Maximize NI Efficiency",
    breakdown: [
      { label: "NI Rebates", amount: "£300/yr", description: "Reclaiming overpaid National Insurance on part-time earnings." },
      { label: "Professional Filing", amount: "£150/yr", description: "Zero-cost tax filing tools for student-tier profiles." }
    ]
  },
  'loans': {
    serviceName: "Capital Efficiency",
    totalAnnualSavings: "£1,500",
    ctaText: "Optimize Loan Yield",
    breakdown: [
      { label: "Interest Spread", amount: "£1,200/yr", description: "Securing sub-market interest rates via institutional lending." },
      { label: "Late Fee Waiver", amount: "£300/yr", description: "Grace-period protection specifically for graduate profiles." }
    ]
  },
  'credit-builder': {
    serviceName: "Financial Reputation",
    totalAnnualSavings: "£800",
    ctaText: "Unlock Future Capital",
    breakdown: [
      { label: "Future Loan Savings", amount: "£600/yr", description: "Lower interest rates on future car or personal loans." },
      { label: "Rental Acceptance", amount: "£200/yr", description: "Eliminating the need for expensive rental guarantors." }
    ]
  },
  'courses': {
    serviceName: "Academic ROI",
    totalAnnualSavings: "£5,000",
    ctaText: "Maximize Academic Value",
    breakdown: [
      { label: "Scholarship Yield", amount: "£4,000/yr", description: "Access to automated scholarship matching and bursary pots." },
      { label: "Material Reduction", amount: "£1,000/yr", description: "Institutional digital text-book access and lab fee waivers." }
    ]
  },
  'forex': {
    serviceName: "Liquidity Yield",
    totalAnnualSavings: "£1,200",
    ctaText: "Optimize FX Liquidly",
    breakdown: [
      { label: "Mark-up Savings", amount: "£900/yr", description: "Eliminating bank fx margins on high-volume tuition transfers." },
      { label: "Transfer Waivers", amount: "£300/yr", description: "Zero-cost global transfers via P2P liquidity networks." }
    ]
  },
  'social-events': {
    serviceName: "Network Capital",
    totalAnnualSavings: "£600",
    ctaText: "Maximize Social Benefits",
    breakdown: [
      { label: "SU Discounts", amount: "£400/yr", description: "Subsidized membership and event access for students." },
      { label: "Priority Bundles", amount: "£200/yr", description: "Bulk social passes and early-access retail event codes." }
    ]
  }
};
