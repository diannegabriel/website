import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyBgColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      Dianne Gabriel - Portfolio Website
    </main>
  )
}
