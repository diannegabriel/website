import Image from "next/image";
import React from "react";
import { tweeter } from "@/public/assets";
import { GrGithub } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";

const Tweeter = () => {
  return (
    <div className="flex flex-col xl:flex-row-reverse gap-6">
      <a
        className="w-full xl:w-1/2 h-auto relative group"
        href="https://tweeter-rlgc.onrender.com/"
        target="_blank"
      >
        <div>
          <Image
            className="w-full h-full object-contain"
            src={tweeter}
            alt="Tweeter"
          />
        </div>
      </a>
      <div className="w-full xl:w-1/2 flex flex-col gap-6 lgL:justify-between items-end text-right z-10">
        <div>
          <p className="font-titleFont text-textAccent text-sm tracking-wide">
            Featured Project
          </p>
          <h3 className="text-2xl font-bold">Tweeter</h3>
        </div>
        <p className="bg-[#262452] text-sm md:text-base xl:-mr-16 xl:ml-16 p-2 md:p-6 rounded-md">
        Tweeter is designed as a user-friendly, single-page platform that closely mimics the functionality of Twitter (or now known as X). Tweeter prioritizes a fun and enjoyable atmosphere for its users!
        </p>
        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <div className="text-2xl flex gap-4">
          <a href="https://github.com/diannegabriel/tweeter" target="_blank">
            <GrGithub />
          </a>
          <a href="https://tweeter-rlgc.onrender.com/" target="_blank">
            <BsBrowserChrome />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tweeter;
