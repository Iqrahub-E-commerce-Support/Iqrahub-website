import ProjectHero from "@/components/ProjectHero";
import bg from "@/assets/images/caligraphy.png";
import Intro from "./components/Intro";
import Process from "./components/Process";
import RelatedWorks from "./components/RelatedWorks";
const AppDevelopment = () => {
  return (
    <>
      <section
        className="xs:h-[450px] sm:h-[550px] bg-center  flex flex-col xs:justify-start sm:justify-start items-center gap-9 xs:pt-[15%]  sm:pt-[5%]  3xl:container 3xl:mx-auto "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <ProjectHero />
      </section>
      <section className="xs:-mt-[7rem]  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto">
        <Intro />
      </section>
      <section className="mt-[60px]  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <Process />
      </section>
      <section className="mt-[60px]  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <RelatedWorks />
      </section>
    </>
  );
};

export default AppDevelopment;
