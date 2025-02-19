import challengesPic from "@/assets/images/almuqtadir/challenges.jpg";
import CustomizableHeading from "@/components/CustomizableHeading";
const Challenges = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-6 border-x-2 custom-container border-gold-900 ">
      <img src={challengesPic} alt="challengepic" />
      <div className="flex flex-col justify-center">
        <div className="-mt-6 -ml-14">
          <CustomizableHeading
            firstTxt="CRITICAL"
            secondTxt="CHALLENGE"
            MainStyle="text-gold font-extrabold md:text-[48px]"
            SpecialCharacterStyle="font-thin text-white"
          />
          <p className="w-[580px] mt-2 text-[16px]">
            Management aimed to open 100 global stores in five years but faced a
            major hurdle. Al Muqtadir lacked digital presence, had inconsistent
            branding across seven stores, and their sales relied heavily on
            traditional word-of-mouth advertising and newspaper ads.
          </p>
        </div>
        <div className="mt-8">
          <CustomizableHeading
            firstTxt="MARKETING"
            secondTxt="FOR EXPANSION"
            MainStyle="text-gold font-extrabold md:text-[48px]"
            SpecialCharacterStyle="font-thin text-white"
          />
          <p className="w-[630px] mt-2 text-[16px]">
            To expand rapidly, they needed a fast, strategic marketing team. One
            that could support growth while building a lasting digital presence.
            They sought a reliable, long-term partner to elevate their brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
