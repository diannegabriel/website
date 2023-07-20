import React from "react";
import { motion } from "framer-motion";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Gambles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Marketing Coordinator{" "}
        <span className="text-textAccent tracking-wide">
          @ Gambles Ontario Produce
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2018 - March 2020
      </p>
      <ul className="flex flex-col gap-3 pt-4">
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Oversaw social media and email campaigns, boosting followers by 20%.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Used research to target audiences, increasing engagement and brand awareness.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="text-textAccent mt-1">
            <VscDebugBreakpointLog />
          </span>
          Organized trade shows and outreach, expanding customer base by 35%.
        </li>
      </ul>
    </motion.div>
  );
};

export default Gambles;
