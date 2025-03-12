import bg from "@/assets/images/homecal.png";
import Hero from "./components/Hero";
import { MdArrowForward } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
import AreaOfExpertise from "./components/AreaOfExpertise";
// import AreaOfExpertiseSmallScreen from "./components/AreaOfExpertiseSmallScreen";
import Clients from "./components/Clients";
import FeaturedService from "./components/FeaturedService";
import WayOfExecution from "./components/WayOfExecution";
import Form from "./components/Form";
import cali from "@/assets/images/cal.png";
import Testimonial from "./components/Testimonial";
import OurSuccess from "./components/OurSuccess";
import Faq from "@/components/Faq";
import caligraphy2 from "@/assets/images/calligraphy2.png";
import useSmoothScrollUp from "@/hooks/useSmoothScrollUP";
const Home = () => {
  useSmoothScrollUp();
  return (
    <>
      <section
        className="w-full h-full bg-cover bg-center flex flex-col justify-start items-center gap-9 xs:pt-[7.5rem] md:pt-[15%] lg:pt-[13%] 2xl:pt-[8%] xs:px-5 3xl:container 3xl:mx-auto"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Hero />
        <div className="flex  sm:flex-row gap-5 items-center">
          <GradientButton>
            Get in Touch <MdArrowForward />
          </GradientButton>
          <div className="xs:flex items-center gap-4">
            <GradientButton>
              <MdPlayArrow size={30} />
            </GradientButton>
            <p>How it works</p>
          </div>
        </div>
        <div className="mt-[61px]">
          <AreaOfExpertise />
        </div>
      </section>

      <section className="xs:mt-[50px] sm:mt-[65px] md:mt-[491px] ">
        <Clients />
      </section>
      <section className="relative xs:pt-8 md:pt-16 lg:pt-24 xl:pt-[140px] xs:mx-6 sm:mx-7 md:mx-[100px] 4xl:container 4xl:mx-auto bg-cover ">
        <img
          src={caligraphy2}
          alt="Background"
          className="absolute top-0 left-[90%] transform -translate-x-1/2 w-[150%] h-[150%] object-contain opacity-30 z-0 "
        />
        <FeaturedService />
      </section>
      <section className="xs:pt-0 sm:pt-4 md:pt-[102px] xs:mx-6  4xl:container 4xl:mx-auto bg-cover">
        <WayOfExecution />
      </section>
      <section className="xs:mt-6 md:mt-16 lg:mt-28 xl:mt-[120px] xs:mx-6 sm:mx-7   md:mx-[100px] 4xl:container 4xl:mx-auto">
        <Form />
      </section>
      <section className="relative mt-16 lg:mt-20  xs:mx-6 sm:mx-7 md:mx-0 lg:mr-[100px] 4xl:container 4xl:mx-auto ">
        <img
          src={cali}
          alt="Background"
          className="absolute inset-x-[30%] h-96  object-cotain opacity-75"
        />
        <Testimonial />
      </section>
      <section className="xs:mt-20 md:mt-16 lg:mt-20  xs:mx-6 sm:mx-7 md:mx-[100px] 4xl:container 4xl:mx-auto ">
        <OurSuccess />
      </section>
      <section className="xs:mt-14 sm:mt-20 md:mt-16 lg:mt-20  xs:mx-6 sm:mx-7 md:mx-[100px] 4xl:container 4xl:mx-auto ">
        <Faq />
      </section>
    </>
  );
};

export default Home;
