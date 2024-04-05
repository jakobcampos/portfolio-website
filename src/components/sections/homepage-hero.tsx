'use client';
import { Container } from "../container"
import Image from "next/image";
import animationData from '../../../public/animations/blob-black.json';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const Typewriter = dynamic (()=>  import('typewriter-effect'), {ssr: false});
import { motion } from "framer-motion";
import { fadeIn, slideRight, slideLeft } from "@/utils/animations";

export const HomepageHero = () => {
  return (
    <Container className="absolute top-0 w-full h-screen flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex lg:px-32">
      <motion.div {...fadeIn({})} className="flex flex-col justify-center lg:ml-32 lg:mt-32 z-10">
        <h1 className="text-title lg:text-[15rem] z-20">
          <span className="underline decoration-stone">
            Jakob
          </span>
          <br/>
          &nbsp;&nbsp;
          <span className="underline decoration-stone">Campo
            <span className="lg:text-slate">s
            </span></span>
        </h1>
      </motion.div>

      <motion.div {...slideRight({})} className="flex justify-center items-center lg:absolute lg:bottom-[20rem] lg:left-[4rem] w-[300px] h-[300px] blur">
        <Lottie animationData={animationData} loop autoplay/>
      </motion.div>
      <motion.div {...slideRight({})} className="lg:absolute lg:left-[14rem] lg:bottom-[34rem] bottom-[28rem] fixed flex flex-col justify-center items-center lg:items-start text-p-lg text-white w-32 bottom-64">
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
      <motion.div {...slideLeft({})} className="absolute bottom-[28rem] left-[46.5rem] w-full n w-[1000px] h-[800px] z-0">
        <Image src="/svgs/art.svg" alt="Blobs SVG" width={100} height={100} style={{ width: '150%', height: '150%' }}/>
      </motion.div>
      </div>
    </Container>
  );
};

