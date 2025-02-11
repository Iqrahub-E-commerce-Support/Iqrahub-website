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
    <>
      <div className={`flex flex-col gap-2 items-center justify-center `}>
        <CustomizableHeading
          firstTxt="SKYSWIFT DRONES"
          secondTxt="IN ACTION"
          MainStyle="md:text-[54px] text-yellow"
          SpecialCharacterStyle="font-thin text-white"
        />
        <p className="mt-2 w-[55%] text-center">
          From delivering medical supplies to enhancing military operations and
          optimizing farming, drones are transforming industries.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-3">
        {content.map((item, index) => (
          <div
            key={index}
            className={`h-[400px] bg-cover flex flex-col justify-end p-6 ${index === 0 ? "rounded-tl-[15px]" : index === 2 ? "rounded-tr-[15px]" : ""}`}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            <h6 className="text-[28px] font-bold">{item.heading}</h6>
            <p>{item.subHeading}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Insights;
