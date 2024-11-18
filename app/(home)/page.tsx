import React from "react";

import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import AboutUs from "./aboutus/page";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";

import ProjectShowcase from "@/components/Projects";

const Page = () => {
  return (
    <>
      <section className="w-full dark:bg-black">
        <BackgroundLinesDemo />
        <AboutUs />
        <div className="mb-44">
          <BentoGridDemo />
          <WobbleCardDemo />
          <ProjectShowcase />
        </div>
      </section>
    </>
  );
};

export default Page;
