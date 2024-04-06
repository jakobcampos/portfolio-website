'use client';
import { Container } from "../container"
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/utils/animations";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";


export const InfoHero = () => {

const ref = useRef(null)
const isInView = useInView(ref)

useEffect(() => {
  console.log("Element is in view: ", isInView)
}, [isInView])


  return(
  <Container className="px-16 py-32 bg-green w-full h-screen flex justify-start">
      <motion.div animate={isInView ? "animate" : "initial"} variants={slideRight({})} className="flex flex-col z-10" ref={ref}>
        <h1 className="flex justify-end text-title"> Info <span className="text-stone">:</span> </h1>
        <br/>
      </motion.div>
  </Container>
  );
};

