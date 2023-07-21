import React from "react";
import { motion } from "framer-motion";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const ConnexJr = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Junior Developer{" "}
        <span className="text-textAccent tracking-wide">
          @ Connex Telecommunications
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        October 2021 - February 2022
      </p>
      <ul className="flex flex-col gap-3 pt-4">
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Collaborated with team and clients for custom app designs and contact
          center solutions.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Supported and assisted in User Acceptance Testing (UAT) for product
          launches.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Proficient in programming languages (Javascript, Java, Python, C++)
          for efficient solutions.
        </li>
      </ul>
    </motion.div>
  );
};

export default ConnexJr;
