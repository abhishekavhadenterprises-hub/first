import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollItem {
  id: number;
  title: string;
  titleAccent: string;
  subtitles: string[];
  mainImage: string;
  detailImages: string[];
  accentColor: string;
}

const scrollItems: ScrollItem[] = [
  {
    id: 1,
    title: 'ACADEMIC',
    titleAccent: 'PROGRAMS',
    subtitles: [
      'Undergraduate Degrees',
      'Graduate Programs',
      'Professional Schools',
      'Interdisciplinary Studies',
      'Online Learning'
    ],
    mainImage: 'https://images.unsplash.com/photo-1676179099440-98a519bce6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmdzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTI0MTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    detailImages: [
      'https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcxMjE4MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1676179099440-98a519bce6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmdzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTI0MTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcxMjE4MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    accentColor: '#4B6E48'
  },
  {
    id: 2,
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
    detailImages: [
      'https://images.unsplash.com/photo-1726831662518-c48d983f9b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBwbGljYXRpb24lMjBmb3JtJTIwd3JpdGluZ3xlbnwxfHx8fDE3NzEyNDEzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYWRtaXNzaW9uJTIwYXBwbGljYXRpb24lMjBkb2N1bWVudHN8ZW58MXx8fHwxNzcxMjQxMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1726831662518-c48d983f9b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBwbGljYXRpb24lMjBmb3JtJTIwd3JpdGluZ3xlbnwxfHx8fDE3NzEyNDEzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    accentColor: '#6B8E23'
  },
  {
    id: 3,
    title: 'COST &',
    titleAccent: 'FINANCIAL AID',
    subtitles: [
      'Tuition Fees',
      'Scholarships',
      'Need-Based Aid',
      'Work-Study Programs',
      'Payment Plans'
    ],
    mainImage: 'https://images.unsplash.com/photo-1538356390198-964cc56764d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmluYW5jaWFsJTIwYWlkJTIwc2Nob2xhcnNoaXAlMjBtb25leXxlbnwxfHx8fDE3NzEyNDEzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    detailImages: [
      'https://images.unsplash.com/photo-1538356390198-964cc56764d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmluYW5jaWFsJTIwYWlkJTIwc2Nob2xhcnNoaXAlMjBtb25leXxlbnwxfHx8fDE3NzEyNDEzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1538356390198-964cc56764d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmluYW5jaWFsJTIwYWlkJTIwc2Nob2xhcnNoaXAlMjBtb25leXxlbnwxfHx8fDE3NzEyNDEzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1538356390198-964cc56764d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmluYW5jaWFsJTIwYWlkJTIwc2Nob2xhcnNoaXAlMjBtb25leXxlbnwxfHx8fDE3NzEyNDEzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    accentColor: '#5F8A4E'
  },
  {
    id: 4,
    title: 'CAMPUS',
    titleAccent: 'LIFE',
    subtitles: [
      'Vibrant Community',
      'Student Organizations',
      'Cultural Diversity',
      'Social Events',
      'Campus Traditions'
    ],
    mainImage: 'https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MTIzMDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    detailImages: [
      'https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcxMjE4MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MTIzMDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcxMjE4MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    accentColor: '#4B6E48'
  },
  {
    id: 5,
    title: 'CAREER',
    titleAccent: 'OUTCOMES',
    subtitles: [
      'Employment Rate',
      'Top Employers',
      'Average Salary',
      'Career Services',
      'Alumni Network'
    ],
    mainImage: 'https://images.unsplash.com/photo-1770235621101-91b9d255f07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGUlMjBjYXJlZXIlMjBzdWNjZXNzfGVufDF8fHx8MTc3MTI0MTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    detailImages: [
      'https://images.unsplash.com/photo-1652285374663-d06ce650028a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdWNjZXNzfGVufDF8fHx8MTc3MTEzNzg0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1770235621101-91b9d255f07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGUlMjBjYXJlZXIlMjBzdWNjZXNzfGVufDF8fHx8MTc3MTI0MTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1652285374663-d06ce650028a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdWNjZXNzfGVufDF8fHx8MTc3MTEzNzg0MHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    accentColor: '#6B8E23'
  },
  {
    id: 6,
    title: 'RESEARCH',
    titleAccent: 'EXCELLENCE',
    subtitles: [
      'Cutting-Edge Labs',
      'Nobel Laureates',
      'Innovative Projects',
      'Global Impact',
      'Research Funding'
    ],
    mainImage: 'https://images.unsplash.com/photo-1562411403-f583472c8e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5JTIwc2NpZW5jZXxlbnwxfHx8fDE3NzExOTI5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    detailImages: [
      'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2NpZW5jZSUyMGxhYm9yYXRvcnklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcxMTk0MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1562411403-f583472c8e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5JTIwc2NpZW5jZXxlbnwxfHx8fDE3NzExOTI5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2NpZW5jZSUyMGxhYm9yYXRvcnklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcxMTk0MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    accentColor: '#5F8A4E'
  }
];

export function UniversityScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const workItemsRef = useRef<HTMLDivElement[]>([]);
  const ghostItemsRef = useRef<HTMLDivElement[]>([]);

  // Only show the last 3 items
  const displayedItems = scrollItems.slice(-3);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state for work items
      gsap.set('.work-item', {
        position: 'fixed',
        top: 0,
        clipPath: 'inset(100% 0 0% 0)'
      });

      // Animate each work item
      workItemsRef.current.forEach((element, index) => {
        if (!element || !ghostItemsRef.current[index]) return;

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
          trigger: ghostItemsRef.current[index],
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
              trigger: ghostItemsRef.current[index],
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
              trigger: ghostItemsRef.current[index],
              scrub: true,
              start: '0 top',
              end: '35% top'
            }
          });
        }

        // Detail images slide in
        if (detailImages.length > 0) {
          gsap.from(detailImages, {
            x: index % 2 === 0 ? '100vw' : '-100vw',
            scrollTrigger: {
              trigger: ghostItemsRef.current[index],
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
          trigger: ghostItemsRef.current[index],
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
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0F172A]" data-work-section>
      {/* Ghost container for scroll tracking */}
      <div className="ghost-work-container">
        {displayedItems.map((item, index) => (
          <div
            key={`ghost-${item.id}`}
            ref={(el) => {
              if (el) ghostItemsRef.current[index] = el;
            }}
            className="w-full"
            style={{ height: '300vh' }}
          />
        ))}
      </div>

      {/* Work items */}
      {displayedItems.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => {
            if (el) workItemsRef.current[index] = el;
          }}
          className="work-item w-full h-screen flex items-stretch relative overflow-hidden bg-[#000]"
        >
          {/* Main background image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={item.mainImage}
              alt={`${item.title} ${item.titleAccent}`}
              className="w-full h-full object-cover opacity-75"
              data-work-image
            />
          </div>

          {/* Content wrapper */}
          <div className="relative w-full flex flex-col justify-between p-8 md:p-16 z-10">
            {/* Detail images wrapper */}
            <div className="flex justify-center items-center gap-8 md:gap-12 flex-1">
              {item.detailImages.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="w-full max-w-xs md:max-w-sm aspect-video rounded-lg overflow-hidden shadow-2xl"
                  data-detail-image
                >
                  <img
                    src={img}
                    alt={`Detail ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Text content */}
            <div className="flex justify-between items-end flex-wrap gap-8 pt-16">
              {/* Title */}
              <div className="flex flex-col">
                <div className="overflow-hidden">
                  <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-none" data-line>
                    {item.title}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none"
                    style={{ color: item.accentColor }}
                    data-line
                  >
                    {item.titleAccent}
                  </div>
                </div>
              </div>

              {/* Subtitles */}
              <div className="flex flex-col gap-2 text-right">
                {item.subtitles.map((subtitle, subIndex) => (
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
      ))}
    </section>
  );
}