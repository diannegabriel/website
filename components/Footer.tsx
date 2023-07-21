import React from "react";

const Footer = () => {
  return (
    <footer className="italic hidden mdL:inline-flex items-center justify-center w-full gap-4 lgL:py-8 text-textDark text-sm">
      <p>
        Coded in Visual Studio Code. Built with Next.js and Tailwind CSS.
        Deployed with Vercel. Design inspired by <a href="https://v4.brittanychiang.com/">Brittany Chiang</a>.
      </p>
    </footer>
  );
};

export default Footer;
