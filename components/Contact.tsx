import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 lg:py-72 flex flex-col gap-4 items-center justify-center"
    >
      {/* <p className="font-titleFont text-lg text-textAccent font-semibold flex items-center tracking-wide">
        Contact
      </p> */}
      <h2 className="font-titleFont text-5xl font-semibold">Let's connect!</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I'm currently on the hunt for some exciting new opportunities in the
        tech world! Whether it's building awesome web apps, managing cloud
        systems, or diving into a completely new territory, I'm ready to bring
        my skills and passion to a team that's all about making cool things
        happen. Let's collaborate and create some tech magic together!
      </p>
      <div className="mt-6 flex items-center justify-center">
        <a href="/assets/Dianne_Gabriel_Resume.pdf" target="_blank">
          <button className="w-36 h-12 rounded-md text-textAccent text-[15px] border border-textAccent hover:bg-hoverColor duration-300">
            Expand
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
