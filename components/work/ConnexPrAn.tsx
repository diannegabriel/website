import React from "react";
import { motion } from "framer-motion";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const ConnexPrAn = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Programmer Analyst{" "}
        <span className="text-textAccent tracking-wide">
          @ Connex Telecommunications
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        February 2022 - March 2023
      </p>
      <ul className="flex flex-col gap-3 pt-4">
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Led contact center design and project team.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Built and tested apps, integrated with Genesys Cloud.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Developed internal/client apps using Node.js, Javascript, React,
          Angular, Python, and Pandas.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Provided top-notch customer tech assistance across domains.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Conducted effective demo sessions and training for employees and
          customers.
        </li>
      </ul>
    </motion.div>
  );
};

export default ConnexPrAn;
