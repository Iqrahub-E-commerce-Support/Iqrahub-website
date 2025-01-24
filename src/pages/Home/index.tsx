import bg from "@/assets/images/caligraphy.png";
import Hero from "./components/Hero";
import { MdArrowForward } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
import AreaOfExpertise from "./components/AreaOfExpertise";
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
      <section>
        <AreaOfExpertise/>
      </section>
    </>
  );
};

export default Home;
