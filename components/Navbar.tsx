import { logoGif } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
  <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyBgColor px-4">
    <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify between">
      <div>
        <Image src={logoGif} alt="logo" />
      </div>
    </div>
  </div>
  )
}

export default Navbar;