'use client';
import { Container } from "../container"
import Image from "next/image";
import animationData from '../../../public/animations/blob-black.json';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const Typewriter = dynamic (()=>  import('typewriter-effect'), {ssr: false});
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideRight, slideLeft } from "@/utils/animations";
import { useRef, useEffect } from "react";

export const HomepageHero = () => {

  
const ref = useRef(null)
const isInView = useInView(ref)
const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

const sm = useTransform(scrollYProgress, [0, 1], [-250, 1500])


useEffect(() => {
  console.log("Element is in view: ", isInView)
}, [isInView])

  return (
      <Container className="w-full h-screen flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex lg:px-32">
        <motion.div {...fadeIn({})} style={{y: sm}} className="absolute flex flex-col justify-center lg:ml-[11rem] mb-[70rem]">
          <h1 className="text-title lg:text-title-lg z-20">
            <span className="underline decoration-stone">
              Jakob
            </span>
            <br/>
            &nbsp;&nbsp;
            <span className="underline decoration-stone">Campo&nbsp; 
              </span>
              <span className="lg:text-[#485c64] lg:font-outline absolute right-0">s</span>

          </h1>
        </motion.div>

        <motion.div {...slideRight({})} className="absolute flex justify-center items-center bottom-[15rem] lg:bottom-[20rem] lg:left-[4rem] w-[300px] h-[300px] blur">
          <Lottie animationData={animationData} loop autoplay/>
        </motion.div>
        <motion.div {...slideRight({})} className="lg:absolute lg:left-[14rem] lg:bottom-[34rem] bottom-[28rem] absolute flex flex-col justify-center items-center lg:items-start text-p-lg text-white w-32 bottom-64">
          <p></p>
          <Typewriter 
            options={{
              strings: [
                "developer",
                "freelancer",
                "barista"
              ],
              autoStart: true,
              loop: true
            }}
          />
        </motion.div>

        <div className="transition-all duration-500 ease-out lg:ease-in opacity-0 lg:opacity-100">
          <motion.div {...slideLeft({})} className="absolute bottom-[30rem] left-[47rem] w-full h-[800px] -z-10">
            <Image src="/svgs/art.svg" alt="Blobs SVG" width={100} height={100} style={{ width: '150%', height: '150%' }}/>
          </motion.div>
        </div>
      </Container>

  );
};

