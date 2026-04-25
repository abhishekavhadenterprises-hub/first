import React from 'react';

export const PartTimeJobsGuide = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
        Many international students work part-time to support themselves financially and gain valuable work experience. This guide covers everything you need to know about working while studying abroad.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Work Rights by Country</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Understanding your legal right to work is crucial:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "UK: Up to 20 hours/week during term, unlimited during breaks",
            "USA: On-campus only in first year, CPT/OPT later",
            "Canada: Up to 20 hours/week during term, full-time during breaks",
            "Australia: Up to 48 hours per fortnight during term",
            "Germany: 120 full days or 240 half days per year"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Popular Student Jobs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Common part-time jobs for international students:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Campus jobs (library, admin, student ambassador)",
            "Retail and hospitality (shops, cafes, restaurants)",
            "Tutoring (your native language or subjects you excel in)",
            "Freelancing (writing, design, coding)",
            "Research assistant positions",
            "Delivery services (food, groceries)"
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
            <h3 className="text-lg font-semibold text-[#4B6E48]">Balancing Work and Studies</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Prioritize academics - studies come first",
              "Create a weekly schedule blocking study and work hours",
              "Choose flexible jobs that understand student commitments",
              "Don't exceed legal work hour limits",
              "Communicate with employers about exam periods",
              "Use university career services for job search support"
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
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Building Professional Experience</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Make your part-time job count towards your career:
        </p>
      </section>
    </article>
  );
};

export default PartTimeJobsGuide;
