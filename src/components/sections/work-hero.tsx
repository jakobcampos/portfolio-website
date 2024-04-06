'use client';
import { Container } from "../container"
import { motion } from "framer-motion";
import { slideLeft, slideRight, fadeIn, slideDown, slideUp } from "@/utils/animations";
import { useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import MagneticButton from "../MagneticButton";
import TransitionLink from "../TransitionLink";

export const WorkHero = () => {

const ref = useRef(null)
const isInView = useInView(ref)
const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

const sm = useTransform(scrollYProgress, [0, 1], [-1000,0]) 
const dm = useTransform(scrollYProgress, [0, 1], [0,-450]) 

useEffect(() => {
  console.log("Element is in view: ", isInView)
}, [isInView])


  return(
  <Container className="w-full h-screen absolute left-0 top-0">
      <motion.main  animate={isInView ? "animate" : "initial"} variants={ fadeIn({}, {duration: 1}) } className="w-full h-screen absolute left-0 top-0">
        <motion.div ref={ref} style={{x: sm}} className="absolute -left-64 top-16 flex flex-col z-10" >
          <h1 className="text-[16rem] tracking-tight whitespace-nowrap">
            <span className="text-dark/70">Lets work.</span>
            Lets work.
            <span className="text-dark/70">Lets work.</span>v
          </h1>
        </motion.div>
        <motion.div ref={ref} style={{x: dm}} className="absolute -left-64 top-48 flex flex-col z-10" >
          <h1 className="text-[16rem] tracking-tight whitespace-nowrap">
            <span className="text-dark/70">together.</span>
            together.
            <span className="text-dark/70">together.</span>
          </h1>
        </motion.div>

        <motion.div animate={isInView ? "animate" : "initial"} variants={slideUp({})}  className="absolute bottom-64 right-64 flex flex-col justify-center items-start" >
          <p className="text-h2-lg"> Planning a project or business? </p>
          <p className="text-h2-lg"> I'd love to hear more.</p>
          <br/>
          <TransitionLink href="/enquire" label="Enquire now" className="border-b-2 text-h2-lg hover:border-b-[1rem] transition-all duration-500 hover:text-stone"/>
        </motion.div>
      </motion.main>
  </Container>
  );
};

