import React from 'react';

export const MastersVsPhDGuide = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
        Choosing between a Master's and PhD is a significant decision that impacts your career trajectory. This guide helps you understand the differences and make an informed choice.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Master's Degree Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Key characteristics of Master's programs:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Duration: 1-2 years typically",
            "Focus: Specialized knowledge in a specific field",
            "Outcome: Career advancement or prerequisite for PhD",
            "Research: May include thesis or capstone project",
            "Funding: Often self-funded, some scholarships available"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">PhD Degree Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Key characteristics of PhD programs:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Duration: 4-6 years typically",
            "Focus: Original research and contribution to knowledge",
            "Outcome: Academic career or high-level research positions",
            "Research: Dissertation required with original findings",
            "Funding: Often funded through assistantships or fellowships"
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
            <h3 className="text-lg font-semibold text-[#4B6E48]">Which is Right for You?</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Career goals - Industry positions often need Master's; academic careers need PhD",
              "Time commitment - Can you dedicate 4-6 years to a PhD?",
              "Research interest - Do you have a burning research question?",
              "Financial situation - PhD programs often offer better funding",
              "Career trajectory - Some fields value PhD, others value experience"
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

export default MastersVsPhDGuide;
