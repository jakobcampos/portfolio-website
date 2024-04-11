'use client';
import { Container } from "@/components/Container"
import { motion } from "framer-motion";
import { slideDown, slideUp, slideLeft, slideRight } from "@/utils/animations";
import { WorkHero } from "./work-hero";
import Image from "next/image";

export const InfoHero = () => {
  return(
  <Container className="w-full h-screen flex justify-center">
      <motion.div {...slideDown({})} className="px-8 lg:px-8 pt-[10rem] md:pt-48 lg:p-48 flex flex-col z-10 text-p lg:text-p-lg">
        <h1 className="pb-8 flex justify-center text-h2-lg lg:text-title"> INFO  <span className="text-stone">:</span> </h1>
        <div className="w-full">
        <p>Hey,</p>
        <br/>
        <p>I'm a 22-year-old developer from Los Angeles, California.</p>
        <p>My philosophy around design focuses on minimalism.</p>
        <p>Brutalist architecture and coffee are my mojo.</p>
        <p>Motorcycles are pretty cool too; I have a Yamaha R6.</p>
        <br/>
        <p>Best Regards,</p>
        <p>Jakob Campos</p>
        </div>
      </motion.div>
      <motion.div {...slideDown({})} className="absolute -left-[15rem] lg:left-16 top-4 lg:top-32 w-64 h-64">
        <Image src="./svgs/cat.svg" alt="cat" fill className="opacity-0 lg:opacity-100 scale-x-[-1] transition-opacity duration-500"/>
      </motion.div>
      <motion.div {...slideDown({})} className="absolute -right-16 lg:right-32 bottom-32 w-64 h-64">
        <Image src="./svgs/02.svg" alt="bike" fill className="opacity-0 lg:opacity-100 transition-opacity duration-500"/>
      </motion.div>
  </Container>
  );
};

