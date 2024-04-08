'use client';
import { Container } from "@/components/container"
import { motion } from "framer-motion";
import { slideDown, slideLeft, slideRight } from "@/utils/animations";
import { WorkHero } from "./work-hero";

export const InfoHero = () => {
  return(
  <Container className="w-full h-screen flex justify-center">
      <motion.div {...slideDown({})} className="pt-32 flex flex-col z-10 text-p lg:text-p-lg">
        <h1 className="pb-8 flex justify-center text-title lg:text-title-lg"> INFO  <span className="text-stone">:</span> </h1>
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
  </Container>
  );
};

