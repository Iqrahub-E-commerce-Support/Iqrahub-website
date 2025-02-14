import CustomizableHeading from "@/components/CustomizableHeading";
import solutins from "@/assets/images/vionex/solutions.png";
import CalenderIcon from "@/components/icons/CalenderIcon";
import SaveMoneyIcon from "@/components/icons/SaveMoneyIcon";
import RecycleIcon from "@/components/icons/RecycleIcon";
import UserGroupIcon from "@/components/icons/UserGroupIcon";

const solutionCards = [
  {
    icon: <CalenderIcon />,
    title: "Cut Down Delivery Times",
    description: "By Flying Directly To Destinations,Avoiding Road Traffic.",
  },
  {
    icon: <SaveMoneyIcon />,
    title: "Reduce Costs",
    description:
      "Through automation, eliminating fuel and labor expenses associated with traditional deliveries.",
  },
  {
    icon: <RecycleIcon />,
    title: "Enhance Sustainability",
    description: "by operating on clean energy, reducing environmental impact.",
  },
  {
    icon: <UserGroupIcon />,
    title: "Expand Accessibility",
    description: "by reaching remote and hard-to-access locations with ease.",
  },
];

const sustainabilityCard = {
  title: "Sustainability benefits",
  description:
    "To bring this vision to life, we created a **video campaign** that illustrated the benefits of SkySwift's drone delivery system. The core message focused on how drones could:",
};

const Solutions = () => {
  return (
    <>
      <p className="font-bold text-base sm:text-lg md:text-[20px]">
        Through Extensive Research
      </p>
      <CustomizableHeading
        firstTxt="Conclusion"
        secondTxt="And Solutions"
        MainStyle="text-3xl sm:text-4xl md:text-[54px] text-yellow mt-2 sm:mt-4"
        SpecialCharacterStyle="font-thin text-white"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-5">
        <img
          src={solutins}
          alt="Drone Delivery System"
          className="xs:object-contain sm:object-fill lg:object-contain w-full h-full xl:h-[580px]  rounded-[20px] sm:rounded-[34px]"
        />
        <div className="grid grid-rows-[auto_auto_1fr] gap-4 sm:gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {solutionCards.slice(0, 2).map((card, index) => (
              <div
                key={index}
                className="bg-grey rounded-[20px] sm:rounded-[34px] p-3 sm:p-4 font-medium"
              >
                <div className="w-8 sm:w-10 md:w-12">{card.icon}</div>
                <h6 className="mt-3 sm:mt-5 font-bold text-base sm:text-lg md:text-[19px]">
                  {card.title}
                </h6>
                <p className="mt-1 font-medium text-sm sm:text-base md:text-[16px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {solutionCards.slice(2, 4).map((card, index) => (
              <div
                key={index + 2}
                className="bg-grey rounded-[20px] sm:rounded-[34px] p-3 sm:p-4 font-medium"
              >
                <div className="w-8 sm:w-10 md:w-12">{card.icon}</div>
                <h6 className="mt-3 sm:mt-5 font-bold text-base sm:text-lg md:text-[19px]">
                  {card.title}
                </h6>
                <p className="mt-1 font-medium text-sm sm:text-base md:text-[16px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-grey rounded-[20px] sm:rounded-[34px] p-3 sm:p-4 font-medium">
            <h6 className="mt-3 sm:mt-5 font-bold text-base sm:text-lg md:text-[19px]">
              {sustainabilityCard.title}
            </h6>
            <p className="mt-1 font-medium text-sm sm:text-base md:text-[16px]">
              {sustainabilityCard.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
