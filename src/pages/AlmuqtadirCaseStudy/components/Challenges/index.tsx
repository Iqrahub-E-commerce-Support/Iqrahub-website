import challengesPic from "@/assets/images/almuqtadir/challenges.jpg";
import CustomizableHeading from "@/components/CustomizableHeading";

const challengeData = [
  {
    titleFirst: "CRITICAL",
    titleSecond: "CHALLENGE",
    description:
      "Management aimed to open 100 global stores in five years but faced a major hurdle. Al Muqtadir lacked digital presence, had inconsistent branding across seven stores, and their sales relied heavily on traditional word-of-mouth advertising and newspaper ads.",
  },
  {
    titleFirst: "MARKETING",
    titleSecond: "FOR EXPANSION",
    description:
      "To expand rapidly, they needed a fast, strategic marketing team. One that could support growth while building a lasting digital presence. They sought a reliable, long-term partner to elevate their brand.",
  },
];

const Challenges = () => {
  return (
    <div
      className="grid xs:grid-cols-1 md:grid-cols-[1fr_1fr]  gap-6 border-x-2 custom-container border-gold-900 xs:pt-6 sm:pt-20 xl:pt-0 xs:px-4 ;g:px-0"
      style={{
        boxShadow:
          "4px 0px 0px rgba(193,149,53,0.4), -4px 0px 0px rgba(193,149,53,0.4)",
      }}
    >
      <img src={challengesPic} alt="challengepic" className="" />
      {/* <img src={challengesPic} alt="challengepic" className="md:h-[350px]  lg:h-full" /> */}
      <div className="flex flex-col justify-center md:mt-11 xl:mt-0">
        {challengeData.map((challenge, index) => (
          <div
            key={index}
            className={`${index !== 0 ? "mt-8 md:-ml-20 lg:-ml-6 xl:-ml-3" : "sm:-mt-7 md:-mt-6 md:-ml-20   xl:-ml-28"}`}
          >
            <CustomizableHeading
              firstTxt={challenge.titleFirst}
              secondTxt={challenge.titleSecond}
              MainStyle={`text-gold text-center lg:text-start font-extrabold md:text-[32px] lg:text-[36px] xl:text-[48px] `}
              SpecialCharacterStyle="font-thin text-white"
            />
            <p className="xl:w-[630px] xs:text-center lg:text-start mt-2 text-[16px]">
              {challenge.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
