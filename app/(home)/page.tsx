import React from "react";

import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import AboutUs from "./aboutus/page";

const Page = () => {
  return (
    <>
      <section className="w-full dark:bg-black">
        <BackgroundLinesDemo />
        <AboutUs />
      </section>
    </>
  );
};

export default Page;
