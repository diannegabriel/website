import React, { useState } from "react";
import ConnexJr from "./work/ConnexJr";
import ConnexPrAn from "./work/ConnexPrAn";

const Experience = () => {
  const [workConnexPrAn, setWorkConnexPrAn] = useState(true);
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
          <li className="border-l-2 border-l-textAccent text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">Connex</li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">Connex</li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">Connex</li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">Connex</li>
        </ul>
        <ConnexPrAn />
        <ConnexJr />
      </div>
    </section>
  );
};

export default Experience;
