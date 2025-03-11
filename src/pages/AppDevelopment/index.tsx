import ProjectHero from "@/components/ProjectHero";
import bg from "@/assets/images/caligraphy.png";
import Intro from "./components/Intro";
import Process from "./components/Process";
import RelatedWorks from "./components/RelatedWorks";
const AppDevelopment = () => {
  return (
    <>
      <section
        className="xs:h-[620px]  3xl:h-[620px] xs:bg-top sm:bg-center bg-no-repeat  flex flex-col xs:justify-start sm:justify-start items-center gap-9 xs:pt-[15%]  sm:pt-[5%]  4xl:container 4xl:mx-auto "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <ProjectHero />
      </section>
      <section className="xs:-mt-[240px] sm:-mt-[260px] md:-mt-[420px] lg:-mt-[410px]  xl:-mt-[340px] 3xl:-mt-[280px] xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto">
        <Intro />
      </section>
      <section className="xs:mt-[20px] sm:mt-[40px] md:-mt-[70px] xl:-mt-[50px] 2xl:mt-[20px] 3xl:mt-[20px]  xs:mx-6 sm:mx-7 md:mx-[100px] 3xl:container 3xl:mx-auto ">
        <Process />
      </section>
      <section className="xs:mt-[80px] sm:mt-[60px] lg:mt-[71px] xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <RelatedWorks />
      </section>
    </>
  );
};

export default AppDevelopment;
