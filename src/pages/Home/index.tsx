import bg from "@/assets/images/caligraphy.png";
import Hero from "./components/Hero";
import { MdArrowForward } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
import Marquee from "@/components/Marquee";
const Home = () => {
  return (
    <>
      <section
        // className="h-[450px] bg-cover bg-center bg-gradient-to-r from-[#FFC506] to-[#C5261F] "
        className="h-[550px] bg-cover bg-center flex flex-col justify-center items-center gap-9  xs:pt-[15.2rem] sm:pt-[8%]"
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
        <Marquee >
        {/* <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>*/}
    {/* <span className="text-4xl mx-4"></span>  */}
    <div className="flex gap-10">
    <div className="h-40 w-40 bg-yellow">
    sdf
   </div>
   <div className="h-40 w-40 bg-yellow">
    sdf
   </div>
   <div className="h-40 w-40 bg-yellow">
    sdf
   </div>
   <div className="h-40 w-40 bg-yellow">
    sdf
   </div>
   <div className="h-40 w-40 bg-yellow">
    sdf
   </div>
  
  
    </div>
   
        </Marquee>
    </>
  );
};

export default Home;
