"use client"

import { animatePageIn } from "@/utils/animations"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Cursor from "@/components/Cursor"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  useEffect(() => {
    animatePageIn()
  }, [])
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-stone z-40 fixed top-0 left-0 w-full"
      />

      <div
        id="banner-2"
        className="min-h-screen bg-dark z-40 fixed top-0 left-0 w-full flex justify-end items-start"
      >
        <motion.span
        initial="visible"
        animate={{ opacity: 0, transition: {duration: 1} }}
        className="text-p-lg m-24 text-white"
        >
        <p> NOW LOADING: </p>
        <p> {path === "/" ? "/home" : path} </p>
        </motion.span>
      </div>

      <div
        id="banner-3"
        className="min-h-screen bg-stone z-50 fixed top-0 left-0 w-full"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-dark z-50 fixed top-0 left-0 w-full flex justify-end items-end"
      >
        <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {duration: 2, ease: "easeInOut" } }}
        className="text-p-lg m-24 text-white"
        >
        <p>NOW LOADING:</p>
        <p id="path" />
        </motion.span>
      </div>
      <Header/>
      {children}
      <Footer/>
      <Cursor/>
    </div>
  )
}
