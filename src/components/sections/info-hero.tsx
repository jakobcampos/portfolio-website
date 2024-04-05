'use client';
import { Container } from "../container"
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/utils/animations";

export const InfoHero = () => {
  return(
  <Container className="w-full h-screen flex justify-start">
      <motion.div {...slideRight({})} className="px-16 flex flex-col z-10">
        <h1 className="flex justify-end text-title"> Info <span className="text-stone">:</span> </h1>
        <br/>
      </motion.div>
  </Container>
  );
};

