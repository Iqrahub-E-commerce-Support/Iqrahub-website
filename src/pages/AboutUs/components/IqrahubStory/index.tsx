import CustomizableHeading from "@/components/CustomizableHeading";
import firoz from "@/assets/images/aboutus/Firoz.png";
import Aboutinstagram from "@/components/icons/Aboutinstagram";
import Abouttwitter from "@/components/icons/Abouttwitter";
import AboutMail from "@/components/icons/AboutMail";
import Aboutlinkedin from "@/components/icons/Aboutlinkedin";
import HeroSection from "../HeroSection";
import bg2 from "@/assets/images/aboutus/aboutuscal2.png";
const IqrahubStory = () => {
  return (
    <>
      <section
        className="w-screen h-screen 3xl:h-[978px] bg-cover flex flex-col justify-start items-center gap-9 xs:pt-[7.5rem] md:pt-[15%] lg:pt-[13%] 2xl:pt-[171px]"
        style={{
          backgroundImage: `url(${bg2})`,
          // backgroundSize: "cover", // Ensures the whole image fits within the screen
          // backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
      >
        <HeroSection />
      </section>
      <div className="flex justify-between items-center custom-container 2xl:-mt-[322px]  3xl:-mt-[587px]">
        <div>
          <CustomizableHeading
            firstTxt="Establish"
            secondTxt="iqrahub media story"
            MainStyle="md:text-[48px] text-yellow uppercase"
            SpecialCharacterStyle="text-white font-thin"
          />
          <p className="text-[18px] mt-[10px]">
            Unleash Your Brand's Storytelling Potential with Iqrahub Story Media
            - The Ultimate <br /> Marketing and Production Solution!"
          </p>
        </div>
        <div>
          <CustomizableHeading
            firstTxt="2019"
            secondTxt=""
            MainStyle="md:text-[48px] text-yellow uppercase"
            SpecialCharacterStyle="text-white font-thin"
          />
        </div>
      </div>
      <div className="-mt-[50px] custom-container">
        <img src={firoz} alt="story" className="h-full w-full" />
        <div className="flex justify-center gap-[12px]">
          <Aboutinstagram />
          <Abouttwitter />
          <AboutMail />
          <Aboutlinkedin />
        </div>
        <div className="flex justify-end">
          <p className="font-black text-[24px]">2020-2022</p>
        </div>
      </div>
    </>
  );
};

export default IqrahubStory;
