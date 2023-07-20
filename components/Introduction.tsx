import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdL:py-12 flex flex-col gap-4 lgL:gap-8 mdL:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textAccent"
      >
        Hey there! My name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgL:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Dianne Gabriel.{" "}
        <span className="text-textDark mt-2 lgL:mt-4">
          Helping the world, one line at a time!
        </span>
      </motion.h1>
      <p className="text-base md:max-w-[650px] text-textDark font-medium">
        I've been diving into full-stack development for over 2 awesome years,
        and I've got quite a bag of tricks up my sleeve! My keen eye for details
        helps me craft work with precision and accuracy, leaving no stone
        unturned.
      </p>

      <p className="text-base md:max-w-[650px] text-textDark font-medium">
        Creating dynamic and user-friendly applications is kind of my jam – I
        love meeting the needs of modern users and making their experience a
        breeze. Plus, I'm pretty handy with cloud systems, so integrating
        scalable and efficient solutions is like a walk in the park for me.
      </p>

      <p className="text-base md:max-w-[650px] text-textDark font-medium">
        When it comes to work, I'm all in! As a dedicated professional, I'm
        committed to delivering top-notch results and doing my part to make each
        project a smashing success. 
      </p>

      <p  className="text-base text-textDark font-medium">Let's create something amazing together! 🚀</p>
    </section>
  );
};

export default Introduction;
