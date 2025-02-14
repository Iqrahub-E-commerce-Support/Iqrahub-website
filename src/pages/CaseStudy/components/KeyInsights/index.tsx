import CustomizableHeading from "@/components/CustomizableHeading";
import keyInsights from "@/assets/images/vionex/KeyInsight.png";
import SadIcon from "@/components/icons/SadIcon";
import DisappointmentEmojiIcon from "@/components/icons/DisappointmentEmojiIcon";
import NeutralEmojiIon from "@/components/icons/NeutralEmojiIcon";
import HappyEmojiIcon from "@/components/icons/HappyEmojiIcon";
import VeryHappyEmojiIcon from "@/components/icons/VeryHappyEmojiIcon";

const insights = [
  {
    percentage: "99%",
    title: "On-Time Delivery Rate",
    description:
      "Significantly Outperforming Traditional Ground-Based Systems.",
  },
  {
    percentage: "30%",
    title: "Lower Operational Costs",
    description:
      "Making Drone Deliveries A Cost-Effective Alternative To Conventional Methods.",
  },
];

const emojiStats = [
  { icon: <SadIcon width="auto" height="auto" />, percentage: "0%" },
  {
    icon: <DisappointmentEmojiIcon width="auto" height="auto" />,
    percentage: "0%",
  },
  { icon: <NeutralEmojiIon width="auto" height="auto" />, percentage: "0%" },
  {
    icon: <HappyEmojiIcon width="auto" height="auto" />,
    percentage: "30%",
    highlight: true,
  },
  {
    icon: <VeryHappyEmojiIcon width="auto" height="auto" />,
    percentage: "70%",
    highlight: true,
  },
];

const KeyInsights = () => {
  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <CustomizableHeading
          firstTxt="KEY INSIGHTS"
          secondTxt="From Research"
          MainStyle="mt-10 mb-5 md:text-[50px] text-yellow"
          SpecialCharacterStyle="font-thin text-white"
        />
        <p>
          Through extensive research, we identified the potential benefits of
          SkySwift’s drone delivery system.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        <div className="grid grid-rows-[auto_auto] gap-4 sm:gap-6 md:gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-grey rounded-[20px] sm:rounded-[34px] p-4 sm:p-6 text-center font-medium"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[85px] font-medium mb-2 sm:mb-3">
                  {insight.percentage}
                </div>
                <div className="text-xs sm:text-sm md:text-[25px] font-bold">
                  {insight.title}
                  <p className="text-xs sm:text-sm md:text-[18px] mt-2 sm:mt-4">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {emojiStats.map((emoji, index) => (
              <div
                key={index}
                className={`xs:h-[50px] sm:h-full aspect-square rounded-[10px] sm:rounded-[20px] flex flex-col gap-2 sm:gap-3 lg:gap-10 justify-center items-center py-7 ${
                  emoji.highlight
                    ? "bg-gradient-to-tr from-[#FF3F02] to-yellow"
                    : "bg-grey"
                }`}
              >
                <div className="w-6 sm:w-8 md:w-10">{emoji.icon}</div>
                <p
                  className={`text-sm sm:text-base md:text-[24px] 2xl:text-[30px] font-regular ${emoji.highlight ? "text-black" : ""}`}
                >
                  {emoji.percentage}
                </p>
              </div>
            ))}
          </div>
        </div>

        <img
          src={keyInsights}
          alt="Drone Delivery System"
          className="xs:object-center sm:object-contain md:object-contain lg:object-cover w-full h-[300px] sm:h-[400px] lg:h-full rounded-[20px] sm:rounded-[34px]"
        />
      </div>

      {/* Sustainability Benefits */}
      <div className="bg-[#2A2A2A] rounded-[20px] sm:rounded-[34px] p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
          Sustainability Benefits
        </h3>
        <p className="text-xs sm:text-sm md:text-base">
          As The Electric-Powered Drones Reduce Carbon Emissions, Offering An
          Eco-Friendly Last-Mile Delivery Solution, These Findings Highlight The
          Transformative Power Of Drone Delivery And Its Potential To Disrupt
          The Logistics Industry.
        </p>
      </div>
    </>
  );
};

export default KeyInsights;
