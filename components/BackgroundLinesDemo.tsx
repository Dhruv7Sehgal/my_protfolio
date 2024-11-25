import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <TypewriterEffectSmoothDemo />
    </BackgroundLines>
  );
}
