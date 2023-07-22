import React from "react";
import Image from "next/image";
import { motivadid } from "@/public/assets";
import { GrGithub } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";

const MotivaDid = () => {
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
            src={motivadid}
            alt="MotivaDid App"
          />
        </div>
      </a>
      <div className="w-full xl:w-1/2 flex flex-col gap-6 lgL:justify-between items-end text-right xl:-ml-16 z-10">
        <div>
          <p className="font-titleFont text-textAccent text-sm tracking-wide">
            Featured Project
          </p>
          <h3 className="text-2xl font-bold">MotivaDid</h3>
        </div>
        <p className="bg-[#262452] text-sm md:text-base p-2 md:p-6 rounded-md">
          A super cool todo web app that not only helps you get stuff done but
          also sprinkles in motivational quotes as you tackle your tasks. It's
          like a double shot of productivity and inspiration in one sweet
          package!
        </p>
        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Local Storage</li>
        </ul>
        <div className="text-2xl flex gap-4">
          <a href="https://github.com/diannegabriel/todo-list" target="_blank">
            <GrGithub />
          </a>
          <a href="https://diannegabriel.github.io/todo-list/" target="_blank">
            <BsBrowserChrome />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MotivaDid;
