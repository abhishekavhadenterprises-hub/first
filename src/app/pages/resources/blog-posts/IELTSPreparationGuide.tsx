import React from 'react';

export const IELTSPreparationGuide = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
        IELTS (International English Language Testing System) is required by most universities worldwide. This guide provides comprehensive strategies to help you achieve your target score.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding IELTS Format</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The test has four sections:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Listening (30 minutes) - 40 questions",
            "Reading (60 minutes) - 40 questions",
            "Writing (60 minutes) - 2 tasks",
            "Speaking (11-14 minutes) - 3 parts"
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
            <h3 className="text-lg font-semibold text-[#4B6E48]">Listening Section Strategies</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Read questions before the audio starts",
              "Predict the type of answer expected",
              "Watch for paraphrasing - answers are rarely word-for-word",
              "Don't panic if you miss an answer - move on quickly",
              "Use the 10-minute transfer time wisely"
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
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Reading Section Strategies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The reading section is time-pressured. Effective time management is crucial.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Writing Task 2 Tips</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Task 2 carries more weight (66% of writing score):
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Spend 40 minutes on Task 2 (vs 20 on Task 1)",
            "Write at least 250 words (ideally 270-290)",
            "Use a clear structure: Introduction, Body Paragraphs, Conclusion",
            "Include topic-specific vocabulary",
            "Avoid memorized phrases - examiners can spot them"
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
            <h3 className="text-lg font-semibold text-[#4B6E48]">Speaking Test Success</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Practice speaking English daily, even to yourself",
              "Record yourself and identify areas for improvement",
              "Expand answers beyond yes/no - give reasons and examples",
              "Use discourse markers (however, moreover, in addition)",
              "Don't worry about accent - clarity matters more",
              "Stay calm and confident during the test"
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

export default IELTSPreparationGuide;
