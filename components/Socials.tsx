import React from "react";
import { GrGithub } from "react-icons/gr";

const Socials = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/diannegabriel" target="_blank">
          <span>
            <GrGithub />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
