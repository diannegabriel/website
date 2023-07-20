import React, { useState } from "react";
import ConnexJr from "./work/ConnexJr";
import ConnexPrAn from "./work/ConnexPrAn";
import Gambles from "./work/Gambles";

const Experience = () => {
  const [workConnexPrAn, setWorkConnexPrAn] = useState(true);
  const [workConnexJr, setWorkConnexJr] = useState(false);
  const [workGambles, setworkGambles] = useState(false);

  const handleConnexPrAn = () => {
    setWorkConnexPrAn(true);
    setWorkConnexJr(false);
    setworkGambles(false);
  };

  const handleConnexJr = () => {
    setWorkConnexPrAn(false);
    setWorkConnexJr(true);
    setworkGambles(false);
  };

  const handleGambles = () => {
    setWorkConnexPrAn(false);
    setWorkConnexJr(false);
    setworkGambles(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerXS mx-auto py-10 lgL:py-24 px-4"
    >
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        Experience
        <span className="hidden md:inline-flex md:w-60 lgL:w-72 h-[0.5px] bg-gray-700 ml-6"></span>
      </h2>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleConnexPrAn}
            className={`${
              workConnexPrAn
                ? "border-l-textAccent text-textAccent"
                : "border-l-hoverColor text-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Connex
          </li>
          <li
            onClick={handleConnexJr}
            className={`${
              workConnexJr
                ? "border-l-textAccent text-textAccent"
                : "border-l-hoverColor text-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Connex
          </li>
          <li
            onClick={handleGambles}
            className={`${
              workGambles
                ? "border-l-textAccent text-textAccent"
                : "border-l-hoverColor text-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Gambles
          </li>
        </ul>
        {workConnexPrAn && <ConnexPrAn />}
        {workConnexJr && <ConnexJr />}
        {workGambles && <Gambles />}
      </div>
    </section>
  );
};

export default Experience;
