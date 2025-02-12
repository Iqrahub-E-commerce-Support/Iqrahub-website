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
  { icon: <SadIcon />, percentage: "0%" },
  { icon: <DisappointmentEmojiIcon />, percentage: "0%" },
  { icon: <NeutralEmojiIon />, percentage: "0%" },
  { icon: <HappyEmojiIcon />, percentage: "30%", highlight: true },
  { icon: <VeryHappyEmojiIcon />, percentage: "70%", highlight: true },
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
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 md:gap-8 mb-8">
        <div className="grid grid-rows-[2fr_1fr] gap-6 md:gap-8">
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-grey rounded-[34px] p-6 text-center font-medium"
              >
                <div className="text-4xl md:text-5xl lg:text-[85px] font-medium mb-3">
                  {insight.percentage}
                </div>
                <div className="text-sm md:text-[25px] font-bold">
                  {insight.title}
                  <p className="text-[18px] mt-4">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr]">
            {emojiStats.map((emoji, index) => (
              <div
                key={index}
                className={`h-36 w-36 rounded-[20px] flex flex-col gap-3 justify-center items-center ${
                  emoji.highlight
                    ? "bg-gradient-to-tr from-[#FF3F02] to-yellow"
                    : "bg-grey"
                }`}
              >
                {emoji.icon}
                <p
                  className={`text-[24px] font-regular ${emoji.highlight ? "text-black" : ""}`}
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
          className="object-fill w-full h-[470px]  rounded-[34px]"
        />
      </div>

      {/* Sustainability Benefits */}
      <div className="bg-[#2A2A2A] rounded-[34px] p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          Sustainability Benefits
        </h3>
        <p className="text-sm md:text-base">
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
