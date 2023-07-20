import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgL:py-28 flex flex-col gap-8"
    >
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        About Me
        <span className="hidden md:inline-flex md:w-60 lgL:w-72 h-[0.5px] bg-gray-700 ml-6"></span>
      </h2>
      <div className="flex flex-col lgL:flex-row gap-16">
        <div className="w-full lgL:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I got into the world of tech and programming languages as early as
            10 years old. I clearly remember coding my very first HTML, CSS, and
            JavaScript project and immediately got hooked (had to go through
            hoops to integrate Friendster custom profiles, but my favourite
            thing to work on were MySpace profiles)!
          </p>

          <p>
            I enjoyed the satisfaction of creating something from scratch and
            having the creative freedom over it. While tech wasn't my first
            choice as a career after high school, my passion and love for coding
            has always lived within me. Finally, after deciding to switch
            careers, I enrolled to Lighthouse Labs Full Stack Web Development Bootcamp
            in 2021.
          </p>

          <p>
            After finishing the extremely challenging bootcamp, I realized that
            I truly enjoy the process of creating apps and products that solve
            people's problems. I strive to make self-care, motivational, and
            meaningful products that assist people in their daily struggles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
