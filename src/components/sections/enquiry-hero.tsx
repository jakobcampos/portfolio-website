'use client';
import { Container } from "@/components/container"
import { motion } from "framer-motion";
import { slideDown, slideLeft, slideRight } from "@/utils/animations";
import { WorkHero } from "./work-hero";
import TransitionLink from "../TransitionLink";
import MagneticButton from "../MagneticButton";

export const EnquiryHero = () => {
  return(
  <Container className="w-full h-screen flex justify-center">
      <motion.div {...slideDown({})} className="w-1/4 py-48 flex flex-col z-10 text-p lg:text-p-lg">
        <h1 className="pb-8 flex justify-center text-h2 lg:text-h2-lg"> Enquiry<span className="text-stone">:</span> </h1>
        
        <form className="w-full h-screen flex flex-col gap-8">
          <div id="name" className="w-full flex flex-col gap-2">
            <span>NAME -</span>
            <input type="text" placeholder="your name / company" className="bg-background border p-1 placeholder:text-stone"/> 
          </div>
          <div id="email" className="w-full flex flex-col gap-2">
            <span>EMAIL -</span>
            <input type="text" placeholder="your name email" className="bg-background border p-1 placeholder:text-stone"/> 
          </div>
          <div id="about" className="w-full flex flex-col gap-2">
            <span>ABOUT -</span>
            <textarea placeholder="tell me about your project" className="bg-background border border-dark p-1 min-w-full max-h-64 resize placeholder:text-stone"/> 
          </div>
          <button className="w-full hover:bg-dark hover:text-stone transition-all duration-500 border p-2 flex justify-center mt-4"> submit </button>
        </form>
      </motion.div>
  </Container>
  );
};

