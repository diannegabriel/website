import React from "react";
import { GrGithub } from "react-icons/gr";

const Socials = () => {
  return (
    <aside className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <a href="https://github.com/diannegabriel" target="_blank">
        <span>
          <GrGithub />
        </span>
      </a>
    </aside>
  );
};

export default Socials;
