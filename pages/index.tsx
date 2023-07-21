import Email from "@/components/Email";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
// import { Inter } from 'next/font/google'
import Head from "next/head";
import { motion } from "framer-motion";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dianne's Portfolio</title>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyBgColor text-textLight overflow-x-hidden overflow-y-scroll scroll-smooth">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          {/* <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <Socials />
          </motion.aside> */}
          <article className="h-[88vh] w-full mx-auto p-4">
            <Introduction />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </article>
          {/* <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <Email />
          </motion.aside> */}
        </div>
      </main>
    </>
  );
}
