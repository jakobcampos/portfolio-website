'use client';
import { Container } from "../container"
import { motion } from "framer-motion";
import { slideLeft, slideRight, fadeIn } from "@/utils/animations";
import { useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export const SkillsHero = () => {

const ref = useRef(null)
const isInView = useInView(ref)
const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

const sm = useTransform(scrollYProgress, [0, 1], [-1000, 1000]) 

useEffect(() => {
  console.log("Element is in view: ", isInView)
}, [isInView])


  return(
  <Container className="lg:px-16 lg:-py-32 bg-[#28282B] w-full h-screen absolute left-0 top-0">
      <motion.div  style={{y: sm}} className="flex flex-col z-10" >
          <motion.div {...fadeIn({})} className="absolute left-0 top-16  w-full h-screen -z-10">
            <Image src="/svgs/Skill2.svg" alt="skills" width={100} height={100} style={{ width: '100%', height: '90%' }}/>
          </motion.div>
      </motion.div>
  </Container>
  );
};

