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
        className="w-screen xs:h-full sm:h-[978px] xs:bg-top sm:bg-center bg-no-repeat 3xl:h-[978px] xs:bg-cover sm:bg-cover flex flex-col justify-start items-center gap-9 xs:pt-[7.5rem] md:pt-[15%] lg:pt-[13%] 2xl:pt-[171px]"
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      >
        <HeroSection />
      </section>
      <div className="flex justify-between sm:items-center custom-container xs:mt-[40px] sm:-mt-[650px] md:-mt-[610px] xl:-mt-[587px] ">
        <div>
          <CustomizableHeading
            firstTxt="Establish"
            secondTxt="iqrahub media story"
            MainStyle="md:text-[48px] text-yellow uppercase md:leading-[48px]"
            SpecialCharacterStyle="text-white font-thin"
          />
          <p className="xs:text-[14px] text-[18px] mt-[10px] ">
            Unleash Your Brand's Storytelling Potential with Iqrahub Story Media
            - The Ultimate <br className="xs:hidden sm:block" /> Marketing and
            Production Solution!"
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
      <div className="xs:mt-0  sm:-mt-[50px] custom-container">
        <img src={firoz} alt="story" className="h-full w-full" />
        <div className="flex justify-center gap-[12px]">
          <Aboutinstagram />
          <Abouttwitter />
          <AboutMail />
          <Aboutlinkedin />
        </div>
        {/* <div className="flex justify-end">
          <p className="font-black text-[24px]">2020-2022</p>
        </div> */}
      </div>
    </>
  );
};

export default IqrahubStory;
