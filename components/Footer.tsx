import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="hidden mdL:inline-flex items-center justify-center w-full lg:pb-56 gap-4">
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
      <a href="mailto:mdianne.gabriel@gmail.com">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textAccent cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <MdEmail />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
