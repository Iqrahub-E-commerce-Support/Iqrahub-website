import CustomizableHeading from "@/components/CustomizableHeading";
import GradientButton from "@/components/GradientButton";
import AppDevelopment from "@/assets/images/AppDevelopment/AppDevelopment.png";
import { MdArrowForward } from "react-icons/md";

const Intro = () => {
  return (
    <div className="flex flex-wrap items-center justify-between h-auto md:h-screen px-6 md:px-12 py-10">
      {/* Left Content */}
      <div className="w-full md:w-[50%] text-center md:text-left">
        <h3 className="text-2xl md:text-[24px] font-bold mb-6">
          YOUR VISION, OUR DESIGN PERFECTLY CRAFTED
        </h3>
        <CustomizableHeading
          firstTxt="MOBILE"
          secondTxt="EXPERIENCES"
          MainStyle="text-4xl md:text-[57px] font-black -mt-2"
          SpecialCharacterStyle="font-black text-yellow"
        />
        <p className="w-full md:w-[70%] mt-6 font-extralight text-sm md:text-base mx-auto md:mx-0">
          We specialize in designing mobile apps that combine sleek aesthetics
          with intuitive functionality, offering your users an exceptional
          experience every time.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <GradientButton>
            Get in touch <MdArrowForward />
          </GradientButton>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={AppDevelopment}
          alt="mobile"
          className="w-[80%] md:w-auto max-w-xs md:max-w-md object-cover"
        />
      </div>
    </div>
  );
};

export default Intro;
