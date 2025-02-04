import bg from "@/assets/images/caligraphy.png";
import Hero from "./Components/Hero";
import Processes from "./Components/Processes";
import VideoSection from "./Components/VIdeoSection";
import Projects from "./Components/Projects";
const TechSerivces = () => {
  return (
    <>
      <section
        className="h-[450px] bg-center   xs:pt-[13.2rem] sm:pt-[5%] "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
      </section>
      <section className="h-screen">
        <Processes />
      </section>
      <section className="pt-[120px]">
        <VideoSection />
      </section>
      <section className="pt-[120px]">
        <Projects />
      </section>
    </>
  );
};

export default TechSerivces;
