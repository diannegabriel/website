import React from "react";
import Image from "next/image";
import { blabbybluejay } from "@/public/assets";
import { GrGithub } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";

const BlabbyBlueJay = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      <a
        className="w-full xl:w-1/2 h-auto relative group"
        href="https://diannegabriel.github.io/todo-list/"
        target="_blank"
      >
        <div>
          <Image
            className="w-full h-full object-contain"
            src={blabbybluejay}
            alt="MotivaDid App"
          />
        </div>
      </a>
      <div className="w-full xl:w-1/2 flex flex-col gap-6 lgL:justify-between items-end text-right xl:-ml-16 z-10">
        <div>
          <p className="font-titleFont text-textAccent text-sm tracking-wide">
            Featured Project
          </p>
          <h3 className="text-2xl font-bold">Blabby Blue Jay</h3>
        </div>
        <p className="bg-[#262452] text-sm md:text-base p-2 md:p-6 rounded-md">
        Dive into a real-time chat platform designed exclusively for fans of the Toronto Blue Jays. Talk with fellow enthusiasts from around the world about game moments, team strategies, and the baseball season.
        </p>
        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>TailwindCSS</li>
          <li>DaisyUI</li>
          <li>Firebase</li>
          <li>Vite</li>
        </ul>
        <div className="text-2xl flex gap-4">
          <a href="https://github.com/diannegabriel/blabbybluejay" target="_blank">
            <GrGithub />
          </a>
          <a href="https://blabbybluejay.vercel.app/" target="_blank">
            <BsBrowserChrome />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlabbyBlueJay;
