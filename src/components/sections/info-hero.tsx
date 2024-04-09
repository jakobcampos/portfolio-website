'use client';
import { Container } from "@/components/container"
import { motion } from "framer-motion";
import { slideDown, slideUp, slideLeft, slideRight } from "@/utils/animations";
import { WorkHero } from "./work-hero";
import Image from "next/image";

export const InfoHero = () => {
  return(
  <Container className="w-full h-screen flex justify-center snap-y">
      <motion.div {...slideDown({})} className="p-48 flex flex-col z-10 text-p lg:text-p-lg">
        <h1 className="pb-8 flex justify-center text-h2 lg:text-h2-lg"> INFO  <span className="text-stone">:</span> </h1>
        <br/>
        <p>Hey,</p>
        <br/>
        <p>I'm a 22-year-old developer from Los Angeles, California.</p>
        <p>My philosophy around design focuses on minimalism.</p>
        <p>Brutalist architecture and coffee are my mojo.</p>
        <p>Motorcycles are pretty cool too; I have a Yamaha R6.</p>
        <br/>
        <p>Best Regards,</p>
        <p>Jakob Campos</p>
        <br/>
        <br/>
        <p className="border text-center p-2 w-64">Certifications</p>
        <br/>
        <p>Fullerton College</p>
        <p>Associates in Science — Computer Science</p>
      </motion.div>
      <motion.div {...slideDown({})} className="absolute left-16 top-32 w-64 h-64">
        <Image src="./svgs/cat.svg" alt="cat" fill className="scale-x-[-1]"/>
      </motion.div>
      <motion.div {...slideDown({})} className="absolute right-32 bottom-48 w-64 h-64">
        <Image src="./svgs/02.svg" alt="bike" fill/>
      </motion.div>
  </Container>
  );
};

