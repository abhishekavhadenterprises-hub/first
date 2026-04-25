import React from 'react';

export const USStudentVisaGuide = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
        The F-1 visa is the most common student visa for studying in the United States. This comprehensive guide walks you through every step of the application process.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">F-1 Visa Requirements</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before applying, ensure you meet these basic requirements:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Acceptance to a SEVP-approved US institution",
            "Valid I-20 form issued by your university",
            "Proof of financial ability to cover tuition and living expenses",
            "Strong ties to your home country (to prove intent to return)",
            "Valid passport (must be valid for at least 6 months beyond intended stay)"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Application Steps</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Follow these steps carefully for a successful application:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Receive I-20 from your university and pay SEVIS fee ($350)",
            "Complete DS-160 form online",
            "Pay visa application fee ($185)",
            "Schedule visa interview appointment",
            "Gather required documents",
            "Attend visa interview at US Embassy/Consulate",
            "Wait for visa processing (typically 3-5 business days)"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Interview Preparation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The visa interview is crucial. Be prepared to answer questions about your study plans, financial situation, and post-graduation intentions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Common Interview Questions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Practice answers to these frequently asked questions:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Why do you want to study in the US?",
            "Why this particular university and program?",
            "Who is funding your education?",
            "What are your plans after graduation?",
            "Do you have family in the US?"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <div className="bg-[#4B6E48]/5 border border-[#4B6E48]/20 rounded-xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#4B6E48] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-[#4B6E48]">Pro Tips for Success</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Be honest and confident during the interview",
              "Organize all documents in a clear folder with tabs",
              "Demonstrate clear intent to return home after studies",
              "Show financial documents proving funds for entire program duration",
              "Dress professionally for the interview",
              "Arrive at the embassy 30 minutes early"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#4B6E48] font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default USStudentVisaGuide;
