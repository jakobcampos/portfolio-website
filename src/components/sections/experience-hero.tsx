'use client';
import { Container } from "@/components/Container"
import { motion, useInView } from "framer-motion";
import { slideDown, slideUp, slideLeft, slideRight } from "@/utils/animations";
import { useEffect, useRef } from "react";

export const ExperienceHero = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true, margin: "0px 0px 300px 0px"})

  return(
  <Container className="w-full h-screen flex flex-col mt-16 gap-16">
      <motion.h1 ref={ref} initial="initial" animate={isInView ? "animate" : ""} variants={slideUp({})} className="w-full text-h2-lg lg:text-title flex justify-center z-30 lg:text-[12rem] text-brown">
        EXPERIENCE
      </motion.h1>
      <motion.div ref={ref} initial="initial" animate={isInView ? "animate" : ""} variants={slideUp({})} className="mx-8 p-8 lg:pb-4 lg:mx-auto lg:w-1/2 flex flex-col border">
          <div className="w-full">
              <h1 className="text-h2 lg:text-title"> IMAX </h1>
              <h2 className="text-p lg:text-h2-lg"> IT Consultant </h2>
              <h3 className="text-p text-brown absolute top-4 right-4">2023 - Present</h3>
            <ul className="list-disc text-p lg:text-h2 flex flex-col p-4 gap-4">
              <li> Help out employees with technical issues like account lockouts, or physical issues like broken keyboards </li>
              <li> Responsible for the audio/video systems in high-profile meetings or events involving the CEO, investors, and board members.</li>
            </ul>
          </div>
      </motion.div>
      <motion.div ref={ref} initial="initial" animate={isInView ? "animate" : ""} variants={slideUp({}, {delay: .1})} className="mx-8 p-8 lg:pb-4 lg:mx-auto lg:w-1/2 flex flex-col border">
          <div className="w-full">
            <h1 className="text-h2 lg:text-title"> STEREOSCOPE </h1>
            <h2 className="text-p lg:text-h2-lg"> Cashier </h2>
            <h3 className="text-p text-brown absolute top-4 right-4">2024 - Present</h3>
            <ul className="list-disc text-p lg:text-h2 flex flex-col p-4 gap-4">
              <li>Specialty coffee with emphasis on quality and hospitality</li>
              <li>Team-work is required to perform effeciently.</li>
            </ul>
          </div>
      </motion.div>
  </Container>
  );
};

