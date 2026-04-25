import React from 'react';

export const ScholarshipsGuide = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
        Studying abroad can be expensive, but numerous scholarships can help make your dreams a reality. Here are 10 prestigious fully-funded scholarships for international students.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Chevening Scholarships (UK)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The UK government's global scholarship program. Covers tuition, living expenses, and flights. Open to students from 160+ countries pursuing master's degrees.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Fulbright Foreign Student Program (USA)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          One of the most prestigious scholarships worldwide. Covers full tuition, airfare, living stipend, and health insurance for graduate studies in the US.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">3. DAAD Scholarships (Germany)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          German Academic Exchange Service offers scholarships for undergraduate, master's, and PhD students. Many programs taught in English.
        </p>
      </section>

      <section className="mb-10">
        <div className="bg-[#4B6E48]/5 border border-[#4B6E48]/20 rounded-xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#4B6E48] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-[#4B6E48]">Application Tips</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Start researching scholarships 12-18 months before your intended start date",
              "Tailor each application to the specific scholarship criteria",
              "Highlight leadership experience and community involvement",
              "Get strong recommendation letters from professors or employers",
              "Proofread essays multiple times and get feedback",
              "Apply to multiple scholarships to increase chances"
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
        <h2 className="text-2xl font-bold mb-4 text-gray-900">What Scholarship Committees Look For</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Understanding evaluation criteria helps strengthen your application:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Academic excellence (strong GPA and test scores)",
            "Leadership potential and extracurricular involvement",
            "Clear career goals and how the scholarship helps achieve them",
            "Commitment to giving back to home country/community",
            "Unique perspective or overcoming challenges"
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

export default ScholarshipsGuide;
