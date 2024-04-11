'use client';
import { Container } from "../Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/utils/animations";

export const ContactHero = () => {
  return(
  <Container className="px-32 py-48 w-full h-screen flex justify-center lg:justify-end">
      <motion.div {...slideRight({})} className="absolute -left-64 lg:-left-64 top-16 w-full h-screen">
        <Image src="/svgs/Group.svg" alt="Blobs SVG" width={100} height={100} className="object-fill" style={{ width: '150%', height: '150%' }}/>
      </motion.div>

      <motion.div {...slideLeft({})} className="flex flex-col z-10">
        <h1 className="flex justify-start lg:justify-end text-h2-lg lg:text-title"> CONTACT<span className="text-stone">:</span> </h1>
        <br/>
        <p className="text-p-lg">(562) 525-0938 </p>
        <p className="text-p-lg">jakobcampos.jc@gmail.com</p>
      </motion.div>
  </Container>
  );
};

