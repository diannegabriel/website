import React from "react";
import Image from "next/image";
import { tinyapp } from "@/public/assets";
import { GrGithub } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";

const TinyApp = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      <a
        className="w-full xl:w-1/2 h-auto relative group"
        href="https://tinyapp-jqb8.onrender.com/"
        target="_blank"
      >
        <div>
          <Image
            className="w-full h-full object-contain"
            src={tinyapp}
            alt="TinyApp"
          />
        </div>
      </a>
      <div className="w-full xl:w-1/2 flex flex-col gap-6 lgL:justify-between items-end text-right xl:-ml-16 z-10">
        <div>
          <p className="font-titleFont text-textAccent text-sm tracking-wide">
            Featured Project
          </p>
          <h3 className="text-2xl font-bold">TinyApp</h3>
        </div>
        <p className="bg-[#262452] text-sm md:text-base p-2 md:p-6 rounded-md">
        This app serves as a convenient tool for users to generate and manage shortened URLs, reminiscent of services like bit.ly. Easiest way to collect, track, and send memes, amirite?
        </p>
        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>EJS</li>
          <li>Bootstrap</li>
        </ul>
        <div className="text-2xl flex gap-4">
          <a href="https://github.com/diannegabriel/tinyapp" target="_blank">
            <GrGithub />
          </a>
          <a href="https://tinyapp-jqb8.onrender.com" target="_blank">
            <BsBrowserChrome />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TinyApp;
