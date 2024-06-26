'use client';
import MagneticButton from "./MagneticButton";
import TransitionLink from "./TransitionLink";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideDown } from "@/utils/animations";

export const Header = () => {
  return(

    <header className="fixed top-0 left-0 w-full z-20">
    <motion.div { ...slideDown({}) }>    
      <div className="flex p-8 lg:p-16 pb-0">
        <div className="border p-2">
          <MagneticButton><TransitionLink href="/" label="home"/></MagneticButton>
        </div>

        <nav className="h-full ml-auto">
          <ul className="flex items-center gap-8 [&_a]:text-p-sm lg:[&_a]:text-p-lg">
            <li> <MagneticButton><TransitionLink href="/info" label="info"/></MagneticButton></li>
            <li> <MagneticButton><Link href="./jakobcampos.pdf#view=Fit"><button>resume</button> </Link></MagneticButton></li>
          </ul>
        </nav>
      </div>
    </motion.div>
    </header> 
  );
}
