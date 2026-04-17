'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ArrivalSuccessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !headlineRef.current || !subtextRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
      }
    });

    timeline.from(headlineRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out"
    });

    timeline.from(subtextRef.current, {
       opacity: 0,
       y: 20,
       filter: 'blur(10px)',
       duration: 1.5,
       ease: "expo.out"
    }, "-=1");

    gsap.to('.ambient-light', {
       scrollTrigger: {
         trigger: sectionRef.current,
         start: 'top bottom',
         end: 'bottom top',
         scrub: 1.5
       },
       y: -100,
       x: 50,
       opacity: 0.2
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-48 bg-[#FCFDFC] overflow-hidden z-20 font-['Outfit',sans-serif] flex flex-col items-center justify-center min-h-[70vh]"
    >
      {/* Premium Ambient Texture Layer */}
      <div className="ambient-light absolute top-0 left-0 w-[50vw] h-[50vw] bg-[#4EA62F]/5 rounded-full blur-[200px] pointer-events-none opacity-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(78,166,47,0.02)_0%,transparent_100%)]" />

      <div className="max-w-[1400px] mx-auto px-6 text-center flex flex-col items-center relative z-10">
        
        {/* MASSIVE KINETIC HEADLINE */}
        <div className="mb-14 select-none perspective-[1000px]">
          <h2 
            ref={headlineRef}
            className="text-[44px] md:text-[80px] lg:text-[112px] font-[1000] leading-[0.82] tracking-tighter uppercase text-[#0F172A] overflow-hidden"
          >
            Set up before you land. <br />
            <span className="text-[#4EA62F] italic font-light lowercase">
              Succeed after you arrive.
            </span>
          </h2>
        </div>

        {/* CINEMATIC NARRATIVE BLOCK */}
        <div className="max-w-[1000px] perspective-[1000px]">
           <p 
             ref={subtextRef}
             className="text-xl md:text-3xl lg:text-4xl text-black/40 leading-[1.1] font-bold tracking-tight"
           >
             Moving abroad means handling a lot - visas, accommodation, banking, and everything in between. 
             We bring it all into one place, structured in the right order, so you can get set up properly before you land. 
             And once you&apos;re here, it doesn&apos;t stop there. Through our opportunities, events, and community, we help you settle in, connect, and move forward with confidence towards success.
           </p>
        </div>
      </div>
    </section>
  );
}

export default ArrivalSuccessSection;
