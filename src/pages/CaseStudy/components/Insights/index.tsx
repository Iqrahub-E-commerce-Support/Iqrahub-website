import CustomizableHeading from "@/components/CustomizableHeading";
import bg1 from "@/assets/images/vionex/action1.png";
import bg2 from "@/assets/images/vionex/action2.png";
import bg3 from "@/assets/images/vionex/action3.png";

const Insights = () => {
  const content = [
    {
      background: bg1,
      heading: "SkySwift Medic",
      subHeading: "Highlighting the drone's medical assistance capabilities.",
    },
    {
      background: bg2,
      heading: "SkySwift Guardian",
      subHeading:
        "Suitable for drones focused on surveillance and security operations.",
    },
    {
      background: bg3,
      heading: "SkySwift Explorer",
      subHeading:
        "Ideal for drones designed for exploration and mapping missions.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Heading Section */}
      <div className="text-center">
        <CustomizableHeading
          firstTxt="SKYSWIFT DRONES"
          secondTxt="IN ACTION"
          MainStyle="md:text-[44px] lg:text-[54px] text-yellow"
          SpecialCharacterStyle="font-thin text-white"
        />
        <p className="mt-2 w-full sm:w-[75%] lg:w-[55%] text-center text-sm sm:text-base">
          From delivering medical supplies to enhancing military operations and
          optimizing farming, drones are transforming industries.
        </p>
      </div>

      {/* Content Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 sm:gap-4 md:gap-0 w-full px-4">
        {content.map((item, index) => (
          <div
            key={index}
            className={`h-[300px] sm:h-[350px] lg:h-[400px] bg-cover flex flex-col justify-end p-4 sm:p-6 text-white ${
              index === 0 ? "md:rounded-tl-[15px]" : index === 2 ? "md:rounded-tr-[15px]" : ""
            }`}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            <h6 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
              {item.heading}
            </h6>
            <p className="text-sm sm:text-base">{item.subHeading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
