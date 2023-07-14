import { logoGif } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
  <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyBgColor px-4">
    <div className="max-w-container h-full mx-auto py-1 font-bodyFont flex items-center justify-between">
      <div>
        <Image className="w-40" src={logoGif} alt="logo" />
      </div>
      <div>
        <ul>
        <Link href="#home" className="flex items-center gap-1 font-medium text-lg text-textDark hover:text-textAccent cursor-pointer duration-300 nav-link">
          <li>Home</li>
        </Link>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar;