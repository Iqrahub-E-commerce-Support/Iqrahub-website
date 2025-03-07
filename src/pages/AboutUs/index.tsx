import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IqrahubStory from "./components/IqrahubStory";
import Almuqtadir from "./components/Almuqtadir";
import almuqtadir from "@/assets/images/aboutus/almuqtadir.png";
import Projects from "./components/Projects";
import Team from "./components/Team";

const AboutUs = () => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [secondRef, secondInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [thirdRef, thirdInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [fourthRef, fourthInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* First Section */}
      <motion.section
        ref={firstRef}
        className="-mt-[52px]"
        initial="hidden"
        animate={firstInView ? "visible" : secondInView ? "exit" : "hidden"}
        variants={sectionVariants}
      >
        <IqrahubStory />
      </motion.section>

      {/* Second Section */}
      <motion.section
        ref={secondRef}
        className={`custom-container relative`}
        initial="hidden"
        animate={secondInView ? "visible" : thirdInView ? "exit" : "hidden"}
        variants={sectionVariants}
      >
        <img
          src={almuqtadir}
          alt="Background"
          className="absolute h-[728px] w-[971px] z-0 -right-[140px] top-0 mt-[100px]"
        />
        <Almuqtadir />
      </motion.section>

      {/* Third Section */}
      <motion.section
        ref={thirdRef}
        initial="hidden"
        className="pt-[50px]"
        animate={thirdInView ? "visible" : fourthInView ? "exit" : "hidden"}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>

      {/* Fourth Section */}
      <motion.section
        ref={fourthRef}
        className="custom-container pt-[50px]"
        initial="hidden "
        animate={fourthInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <Team />
      </motion.section>
    </>
  );
};

export default AboutUs;
