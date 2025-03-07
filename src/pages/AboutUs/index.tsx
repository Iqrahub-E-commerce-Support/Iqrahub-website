import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IqrahubStory from "./components/IqrahubStory";
import Almuqtadir from "./components/Almuqtadir";
import almuqtadir from "@/assets/images/aboutus/almuqtadir.png";
import Projects from "./components/Projects";
import Team from "./components/Team";

const AboutUs = () => {
  const [firstRef, firstInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [secondRef, secondInView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [thirdRef, thirdInView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [fourthRef, fourthInView] = useInView({ threshold: 0.2, triggerOnce: false });

  const sectionVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -100, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      {/* First Section - Hide when second section appears */}
      <motion.section
        ref={firstRef}
        className="-mt-[52px]"
        initial="hidden"
        animate={firstInView && !secondInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <IqrahubStory />
      </motion.section>

      {/* Second Section - Hide when third section appears */}
      <motion.section
        ref={secondRef}
        className="custom-container relative"
        initial="hidden"
        animate={secondInView && !thirdInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <img
          src={almuqtadir}
          alt="Background"
          className="absolute h-[728px] w-[971px] z-0 -right-[140px] top-0 mt-[100px]"
        />
        <Almuqtadir />
      </motion.section>

      {/* Third Section - Hide when fourth section appears */}
      <motion.section
        ref={thirdRef}
        className="pt-[50px]"
        initial="hidden"
        animate={thirdInView && !fourthInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>

      {/* Fourth Section - Always visible when scrolled to */}
      <motion.section
        ref={fourthRef}
        className="custom-container pt-[50px]"
        initial="hidden"
        animate={fourthInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <Team />
      </motion.section>
    </>
  );
};

export default AboutUs;
