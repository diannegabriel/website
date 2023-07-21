import { dianneGif } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyBgColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont font-medium flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image width={150} height={45} src={dianneGif} alt="logo" />
        </motion.div>
        <div className="hidden mdL:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            <Link href="#home">
              <a className="flex items-center gap-1 text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
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
              <a className="flex items-center gap-1 text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  About
                </motion.li>
              </a>
            </Link>
            <Link href="#experience">
              <a className="flex items-center gap-1 text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Experience
                </motion.li>
              </a>
            </Link>
            <Link href="#project">
              <a className="flex items-center gap-1 text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Projects
                </motion.li>
              </a>
            </Link>
            <Link href="#contact">
              <a className="flex items-center gap-1 text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Contact
                </motion.li>
              </a>
            </Link>
          </ul>
          <a href="/assets/Dianne_Gabriel_Resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-4 py-2 rounded-md text-textAccent text-[15px] border border-textAccent hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Hamburger icon */}
        <div
          onClick={() => setToggleMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdL:hidden text-4xl text-textAccent cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textAccent inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textAccent inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textAccent inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {toggleMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdL:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
            ></motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
