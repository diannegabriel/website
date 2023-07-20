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
      <h3>Programmer Analyst</h3>
    </motion.div>
  );
};

export default ConnexPrAn;
