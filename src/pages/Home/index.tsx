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

const Home = () => {
  return (
    <>
      <section
        // className="h-[450px] bg-cover bg-center bg-gradient-to-r from-[#FFC506] to-[#C5261F] "
       className=" "
       
      >
        <div 
         className="h-[500px] bg-cover   "
         style={{ backgroundImage: `url(${bg})`, opacity:1}}
        />
        <div className="flex flex-col justify-center items-center  gap-9  xs:pt-[-15.2rem] sm:mt-[-28%]">

        <Hero />
        <div className="flex gap-5">
          <GradientButton>
            Get in Touch <MdArrowForward />
          </GradientButton>
          <GradientButton>
            <MdPlayArrow size={30} />
          </GradientButton>
        </div>
        </div>
      </section>
      <section className="xs:mt-[150px] sm:mt-0 lg:mt-4">
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
      <section  className="h-96 pt-12 mt-12 bg-cover relative">
        <FeaturedService />
      </section>
      <section className="mt-20">
        <WayOfExecution />
      </section>
      <section className="mt-16">
        <Form />
      </section>
    </>
  );
};

export default Home;
