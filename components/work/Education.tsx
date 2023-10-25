import React from "react";
import { motion } from "framer-motion";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full flex flex-col gap-10"
    >
      <div>
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
          Full Stack Web Dev
          <span className="text-textAccent tracking-wide">
            @ Lighthouse Labs
          </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
          July 2021 - October 2021
        </p>
      </div>
      {/* <span className="hidden md:inline-flex w-[0.5px] h-[50px] bg-gray-700" ></span> */}
      <div>
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
          Business Marketing
          <span className="text-textAccent tracking-wide">
            @ Sheridan College
          </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
          September 2014 - April 2017
        </p>
      </div>
    </motion.div>
  );
};

export default Education;
