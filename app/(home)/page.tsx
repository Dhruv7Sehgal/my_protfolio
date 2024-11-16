import React from "react";

import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import AboutUs from "./aboutus/page";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";

const Page = () => {
  return (
    <>
      <section className="w-full dark:bg-black">
        <BackgroundLinesDemo />
        <AboutUs />
        <WobbleCardDemo />
      </section>
    </>
  );
};

export default Page;
