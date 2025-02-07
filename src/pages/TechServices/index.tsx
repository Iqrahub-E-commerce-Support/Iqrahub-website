import bg from "@/assets/images/caligraphy.png";
import Processes from "./Components/Processes";
import VideoSection from "./Components/VIdeoSection";
import Projects from "./Components/Projects";
import ProjectHero from "@/components/ProjectHero";
const TechSerivces = () => {
  return (
    <>
      <section
        className="xs:h-[450px] sm:h-[550px] bg-center  flex flex-col xs:justify-start sm:justify-start items-center gap-9 xs:pt-[15%]  sm:pt-[5%]  3xl:container 3xl:mx-auto "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <ProjectHero />
      </section>
      <section className="xs:-mt-10  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto">
        <Processes />
      </section>
      <section className="mt-[120px]  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <VideoSection />
      </section>
      <section className=" xs:pt-[320px] sm:pt-[120px] xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto">
        <Projects />
      </section>
    </>
  );
};

export default TechSerivces;
