import Email from "@/components/Email";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
// import { Inter } from 'next/font/google'
import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dianne's Portfolio</title>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyBgColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <aside className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <Socials />
          </aside>
          <section>

          </section>
          <article>
            <Email />
          </article>
        </div>
      </main>
    </>
  );
}
