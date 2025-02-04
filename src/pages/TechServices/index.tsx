import bg from "@/assets/images/caligraphy.png";
import Hero from "./Components/Hero";
import Processes from "./Components/Processes";
import VideoSection from "./Components/VIdeoSection";
import Projects from "./Components/Projects";
const TechSerivces = () => {
  return (
    <>
      <section
        className="h-[450px] bg-center   xs:pt-[13.2rem] sm:pt-[5%] container mx-auto "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
      </section>
      <section className="h-screen  container mx-auto ">
        <Processes />
      </section>
      <section className="pt-[120px]  container mx-auto ">
        <VideoSection />
      </section>
      <section className="pt-[120px]  container mx-auto ">
        <Projects />
      </section>
    </>
  );
};

export default TechSerivces;
