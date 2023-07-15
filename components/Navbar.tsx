import { dianneGif } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyBgColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-bodyFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image width={150} height={45} src={dianneGif} alt="logo" />
        </motion.div>
        <ul className="flex text-[15px] gap-7">
          <Link href="#home">
            <a className="flex items-center gap-1 font-medium text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Home
              </motion.li>
            </a>
          </Link>
          <Link href="#about">
            <a className="flex items-center gap-1 font-medium text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                About
              </motion.li>
            </a>
          </Link>
          <Link href="#project">
            <a className="flex items-center gap-1 font-medium text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Project
              </motion.li>
            </a>
          </Link>
          <Link href="#contact">
            <a className="flex items-center gap-1 font-medium text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Contact
              </motion.li>
            </a>
          </Link>
        </ul>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="px-4 py-2 rounded-md text-textAccent text-[13px] border border-textAccent hover:bg-hoverColor duration-300"
        >
          Résumé
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
