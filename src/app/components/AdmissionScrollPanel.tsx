import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function AdmissionScrollPanel() {
  const sectionRef = useRef<HTMLElement>(null);
  const workItemRef = useRef<HTMLDivElement>(null);
  const ghostItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !workItemRef.current || !ghostItemRef.current) return;

    const ctx = gsap.context(() => {
      const element = workItemRef.current;
      const ghost = ghostItemRef.current;

      if (!element || !ghost) return;

      // Set initial state
      gsap.set(element, {
        position: 'fixed',
        top: 0,
        clipPath: 'inset(100% 0 0% 0)'
      });

      const lines = element.querySelectorAll('[data-line]');
      const workImage = element.querySelector('[data-work-image]') as HTMLElement;
      const detailImages = element.querySelectorAll('[data-detail-image]');
      const overlay = element.querySelector('[data-item-overlay]') as HTMLElement;

      // Set initial image scale
      if (workImage) {
        gsap.set(workImage, {
          scale: 1.4,
          yPercent: 10
        });
      }

      // Main reveal animation
      const stStarting = {
        trigger: ghost,
        scrub: true,
        start: 'top bottom',
        end: '+=75vh top'
      };

      gsap.to(element, {
        clipPath: 'inset(0% 0 0 0)',
        scrollTrigger: stStarting
      });

      if (workImage) {
        gsap.to(workImage, {
          yPercent: 10,
          scale: 1.2,
          scrollTrigger: stStarting
        });
      }

      // Text lines animation
      if (lines.length > 0) {
        gsap.from(lines, {
          yPercent: 125,
          rotate: 2.5,
          ease: 'power2.inOut',
          duration: 1.25,
          scrollTrigger: {
            trigger: ghost,
            start: 'top 75%',
            toggleActions: 'play reverse restart reverse'
          }
        });
      }

      // Image blur effect
      if (workImage) {
        gsap.to(workImage, {
          filter: 'blur(10px)',
          opacity: 0.3,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: ghost,
            scrub: true,
            start: '0 top',
            end: '35% top'
          }
        });
      }

      // Detail images slide in
      if (detailImages.length > 0) {
        gsap.from(detailImages, {
          x: '100vw',
          scrollTrigger: {
            trigger: ghost,
            scrub: true,
            start: '0 top',
            end: '65% top',
            onLeave: () => {
              if (overlay) {
                gsap.set(overlay, {
                  display: 'flex',
                  opacity: 0
                });
              }
            }
          }
        });
      }

      // Final animations
      const stFinal = {
        trigger: ghost,
        scrub: true,
        start: '105% bottom',
        toggleActions: 'play reverse play reverse'
      };

      if (overlay) {
        gsap.fromTo(
          overlay,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: stFinal
          }
        );
      }

      if (detailImages.length > 0) {
        gsap.to(detailImages, {
          yPercent: 15,
          scrollTrigger: stFinal
        });
      }

      gsap.to(element, {
        filter: 'blur(1px)',
        scrollTrigger: stFinal
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const admissionData = {
    title: 'ADMISSION',
    titleAccent: 'REQUIREMENTS',
    subtitles: [
      'Application Process',
      'Test Scores',
      'Essay Requirements',
      'Recommendation Letters',
      'Interview Process'
    ],
    mainImage: 'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYWRtaXNzaW9uJTIwYXBwbGljYXRpb24lMjBkb2N1bWVudHN8ZW58MXx8fHwxNzcxMjQxMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    cards: [
      {
        title: 'Undergraduate Admission',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcmdyYWR1YXRlJTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzA4OTYxMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        content: {
          academicRequirements: [
            '4 years of English',
            'Mathematics through Calculus',
            '3+ years of History/Social Studies',
            '3+ years of Laboratory Science',
            '3+ years of Foreign Language'
          ],
          testScores: {
            sat: '1470-1570',
            act: '33-35'
          },
          acceptanceRate: '3.9%'
        }
      },
      {
        title: 'Graduate Admission',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0ZSUyMHN0dWRlbnRzJTIwY2FtcHVzfGVufDF8fHx8MTcwODk2MTIzNHww&ixlib=rb-4.1.0&q=80&w=1080',
        content: {
          applicationComponents: [
            "Bachelor's degree from accredited institution",
            'GRE scores (program dependent)',
            '3 Letters of Recommendation',
            'Statement of Purpose',
            'TOEFL/IELTS (International students)'
          ],
          programRequirements: [
            'Min GPA 3.0',
            'Research Experience',
            'Work Experience'
          ],
          deadlines: 'Vary by program (typically December - January)'
        }
      }
    ],
    accentColor: '#6B8E23'
  };

  return (
    <section ref={sectionRef} className="relative bg-[#0F172A]" data-admission-section>
      {/* Ghost container for scroll tracking */}
      <div className="ghost-work-container">
        <div
          ref={ghostItemRef}
          className="w-full"
          style={{ height: '300vh' }}
        />
      </div>

      {/* Work item */}
      <div
        ref={workItemRef}
        className="work-item w-full h-screen flex items-stretch relative overflow-hidden bg-[#000]"
      >
        {/* Main background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={admissionData.mainImage}
            alt={`${admissionData.title} ${admissionData.titleAccent}`}
            className="w-full h-full object-cover opacity-75"
            data-work-image
          />
        </div>

        {/* Content wrapper */}
        <div className="relative w-full flex flex-col justify-between p-8 md:p-16 z-10">
          {/* Detail cards wrapper */}
          <div className="flex justify-center items-stretch gap-8 md:gap-12 flex-1 px-4">
            {admissionData.cards.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className="w-full max-w-md md:max-w-2xl rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/95 flex flex-col"
                data-detail-image
              >
                {/* Card Image */}
                <div className="w-full h-48 md:h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-6">
                    {card.title}
                  </h3>

                  {/* Undergraduate Content */}
                  {cardIndex === 0 && card.content.academicRequirements && (
                    <div className="space-y-6">
                      {/* Academic Requirements */}
                      <div>
                        <h4 className="text-base font-semibold text-[#0F172A] mb-3">Academic Requirements</h4>
                        <ul className="space-y-2">
                          {card.content.academicRequirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#6B7280]">
                              <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Test Scores */}
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-base font-semibold text-[#0F172A] mb-3">Test Scores</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-[#6B7280] mb-1">SAT Middle 50%</p>
                            <p className="text-lg font-semibold text-[#4B6E48]">{card.content.testScores?.sat}</p>
                          </div>
                          <div>
                            <p className="text-xs text-[#6B7280] mb-1">ACT Middle 50%</p>
                            <p className="text-lg font-semibold text-[#4B6E48]">{card.content.testScores?.act}</p>
                          </div>
                        </div>
                      </div>

                      {/* Acceptance Rate */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-[#0F172A]">Acceptance Rate</span>
                          <span className="text-xl font-semibold text-[#4B6E48]">{card.content.acceptanceRate}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Graduate Content */}
                  {cardIndex === 1 && card.content.applicationComponents && (
                    <div className="space-y-6">
                      {/* Application Components */}
                      <div>
                        <h4 className="text-base font-semibold text-[#0F172A] mb-3">Application Components</h4>
                        <ul className="space-y-2">
                          {card.content.applicationComponents.map((component, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#6B7280]">
                              <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                              <span>{component}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Program Requirements */}
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-base font-semibold text-[#0F172A] mb-3">Program Requirements</h4>
                        <p className="text-sm text-[#6B7280] mb-3">
                          Varies by program. Common requirements include:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {card.content.programRequirements?.map((req, idx) => (
                            <span key={idx} className="px-3 py-1 bg-[#4B6E48] bg-opacity-10 text-[#4B6E48] text-xs font-medium rounded-full">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Deadlines */}
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-base font-semibold text-[#0F172A] mb-2">Application Deadlines</h4>
                        <p className="text-sm text-[#6B7280]">
                          {card.content.deadlines}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Text content */}
          <div className="flex justify-between items-end flex-wrap gap-8 pt-16">
            {/* Title */}
            <div className="flex flex-col">
              <div className="overflow-hidden">
                <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-none" data-line>
                  {admissionData.title}
                </div>
              </div>
              <div className="overflow-hidden">
                <div
                  className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none"
                  style={{ color: admissionData.accentColor }}
                  data-line
                >
                  {admissionData.titleAccent}
                </div>
              </div>
            </div>

            {/* Subtitles */}
            <div className="flex flex-col gap-2 text-right">
              {admissionData.subtitles.map((subtitle, subIndex) => (
                <div key={subIndex} className="overflow-hidden">
                  <div className="text-white text-sm md:text-base uppercase font-medium" data-line>
                    {subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black pointer-events-none hidden"
          data-item-overlay
        />
      </div>
    </section>
  );
}