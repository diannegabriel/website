import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgL:py-32 flex flex-col gap-8"
    >
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        About Me
        <span className="hidden md:inline-flex md:w-60 lgL:w-72 h-[0.5px] bg-gray-700 ml-6"></span>
      </h2>
    </section>
  );
};

export default About;
