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
      <section className="mt-[55px] xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto">
        <Processes />
      </section>
      <section className="mt-[120px]  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <VideoSection />
      </section>
      <section className="pt-[120px] xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto">
        <Projects />
      </section>
    </>
  );
};

export default TechSerivces;
