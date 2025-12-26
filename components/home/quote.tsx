// import { gsap, Linear } from "gsap";
// import React, { MutableRefObject, useEffect, useRef, useState } from "react";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const QuoteSection = () => {
//   const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
//   const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

//   const [willChange, setwillChange] = useState(false);

//   const initQuoteAnimation = (
//     quoteRef: MutableRefObject<HTMLDivElement>,
//     targetSection: MutableRefObject<HTMLDivElement>
//   ): ScrollTrigger => {
//     const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
//     timeline
//       .from(quoteRef.current, { opacity: 0, duration: 2 })
//       .to(quoteRef.current.querySelector(".text-strong"), {
//         backgroundPositionX: "100%",
//         duration: 2,
//       });

//     return ScrollTrigger.create({
//       trigger: targetSection.current,
//       start: "center bottom",
//       end: "center center",
//       scrub: 0.5,
//       animation: timeline,
//       onToggle: (self) => setwillChange(self.isActive),
//     });
//   };

//   useEffect(() => {
//     const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

//     return quoteAnimationRef.kill;
//   }, [quoteRef, targetSection]);

//   const renderQuote = (): React.ReactNode => (
//     <div className="tall:py-60 py-72 section-container">
//       <h1
//         ref={quoteRef}
//         className={`font-medium text-4xl md:text-5xl text-center ${willChange ? "will-change-opacity" : ""}`}
//       >
//         I’m passionate about building <span className="text-strong font-bold">scalable full stack apps</span> and writing clean, 
//         efficient code to solve real problems.
//       </h1>

//     </div>
//   );

//   return (
//     <section className="w-full relative select-none" ref={targetSection}>
//       {renderQuote()}
//     </section>
//   );
// };

// export default QuoteSection;









import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QuoteSection = () => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);
  const [willChange, setWillChange] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: targetSection.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        onToggle: (self) => setWillChange(self.isActive),
      }
    });

    // Animate the text fill
    timeline.to(quoteRef.current.querySelector(".gradient-text"), {
      backgroundPosition: "0% 0%",
      duration: 1,
      ease: "none"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Quote Section */}
      <section
        className="h-screen w-full relative select-none bg-slate-800"
        ref={targetSection}
      >
        <div className="h-full flex items-center justify-center px-4">
          <h1
            ref={quoteRef}
            className={`font-medium text-4xl md:text-6xl text-center max-w-5xl ${willChange ? "will-change-transform" : ""
              }`}
          >
            I&apos;m passionate about building{" "}
            <span
              className="gradient-text font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #E43D12 0%, #E43D12 50%, #ffffff 50%, #ffffff 100%)",
                backgroundSize: "200% 100%",
                backgroundPosition: "100% 0%",
              }}
            >
              scalable full stack apps
            </span>
            {" "}and writing clean, efficient code to solve real problems.
          </h1>
        </div>
      </section>
    </>
  );
};

export default QuoteSection;