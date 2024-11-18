import React from "react";

import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import AboutUs from "./aboutus/page";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";

const Page = () => {
  return (
    <>
      <section className="w-full dark:bg-black">
        <BackgroundLinesDemo />
        <AboutUs />
        <div className="mt-30 mb-44 ">
          {/* <BentoGridDemo /> */}
          <WobbleCardDemo />
        </div>
      </section>
    </>
  );
};

export default Page;
