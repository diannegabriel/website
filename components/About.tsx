import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { dianneJpg } from "@/public/assets";

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
            JavaScript project and immediately got hooked! My favourite things
            to work on were custom Myspace profiles and also Friendster themes
            (even though I had to go through hoops to integrate it!)
          </p>

          <p>
            I enjoyed the satisfaction of creating something from scratch and
            having the creative freedom over it. While tech wasn't my first
            choice as a career after high school, my passion and love for coding
            has always lived within me. Finally, after deciding to switch
            careers, I enrolled to Lighthouse Labs Full Stack Web Development
            Bootcamp in 2021.
          </p>

          <p>
            After finishing the extremely challenging bootcamp, I realized that
            I truly enjoy the process of creating apps and products that solve
            people's problems. I strive to make self-care, motivational, and
            meaningful products that assist people in their daily struggles.
          </p>
          <p>
            Currently, I have experience in variety of fields such as: web
            development, telecommunications, cloud systems, CI/CD, marketing,
            and more.
          </p>
          <p>Some of the technologies I have been working with:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              CSS/SCSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              SQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              Terraform
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              Genesys Cloud
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              Microsoft Azure
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textAccent">
                <AiFillStar />
              </span>
              AWS
            </li>
          </ul>
        </div>
        <div>
          <Image className="rounded-lg object-cover" width={320} height={320} src={dianneJpg} alt="Dianne Gabriel" />
        </div>
      </div>
    </section>
  );
};

export default About;
