export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQData = {
  title: string;
  subtitle: string;
  items: FAQItem[];
};

export const serviceFAQData: Record<string, FAQData> = {
  'sim-cards': {
    title: "Common Inquiries",
    subtitle: "Everything you need to know about staying connected in the UK.",
    items: [
      { question: "Can I keep my current phone number?", answer: "Yes. You can request a PAC code from your old provider to transfer your number effortlessly." },
      { question: "Is 5G included?", answer: "Most premium student plans include 5G at no extra cost in coverage zones." },
      { question: "Do I need a UK bank account?", answer: "For Pay-as-you-go, no. For monthly contracts, usually yes for credit checks." }
    ]
  },
  'banks': {
    title: "Banking FAQ",
    subtitle: "Navigating the UK financial landscape as a student.",
    items: [
      { question: "What documents are needed?", answer: "Passport, Student Visa (BRP), and a University Letter of Enrollment." },
      { question: "Are there monthly fees?", answer: "Most student accounts have £0 monthly fees and include extra perks." },
      { question: "How long to activate?", answer: "Digital banks are instant; traditional banks may take 3-5 working days." }
    ]
  },
  'insurance': {
    title: "Health & Care FAQ",
    subtitle: "Understanding your coverage and the NHS system.",
    items: [
      { question: "Does IHS cover everything?", answer: "It covers GPs and hospitals. Dental and optical usually require private cover." },
      { question: "When to register with a GP?", answer: "Within your first week of arrival is highly recommended." }
    ]
  },
  'housing': {
    title: "Residential FAQ",
    subtitle: "Finding and securing your home in the UK.",
    items: [
       { question: "Are bills included?", answer: "Most purpose-built student accommodations (PBSA) include all utilities and Wi-Fi." },
       { question: "Do I need a UK guarantor?", answer: "If you don't have one, many providers allow you to pay in installments or use a service like Housing Hand." }
    ]
  },
  'visas': {
    title: "Immigration FAQ",
    subtitle: "Maintaining your legal status during your studies.",
    items: [
       { question: "Can I work on a student visa?", answer: "Usually 20 hours per week during term time and full-time during vacations." },
       { question: "What is a BRP?", answer: "Your Biometric Residence Permit, which serves as your official ID and visa in the UK." }
    ]
  },
  'employment': {
    title: "Career FAQ",
    subtitle: "Navigating the UK job market as a student.",
    items: [
       { question: "Where can I find part-time jobs?", answer: "Your University's Career Service and platforms like Handshake are the best starting points." },
       { question: "Do I need an NI number?", answer: "Yes, you must apply for a National Insurance number to work legally in the UK." }
    ]
  },
  'taxes': {
    title: "Fiscal FAQ",
    subtitle: "Understanding your tax obligations.",
    items: [
       { question: "Do students pay Income Tax?", answer: "Only if you earn more than the Personal Allowance (£12,570 for 24/25)." },
       { question: "How do I get an NI number?", answer: "You can apply online via the official GOV.UK portal once you arrive in the UK." }
    ]
  },
  'loans': {
    title: "Funding FAQ",
    subtitle: "Management of academic capital and loans.",
    items: [
       { question: "Can international students get UK loans?", answer: "Standard UK student finance is limited, but specialist lenders like Prodigy cater to international students." }
    ]
  },
  'credit-builder': {
    title: "Credit FAQ",
    subtitle: "Building your UK financial reputation.",
    items: [
       { question: "Why is credit important in the UK?", answer: "It affects your ability to get phone contracts, rent apartments, and apply for future credit cards." }
    ]
  },
  'courses': {
    title: "Academic FAQ",
    subtitle: "Managing your course and modules.",
    items: [
       { question: "Can I change my modules?", answer: "Most universities allow a 'change of mind' period during the first two weeks of each semester." }
    ]
  },
  'forex': {
    title: "Forex FAQ",
    subtitle: "Optimizing global wealth transfers.",
    items: [
       { question: "What is the 'Real Rate'?", answer: "The mid-market rate seen on Google. We recommend providers like Wise that offer this rate directly." }
    ]
  },
  'social-events': {
    title: "Community FAQ",
    subtitle: "Engaging with student life.",
    items: [
       { question: "How do I join societies?", answer: "Usually during 'Freshers Fair' or via your Student Union website at any time of the year." }
    ]
  }
};
