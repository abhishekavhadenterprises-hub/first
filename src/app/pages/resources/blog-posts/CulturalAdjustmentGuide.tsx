import React from 'react';

export const CulturalAdjustmentGuide = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
        Moving to a new country for studies is exciting but can also be challenging. Culture shock is normal, but with the right strategies, you can adapt successfully and thrive.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Culture Shock</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Culture shock typically happens in stages:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Honeymoon phase - Everything is exciting and new (weeks 1-4)",
            "Frustration phase - Differences become irritating (months 2-3)",
            "Adjustment phase - You start adapting (months 4-6)",
            "Acceptance phase - You feel comfortable and integrated (6+ months)"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Common Challenges</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          International students often face these challenges:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Language barriers and communication difficulties",
            "Different teaching styles and academic expectations",
            "Homesickness and missing family/friends",
            "Food and dietary differences",
            "Social norms and making friends",
            "Weather and climate adjustment"
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
            <h3 className="text-lg font-semibold text-[#4B6E48]">Strategies for Success</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Join international student clubs and societies",
              "Find a study buddy or mentor from your home country",
              "Attend orientation events and campus activities",
              "Learn about local customs and cultural norms",
              "Stay connected with family (but don't overdo it)",
              "Maintain routines from home while embracing new ones",
              "Seek help from university counseling services when needed"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#4B6E48] font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Making Friends</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Building a social network is crucial for your well-being and success abroad.
        </p>
      </section>
    </article>
  );
};

export default CulturalAdjustmentGuide;
