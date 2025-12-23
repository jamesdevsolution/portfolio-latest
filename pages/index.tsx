
import { METADATA } from "../constants";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import Cursor from "@/components/common/cursor";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";
import QuoteSection from "@/components/home/quote";
import SkillsSection from "@/components/home/skills";
import Footer from "@/components/common/footer";
import TimelineSection from "@/components/home/timeline";
import AboutSection from "@/components/home/about";
import Transition from "@/components/home/transition";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);

  let timer: NodeJS.Timeout = null;

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 -z-1"></div>
  );

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <link rel="icon" type="image/png" href="ICON.png" />
      </Head>
      <Layout>
        <Header />
        <ProgressIndicator />
        <Cursor isDesktop={isDesktop} />
        <main className="flex flex-col bg-[#EBE9E1]">
          {renderBackdrop()}
          <HeroSection />

          <Transition text="" bold="Full Stack Developer" slideText="Full Stack Developer Full Stack Developer Full Stack Developer Full Stack Developer" />

          <AboutSection />

          <Transition text="" bold="My Technologies" slideText="Technologies Technologies Technologies Technologies Technologies Technologies Technologies Technologies" />

          <SkillsSection />


          <Transition text="" bold="My Works" slideText="Works Works Works Works Works Works Works Works Works Works Works Works" />

          <ProjectsSection isDesktop={isDesktop} />
          <div className='w-[100vw] h-[100px]'>
          {/* Spacer */}
          </div>

          <Transition text="" bold="My Journey" slideText="Timeline Timeline Timeline Timeline " />

          <TimelineSection isDesktop={isDesktop} />

          {/* Human touch */}
          <QuoteSection />

          {/* Call to action */}
          <Transition text="" bold="Please Collaborate with me :)" slideText="Collaborate Collaborate Collaborate Collaborate Collaborate Collaborate" />

          <Footer />
        </main>
      </Layout>
    </>
  );
}
