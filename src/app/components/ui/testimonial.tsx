import { TimelineContent } from "@/app/components/ui/timeline-animation";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useRef } from "react";

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  // Blue card sliding from right (Emma Rodriguez)
  const slideFromRightVariants = {
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3 + 0.5, // Extra delay so it animates later
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Smooth easing curve
      },
    }),
    hidden: {
      x: 400,
      opacity: 0,
    },
  };

  // Blue card sliding from left (Lisa Thompson)
  const slideFromLeftVariants = {
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3 + 0.8, // Even more delay so it's the last to animate
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Smooth easing curve
      },
    }),
    hidden: {
      x: -400,
      opacity: 0,
    },
  };

  return (
    <main className="w-full bg-white">
      <section
        className="relative h-full container text-black mx-auto rounded-lg py-14 bg-white"
        ref={testimonialRef}
      >
        <article className={"max-w-screen-md mx-auto text-center space-y-2 "}>
          <TimelineContent
            as="h1"
            className={"xl:text-4xl text-3xl font-medium"}
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Who Concierge Support Is For
          </TimelineContent>
          <TimelineContent
            as="p"
            className={"mx-auto text-gray-500"}
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Trusted by students and families worldwide for seamless study abroad experiences
          </TimelineContent>
        </article>
        <div className="lg:grid lg:grid-cols-3 gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
          <div className="md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2 ">
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className=" lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-[#F8F7F4] text-gray-800 overflow-hidden rounded-lg border border-gray-200 p-5"
            >
              <article className="mt-auto relative z-10">
                <p>
                  "The concierge service made my transition to studying abroad seamless. Their team handled everything from visa to accommodation with incredible attention to detail."
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className=" font-semibold lg:text-xl text-sm">
                      Sarah Chen
                    </h2>
                    <p className="">Graduate Student, Oxford</p>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTIwNDEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sarah Chen"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={1}
              customVariants={slideFromRightVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative overflow-hidden rounded-lg border border-gray-200 p-5 bg-[#F8F7F4] text-gray-800"
            >
              <article className="mt-auto relative z-10">
                <p>
                  "Outstanding support throughout my application process. They made everything stress-free and helped me get into my dream university."
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className=" font-semibold text-xl">Emma Rodriguez</h2>
                    <p className="">MBA Student, Harvard</p>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1675663351050-89949e051c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkyMDYxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Emma Rodriguez"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 p-5"
            >
              <article className="mt-auto">
                <p className="2xl:text-base text-sm">
                  "Their team is highly professional and made my entire study abroad journey smooth. From university selection to visa approval, they were with me every step."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className=" font-semibold lg:text-xl text-lg">
                      Michael Zhang
                    </h2>
                    <p className="lg:text-base text-sm">
                      Engineering Student, MIT
                    </p>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYnVzaW5lc3MlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzY5Mjg2MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Michael Zhang"
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 p-5"
            >
              <article className="mt-auto">
                <p className="2xl:text-base text-sm">
                  "I'm extremely satisfied with the concierge service. Their expertise and dedication exceeded all my expectations for studying abroad."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className=" font-semibold lg:text-xl text-lg">
                      Priya Patel
                    </h2>
                    <p className="lg:text-base text-sm">
                      Medical Student, Cambridge
                    </p>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1718179804654-7c3720b78e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTE3ODA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Priya Patel"
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 p-5"
            >
              <article className="mt-auto">
                <p className="2xl:text-base text-sm">
                  "The support I received was absolutely exceptional. They were always available, incredibly helpful, and made my dream of studying abroad a reality."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className=" font-semibold lg:text-xl text-lg">
                      James Anderson
                    </h2>
                    <p className="lg:text-base text-sm">
                      Business Student, Stanford
                    </p>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1553976468-dcd9082bcd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI2NTQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="James Anderson"
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
          <div className="h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2">
            <TimelineContent
              animationNum={5}
              customVariants={slideFromLeftVariants}
              timelineRef={testimonialRef}
              className=" lg:flex-[3] flex-[4] flex flex-col justify-between relative overflow-hidden rounded-lg border border-gray-200 p-5 bg-[#F8F7F4] text-gray-800"
            >
              <article className="mt-auto relative z-10">
                <p>
                  "A key partner in my international education journey. Their guidance was invaluable from start to finish."
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className=" font-semibold text-xl">Lisa Thompson</h2>
                    <p className="">PhD Candidate, UCL</p>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1615702669705-0d3002c6801c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjkyODYzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Lisa Thompson"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-[#F8F7F4] text-gray-800 overflow-hidden rounded-lg border border-gray-200 p-5"
            >
              <article className="mt-auto relative z-10">
                <p>
                  "The concierge service has been transformational. Their exceptional service, combined with deep expertise and commitment to excellence, helped me secure admission to my dream university."
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className=" font-semibold text-xl">David Kim</h2>
                    <p className="">Law Student, Yale</p>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTIwNDEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="David Kim"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>

        <div className="absolute border-b-2 border-[#e6e6e6] bottom-4 h-16 z-[2] md:w-full w-[90%] md:left-0 left-[5%]">
          <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-white before:shadow-sm before:border border-gray-200 before:border-gray-300 after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-white after:shadow-sm after:border after:border-gray-300 "></div>
        </div>
      </section>
    </main>
  );
}

export default ClientFeedback;