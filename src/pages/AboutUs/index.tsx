import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IqrahubStory from "./components/IqrahubStory";
import Almuqtadir from "./components/Almuqtadir";
import almuqtadir from "@/assets/images/aboutus/almuqtadir.png";
import Projects from "./components/Projects";

const AboutUs = () => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [secondRef, secondInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Strong swipe-up animation with a quick exit
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 }, // Start from below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    }, // Quick smooth enter
    exit: { opacity: 0, y: -150, transition: { duration: 0, ease: "easeIn" } }, // Strong & fast swipe-up exit
  };

  return (
    <>
      {/* First Section */}
      {/* <motion.section
        ref={firstRef}
        className="custom-container -mt-[52px]"
        initial="hidden"
        animate={firstInView ? "visible" : secondInView ? "exit" : "hidden"}
        variants={sectionVariants}
      >
        <IqrahubStory />
      </motion.section> */}

      {/* Second Section */}
      {/* <motion.section
        ref={secondRef}
        className={`custom-container relative ${secondInView ? "top-0":""}`}
        initial="hidden"
        animate={secondInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <img
          src={almuqtadir}
          alt="Background"
          className="absolute h-[728px] w-[971px] z-0 -right-[140px] top-0 mt-[450px]"
        />
        <Almuqtadir />
      </motion.section> */}
      {/* <section className="">
        <Projects/>
      </section> */}
      <section></section>
    </>
  );
};

export default AboutUs;
