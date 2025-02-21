import CustomizableHeading from "@/components/CustomizableHeading";
import CustomizableMobileFrame from "@/components/CustomizableMobileFrame";
import SadIcon from "@/components/icons/SadIcon";
import DisappointmentEmojiIcon from "@/components/icons/DisappointmentEmojiIcon";
import NeutralEmojiIon from "@/components/icons/NeutralEmojiIcon";
import HappyEmojiIcon from "@/components/icons/HappyEmojiIcon";
import VeryHappyEmojiIcon from "@/components/icons/VeryHappyEmojiIcon";
import PrecessCal from "@/assets/images/almuqtadir/ProcessBg.png";
import rightDesign from "@/assets/images/almuqtadir/sideDesign.png";
const Impact = () => {
  const emojiStats = [
    {
      icon: <SadIcon color="#FFD475" width="auto" height="auto" />,
      percentage: "0%",
    },
    {
      icon: (
        <DisappointmentEmojiIcon color="#FFD475" width="auto" height="auto" />
      ),
      percentage: "0%",
    },
    {
      icon: <NeutralEmojiIon color="#FFD475" width="auto" height="auto" />,
      percentage: "0%",
    },
    {
      icon: <HappyEmojiIcon color="black" width="auto" height="auto" />,
      percentage: "30%",
      highlight: true,
    },
    {
      icon: <VeryHappyEmojiIcon color="black" width="auto" height="auto" />,
      percentage: "70%",
      highlight: true,
    },
  ];
  return (
    <div
      className="relative custom-container border-x-2 border-gold-900 px-4 sm:px-9 xs:pt-[320px] sm:pt-[400px]   lg:pt-11 xl:pt-16  3xl:pt-28 "
      style={{
        boxShadow:
          "4px 0px 0px rgba(193,149,53,0.4), -4px 0px 0px rgba(193,149,53,0.4)",
      }}
    >
      <img
        src={PrecessCal}
        alt="Background"
        className="absolute top-0 xs:left-[50%] :left-[34%] transform -translate-x-1/2 w-full h-[140%] -mt-36 object-cover opacity-45 z-0"
      />
      <div className="lg:hidden sm:-mt-[332px]">
        <CustomizableHeading
          firstTxt="the launch"
          secondTxt="impact"
          MainStyle="uppercase md:text-[48px] text-gold text-center"
          SpecialCharacterStyle="font-thin text-white"
        />
        <p className=" mt-2  capitalize text-[18px] z-10 mb-8 text-center">
          The launch of our digital campaigns led to impressive results:
        </p>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1.5fr] gap-4 md:-mt-14 lg:mt-0">
    
          <CustomizableMobileFrame />
   
      
       
        <div className="">
          <img
            src={rightDesign}
            alt="rightDesign"
            className="h-[350px] place-self-end -mr-[36px] mt-8 "
          />
          <div className="xs:hidden lg:block sm:-mt-[332px]">
            <CustomizableHeading
              firstTxt="the launch"
              secondTxt="impact"
              MainStyle="uppercase md:text-[48px] text-gold"
              SpecialCharacterStyle="font-thin text-white"
            />
            <p className=" mt-2  capitalize text-[18px] z-10 mb-8">
              The launch of our digital campaigns led to impressive results:
            </p>
          </div>

          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-[36px] xs:-mt-[350px] md:-mt-[300px] lg:mt-0">
            <div className="glassy-bg  border-2 border-gold  rounded-[20px] py-9 ">
              <p className="font-thunder font-medium xs:text-[55px] sm:text-[75px] text-center text-gold">
                120M+
              </p>
              <p className="xs:text-[20px] sm:text-[24px] capitalize text-center -mt-6 ">
                impressions in Q1 of launch
              </p>
            </div>
            <div className="glassy-bg  border-2 border-gold  rounded-[20px] py-9 ">
              <p className="font-thunder font-medium xs:text-[55px] sm:text-[75px] text-center text-gold">
                1,200+
              </p>
              <p className="xs:text-[20px] sm:text-[24px] capitalize text-center -mt-6 ">
                high-quality leads
              </p>
            </div>
          </div>
          <div className="glassy-bg  border-2 border-gold  rounded-[20px] py-2 mt-[36px] ">
            <p className="font-thunder font-medium xs:text-[55px] sm:text-[75px] text-center text-gold">
              $2 Million
            </p>
            <p className="xs:text-[20px] sm:text-[24px] capitalize text-center -mt-6 ">
              in revenue from the initial campaign
            </p>
          </div>
          <div className="grid  xs:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-3  sm:gap-4 md:gap-12 mt-[36px]">
            {emojiStats.map((emoji, index) => (
              <div
                key={index}
                className={`xs:h-[50px] sm:h-[90px] lg:h-[120px] aspect-square rounded-[10px] sm:rounded-[20px] flex flex-col gap-2 sm:gap-3 lg:gap-7 justify-center items-center xs:py-8 sm:py-0 md:py-6 border-2 border-gold ${
                  emoji.highlight ? "bg-gold" : "glassy-bg"
                }`}
              >
                <div className="w-6 sm:w-8 lg:w-10">{emoji.icon}</div>
                <p
                  className={`text-sm sm:text-base md:text-[24px] 2xl:text-[30px] font-regular ${emoji.highlight ? "text-black" : ""}`}
                >
                  {emoji.percentage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
