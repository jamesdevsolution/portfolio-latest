import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import ProjectTile from "../common/project-tile";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop, NO_MOTION_PREFERENCE_QUERY } from "pages";

const PROJECT_STYLES = {
  SECTION:
    "w-full relative select-none section-container flex-col flex py-8 justify-center",
  PROJECTS_WRAPPER:
    "mt-6 grid grid-flow-col auto-cols-max md:gap-10 gap-6 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory",
};

const ProjectsSection = ({ isDesktop }: IDesktop) => {
  const targetSectionRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const sectionTitleElementRef: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setwillChange] = useState(false);
  const [horizontalAnimationEnabled, sethorizontalAnimationEnabled] =
    useState(false);


  //Reveal lang animation
  const initRevealAnimation = (
    targetSectionRef: MutableRefObject<HTMLDivElement>
  ): [GSAPTimeline, ScrollTrigger] => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSectionRef.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top bottom",
      end: "bottom bottom+=500",
      scrub: 1,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const initProjectsAnimation = (
    targetSectionRef: MutableRefObject<HTMLDivElement>,
    sectionTitleElementRef: MutableRefObject<HTMLDivElement>
  ): [GSAPTimeline, ScrollTrigger] => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const sidePadding =
      document.body.clientWidth -
      targetSectionRef.current.querySelector(".inner-container").clientWidth;
    const elementWidth =
      sidePadding +
      targetSectionRef.current.querySelector(".project-wrapper").clientWidth;
    targetSectionRef.current.style.width = `${elementWidth}px`;
    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;
    timeline
      .to(targetSectionRef.current, { x: width })
      .to(sectionTitleElementRef.current, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: true,
      onToggle: (self) => setwillChange(self.isActive),
      // markers: {
      //   startColor: 'green',
      //   endColor: "red"
      // }
    });

    return [timeline, scrollTrigger];
  };

  useEffect(() => {
    let projectsScrollTrigger: ScrollTrigger | undefined;
    let projectsTimeline: GSAPTimeline | undefined;

    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    sethorizontalAnimationEnabled(isDesktop && matches);

    // if (isDesktop && matches) {
    [projectsTimeline, projectsScrollTrigger] = initProjectsAnimation(
      targetSectionRef,
      sectionTitleElementRef
    );
    // } else {
    //   const projectWrapper = targetSectionRef.current.querySelector(
    //     ".project-wrapper"
    //   ) as HTMLDivElement;
    //   const parentPadding = window
    //     .getComputedStyle(targetSectionRef.current)
    //     .getPropertyValue("padding-left");

    //   targetSectionRef.current.style.setProperty("width", "100%");
    //   projectWrapper.classList.add("overflow-x-auto");
    //   projectWrapper.style.setProperty("width", `calc(100vw)`);
    //   projectWrapper.style.setProperty("padding", `0 ${parentPadding}`);
    //   projectWrapper.style.setProperty(
    //     "transform",
    //     `translateX(-${parentPadding})`
    //   );
    // }

    const [revealTimeline, revealScrollTrigger] =
      initRevealAnimation(targetSectionRef);

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [targetSectionRef, sectionTitleElementRef, isDesktop]);

  const renderSectionTitle = (): React.ReactNode => (
    <div
      className={`flex flex-col inner-container  ${willChange ? "will-change-transform" : ""
        }`}
      ref={sectionTitleElementRef}
    >
      <p className="section-title-sm seq">PROJECTS</p>
      <h1 className="section-heading seq mt-2">My Works</h1>
      <h2 className="text-2xl md:max-w-3xl w-full seq max-w-sm mt-2">
        I have <span className='text-[#E43D12]'>independently</span> built many{" "}
        <span className="text-[#E43D12]">full-stack</span> projects, handling the{" "}
        <span className="text-[#E43D12]">frontend</span>,{" "}
        <span className="text-[#E43D12]">backend</span>,{" "}
        <span className="text-[#E43D12]">APIs</span>,{" "}
        <span className="text-[#E43D12]">security</span>,{" "}
        <span className="text-[#E43D12]">database</span>, and{" "}
        <span className="text-[#E43D12]">modern best practices</span>.
      </h2>

    </div>
  );

  const renderProjectTiles = (): React.ReactNode =>
    PROJECTS.map((project) => (
      <ProjectTile
        project={project}
        key={project.name}
        animationEnabled={horizontalAnimationEnabled}
      ></ProjectTile>
    ));

  const { ref: projectsSectionRef } = MENULINKS[2];

  return (
    <section
      ref={targetSectionRef}
      className={`${isDesktop && "min-h-screen "} ${PROJECT_STYLES.SECTION}`}
      id={projectsSectionRef}
    >
      {renderSectionTitle()}
      <div className={PROJECT_STYLES.PROJECTS_WRAPPER}>
        {renderProjectTiles()}
      </div>
    </section>
  );
};

export default ProjectsSection;
