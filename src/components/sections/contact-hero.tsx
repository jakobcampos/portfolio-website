'use client';
import { Container } from "../container";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/utils/animations";

export const ContactHero = () => {
  return(
  <Container className="w-full h-screen flex justify-end">
      <motion.div className="absolute left-0 bottom-0 w-[40%] h-20 lg:left-16 lg:bottom-16 lg:w-[34rem] lg:h-[90px] bg-white/10 backdrop-blur-[1rem] lg:backdrop-blur-[1rem] z-20 mix-blend-difference"/>

      <motion.div {...slideRight({})} className="fixed -left-64 lg:-left-64 top-16 w-full h-screen">
        <Image src="/svgs/Group.svg" alt="Blobs SVG" width={100} height={100} className="object-fill" style={{ width: '150%', height: '150%' }}/>
      </motion.div>

      <motion.div {...slideLeft({})} className="px-16 flex flex-col z-10">
        <h1 className="flex justify-end text-title"> Contact<span className="text-stone">:</span> </h1>
        <br/>
        <p>jakobcampos.jc@gmail.com</p>
        <p>(562) 525-0938 </p>
      </motion.div>
  </Container>
  );
};

