'use client';
import { Container } from "@/components/Container"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { slideDown, slideUp, slideLeft, slideRight } from "@/utils/animations";
import { useEffect, useRef } from "react";

export const SkillsHero = () => {


  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, {once: true, margin: "0px 0px -150px 0px"})

  return(
  <Container className="w-full h-screen flex flex-col lg:flex-row gap-4 px-8 pt-20 lg:pt-32">
      <div id="upper-cards" className="flex flex-col gap-4">
      <motion.h1 ref={ref2} initial="initial" animate={isInView2 ? "animate" : ""} variants={slideUp({})} className="absolute w-full h-screen top-0 left-0 px-8 py-[2.4rem] text-h2-lg lg:text-title lg:text-[12rem] text-brown">
        SKILLS
      </motion.h1>
      <motion.div  initial="initial" animate={isInView2 ? "animate" : ""} variants={slideUp({},{delay:.1})} className="p-4 lg:p-8 flex flex-col border">
            <h1 className="text-p lg:text-h2-lg">Active Directory</h1>
            <ul className="list-disc text-p lg:text-h2 flex flex-col p-4 gap-4">
              <li>Managing organizational units</li>
              <li>Creating security, distribution<br/>and shared mailboxes</li>
            </ul>
      </motion.div>
      <motion.div  initial="initial" animate={isInView2 ? "animate" : ""} variants={slideUp({},{delay:.2})} className="p-4 lg:p-8 flex flex-col border">
            <h1 className="text-p lg:text-h2-lg">Ticketing Systems</h1>
            <h2 className="text-p-sm lg:text-p-lg mt-2">ServiceNow</h2>
            <ul className="list-disc text-p lg:text-h2 flex flex-col p-4 gap-4">
              <li>Capable of handling a variety of<br/>incidents, tasks, and problems</li>
            </ul>
      </motion.div>
      <motion.div  initial="initial" animate={isInView2 ? "animate" : ""} variants={slideUp({},{delay:.3})} className="p-4 lg:p-8 flex flex-col border">
            <h1 className="text-p lg:text-h2-lg">Networking</h1>
            <ul className="list-disc text-p lg:text-h2 flex flex-col p-4 gap-4">
              <li>Familiar with protocols such as:<br/>TCP/IP, UDP, DNS, etc.</li>
              <li>OSI model troubleshooting</li>
            </ul>
      </motion.div>

      </div>
      <div id="right-card" className="flex lg:w-1/3 lg:flex-row gap-4">
      <motion.div initial="initial" animate={isInView2 ? "animate" : ""} variants={slideUp({},{delay:.4})} className="h-screen w-full text-p-sm lg:text-p p-4 lg:p-8 gap-2 lg:gap-4 flex flex-col border border-b-0 pt-8 lg:pt-10">    
          <h1 className="w-full border-b absolute top-0 left-0 flex justify-center p-1">GENERAL</h1>
          <h1>Unix</h1>
          <h1>Jamf</h1>
          <h1>Microsoft 365</h1>
          <h1>Troubleshooting</h1>
          <h1>Project Management</h1>
      </motion.div>
      <motion.div  initial="initial" animate={isInView2 ? "animate" : ""} variants={slideUp({},{delay:.5})} className="h-screen w-full text-p-sm lg:text-p p-4 lg:p-8 gap-4 flex flex-col border border-b-0 pt-8 lg:pt-10">    
          <h1 className="w-full border-b absolute top-0 left-0 flex justify-center p-1">CERTIFICATIONS</h1>
          <h1>Fullerton College<br/>AS, Computer Science</h1>
          <h1>Axelos<br/>ITIL 4 Foundation<br/><span className="text-[.8rem]">(In Progress)</span></h1>
      </motion.div>
      </div>

      <motion.div  initial="initial" animate={isInView2 ? "animate" : ""} variants={slideLeft({},{delay:.3})} className="absolute top-16 -right-[80rem] w-full h-screen">
        <Image src="/svgs/Group.svg" alt="Blobs SVG" width={100} height={100} className="object-fill -skew-x-1 opacity-90 rotate-[18deg]" style={{ width: '150%', height: '125%' }}/>
      </motion.div>

  </Container>
  );
};

