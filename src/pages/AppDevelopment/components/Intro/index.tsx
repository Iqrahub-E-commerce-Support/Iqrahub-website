import CustomizableHeading from "@/components/CustomizableHeading";
import GradientButton from "@/components/GradientButton";
import AppDevelopment from "@/assets/images/AppDevelopment/AppDevelopment.png";
import { MdArrowForward } from "react-icons/md";

const Intro = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div>
          <h3 className="text-[24px] font-bold ">
            YOUR VISION, OUR DESIGN PERFECTLY CRAFTED
          </h3>
          <CustomizableHeading
            firstTxt="MOBILE"
            secondTxt="EXPERIENCES"
            MainStyle="text-[57px] font-black -mt-2"
            SpecialCharacterStyle="font-black text-yellow"
          />
          <p className="w-[50%] font-extralight">
            We specialize in designing mobile apps that combine sleek aesthetics
            with intuitive functionality, offering your users an exceptional
            experience every time.
          </p>
          <GradientButton className="mt-6">
            Get in touch <MdArrowForward />
          </GradientButton>
        </div>
        <div>
          <img src={AppDevelopment} alt="mobile" className=" object-cover" />
        </div>
      </div>
    </>
  );
};

export default Intro;
