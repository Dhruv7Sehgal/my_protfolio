import React from "react";

import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import AboutUs from "./aboutus/page";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
// import { BentoGridDemo } from "@/components/BentoGridDemo";

const Page = () => {
  return (
    <>
      <section className="w-full dark:bg-black">
        <BackgroundLinesDemo />
        <AboutUs />
        <div className="mt-36 mb-6 ">
          {/* <BentoGridDemo /> */}
          <WobbleCardDemo />
        </div>
        <div className="mb-44">
          {" "}
          <WobbleCardDemo />
        </div>
      </section>
    </>
  );
};

export default Page;
