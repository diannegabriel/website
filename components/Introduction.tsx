import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdL:py-24 flex flex-col gap-4 lgL:gap-8 mdL:px-10 xl:px-4"
    >
      <motion.h3 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="text-lg font-titleFont tracking-wide text-textAccent">
        Hello! My name is
      </motion.h3>
      <h1>Dianne Gabriel. <span>I make apps :)</span></h1>
    </section>
  );
};

export default Introduction;
