import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dianne's Portfolio</title>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyBgColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        Dianne Gabriel - Portfolio Website
      </main>
    </>
  )
}
