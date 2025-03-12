import { useEffect } from "react";
import { animate } from "framer-motion";

const useSmoothScrollUp = () => {
  useEffect(() => {
    const scrollToTop = () => {
      animate(window.scrollY, 0, {
        duration: 1.2, // Adjust for extra smoothness
        ease: [0.22, 1, 0.36, 1], // Uses a cubic bezier for buttery motion
        onUpdate: (value) => window.scrollTo(0, value),
      });
    };

    requestAnimationFrame(scrollToTop);
  }, []);
};

export default useSmoothScrollUp;
