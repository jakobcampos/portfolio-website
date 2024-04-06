'use client';
import Link from "next/link";
import Clock from "./Clock"
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";
import { slideUp } from "@/utils/animations";

export const Footer = () => {
  return(
      <footer className="fixed bottom-0 left-0 w-full z-30 p-2">
      <motion.div {...slideUp({}, {delay: .1})}>
        <div className="flex items-end lg:p-16 lg:pt-0">
          <Clock/>
          <nav className="ml-auto">
            <ul className="flex items-center h-full w-full gap-8 [&_a]:text-p lg:[&_a]:text-p-lg ">
              <li> <MagneticButton><Link href="https://github.com/jakobcampos"> <button>github</button> </Link></MagneticButton></li>
              <li> <MagneticButton><Link href="https://instagram.com/jakobdevs"> <button>instagram</button> </Link></MagneticButton></li>
              <li> <MagneticButton><Link href="https://www.linkedin.com/in/iakobcampos/"> <button>linked_in</button> </Link></MagneticButton></li>
            </ul>
          </nav>
        </div>
        </motion.div>
      </footer>
  );
}
