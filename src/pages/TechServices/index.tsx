import bg from "@/assets/images/caligraphy.png";
import Processes from "./Components/Processes";
import VideoSection from "./Components/VIdeoSection";
import Projects from "./Components/Projects";
import ProjectHero from "@/components/ProjectHero";
import caligraphy2 from "@/assets/images/techservicesCali.png";
import useSmoothScrollUp from "@/hooks/useSmoothScrollUP";
const TechSerivces = () => {
  useSmoothScrollUp();
  return (
    <>
      <section
        className="xs:h-[380px] md:h-[550px] 3xl:h-[630px] xs:bg-top sm:bg-center bg-no-repeat  flex flex-col xs:justify-start sm:justify-start items-center gap-9 xs:pt-[11%]  sm:pt-[5%]"
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <ProjectHero />
      </section>
      <section className="xs:-mt-7  md:-mt-[130px] 3xl:-mt-[150px] xs:mx-6 sm:mx-7 md:mx-[25px] 3xl:container 3xl:mx-auto">
        <Processes />
      </section>
      <section className="relative xs:mt-[60px] sm:mt-[70px] md:mt-[150px]  xs:mx-6 sm:mx-7 md:mx-[25px] 3xl:container 3xl:mx-auto ">
        <img
          src={caligraphy2}
          alt="Background"
          className="absolute top-0 left-[50%] transform -translate-x-1/2 xs:w-[80%] md:w-[120%] xl:w-[70%] md:h-[100%] object-cover opacity-100 z-0  xs:mt-[80px] md:mt-[50px] lg:mt-[10px]  xs:mx-6 sm::mx-[26px] 4xl:container 4xl:mx-auto"
        />
        <VideoSection />
      </section>
      <section className=" xs:pt-[320px] sm:pt-[580px] md:pt-[120px] xs:mx-6 sm:mx-7 md:mx-[100px] 4xl:container 4xl:mx-auto xl:pb-[120px]">
        <Projects />
      </section>
    </>
  );
};

export default TechSerivces;
