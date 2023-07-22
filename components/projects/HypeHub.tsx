import Image from "next/image";
import React from "react";
import { hypehub } from "@/public/assets";
import { GrGithub } from "react-icons/gr";
import { BiSolidVideos } from "react-icons/bi";

const HypeHub = () => {
  return (
    <div className="flex flex-col xl:flex-row-reverse gap-6">
      <a
        className="w-full xl:w-1/2 h-auto relative group"
        href="https://github.com/diannegabriel/HypeHUB"
        target="_blank"
      >
        <div>
          <Image
            className="w-full h-full object-contain"
            src={hypehub}
            alt="MotivaDid App"
          />
        </div>
      </a>
      <div className="w-full xl:w-1/2 flex flex-col gap-6 lgL:justify-between items-end text-right z-10">
        <div>
          <p className="font-titleFont text-textAccent text-sm tracking-wide">
            Featured Project | Group
          </p>
          <h3 className="text-2xl font-bold">HypeHUB</h3>
        </div>
        <p className="bg-[#262452] text-sm md:text-base xl:-mr-16 xl:ml-16 p-2 md:p-6 rounded-md">
          HypeHUB is the ultimate task manager with a gaming twist – it's like
          your personal cheering squad, keeping you pumped and motivated while
          you crush your goals and level up your self-improvement game.
        </p>
        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MongoDB</li>
          <li>Spotify API</li>
        </ul>
        <div className="text-2xl flex gap-4">
          <a href="https://github.com/diannegabriel/HypeHUB" target="_blank">
            <GrGithub />
          </a>
          <a href="https://www.youtube.com/watch?v=uFkGQgNHRfQ" target="_blank">
            <BiSolidVideos />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HypeHub;
