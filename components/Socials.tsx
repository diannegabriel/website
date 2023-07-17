import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/diannegabriel" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textAccent cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <GrGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/diannegabriel/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textAccent cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedinIn />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
