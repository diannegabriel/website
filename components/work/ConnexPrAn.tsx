import React from "react";
import { motion } from "framer-motion";

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
        <span className="text-textAccent tracking-wide">@ Connex Telecommunications</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">February 2022 - March 2023</p>
    </motion.div>
  );
};

export default ConnexPrAn;
