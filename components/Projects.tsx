import Image from "next/image";
import React from "react";
import { motivadid } from "@/public/assets";

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
            href="https://github.com/diannegabriel/todo-list"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
