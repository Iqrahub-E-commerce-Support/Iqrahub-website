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
      <div className="flex flex-col gap-5 items-center xs:mt-10 sm:mt-0 xs:leading-10 sm:leading-0 ">
        <CustomizableHeading
          firstTxt="SKYSWIFT DRONE"
          secondTxt="IN ACTION"
          MainStyle="xs:text-[35px] sm:text-[45px] md:text-[64px] xs:text-center lg:text-start  text-yellow  font-black md:leading-[55px]"
          SpecialCharacterStyle="text-white font-thin"
        />
        <p className="w-full max-w-2xl text-center text-sm md:text-base">
          SkySwift envisions a diverse fleet of drones, each tailored to
          specific logistical needs. The drones are categorized based on payload
          capacity and range:
        </p>
      </div>

      {/* Content Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 sm:gap-4 md:gap-0 w-full px-4">
        {content.map((item, index) => (
          <div
            key={index}
            className={`h-[300px] sm:h-[350px] lg:h-[400px] bg-cover flex flex-col justify-end p-4 sm:p-6 text-white ${
              index === 0
                ? "md:rounded-tl-[15px]"
                : index === 2
                  ? "md:rounded-tr-[15px]"
                  : ""
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
