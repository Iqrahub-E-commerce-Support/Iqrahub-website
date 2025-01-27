import bg from "@/assets/images/caligraphy.png";
import Hero from "./components/Hero";
import { MdArrowForward } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
import AreaOfExpertise from "./components/AreaOfExpertise";
import AreaOfExpertiseSmallScreen from "./components/AreaOfExpertiseSmallScreen";
import Clients from "./components/Clients";
import FeaturedService from "./components/FeaturedService";
const Home = () => {
  return (
    <>
      <section
        // className="h-[450px] bg-cover bg-center bg-gradient-to-r from-[#FFC506] to-[#C5261F] "
        className="h-[550px] bg-cover  flex flex-col justify-center items-center gap-9  xs:pt-[15.2rem] sm:pt-[5%]"
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
        <div className="flex gap-5">
          <GradientButton>
            Get in Touch <MdArrowForward />
          </GradientButton>
          <GradientButton>
            <MdPlayArrow size={30} />
          </GradientButton>
        </div>
      </section>
      <section className="xs:mt-[150px] sm:mt-0">
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
      <section className="mt-14">
        <FeaturedService />
      </section>
    </>
  );
};

export default Home;
