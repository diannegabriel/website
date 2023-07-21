import Image from "next/image";
import React from "react";
import { motivadid } from "@/public/assets";
import { GrGithub } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgL:px-20 py-24">
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        Projects
        <span className="hidden md:inline-flex md:w-60 lgL:w-72 h-[0.5px] bg-gray-700 ml-6"></span>
      </h2>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
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
            <p className="font-titleFont text-textAccent text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">MotivaDid</h3>
            <p className="bg-[#262452] text-sm md:text-base p-2 md:p-6 rounded-md">
              A super cool todo web app that not only helps you get stuff done
              but also sprinkles in motivational quotes as you tackle your
              tasks. It's like a double shot of productivity and inspiration in
              one sweet package!
            </p>
            <ul className="flex justify-between md:gap-5 sm:gap-3 font-titleFont md:text-sm sm:text-xs text-textDark tracking-wide">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Local Storage</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="https://github.com/diannegabriel/todo-list" target="_blank"><GrGithub /></a>
              <a href="https://diannegabriel.github.io/todo-list/" target="_blank"><BsBrowserChrome /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse gap-6">
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
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgL:justify-between items-end text-right z-10">
            <p className="font-titleFont text-textAccent text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">HypeHub</h3>
            <p className="bg-[#262452] text-sm md:text-base xl:-mr-16 xl:ml-16 p-2 md:p-6 rounded-md">
            HypeHUB is the ultimate task manager with a gaming twist – it's like your personal cheering squad, keeping you pumped and motivated while you crush your goals and level up your self-improvement game.
            </p>
            <ul className="flex justify-between md:gap-5 sm:gap-3 font-titleFont md:text-sm sm:text-xs text-textDark tracking-wide">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Local Storage</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="https://github.com/diannegabriel/todo-list" target="_blank"><GrGithub /></a>
              <a href="https://diannegabriel.github.io/todo-list/" target="_blank"><BsBrowserChrome /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
