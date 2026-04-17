export type WhenYouNeedThisData = {
  title: string;
  description: string;
  tags: string[];
};

export const whenYouNeedThisSectionData: Record<string, WhenYouNeedThisData> = {
  'sim-cards': {
    title: "When You'll Need This",
    description: "Get your UK SIM card upon arrival or order online to your accommodation. Most providers offer free delivery.",
    tags: [
      "Order before arrival",
      "No credit check needed",
      "Activate immediately"
    ]
  },
  'banks': {
    title: "When You'll Need This",
    description: "Open a bank account within the first 2 weeks of arrival. You'll need it for rent, bills, and receiving funds.",
    tags: [
      "Within 2 weeks of arrival",
      "Some allow pre-arrival applications",
      "Have documents ready"
    ]
  },
  'insurance': {
    title: "When You'll Need This",
    description: "NHS access is free for students on courses longer than 6 months. Consider additional insurance for travel and belongings.",
    tags: [
      "IHS fee paid with visa",
      "Travel insurance recommended",
      "Contents insurance optional"
    ]
  },
  'food': {
    title: "When You'll Need This",
    description: "These services are useful from day one, especially during busy exam periods or when settling in.",
    tags: [
      "Available immediately",
      "Great for late-night studying",
      "Try Too Good To Go for budget meals"
    ]
  },
  'courses': {
    title: "When You'll Need This",
    description: "Start exploring transferable courses as soon as you confirm your university place to maximize savings.",
    tags: [
      "Pre-arrival planning",
      "Credit transfer verification",
      "Academic alignment"
    ]
  },
  'forex': {
    title: "When You'll Need This",
    description: "Secure your forex rates at least 4 weeks before travel to avoid last-minute fluctuations.",
    tags: [
      "Rate monitoring",
      "RBI authorized partners",
      "Prepaid travel cards"
    ]
  },
  'visas': {
    title: "When You'll Need This",
    description: "Visa processing can take weeks. Start your application as soon as you receive your CAS/I-20 document.",
    tags: [
      "Priority processing",
      "Document validation",
      "Appointment tracking"
    ]
  }
};
