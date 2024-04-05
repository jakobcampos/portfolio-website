'use client';
import { Container } from "@/components/container"
import { motion } from "framer-motion";
import { slideDown, slideLeft, slideRight } from "@/utils/animations";

export const ProjectsHero = () => {
  return(
  <Container className="w-full h-screen flex justify-center">
      <motion.div {...slideDown({})} className="px-16 flex flex-col z-10">
        <h1 className="flex justify-center text-title"> Projects <span className="text-stone">:</span> </h1>
        <br/>
        <p>workin on it</p>
      </motion.div>
  </Container>
  );
};

