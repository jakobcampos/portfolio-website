'use client';
import { Container } from "@/components/container"
import { motion } from "framer-motion";
import { useState } from "react";
import { slideDown, slideLeft, slideRight } from "@/utils/animations";
import { EmailTemplate } from "../Email";
import { Resend } from "resend"; // Import Resend library


export const EnquiryHero = () => {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e:any){
    e.preventDefault()
    setSubmitted(true)
    return 'BUTTON';
  }

  return (

    <Container className="w-full h-screen flex justify-center">
      <motion.div {...slideDown({})} className="w-1/2 lg:w-1/4  py-[11rem] lg:py-48 flex flex-col z-10 text-p lg:text-p-lg">
        <h1 className="pb-8 flex justify-center text-h2 lg:text-h2-lg"> Enquiry<span className="text-stone">:</span> </h1>

        <form className="w-full h-screen flex flex-col gap-8" onSubmit={handleSubmit}>
          <div id="name" className="w-full flex flex-col gap-2">
            <span>NAME -</span>
            <input type="text" placeholder="your name / company" className="bg-background rounded-none border p-1 placeholder:text-stone" />
          </div>
          <div id="email" className="w-full flex flex-col gap-2">
            <span>EMAIL -</span>
            <input type="text" placeholder="your name email" className="bg-background rounded-none border p-1 placeholder:text-stone" />
          </div>
          <div id="about" className="w-full flex flex-col gap-2">
            <span>ABOUT -</span>
            <textarea placeholder="tell me about your project" className="bg-background rounded-none border border-dark p-1 min-h-16 min-w-full max-h-64 resize placeholder:text-stone" />
          </div>
          <button type="submit" className="w-full hover:bg-dark hover:text-stone transition-colors duration-500 border p-2 flex justify-center mt-4">
            {submitted ? 'Submitted!' : 'Submit'}
          </button>
        </form>
      </motion.div>
    </Container>
  );
};

