import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 ",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <h2 className="text-2xl md:max-w-2xl w-full seq mt-2 animate-fadeIn">
      I build{" "}
      <span className="text-[#E43D12] font-bold">FULL STACK APPLICATIONS</span>, combining{" "}
      best <span className="text-[#E43D12] font-bold">frontend frameworks</span>,{" "}
      latest <span className="text-[#E43D12] font-bold">backend architecture logic</span>,{" "}
      updated <span className="text-[#E43D12] font-bold">API structure</span>, and{" "}
      <span className="text-[#E43D12] font-bold">secure, user focused experience</span>.
    </h2>
  );

  const renderSkillColumn = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      {/* <h3 className="text-black">{title}</h3> */}
      {/* <div
        className={`flex flex-wrap seq ${willChange ? "will-change-opacity" : ""
          }`}
      >
        {skills.map((skill) => (
          <Image
            key={skill}
            src={`/skills/${skill}.svg`}
            alt={skill}
            width={76}
            height={76}
            className="skill"
          />
        ))}
      </div> */}
      <div className={`flex flex-wrap seq ${willChange ? "will-change-opacity" : ""}`}>
        {skills.map((skill) => {
          // Hardcoded condition to use PNG for 'react' and SVG for others
          const fileExtension = skill === 'render' || skill === 'canva' ? 'png' : 'svg';  

          return (
            <Image
              key={skill}
              src={`/skills/${skill}.${fileExtension}`} 
              alt={skill}
              width={76}
              height={76}
              className="skill"
            />
          );
        })}
      </div>

    </>
  );

  return (
    <section className="relative">
      <div
        className={SKILL_STYLES.SECTION}
        id={MENULINKS[1].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="mt-10">
            {renderSkillColumn("FRONTEND DEVELOPMENT", SKILLS.frontend)}
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-6 mb-6">
              {renderSkillColumn(
                "User Interface, User Experience Design",
                SKILLS.userInterface
              )}
            </div>
            <div>{renderSkillColumn("Other Skills", SKILLS.other)}</div>
          </div>
          <div className="">
            {renderSkillColumn("BACKEND DEVELOPMENT", SKILLS.backend)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
