import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { Variants } from "framer-motion";
import gsap from "gsap";

interface AnimationOptions {
    delay?: number;
}

export const slideUp = (variants: Variants, options: AnimationOptions = {}) => {
const { delay = 0 } = options;

return {
    initial: {
        y: "200px",
    },
    animate: {
        y: "0",
        transition: { delay, duration: 1, ease: "easeIn" }
    }
  };
};

export const slideDown = (variants: Variants, options: AnimationOptions = {}) => {
    const { delay = 0 } = options;

    return {
        initial: {
            y: "-200px",
        },
        animate: {
            y: "0",
            transition: { delay, duration: 1, ease: "easeIn" }
        }
    };
};

export const slideRight = (variants: Variants, options: AnimationOptions = {}) => {
    const { delay = 0 } = options;

    return {
        initial: {
            x: "-200px",
            opacity: 0,
        },
        animate: {
            x: "0",
            opacity: 1,
            transition: { delay, duration: 1, ease: "easeIn" }
        }
    };
};

export const slideLeft = (variants: Variants, options: AnimationOptions = {}) => {
    const { delay = 0 } = options;

    return {
        initial: {
            x: "400px",
            opacity: 0,
        },
        animate: {
            x: "0",
            opacity: 1,
            transition: { delay, duration: 1.2, ease: "easeIn" }
        }
    };
};


export const fadeIn = (variants: Variants, options: AnimationOptions = {}) => {
    const { delay = 0 } = options;

    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: { delay, duration: 2, ease: "easeIn" }
        }
    };
}

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline()
    
    tl.set([bannerOne, bannerTwo], {
      yPercent: 0,
    }).set([bannerThree, bannerFour], {
      yPercent: -100,
    }).
    to([bannerTwo, bannerOne], {
      yPercent: 100,
      stagger: 0.1,
      duration: 1,
    })
  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")
  const path = document.getElementById("path")
  
  if(path)
    path.textContent = ( href === "/" ? "/home" : href )

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const t2 = gsap.timeline()

    t2.set([bannerThree, bannerFour], {
      yPercent: -100,
    }).set([bannerOne, bannerTwo], {
      yPercent: 100,
    }).to([bannerThree, bannerFour], {
      yPercent: 0,
      stagger: .1,
      duration: 1,
      onComplete: () => {
        router.push(href)
      },
    })
  }
}
