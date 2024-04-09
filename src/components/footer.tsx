'use client';
import Link from "next/link";
import Clock from "./Clock"
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";
import { slideUp } from "@/utils/animations";

export const Footer = () => {
  return(
      <footer className="fixed bottom-0 left-0 w-full z-30">
      <motion.div {...slideUp({}, {delay: .1})}>
        <div className="flex flex-col lg:flex-row lg:items-end p-8 lg:p-16 lg:pt-0">
          <Clock className="flex flex-col justify-center items-center lg:items-start p-4 lg:p-0"/>
          <nav className="lg:ml-auto">
            <ul className="flex justify-center items-center h-full w-full gap-6 lg:gap-8 [&_a]:text-p-sm lg:[&_a]:text-p-lg">
              <li> <MagneticButton><Link href="https://github.com/jakobcampos"> <button>github</button> </Link></MagneticButton></li>
              <li> <MagneticButton><Link href="https://instagram.com/jakobdevs"> <button>instagram</button> </Link></MagneticButton></li>
              <li> <MagneticButton><Link href="https://www.linkedin.com/in/iakobcampos/"> <button>linked_in</button> </Link></MagneticButton></li>
              <li> <MagneticButton><Link href="./jakobcampos.pdf#view=Fit"><button>resume</button> </Link></MagneticButton></li>
            </ul>
          </nav>
        </div>
        </motion.div>
      </footer>
  );
}
