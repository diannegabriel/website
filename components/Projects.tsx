import React from "react";
import BlabbyBlueJay from "./projects/BlabbyBlueJay";
import HypeHub from "./projects/HypeHub";
import MotivaDid from "./projects/MotivaDid";
import Tweeter from "./projects/Tweeter";

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto lgL:px-20 py-32 lgL:py-40"
    >
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        Projects
        <span className="hidden md:inline-flex md:w-60 lgL:w-72 h-[0.5px] bg-gray-700 ml-6"></span>
      </h2>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <MotivaDid />
        <HypeHub />
        <BlabbyBlueJay />
        <Tweeter />
      </div>
      <div className="pt-36 flex items-center justify-center">
        <a href="https://github.com/diannegabriel?tab=repositories" target="_blank">
          <button className="w-36 h-12 rounded-md text-textAccent text-[15px] border border-textAccent hover:bg-hoverColor duration-300">
            View more
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
