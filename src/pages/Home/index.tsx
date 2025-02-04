import bg from "@/assets/images/caligraphy.png";
import Hero from "./components/Hero";
import { MdArrowForward } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
import AreaOfExpertise from "./components/AreaOfExpertise";
import AreaOfExpertiseSmallScreen from "./components/AreaOfExpertiseSmallScreen";
import Clients from "./components/Clients";
import FeaturedService from "./components/FeaturedService";
import WayOfExecution from "./components/WayOfExecution";
import Form from "./components/Form";
import cali from "@/assets/images/cal.png";
import Testimonial from "./components/Testimonial";
import OurSuccess from "./components/OurSuccess";
import Faq from "@/components/Faq";

const Home = () => {
  return (
    <>
      <section
        className="h-[550px] bg-center  flex flex-col justify-center items-center gap-9  xs:pt-[15.2rem] sm:pt-[5%]  3xl:container 3xl:mx-auto "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
        <div className="flex xs:flex-col sm:flex-row gap-5 items-center">
          <GradientButton>
            Get in Touch <MdArrowForward />
          </GradientButton>
          <div className="xs:flex items-center gap-4">
            <GradientButton>
              <MdPlayArrow size={30} />
            </GradientButton>
            <p>How it work</p>
          </div>
        </div>
      </section>
      <section className="xs:mt-[220px] sm:mt-0 lg:mt-4">
        <div className="xs:hidden md:block -z-50">
          <AreaOfExpertise />
        </div>
        <div className="xs:block md:hidden">
          <AreaOfExpertiseSmallScreen />
        </div>
      </section>
      <section>
        <Clients />
      </section>

      <section className="pt-12 mt-12  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto bg-cover relative">
        <FeaturedService />
      </section>
      <section className="xs:mt-14 md:mt-20 xs:mx-6  sm:mx-7 md:mx-0 3xl:container 3xl:mx-auto">
        <WayOfExecution />
      </section>
      <section className="mt-16 xs:mx-6 sm:mx-7   md:mx-16 3xl:container 3xl:mx-auto">
        <Form />
      </section>
      <section className="relative mt-16  xs:mx-6 sm:mx-7 md:mx-0 lg:mr-10 3xl:container 3xl:mx-auto ">
        <img
          src={cali}
          alt="Background"
          className="absolute inset-x-1/4 h-96  object-cotain opacity-75"
        />
        <Testimonial />
      </section>
      <section className="mt-16  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <OurSuccess />
      </section>
      <section className="mt-16 xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <Faq />
      </section>
    </>
  );
};

export default Home;
