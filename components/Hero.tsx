import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/MultiStepLoader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { TypewriterEffect } from "./ui/TypeWriterEffect";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { FlipWords } from "./ui/FlipWords";
import { loadingStates, words, people } from "@/constants/hero.constants";
const wordsList = ["Payout", "Payin", "remitment", "banking", "Transfer"];
const stars = [0, 1, 2, 3, 4];
const Hero = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className={cn("pb-20 pt-36", loading && "bg-black z-40")}>
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Simplified
            <FlipWords words={wordsList} />
          </div>
          <TextGenerateEffect
            words="Simplifying Payments Amplifying Success."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <TypewriterEffect
            className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl"
            words={words}
          />
          <div className="flex flex-row items-center justify-center my-4 w-full">
            <AnimatedTooltip items={people} />
            {stars.map((idx) => (
              <div key={idx} className="flex items-center justify-center">
                <div className={idx === 0 ? "ml-6" : ""}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-yellow-400 mx-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <span>Trusted by 2600+ merchants</span>
          <MagicButton
            title="Explore products"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => setLoading(true)}
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          {/* <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll> */}
        </div>
      </div>
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[200] "
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-100 w-100" />
        </button>
      )}
    </div>
  );
};

export default Hero;
