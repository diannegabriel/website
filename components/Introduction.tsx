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
        className="text-lg font-titleFont tracking-wide text-textAccent"
      >
        Hello! My name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgL:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Dianne Gabriel. <span className="text-textDark mt-2 lgL:mt-4">I make apps to save the world :)</span>
      </motion.h1>
    </section>
  );
};

export default Introduction;
