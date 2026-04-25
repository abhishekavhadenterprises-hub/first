import React from 'react';

export const CanadaStudyPermitGuide = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
        Canada is increasingly popular among international students due to its quality education, multicultural environment, and post-graduation work opportunities. This guide covers the study permit application process.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Study Permit Requirements</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Basic requirements for a Canadian study permit:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Letter of acceptance from a Designated Learning Institution (DLI)",
            "Proof of financial support (CAD 10,000+ per year)",
            "No criminal record",
            "Good health (medical exam if required)",
            "Intent to leave Canada after studies"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Application Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Step-by-step application guide:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Get acceptance letter from DLI",
            "Gather required documents",
            "Apply online through IRCC portal",
            "Pay application fee (CAD 150)",
            "Submit biometrics (CAD 85)",
            "Await decision (processing time varies by country)",
            "Receive Port of Entry Letter of Introduction if approved"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Financial Proof Requirements</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You must demonstrate sufficient funds for:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "First year tuition fees",
            "CAD 10,000 for living expenses (or CAD 11,000 in Quebec)",
            "Additional CAD 4,000 for spouse and CAD 3,000 per child if applicable",
            "Return transportation costs"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default CanadaStudyPermitGuide;
